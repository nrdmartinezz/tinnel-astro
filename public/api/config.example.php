<?php
/**
 * Drop this file on the server as ~/private/site-mail.php
 * (one level above public_html). The mailer and reviews endpoint already
 * load that exact path, so do not rename it and do not edit lib/mailer.php.
 *
 * For local testing, copy it to public/api/config.local.php instead.
 * Never commit real credentials.
 *
 * Mail transport: uses PHP mail() by default. Set smtp_host, smtp_user,
 * and smtp_pass to switch to authenticated SMTP.
 */
return [
    'recaptcha_secret' => '',
    'notify_to' => 'info@drtinnel.com',
    'bcc' => 'nate@newpatientgroup.com',
    'from_email' => 'info@drtinnel.com',
    'from_name' => 'HT Complete Family Dentistry',
    'site_url' => 'https://drtinnel.com',
    'site_phone' => '913-962-0036',
    'site_phone_href' => '+19139620036',
    'timezone' => 'America/Chicago',

    // Optional SMTP — leave blank to use PHP mail() on the host.
    'smtp_host' => '',
    'smtp_port' => 587,
    'smtp_user' => '',
    'smtp_pass' => '',

    'forms' => [
        'contact' => [
            'subject' => 'New enquiry — HT Complete Family Dentistry',
            'notification' => 'notification-contact.html',
            'autoreply_subject' => 'Thank you for reaching out — HT Complete Family Dentistry',
            'send_autoreply' => true,
        ],
    ],

    'recaptcha_min_score' => 0.5,
    'rate_limit_seconds' => 60,
    'rate_limit_max' => 5,

    // Google Places reviews. Fill these in on the private server copy only.
    'google_places_api_key' => '',
    'google_place_id' => '',
];
