<?php

declare(strict_types=1);

/**
 * Public Google reviews feed. The Places API key stays in the private config
 * (~/private/site-mail.php or public/api/config.local.php). Responses never
 * include that key.
 */

header('Content-Type: application/json; charset=utf-8');

const REVIEWS_TTL_SECONDS = 6 * 60 * 60;

function reviewsPrivateDir(): string
{
    return dirname(__DIR__, 2) . '/private';
}

function loadReviewsConfig(): array
{
    $paths = [
        reviewsPrivateDir() . '/site-mail.php',
        __DIR__ . '/config.local.php',
    ];

    foreach ($paths as $path) {
        if (!is_readable($path)) {
            continue;
        }
        $config = require $path;
        if (is_array($config)) {
            return $config;
        }
    }

    return [];
}

function emptyReviews(): array
{
    return [
        'rating' => null,
        'reviewCount' => 0,
        'reviews' => [],
    ];
}

function sendReviews(array $payload, bool $cacheable): never
{
    header('Cache-Control: ' . ($cacheable ? 'public, max-age=300' : 'no-store'));
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function reviewsCachePath(): string
{
    return reviewsPrivateDir() . '/cache/google-reviews.json';
}

function readReviewsCache(bool $allowStale): ?array
{
    $path = reviewsCachePath();
    if (!is_readable($path)) {
        return null;
    }

    $raw = file_get_contents($path);
    if ($raw === false) {
        return null;
    }

    $decoded = json_decode($raw, true);
    if (!is_array($decoded) || !isset($decoded['storedAt'], $decoded['payload']) || !is_array($decoded['payload'])) {
        return null;
    }

    $age = time() - (int) $decoded['storedAt'];
    if (!$allowStale && $age > REVIEWS_TTL_SECONDS) {
        return null;
    }

    return $decoded['payload'];
}

function writeReviewsCache(array $payload): void
{
    $path = reviewsCachePath();
    $dir = dirname($path);
    if (!is_dir($dir) && !mkdir($dir, 0700, true) && !is_dir($dir)) {
        return;
    }

    $body = json_encode(
        ['storedAt' => time(), 'payload' => $payload],
        JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
    );
    if ($body === false) {
        return;
    }

    $tmp = $path . '.tmp';
    if (file_put_contents($tmp, $body, LOCK_EX) === false) {
        return;
    }
    rename($tmp, $path);
}

function normalizeReviews(array $place): array
{
    $reviews = [];
    $source = $place['reviews'] ?? [];
    if (!is_array($source)) {
        $source = [];
    }

    foreach ($source as $review) {
        if (!is_array($review)) {
            continue;
        }

        $text = '';
        if (isset($review['text']['text']) && is_string($review['text']['text'])) {
            $text = trim($review['text']['text']);
        } elseif (isset($review['originalText']['text']) && is_string($review['originalText']['text'])) {
            $text = trim($review['originalText']['text']);
        }

        $author = trim((string) ($review['authorAttribution']['displayName'] ?? ''));
        if ($text === '' || $author === '') {
            continue;
        }

        $authorUrl = (string) ($review['authorAttribution']['uri'] ?? '');
        if (!preg_match('#^https://#', $authorUrl)) {
            $authorUrl = '';
        }

        $rating = (int) ($review['rating'] ?? 0);
        if ($rating < 1 || $rating > 5) {
            $rating = 0;
        }

        $reviews[] = [
            'author' => $author,
            'authorUrl' => $authorUrl,
            'rating' => $rating,
            'text' => $text,
            'relativeTime' => trim((string) ($review['relativePublishTimeDescription'] ?? '')),
        ];
    }

    $rating = null;
    if (isset($place['rating']) && is_numeric($place['rating'])) {
        $rating = round((float) $place['rating'], 1);
    }

    $count = 0;
    if (isset($place['userRatingCount']) && is_numeric($place['userRatingCount'])) {
        $count = (int) $place['userRatingCount'];
    }

    return [
        'rating' => $rating,
        'reviewCount' => $count,
        'reviews' => $reviews,
    ];
}

function fetchGoogleReviews(string $placeId, string $apiKey): ?array
{
    $url = 'https://places.googleapis.com/v1/places/' . rawurlencode($placeId);
    $headers = [
        'Accept: application/json',
        'X-Goog-Api-Key: ' . $apiKey,
        'X-Goog-FieldMask: rating,userRatingCount,reviews',
    ];

    $body = null;
    $status = 0;

    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        if ($ch === false) {
            return null;
        }
        curl_setopt_array($ch, [
            CURLOPT_HTTPHEADER => $headers,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 8,
        ]);
        $result = curl_exec($ch);
        $status = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
        curl_close($ch);
        if (is_string($result)) {
            $body = $result;
        }
    } else {
        $context = stream_context_create([
            'http' => [
                'header' => implode("\r\n", $headers),
                'ignore_errors' => true,
                'method' => 'GET',
                'timeout' => 8,
            ],
        ]);
        $result = @file_get_contents($url, false, $context);
        if (is_string($result)) {
            $body = $result;
        }
        if (isset($http_response_header[0]) && preg_match('/\s(\d{3})\s/', $http_response_header[0], $match)) {
            $status = (int) $match[1];
        }
    }

    if ($body === null || $status !== 200) {
        error_log('Google Places reviews request failed with status ' . $status);
        return null;
    }

    $decoded = json_decode($body, true);
    if (!is_array($decoded)) {
        return null;
    }

    return normalizeReviews($decoded);
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'GET') {
    http_response_code(405);
    header('Cache-Control: no-store');
    echo json_encode(['error' => 'Method not allowed'], JSON_UNESCAPED_UNICODE);
    exit;
}

$fresh = readReviewsCache(false);
if ($fresh !== null) {
    sendReviews($fresh, true);
}

$config = loadReviewsConfig();
$apiKey = trim((string) ($config['google_places_api_key'] ?? ''));
$placeId = trim((string) ($config['google_place_id'] ?? ''));
$placeIdOk = preg_match('/^[A-Za-z0-9_-]{8,255}$/', $placeId) === 1;

if ($apiKey === '' || !$placeIdOk) {
    sendReviews(readReviewsCache(true) ?? emptyReviews(), false);
}

$payload = fetchGoogleReviews($placeId, $apiKey);
if ($payload === null) {
    sendReviews(readReviewsCache(true) ?? emptyReviews(), false);
}

writeReviewsCache($payload);
sendReviews($payload, true);
