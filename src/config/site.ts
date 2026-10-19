/**
 * Per-project configuration. This and `navigation.ts` are the two files that
 * must be filled in for every new site. Blank optional values ship nothing —
 * an empty analytics ID means that vendor's script is never emitted.
 */

export interface AnalyticsConfig {
  /** LogDash website ID (`data-website-id`). Blank skips the script. */
  logdash: string;
  ga4: string;
  gtm: string;
  metaPixel: string;
  bingUet: string;
  clarity: string;
}

export type SchemaBusinessType =
  | 'LocalBusiness'
  | 'ProfessionalService'
  | 'HomeAndConstructionBusiness'
  | 'Plumber'
  | 'Electrician'
  | 'RoofingContractor'
  | 'GeneralContractor'
  | 'Dentist'
  | 'Physician'
  | 'Attorney'
  | 'AccountingService'
  | 'InsuranceAgency'
  | 'RealEstateAgent';

export interface OpeningHours {
  /** schema.org day names, e.g. 'Monday'. */
  days: string[];
  /** 24-hour time, e.g. '08:00'. */
  opens: string;
  closes: string;
}

export interface ProviderProfile {
  /** Stable id used in JSON-LD `@id` fragments. */
  id: string;
  name: string;
  honorificPrefix?: string;
  honorificSuffix?: string;
  jobTitle: string;
  /** Site path, with leading and trailing slashes. */
  url: string;
  founder?: boolean;
  alumniOf?: string[];
  memberOf?: string[];
  description?: string;
}

export interface SiteConfig {
  /** Absolute origin, no trailing slash. Must match `site` in astro.config.mjs. */
  url: string;
  name: string;
  legalName?: string;
  tagline: string;
  description: string;
  locale: string;

  business: {
    schemaType: SchemaBusinessType;
    phone: string;
    /** Digits only, E.164 — used for tel: links and schema telephone. */
    phoneHref: string;
    email: string;
    address: {
      street: string;
      locality: string;
      region: string;
      postalCode: string;
      country: string;
    };
    /** Omit entirely for service-area businesses with no walk-in location. */
    geo?: { latitude: number; longitude: number };
    /** Visible hours lines, e.g. 'Mon–Thu 8:00am–5:00pm'. */
    hours: string[];
    /** Structured hours for OpeningHoursSpecification. */
    schedule?: OpeningHours[];
    priceRange?: string;
    /** City names the practice serves. */
    areaServed?: string[];
    /** Broader region name, e.g. 'Greater Kansas City Metro'. */
    serviceArea?: string;
    medicalSpecialty?: string;
    currenciesAccepted?: string;
  };

  /** Dentists published on the site. Facts here must already appear on their bio pages. */
  providers?: ProviderProfile[];

  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    x?: string;
    youtube?: string;
    tiktok?: string;
    google?: string;
  };

  /** Absolute or site-relative path to the fallback Open Graph image. */
  defaultOgImage: string;
  defaultOgImageAlt: string;
  defaultOgImageWidth: number;
  defaultOgImageHeight: number;

  /** Public logo used for icons and the Dentist `logo` node. */
  logo: string;
  logoWidth: number;
  logoHeight: number;

  /** Relative path to the PHP form handler. Blank disables all forms. */
  formEndpoint: string;

  /**
   * Public Google Place ID (starts with ChIJ). Used for the write-a-review link.
   * The Places API key stays in ~/private/site-mail.php.
   */
  googlePlaceId: string;

  /**
   * Google reCAPTCHA v3 site key (public). Blank skips the widget. The matching
   * secret is configured server-side in ~/private/site-mail.php.
   */
  recaptchaSiteKey: string;

  analytics: AnalyticsConfig;

  verification: {
    google: string;
    bing: string;
    meta: string;
  };

  /** 'none' is correct for US-only clients. Switch to 'banner' only when required. */
  consent: 'none' | 'banner';
}

/** Origin with no trailing slash. `SITE_URL` overrides this for staging deploys. */
function siteOrigin() {
  const configured = process.env.SITE_URL?.trim();
  return configured ? configured.replace(/\/+$/, '') : 'https://drtinnel.com';
}

/**
 * Staging sets `ALLOW_INDEXING` to false so the preview stays out of search.
 * An empty value means indexable, which is the local and production default.
 */
export function allowIndexing() {
  const value = process.env.ALLOW_INDEXING?.trim().toLowerCase() ?? '';
  if (!value) return true;
  return value === '1' || value === 'true' || value === 'yes' || value === 'on';
}

