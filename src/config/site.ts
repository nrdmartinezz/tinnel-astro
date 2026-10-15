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
    /** Digits only, E.164 — used for tel: links. */
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
    /** schema.org openingHours strings, e.g. 'Mo-Fr 08:00-17:00'. */
    hours: string[];
    priceRange?: string;
  };

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

  /** Relative path to the PHP form handler. Blank disables all forms. */
  formEndpoint: string;

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

export const site: SiteConfig = {
  url: 'https://drtinnel.com',
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
    hours: ['Mo-Fr 08:00-17:00'],
  },

  social: {
    facebook: 'https://www.facebook.com/htcompletefamilydentistry/',
    x: 'https://twitter.com/DrHarmanTinnel',
    youtube: 'https://www.youtube.com/channel/UCJCaVniVmRg9t5KVGaoEW7w',
    google:
      'https://www.google.com/maps/place/Sarina+Harman-Tinnel,+DDS,+LLC/@38.9937408,-94.7229759,17z/data=!3m1!4b1!4m15!1m7!3m6!1s0x87c0ecb6f6b4a4c7:0x98ba812a0d60da73!2s11644+W+75th+St+%23101,+Overland%20Park,+KS+66214!3b1!8m2!3d38.9937624!4d-94.7209222!3m6!1s0x87c0ecb6e8739f5f:0x9aa008656434bd28!8m2!3d38.9937367!4d-94.7207819!9m1!1b1',
  },

  defaultOgImage: '/og-default.jpg',

  formEndpoint: '/api/submit.php',
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
