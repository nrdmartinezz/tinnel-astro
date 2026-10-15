import type { ImageMetadata } from 'astro';

import img_2025_03_dr_tinnel_jpg from '../assets/practice/heroes/2025-03-dr-tinnel.jpg';
import img_2025_03_htcfd_hero_bg_jpg from '../assets/practice/heroes/2025-03-htcfd-hero-bg.jpg';
import img_2025_04_dr_w_2_jpg from '../assets/practice/heroes/2025-04-Dr.-W-2.jpg';
import img_2025_04_team_hero_jpg from '../assets/practice/heroes/2025-04-team-hero-tinnel-1.jpg';
import img_2025_05_career_hero_jpg from '../assets/practice/heroes/2025-05-career-hero-tinnel.jpg';
import img_2025_05_full_team_jpg from '../assets/practice/heroes/2025-05-dr-tinnel-full-team-scaled.jpg';
import img_2025_05_htcfd_hero_bg_jpg from '../assets/practice/heroes/2025-05-htcfd-hero-bg.jpg';
import img_2025_05_team_hero_jpg from '../assets/practice/heroes/2025-05-team-hero-tinnel-1-scaled.jpg';
import img_2025_09_garling_jpg from '../assets/practice/heroes/2025-09-family-dentistry-dr-garling.jpg';

export const practiceHeroes: Record<string, ImageMetadata> = {
  'our-practice': img_2025_05_career_hero_jpg,
  'our-practice/meet-dr-tinnel': img_2025_03_dr_tinnel_jpg,
  'our-practice/meet-dr-garling': img_2025_09_garling_jpg,
  'our-practice/meet-dr-whitney': img_2025_04_dr_w_2_jpg,
  'our-practice/meet-the-team': img_2025_05_team_hero_jpg,
  'our-practice/testimonials': img_2025_04_team_hero_jpg,
  'patient-information': img_2025_05_full_team_jpg,
  'emergency-appointments': img_2025_05_htcfd_hero_bg_jpg,
  'dental-specials-discounts': img_2025_03_htcfd_hero_bg_jpg,
  careers: img_2025_05_career_hero_jpg,
  contact: img_2025_05_htcfd_hero_bg_jpg,
};