export const site: SiteConfig = {
  url: siteOrigin(),
  name: 'HT Complete Family Dentistry',
  legalName: 'Sarina Harman-Tinnel, DDS',
  tagline: 'Your Smile is Our Passion',
  description:
    'Experience personalized, family-friendly dental care in Overland Park. Call 913-962-0036 to schedule an appointment for your pediatric, Invisalign, or preventative dentistry needs in Lenexa, Overland Park, Leawood, or Kansas City.',
  locale: 'en-US',

  business: {
    schemaType: 'Dentist',
    phone: '913-962-0036',
    phoneHref: '+19139620036',
    email: 'info@drtinnel.com',
    address: {
      street: '7621 Frontage Road',
      locality: 'Overland Park',
      region: 'KS',
      postalCode: '66204',
      country: 'US',
    },
    geo: { latitude: 38.9937367, longitude: -94.7207819 },
    hours: ['Mon–Thu 8:00am–5:00pm'],
    schedule: [
      {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
    areaServed: ['Lenexa', 'Overland Park', 'Leawood', 'Kansas City'],
    serviceArea: 'Greater Kansas City Metro',
    medicalSpecialty: 'Dentistry',
    currenciesAccepted: 'USD',
  },

  providers: [
    {
      id: 'dr-sarina-harman-tinnel',
      name: 'Sarina Harman-Tinnel',
      honorificPrefix: 'Dr.',
      honorificSuffix: 'DDS',
      jobTitle: 'General and Cosmetic Dentist',
      url: '/our-practice/meet-dr-tinnel/',
      founder: true,
      alumniOf: ['University of Missouri-Kansas City Dental School'],
      memberOf: [
        'American Dental Association',
        'Kansas Dental Association',
        'Academy of General Dentistry',
      ],
    },
    {
      id: 'dr-nicole-whitney',
      name: 'Nicole Whitney',
      honorificPrefix: 'Dr.',
      jobTitle: 'General and Cosmetic Dentist',
      url: '/our-practice/meet-dr-whitney/',
      alumniOf: [
        'The University of Kansas',
        'The University of Missouri-Kansas City (UMKC) School of Dentistry',
      ],
    },
    {
      id: 'dr-garling',
      name: 'Dr. Garling',
      jobTitle: 'General and Cosmetic Dentist',
      url: '/our-practice/meet-dr-garling/',
      alumniOf: ['University of Missouri – Kansas City (UMKC) School of Dentistry'],
      description:
        'Graduate of the University of Missouri – Kansas City (UMKC) School of Dentistry in 2022.',
    },
  ],

  social: {
    facebook: 'https://www.facebook.com/htcompletefamilydentistry/',
    x: 'https://twitter.com/DrHarmanTinnel',
    youtube: 'https://www.youtube.com/channel/UCJCaVniVmRg9t5KVGaoEW7w',
    google:
      'https://www.google.com/maps/place/Sarina+Harman-Tinnel,+DDS,+LLC/@38.9937408,-94.7229759,17z/data=!3m1!4b1!4m15!1m7!3m6!1s0x87c0ecb6f6b4a4c7:0x98ba812a0d60da73!2s11644+W+75th+St+%23101,+Overland%20Park,+KS+66214!3b1!8m2!3d38.9937624!4d-94.7209222!3m6!1s0x87c0ecb6e8739f5f:0x9aa008656434bd28!8m2!3d38.9937367!4d-94.7207819!9m1!1b1',
  },

  defaultOgImage: '/og-default.jpg',
  defaultOgImageAlt: 'The team at HT Complete Family Dentistry in Overland Park',
  defaultOgImageWidth: 1200,
  defaultOgImageHeight: 630,
  logo: '/logo.png',
  logoWidth: 409,
  logoHeight: 113,

  formEndpoint: '/api/submit.php',
  googlePlaceId: '',
  recaptchaSiteKey: '',

  analytics: {
    logdash: '',
    ga4: '',
    gtm: '',
    metaPixel: '',
    bingUet: '',
    clarity: '',
  },

  verification: {
    google: '',
    bing: '',
    meta: '',
  },

  consent: 'none',
};

/** Off-site tools and profiles that stay on the current vendors. */
export const officeLinks = {
  maps: site.social.google ?? '',
  billPay:
    'https://www.patientconnect365.com/payment/Index/Kansas/OverlandPark/66204/HT_Complete_Family_Dentistry',
  appointment:
    'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
  portal: 'https://rwl.io/p9221',
  referralForm: 'https://drtinnel.com/wp-content/uploads/2026/01/HTCFD-Referral-Form.pdf',
  youtubeId: 'rD1TgyXyFgg',
  npg: 'https://newpatientgroup.com/orthodontic-consultants/',
};

export const formattedAddress = [
  site.business.address.street,
  `${site.business.address.locality}, ${site.business.address.region} ${site.business.address.postalCode}`,
].join(', ');

/** LogDash site ID for LogDash.astro (`data-website-id`). Blank skips the script. */
export const logdashWebsiteId = site.analytics.logdash;

/** No configured third-party ID means the ad-tag bundle is never mounted. */
export const hasAnalytics = Object.entries(site.analytics).some(
  ([key, value]) => key !== 'logdash' && Boolean(value),
);

/** Title tag and Open Graph title, including the site-name suffix. */
export function formatPageTitle(title?: string, titleExact = false) {
  if (!title) return `${site.name} — ${site.tagline}`;
  return titleExact ? title : `${title} | ${site.name}`;
}

/** `@handle` from the X / Twitter profile URL. Blank when no profile is set. */
export function twitterHandle() {
  const profile = site.social.x?.replace(/\/$/, '').split('/').pop();
  return profile ? `@${profile}` : '';
}
