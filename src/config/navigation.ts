/**
 * One nav tree, rendered by the header menu. Local paths match the live site
 * slugs. Pages that are not built yet will 404 until they are migrated.
 */

import { officeLinks } from './site';

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  /** astro-icon name, e.g. 'lucide:wrench'. */
  icon?: string;
  /** Opens in a new tab. Use for vendor tools and files hosted elsewhere. */
  external?: boolean;
}

export interface MegaColumn {
  heading?: string;
  links: NavLink[];
}

export interface MegaPanel {
  kind: 'mega';
  columns: MegaColumn[];
  featured?: {
    title: string;
    body: string;
    href: string;
    cta: string;
  };
}

export interface LinkListPanel {
  kind: 'links';
  links: NavLink[];
}

export interface NavItem {
  label: string;
  /** Present when the top-level item is itself a destination. */
  href?: string;
  external?: boolean;
  panel?: MegaPanel | LinkListPanel;
}

export interface NavigationConfig {
  primary: NavItem[];
  /** Right-hand call to action in the header. */
  cta?: { label: string; href: string };
  footer: { heading: string; links: NavLink[] }[];
  legal: NavLink[];
}

export const navigation: NavigationConfig = {
  primary: [
    {
      label: 'About HTCFD',
      panel: {
        kind: 'links',
        links: [
          { label: 'Our Practice', href: '/our-practice/' },
          { label: 'Meet Dr. Tinnel', href: '/our-practice/meet-dr-tinnel/' },
          { label: 'Meet Dr. Garling', href: '/our-practice/meet-dr-garling/' },
          { label: 'Meet Dr. Whitney', href: '/our-practice/meet-dr-whitney/' },
          { label: 'Meet the Team', href: '/our-practice/meet-the-team/' },
          { label: 'Patient Testimonials', href: '/our-practice/testimonials/' },
        ],
      },
    },
    {
      label: 'Patient Information',
      href: '/patient-information/',
      panel: {
        kind: 'links',
        links: [
          { label: 'New Patient Forms', href: '/patient-information/#forms' },
          { label: 'Financing & Insurance', href: '/patient-information/#financing' },
          { label: 'Emergency Appointments', href: '/emergency-appointments/' },
        ],
      },
    },
    { label: 'Invisalign', href: '/invisalign/' },
    {
      label: "Children's Dentistry",
      href: '/childrens-dentistry/',
      panel: {
        kind: 'links',
        links: [
          { label: 'Fluoride Treatments', href: '/childrens-dentistry/fluoride-treatments/' },
          { label: 'No Cavity Club', href: '/childrens-dentistry/no-cavity-club/' },
          { label: 'Sealants', href: '/childrens-dentistry/sealants/' },
          {
            label: 'SDF Treatments',
            href: '/childrens-dentistry/silver-diamine-fluoride-sdf-treatments/',
          },
        ],
      },
    },
    {
      label: 'Cosmetic Dentistry',
      href: '/cosmetic-dentistry/',
      panel: {
        kind: 'links',
        links: [
          { label: 'Composite Bonding', href: '/cosmetic-dentistry/composite-bonding/' },
          { label: 'Teeth Whitening', href: '/cosmetic-dentistry/teeth-whitening/' },
          { label: 'Veneers', href: '/cosmetic-dentistry/veneers/' },
        ],
      },
    },
    {
      label: 'General Dentistry',
      href: '/general-dentistry/',
      panel: {
        kind: 'links',
        links: [
          { label: 'Bridges', href: '/general-dentistry/bridges/' },
          { label: 'Crowns', href: '/general-dentistry/crowns/' },
          { label: 'Dental Fillings', href: '/general-dentistry/dental-fillings/' },
          { label: 'Dental Implants', href: '/general-dentistry/dental-implants/' },
          { label: 'Dentures & Partials', href: '/general-dentistry/dentures-partials/' },
          { label: 'Root Canal Therapy', href: '/general-dentistry/root-canal-therapy/' },
        ],
      },
    },
    {
      label: 'Preventative Dentistry',
      href: '/preventative-dentistry/',
      panel: {
        kind: 'links',
        links: [
          {
            label: 'Periodontal Gum Treatment',
            href: '/preventative-dentistry/periodontal-gum-treatment/',
          },
          { label: 'Radiographs', href: '/preventative-dentistry/radiographs/' },
          { label: 'Teeth Cleaning', href: '/preventative-dentistry/teeth-cleaning/' },
        ],
      },
    },
    { label: 'Aesthetics', href: '/aesthetics/' },
    {
      label: 'Other Services',
      panel: {
        kind: 'links',
        links: [
          { label: 'Bite Guards', href: '/bite-guards/' },
          { label: 'CAD/CAM Dentistry', href: '/cad-cam-dentistry/' },
          { label: 'HT Smile 3D', href: '/ht-smile-3d/' },
          { label: 'Nitrous Oxide', href: '/nitrous-oxide/' },
          { label: 'Sleep Apnea', href: '/sleep-apnea/' },
          { label: 'TMJ Treatment', href: '/tmj-treatment/' },
        ],
      },
    },
    { label: 'Specials', href: '/dental-specials-discounts/' },
    { label: 'Careers', href: '/careers/' },
    { label: 'Blog', href: '/dental-blog/' },
    {
      label: 'Request Appointment',
      href: '/appointment-request-info/',
    },
    { label: 'Pay Online', href: officeLinks.portal, external: true },
    { label: 'Patient Portal', href: officeLinks.portal, external: true },
    { label: 'Doctor Referrals', href: officeLinks.referralForm, external: true },
    { label: 'Contact Us', href: '/contact/' },
  ],

  cta: { label: 'Request Appointment', href: '/appointment-request-info/' },

  footer: [
    {
      heading: 'Quick Links',
      links: [
        { label: 'Meet Dr. Sarina', href: '/our-practice/meet-dr-tinnel/' },
        { label: 'Meet Dr. Nicole', href: '/our-practice/meet-dr-whitney/' },
        { label: 'Meet Dr. Garling', href: '/our-practice/meet-dr-garling/' },
        { label: 'Invisalign', href: '/invisalign/' },
        { label: 'Why Choose Us', href: '/our-practice/' },
        { label: 'Meet the Team', href: '/our-practice/meet-the-team/' },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { label: 'Blog', href: '/dental-blog/' },
        { label: 'Patient Info', href: '/patient-information/' },
        { label: 'Testimonials', href: '/our-practice/testimonials/' },
        { label: 'Contact Us', href: '/contact/' },
      ],
    },
  ],

  legal: [],
};
