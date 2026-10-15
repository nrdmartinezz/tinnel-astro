import type { ImageMetadata } from 'astro';

import img_3d_scanning_invisalign_jpg from '../assets/treatments/3D-scanning-invisalign.jpg';
import img_3dsmile_machine_tinnel_jpg from '../assets/treatments/3dsmile-machine-tinnel.jpg';
import cad_tinnel_body_jpg from '../assets/treatments/CAD-Tinnel-Body.jpg';
import aesthetic_treatments_hero_tinnel_jpg from '../assets/treatments/aesthetic-treatments-hero-tinnel.jpg';
import bite_guards_overland_park_ks_jpg from '../assets/treatments/bite-guards-overland-park-ks.jpg';
import composite_bonding_overland_park_jpg from '../assets/treatments/composite-bonding-overland-park.jpg';
import crowns_overland_park_jpg from '../assets/treatments/crowns-overland-park.jpg';
import dental_bridge_kansas_city_jpg from '../assets/treatments/dental-bridge-kansas-city.jpg';
import dental_fillings_kansas_city_jpg from '../assets/treatments/dental-fillings-kansas-city.jpg';
import dental_implants_kansas_city_jpg from '../assets/treatments/dental-implants-kansas-city.jpg';
import dental_sealants_overland_park_jpg from '../assets/treatments/dental-sealants-overland-park.jpg';
import dentures_overland_park_jpg from '../assets/treatments/dentures-overland-park.jpg';
import emergency_appointments_overland_park_jpg from '../assets/treatments/emergency-appointments-overland-park.jpg';
import flouride_treatments_faq_harmen_tinnel_jpg from '../assets/treatments/flouride-treatments-faq-harmen-tinnel.jpg';
import fluoride_treatments_overland_park_jpg from '../assets/treatments/fluoride-treatments-overland-park.jpg';
import invisalign_smile_tinnel_jpg from '../assets/treatments/invisalign-smile-tinnel.jpg';
import no_cavity_club_overland_park_jpg from '../assets/treatments/no-cavity-club-overland-park.jpg';
import pgt_overland_park_jpg from '../assets/treatments/pgt-overland-park.jpg';
import radiographs_kansas_city_jpg from '../assets/treatments/radiographs-kansas-city.jpg';
import root_canal_kansas_city_jpg from '../assets/treatments/root-canal-kansas-city.jpg';
import sdf_fluoride_treatments_kansas_city_jpg from '../assets/treatments/sdf-fluoride-treatments-kansas-city.jpg';
import sleep_apnea_overland_park_jpg from '../assets/treatments/sleep-apnea-overland-park.jpg';
import teeth_whitening_special_shawnee_ks_jpg from '../assets/treatments/teeth-whitening-special-shawnee-ks.jpg';
import tmj_treatment_overland_park_jpg from '../assets/treatments/tmj-treatment-overland-park.jpg';
import understanding_gum_disease_1_jpg from '../assets/treatments/understanding-gum-disease-1.jpg';
import veneers_kansas_city_jpg from '../assets/treatments/veneers-kansas-city.jpg';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TreatmentButton {
  label: string;
  href: string;
}

export interface TreatmentCard {
  title: string;
  body: string;
  href: string;
}

export interface SplitBlock {
  type: 'split';
  title: string;
  /** Small cyan label above the title. */
  eyebrow?: string;
  subtitle?: string;
  paragraphs?: string[];
  image?: string;
  imageAlt?: string;
  /** Which side the photo sits on at desktop. Defaults to alternating. */
  imageSide?: 'start' | 'end';
  /** Center a title-and-video block. */
  align?: 'start' | 'center';
  secondaryImage?: string;
  secondaryAlt?: string;
  button?: TreatmentButton;
  faqs?: FaqItem[];
  youtubeId?: string;
}

export interface CardsBlock {
  type: 'cards';
  title?: string;
  /** Small cyan label above the title. */
  eyebrow?: string;
  intro?: string[];
  items: TreatmentCard[];
}

export interface FaqBlock {
  type: 'faq';
  title: string;
  intro?: string[];
  /** Small cyan label above the title. */
  eyebrow?: string;
  subtitle?: string;
  items: FaqItem[];
  image?: string;
  imageAlt?: string;
  imageSide?: 'start' | 'end';
}

export interface VideoBlock {
  type: 'video';
  youtubeId: string;
  title?: string;
}

export type TreatmentBlock = SplitBlock | CardsBlock | FaqBlock | VideoBlock;

export interface TreatmentHero {
  image: string;
  title: string;
  paragraphs: string[];
  button?: TreatmentButton;
}

export interface Treatment {
  slug: string;
  title: string;
  description: string;
  name: string;
  h1: string;
  hero?: TreatmentHero;
  blocks: TreatmentBlock[];
}

export const treatmentImages: Record<string, ImageMetadata> = {
  '3D-scanning-invisalign.jpg': img_3d_scanning_invisalign_jpg,
  '3dsmile-machine-tinnel.jpg': img_3dsmile_machine_tinnel_jpg,
  'CAD-Tinnel-Body.jpg': cad_tinnel_body_jpg,
  'aesthetic-treatments-hero-tinnel.jpg': aesthetic_treatments_hero_tinnel_jpg,
  'bite-guards-overland-park-ks.jpg': bite_guards_overland_park_ks_jpg,
  'composite-bonding-overland-park.jpg': composite_bonding_overland_park_jpg,
  'crowns-overland-park.jpg': crowns_overland_park_jpg,
  'dental-bridge-kansas-city.jpg': dental_bridge_kansas_city_jpg,
  'dental-fillings-kansas-city.jpg': dental_fillings_kansas_city_jpg,
  'dental-implants-kansas-city.jpg': dental_implants_kansas_city_jpg,
  'dental-sealants-overland-park.jpg': dental_sealants_overland_park_jpg,
  'dentures-overland-park.jpg': dentures_overland_park_jpg,
  'emergency-appointments-overland-park.jpg': emergency_appointments_overland_park_jpg,
  'flouride-treatments-faq-harmen-tinnel.jpg': flouride_treatments_faq_harmen_tinnel_jpg,
  'fluoride-treatments-overland-park.jpg': fluoride_treatments_overland_park_jpg,
  'invisalign-smile-tinnel.jpg': invisalign_smile_tinnel_jpg,
  'no-cavity-club-overland-park.jpg': no_cavity_club_overland_park_jpg,
  'pgt-overland-park.jpg': pgt_overland_park_jpg,
  'radiographs-kansas-city.jpg': radiographs_kansas_city_jpg,
  'root-canal-kansas-city.jpg': root_canal_kansas_city_jpg,
  'sdf-fluoride-treatments-kansas-city.jpg': sdf_fluoride_treatments_kansas_city_jpg,
  'sleep-apnea-overland-park.jpg': sleep_apnea_overland_park_jpg,
  'teeth-whitening-special-shawnee-ks.jpg': teeth_whitening_special_shawnee_ks_jpg,
  'tmj-treatment-overland-park.jpg': tmj_treatment_overland_park_jpg,
  'understanding-gum-disease-1.jpg': understanding_gum_disease_1_jpg,
  'veneers-kansas-city.jpg': veneers_kansas_city_jpg,
};

export const treatments: Treatment[] = [
  {
    slug: 'invisalign',
    title:
      'Invisalign Clear Aligners in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      'Get a gorgeous smile without braces! We are your 5-star Invisalign clear aligners provider in the Overland Park - Kansas City area. Call 913-962-0036 for your free new patient consultation.',
    name: 'Invisalign',
    h1: 'Invisalign Clear Aligners in the Overland Park - Kansas City Area',
    hero: {
      image: '3D-scanning-invisalign.jpg',
      title: 'Invisalign',
      paragraphs: [
        'Are you looking for a virtually invisible, removable treatment alternative to traditional metal braces? Well, our team at Harman-Tinnel Complete Family Dentistry has the perfect solution for your whole family! Dr. Tinnel, Dr. Whitney, and Dr. Garling all offer orthodontic treatment with Invisalign Clear Aligners!',
      ],
    },
    blocks: [
      {
        type: 'split',
        eyebrow: 'Embracing Orthodontic Treatment',
        title: "Invisalign Clear Aligners: The 'No Braces' Way to a Beautiful Smile",
        paragraphs: [
          'Misaligned teeth can lead to a variety of dental health issues, including gum recession, abfraction (wear on the teeth), periodontal disease, and decay. Ensuring that your teeth are properly aligned not only improves your smile but also supports overall oral health. Invisalign has become a popular choice for patients looking to correct these problems without the hassle of traditional braces.',
          'Invisalign treatment begins with advanced digital imaging techniques, including a 3D scan, X-rays, and photos, to map out the current position of your teeth. Within minutes of these scans, a computer-generated treatment plan provides a visual of the expected results, allowing patients to see the projected improvements right away.',
          'Once the treatment plan is approved, patients receive customized, clear aligners designed with Invisalign’s patented technology. These aligners are discreet, comfortable, and highly effective. Each set of aligners is designed to gradually shift the teeth into their ideal positions based on the doctor’s prescribed treatment plan. At Harmen-Tinnel Complete Family Dentistry, <a href="/our-practice/meet-dr-tinnel/">Dr. Tinnel,</a> <a href="/our-practice/meet-dr-tinnel/">Dr. Whitney,</a> and <a href="/our-practice/meet-dr-garling/">Dr. Garling</a> have completed hundreds of Invisalign cases, ensuring you’re in experienced hands. With their expertise, you can be confident in achieving a straighter, healthier smile with Invisalign!',
        ],
        image: 'invisalign-smile-tinnel.jpg',
        imageAlt: 'invisalign-smile-tinnel',
        imageSide: 'start',
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'faq',
        eyebrow: 'Clearly the Best Aligner Choice',
        title: 'Frequently Asked Questions About Invisalign',
        intro: [
          'Take some time to read some of our most frequently asked questions about Invisalign! Don’t see an answer you’re looking for? <a href="/contact/">Contact us</a>, we’d love to answer any and all of your questions!',
        ],
        image: 'emergency-appointments-overland-park.jpg',
        imageAlt: 'emergency-appointments-overland-park',
        imageSide: 'end',
        items: [
          {
            question: 'What Is Invisalign?',
            answer:
              'Invisalign is a series of clear, comfortable, flexible trays that gradually and painlessly shift your teeth into a more desired position.',
          },
          {
            question: 'Does Invisalign Hurt?',
            answer:
              'No, Invisalign doesn’t hurt at all! The trays are very comfortable and they apply a small amount of pressure to each tooth, gradually shifting them into a more desired position.',
          },
          {
            question: 'Am I a Candidate for Invisalign?',
            answer:
              'A lot of our patients are great candidates for Invisalign, but the only way to know for sure is to come in for a consultation!',
          },
          {
            question: 'How Much Does Invisalign Cost?',
            answer:
              'Every Invisalign case is different so it’s impossible to generalize cost, but we have great payment plans that our patients love!',
          },
        ],
      },
      {
        type: 'split',
        eyebrow: 'Comfortable, Convenient, Removable',
        title: 'Why Our Patients Love Invisalign',
        align: 'center',
        youtubeId: 'lMblwkl5ObU',
      },
    ],
  },
  {
    slug: 'childrens-dentistry',
    title: "Children's Dentistry in Overland Park - Kansas City KS - HT Complete Family Dentistry",
    description:
      "Our gentle dental care for children will keep your child's smile healthy. Serving Overland Park, Kansas City, and surrounding areas. Call 913-962-0036 for your free new patient consultation.",
    name: "Children's Dentistry",
    h1: 'Dental Care for Kids in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: "Children's Dentistry",
        subtitle: 'Gentle Dental Care for Your Child',
        paragraphs: [
          'At HTCFD, we are dedicated to providing gentle, compassionate care to children in the Overland Park community. We are focused on creating preventative treatment plans to ensure your child has a solid dental foundation to keep their smiles happy and healthy for years to come.',
        ],
        image: 'sdf-fluoride-treatments-kansas-city.jpg',
        imageAlt: 'sdf-fluoride-treatments-kansas-city',
      },
      {
        type: 'split',
        title: "Children's Dentist in the Overland Park - Kansas City Area",
        subtitle: 'Creating Happy, Healthy Smiles for Your Child',
        paragraphs: [
          'At Harman-Tinnel Complete Family Dentistry, we offer routine cleanings, fluoride treatments, dental sealants, and education on proper oral hygiene techniques for all of our young patients. Our main goal is to keep your children’s teeth healthy now and to teach them healthy habits that will protect their smiles for years to come. According to the American Dental Association, children should visit the dentist within 6 months of their first tooth coming in, or just around their first visit. Your child’s first visit allows them to feel comfortable with our team, and allows us to develop the proper treatment plan for them going forward.',
          '<a href="/our-practice/meet-the-team/">Our compassionate staff</a> and kid-friendly environment will help set your mind at ease and make every visit enjoyable and stress-free for your child. Each time your child <a href="/contact/">visits our office</a>, we will check for any signs of cavities, spacing issues, tongue placement problems, tonsillar complications, and any other potential dysfunctions. After a thorough but painless exam, our team will clean and polish your child’s teeth, keeping them healthy and bright. Our goal is to help children develop healthy habits that will protect their smiles for years to come.',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'cards',
        title: "Children's Dental Treatments & Programs",
        intro: [
          'We offer a variety of treatments and programs tailored to meet the needs of our young patients, and would love to add your child to our HTCFD family!',
        ],
        items: [
          {
            title: 'No Cavity Club',
            body: 'We love to reward our young patients’ commitment to good dental care and being cavity-free with gift cards to their favorite places!',
            href: '/childrens-dentistry/no-cavity-club/',
          },
          {
            title: 'Sealants',
            body: 'This thin, clear coating is applied to the chewing surfaces of your child’s permanent teeth and protects them from decay.',
            href: '/childrens-dentistry/sealants/',
          },
          {
            title: 'Fluoride',
            body: 'Flouride strengthens tooth enamel and helps prevent tooth decay. Treatments are typically applied during teeth cleanings.',
            href: '/childrens-dentistry/fluoride-treatments/',
          },
          {
            title: 'SDF',
            body: 'Silver Diamine Fluoride (SDF) is used to remineralize or save severely decayed teeth and is often used on baby teeth to prevent further decay.',
            href: '/childrens-dentistry/no-cavity-club/',
          },
        ],
      },
    ],
  },
  {
    slug: 'childrens-dentistry/fluoride-treatments',
    title:
      'Fluoride Treatments for Kids in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      "Fluoride treatments help protect your child's teeth against tooth decay. Call 913-962-0036 for your free new patient consultation. Serving Overland Park, Kansas City, and surrounding areas.",
    name: 'Fluoride Treatments',
    h1: 'Fluoride Treatments for Kids in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: 'Fluoride Treatments',
        subtitle: 'The Tooth-Strengthening Mineral',
        paragraphs: [
          'Fluoride is a teeth-strengthening mineral commonly used in children’s fragile teeth during cleanings. Fluoride is a naturally occurring element found most commonly in drinking water and toothpaste, and is a safe, preventative treatment for children.',
        ],
        image: 'fluoride-treatments-overland-park.jpg',
        imageAlt: 'Flouride Treatments - Body',
      },
      {
        type: 'split',
        title: 'Fluoride Treatments for Kids and Teens',
        subtitle: 'Fluoride: Keeping Your Teeth Strong',
        paragraphs: [
          'During your routine cleanings, our hygienists at HTCFD will apply fluoride to your child’s teeth as a varnish after they have cleaned your child’s teeth. Be sure to brush your child’s teeth carefully at the end of the day, as fluoride can be sticky and may harden on the toothbrush. In some cases, patients receive a prescription fluoride toothpaste, like Prevident, to help remineralize weakened tooth enamel and prevent cavities in both adults and children.',
          'In addition to in-office treatments, it’s important to encourage good oral hygiene practices at home. Parents should ensure their children brush twice daily with fluoride toothpaste and floss daily. <a href="/contact/">Regular dental check-ups</a> combined with fluoride treatments can significantly enhance your child’s overall dental health and set them up for a lifetime of healthy smiles.',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions About Fluoride Treatments',
        intro: [
          'We are here to answer all of your fluoride treatment-related questions! Do you have a question that isn’t answered below? Feel free to <a href="/contact/">contact us!</a>',
        ],
        items: [
          {
            question: 'What is Fluoride?',
            answer:
              'Fluoride is a tooth-strengthening mineral that is frequently used on children’s teeth to help keep them strong.',
          },
          {
            question: 'Where is Fluoride Found?',
            answer:
              'Fluoride is found naturally in many places, such as drinking water and toothpaste.',
          },
          {
            question: 'Why Does My Child Need Fluoride Treatment?',
            answer:
              'One of the main reasons your child should get a fluoride treatment is to help ensure their teeth stay strong and healthy. It also helps prevent tooth decay and can strengthen weak tooth enamel.',
          },
          {
            question: 'Should My Child Use Fluoride Toothpaste?',
            answer:
              'The short answer is yes! Using a fluoride toothpaste is an excellent way to help your child’s teeth healthy. You should start brushing your child’s teeth with fluoride toothpaste at the age of 3.',
          },
        ],
        image: 'sdf-fluoride-treatments-kansas-city.jpg',
        imageAlt: 'sdf-fluoride-treatments-kansas-city',
      },
    ],
  },
  {
    slug: 'childrens-dentistry/no-cavity-club',
    title: 'No Cavity Club in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      'Our No Cavity Club rewards kids for taking care of their teeth. Call 913-962-0036 for your free new patient consultation. Serving Overland Park, Kansas City, and surrounding areas.',
    name: 'No Cavity Club',
    h1: 'We Reward Healthy Smiles',
    blocks: [
      {
        type: 'split',
        title: 'No Cavity Club',
        subtitle: 'Healthy Smiles, Happy Kids',
        paragraphs: [
          'At Harman-Tinnel Complete Family Dentistry, we take care of our patients as if they were part of our family. One way we like to celebrate our young patients is with our No Cavity Club!',
        ],
        image: 'no-cavity-club-overland-park.jpg',
        imageAlt: 'No Cavity Club - Body',
      },
      {
        type: 'split',
        title: 'No Cavity Club Rewards Kids for Taking Care of Their Teeth',
        subtitle: 'The Perks of Good Dental Hygiene',
        paragraphs: [
          'If your child has four consecutive cavity-free visits to our office, they become a member of the no cavity club! Besides the recognition of having a healthy smile, your child will receive a gift card prize for their hard work brushing and flossing! Our patients love this incentive because it helps them have a tangible goal attached to their oral hygiene routine. Our patients’ parents love it, too, because the incentive helps instill great brushing and flossing habits into their kiddos!',
          'Our team loves encouraging their patients and celebrating their success at each appointment. <a href="/dental-blog/">Teaching good brushing and flossing habits</a> at an early age can help mitigate dental issues and can save you money on treatments in the long run. If you have any questions about our No Cavity Club, <a href="/contact/">please call our office</a> and we will make sure to answer all of your questions!',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'split',
        title: 'How Our No Cavity Club Rewards Program Works',
        paragraphs: [
          'We believe that dental health should be fun! That’s why we have our No Cavity Club Rewards program. If your child comes to four consecutive visits without any cavities, then they will earn a gift card for their awesome brushing habits!',
        ],
      },
    ],
  },
  {
    slug: 'childrens-dentistry/sealants',
    title:
      'Dental Sealants for Kids in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      "Dental sealants help protect your child's permanent teeth from decay. Call 913-962-0036 for your free new patient consultation. Serving Overland Park, Kansas City, and surrounding areas.",
    name: 'Sealants',
    h1: 'Dental Sealants for Kids in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: 'Sealants',
        subtitle: 'Preventing Cavities in Children',
        paragraphs: [
          'Our team knows how important it is to protect the teeth of our children and teens in any way we can. Dental Sealants are a great way to prevent tooth decay in our young patients. Dental Sealants are placed on the chewing surfaces of our child and teen patients to preserve the health of their teeth.',
        ],
        image: 'dental-sealants-overland-park.jpg',
        imageAlt: 'dental-sealants-overland-park',
      },
      {
        type: 'split',
        title: 'Dental Sealants for Kids and Teens',
        subtitle: 'The 411 About Dental Sealants',
        paragraphs: [
          'Our dental sealants are a highly effective preventative measure that are sure to protect your children from cavities. Sealants are thin, protective coatings applied to the chewing surfaces on your child’s molars, where cavities commonly occur. Molars have grooves and pits that easily trap food and bacteria, and can cause tooth decay even with regular brushing.',
          'According to the Centers for Disease Control and Prevention (CDC), sealants can reduce the risk of cavities in molars by nearly 80%. Dental sealants act as a great barrier to preventing food and bacteria from settling into molar grooves, and ultimately preventing cavities in your children. Our holistic approach to dentistry means prioritizing preventative care and reducing reactive care for your children’s future.',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions About Dental Sealants',
        intro: [
          'We are here to answer all of your dental sealant-related questions! Do you have a question we haven’t answered below? <a href="/contact/">Give us a call</a> – we’d love to help!',
        ],
        items: [
          {
            question: 'What is a Sealant?',
            answer:
              'A sealant is a thin, protective coating that adheres to teeth that are more susceptible to tooth decay, such as your molars',
          },
          {
            question: 'How do Sealants Work?',
            answer:
              'Sealants work by sealing off the tooth to prevent tooth decay from occurring. This is not a replacement for brushing or flossing but is a great option to help ensure excellent dental health.',
          },
          {
            question: 'Who Can Get Sealants?',
            answer:
              'Sealants are great for children and adults! However, the earlier you get them, the better. We recommend bringing your child in shortly after they get their first molars.',
          },
          {
            question: 'Is Getting Sealants Painful?',
            answer:
              'Not at all! Getting sealants applied is a quick and painless process. After drying your teeth, we will apply a solution that helps to rough the tooth up. Then, we apply the sealant and use a blue light to harden it! Your child will be in and out in no time.',
          },
        ],
        image: 'emergency-appointments-overland-park.jpg',
        imageAlt: 'emergency-appointments-overland-park',
      },
    ],
  },
  {
    slug: 'childrens-dentistry/silver-diamine-fluoride-sdf-treatments',
    title:
      'Silver Diamine Fluoride (SDF) Treatments for Kids in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      'Silver Diamine Fluoride (SDF) lets us treat cavities in a quick, non-invasive manner. Call 913-962-0036 for your free new patient consultation. Serving Overland Park, Kansas City, and surrounding areas.',
    name: 'Silver Diamine Fluoride (SDF) Treatments',
    h1: 'SDF Treatments for Kids in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: 'Silver Diamine Fluoride (SDF) Treatments',
        subtitle: 'The Benefits of SDF Treatment',
        paragraphs: [
          'Silver Diamine Fluoride (SDF) is an antimicrobial liquid that offers an efficient, non-invasive way to treat severe cavities, making it especially useful for children and teens. When applied, SDF helps remineralize and stabilize teeth with extensive decay, offering a quick alternative to traditional restorative methods.',
        ],
        image: 'sdf-fluoride-treatments-kansas-city.jpg',
        imageAlt: 'sdf-fluoride-treatments-kansas-city',
      },
      {
        type: 'split',
        title: 'Silver Diamine Fluoride Treatments for Kids and Teens',
        subtitle: 'The 411 on SDF Treatment',
        paragraphs: [
          'At Harman-Tinnel Complete Family Dentistry, we use SDF treatments for kids and teens because It’s particularly effective for baby teeth that are challenging to restore or have multiple areas of decay, providing a safe way to halt further damage. While the application of SDF does cause the decayed areas to turn black, this is an essential part of the process, as it seals the decay from additional bacteria and <a href="/childrens-dentistry/no-cavity-club/">helps prevent the progression of cavities.</a>',
          'In some cases, our team may apply an SDF treatment twice within a year to reinforce its effectiveness in protecting the teeth from future decay. For teeth that continue to show improvement after SDF treatment, a filling may be placed on top to restore normal function and appearance. This combination of SDF and traditional fillings offers a versatile solution for preserving young teeth until natural exfoliation occurs or more permanent options are viable. Overall, SDF provides a unique, less invasive treatment option that focuses on arresting decay and preserving children’s dental health comfortably and efficiently.',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions About SDF Treatments',
        intro: [
          'We are here to answer all of your Silver Diamine Fluoride Treatment questions! Don’t see a question here that you have? <a href="/contact/">Call or email us</a>, as we’d love to answer it for you!',
        ],
        items: [
          {
            question: 'What is Silver Diamine Fluoride (SDF), and how does it work?',
            answer:
              'Silver Diamine Fluoride is a liquid treatment that combines silver, which kills bacteria, with fluoride, which helps to strengthen teeth. It’s applied directly to decayed areas to stop the spread of decay and can even help protect the surrounding teeth by creating a protective barrier.',
          },
          {
            question: 'Who is a good candidate for SDF treatment?',
            answer:
              'SDF is particularly effective for young children, teens, or patients who may have difficulty with traditional cavity treatments. It’s ideal for baby teeth that are hard to restore or that have multiple areas of decay. It also works well for patients with special needs or those who experience dental anxiety.',
          },
          {
            question: 'Will SDF turn my child’s teeth black?',
            answer:
              'SDF does darken the decayed areas of the tooth to a black color, which signals that the decay is sealed off and that bacteria are no longer active. The healthy parts of the tooth and surrounding teeth remain unaffected, and a filling may sometimes be added later to cover the area if needed.',
          },
          {
            question: 'How often does my child need SDF treatment?',
            answer:
              'SDF is often applied once and then reapplied within six months for maximum effectiveness. The number of treatments depends on the severity of the decay and the response to initial applications. In some cases, a filling may be added after SDF to improve the tooth’s appearance and function.',
          },
        ],
        image: 'flouride-treatments-faq-harmen-tinnel.jpg',
        imageAlt: 'flouride-treatments-faq-harmen-tinnel',
      },
    ],
  },
  {
    slug: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      'Love your smile again with professional cosmetic dentistry in Overland Park. Teeth whitening, veneers, and more—all under one roof.',
    name: 'Cosmetic Dentistry',
    h1: 'Dental Care in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: 'Cosmetic Dentistry',
        subtitle: 'Enhancing Smiles and Changing Lives',
        paragraphs: [
          'Both Dr. Tinnel and Dr. Prinz are trusted leaders in cosmetic dentistry. Our cosmetic dental services include composite bonding, teeth whitening, and veneers, all designed to help you achieve a radiant, confident smile.',
        ],
        image: 'no-cavity-club-overland-park.jpg',
        imageAlt: 'No Cavity Club - Body',
      },
      {
        type: 'split',
        title: 'Cosmetic Dentistry in Kansas City and Overland Park, KS',
        subtitle: "We're Transforming Smiles",
        paragraphs: [
          'At HTCFD, our cosmetic dentistry services are designed to transform your smile and enhance your confidence. Composite bonding is a versatile solution for repairing chips, cracks, and gaps in teeth, offering a natural and seamless appearance. For patients looking to brighten their smiles, our professional teeth whitening treatments deliver stunning results by safely removing years of stains and discoloration. Veneers, another popular option, provide a long-lasting solution to address imperfections such as uneven spacing, misalignment, or worn enamel, giving you the radiant smile you’ve always wanted.',
          'No matter your age or dental history, it’s never too late to achieve the smile of your dreams with our expert care. Dr. Tinnel and Dr. Prinz are committed to providing personalized treatments that cater to each patient’s unique needs and goals. Whether you’re looking for subtle enhancements or a complete smile makeover, our advanced techniques and state-of-the-art technology ensure stunning, lasting results. <a href="/contact/">Let us help you rediscover your confidence with a smile that truly reflects your best self.</a>',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'cards',
        title: 'Cosmetic Dental Treatments & Programs',
        intro: [
          'Are you ready to transform your smile with the help of our excellent team at HTCFD? If som explore our cosmetic treatment options below.',
        ],
        items: [
          {
            title: 'Composite Bonding',
            body: 'Composite bonding – sometimes called dental bonding – can be a good alternative to veneers, though they typically are not as long lasting.',
            href: '/cosmetic-dentistry/composite-bonding/',
          },
          {
            title: 'Teeth Whitening',
            body: 'Teeth whitening can be accomplished with the use of take home trays or in office visits. Carbamide or hydrogen peroxide is used to whiten the teeth without damaging the enamel surface.',
            href: '/cosmetic-dentistry/teeth-whitening/',
          },
          {
            title: 'Veneers',
            body: 'Many times teeth are too small, crowded/spaced, in poor alignment, discolored or have general undesirable esthetics. Veneers are a way to mask many of these problems.',
            href: '/cosmetic-dentistry/veneers/',
          },
        ],
      },
    ],
  },
  {
    slug: 'cosmetic-dentistry/composite-bonding',
    title:
      'Composite Bonding - Cosmetic Dentistry in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      'Improve the appearance of your smile with composite bonding. Call 913-962-0036 for your free new patient consultation. Serving Overland Park, Kansas City, and surrounding areas.',
    name: 'Composite Bonding',
    h1: 'Composite Bonding in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: 'Composite Bonding',
        subtitle: 'Instantly Enhance Your Smile',
        paragraphs: [
          'At Harman-Tinnel Complete Family Dentistry, we are proud to offer composite bonding, a cosmetic dental procedure that uses a tooth-colored resin to repair issues like chips, cracks, and gaps in teeth. St resin is shaped to blend with the natural teeth and hardened for a durable, natural-looking finish.',
        ],
        image: 'composite-bonding-overland-park.jpg',
        imageAlt: 'composite-bonding-overland-park',
      },
      {
        type: 'split',
        title: 'Get a Complete Smile Makeover with Composite Bonding',
        subtitle: 'A Tooth Friendly Solution',
        paragraphs: [
          'At Harman-Tinnel Complete Family Dentistry, composite bonding offers a quick, effective solution for enhancing your smile. This minimally invasive procedure uses a tooth-colored resin to repair imperfections like chips, cracks, gaps, and discoloration, helping you achieve a balanced, natural-looking smile in just one visit. Our experienced team carefully shapes and polishes the composite material to blend seamlessly with your teeth, ensuring both a flawless appearance and durable results.',
          'Composite bonding provides not only aesthetic benefits but also strengthens the structure of your teeth. Ideal for patients of all ages, this procedure is cost-effective and can often be completed without anesthesia, making it a comfortable option for enhancing your smile. With composite bonding at Harman-Tinnel, you’ll enjoy renewed confidence, knowing that your smile is beautiful, healthy, and crafted to last.',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions About Composite Bonding',
        intro: [
          'We are here to answer all of your questions about composite bonding! Don’t see a question you have? <a href="/contact/">Contact us</a>, we’d love to answer any and all of your questions!',
        ],
        items: [
          {
            question: 'What is Composite Bonding?',
            answer:
              'Composite Bonding, also known as Dental Bonding, is a procedure in which resin is applied to the tooth, then shaped into the preferred tooth shape, resulting in a beautiful smile.',
          },
          {
            question: 'Why Would I Want Composite Bonding?',
            answer:
              'Composite bonding is a great option for those people who are wanting to liven up their smile in a non-invasive way!',
          },
          {
            question: 'Does Composite Bonding Hurt?',
            answer:
              'No, not at all! Composite bonding is a minimally invasive procedure that helps you painlessly reach your smile goals!',
          },
          {
            question: "Composite Bonding vs Veneers - What's the Difference?",
            answer:
              'There are a couple of important differences worth noting between composite bonding and veneers. First off, composite bonding uses resin, while veneers use porcelain. Additionally, composite bonding doesn’t last quite as long and might require more touch-ups than veneers.',
          },
          {
            question: 'Is Composite Bonding Bad for Your Teeth?',
            answer:
              'No, not at all! As it is a minimally invasive procedure, composite bonding simply goes over your teeth, without affecting the health of the actual tooth.',
          },
        ],
        image: 'emergency-appointments-overland-park.jpg',
        imageAlt: 'emergency-appointments-overland-park',
      },
    ],
  },
  {
    slug: 'cosmetic-dentistry/teeth-whitening',
    title:
      'Teeth Whitening - ZOOM Accelerated Whitening in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      'Get a brighter, whiter smile. Ask about our ZOOM teeth whitening special! Call for a dentist near you at 913-962-0036 and get your free new patient consultation. Serving Overland Park, Kansas City, and surrounding areas.',
    name: 'Teeth Whitening',
    h1: 'Teeth Whitening in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: 'Teeth Whitening',
        subtitle: 'Make Your Smile Sparkle',
        paragraphs: [
          'Our team at HTCFD understands how influential the aesthetics of a white smile can be on our patients’ self-esteem. That is why we are proud to offer in-office teeth whitening treatments to our patients! We offer both teeth bleaching and ZOOM teeth whitening treatments.',
        ],
        image: 'teeth-whitening-special-shawnee-ks.jpg',
        imageAlt: 'ZOOM Teeth Whitening Special',
      },
      {
        type: 'split',
        title: 'Make Your Smile Sparkle with Bleaching and ZOOM Teeth Whitening Treatments',
        subtitle: 'Teeth Whitening 101',
        paragraphs: [
          'Teeth whitening can typically be achieved through take-home trays or in-office treatments, using carbamide or hydrogen peroxide to whiten teeth safely without harming the enamel. This bleaching process is popular because it’s convenient and often reduces the risk of sensitivity. For personalized advice on teeth whitening options, schedule a consultation with a dentist near you in Overland Park, Kansas City.',
          'For faster results, we offer ZOOM, an accelerated whitening treatment that uses a specially designed light to speed up the process. This in-office treatment includes four sessions under the light, allowing you to brighten your smile by up to 8 shades. Results vary—while some patients may lighten by 2 shades, those with heavier staining from coffee, tea, or smoking can see an improvement of up to 8 shades. Expect beautiful, noticeable results!',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions About Teeth Whitening',
        intro: [
          'We are here to answer all of your questions related to teeth whitening! Don’t see a question you have below? Feel free to <a href="/contact/">contact us</a>, as we’d love to answer any and all of your questions!',
        ],
        items: [
          {
            question: 'What is Teeth Whitening?',
            answer:
              'Teeth whitening is a process in which hydrogen peroxide or carbamide is used to help whiten the teeth without damaging the enamel surface.',
          },
          {
            question: 'What is ZOOM Teeth Whitening?',
            answer:
              'ZOOM teeth whitening is an accelerated form of teeth whitening. Done in-house, we use a specially designed light to speed up the whitening process. You can see your smile brighten by up to 8 shades with zoom whitening!',
          },
          {
            question: 'Does Teeth Whitening Hurt?',
            answer:
              'While teeth whitening can make your gums and teeth a little more sensitive, it is a pain-free process!',
          },
          {
            question: 'When Can I See the Effects of Teeth Whitening?',
            answer:
              'Most of the time, you can start seeing the beautiful results that come with teeth whitening after 24 hours of your first treatment!',
          },
        ],
        image: 'emergency-appointments-overland-park.jpg',
        imageAlt: 'emergency-appointments-overland-park',
      },
    ],
  },
  {
    slug: 'cosmetic-dentistry/veneers',
    title:
      'Dental Veneers - Cosmetic Dentistry in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      'Restore your gorgeous smile with porcelain dental veneers. Call 913-962-0036 for your free new patient consultation. Serving Overland Park, Kansas City, and surrounding areas.',
    name: 'Veneers',
    h1: 'Dental Veneers in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: 'Veneers',
        subtitle: 'Custom-made Smiles',
        paragraphs: [
          'At HTCFD, veneers offer a transformative solution for patients whose teeth are too small, misaligned, spaced, discolored, or simply don’t meet their aesthetic goals. With veneers, Dr. Tinnel and Dr. Prinz can provide their patients with the smile of their dreams!',
        ],
        image: 'veneers-kansas-city.jpg',
        imageAlt: 'veneers-kansas-city',
      },
      {
        type: 'split',
        title: 'Restore Your Gorgeous Smile With Porcelain Dental Veneers',
        subtitle: 'Dental Veneers',
        paragraphs: [
          'Veneers are thin, custom-made shells that adhere to the front of your teeth, effectively masking imperfections while preserving much of the natural tooth structure. Unlike crowns, veneers require only minimal tooth reduction, making them a less invasive yet highly effective way to achieve a beautiful smile that lasts.',
          'Crafted from high-quality porcelain, veneers are incredibly thin yet durable, designed to blend seamlessly with your natural teeth for a stunning, realistic appearance. In just a few visits, veneers can provide dramatic improvements that might otherwise require years of orthodontic or whitening treatments.',
          'While veneers are an ideal option for many, some patients with specific dental conditions, like tetracycline-stained teeth, may be better suited for full crowns. <a href="/our-practice/meet-the-team/">Our team will work closely with you</a> to determine the best approach to enhance your smile, ensuring a result that’s both stunning and lasting.',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions About Dental Veneers',
        intro: [
          'We are here to answer all of your veneer-related questions! Don’t see a question you have below? Feel free to <a href="/contact/">contact us</a>, we’d love to answer any and all of your questions!',
        ],
        items: [
          {
            question: 'What Are Veneers?',
            answer:
              'Veneers are made up of high-quality porcelain that is placed over your tooth to achieve the smile of your dreams.',
          },
          {
            question: 'Will Porcelain Veneers Ruin my Teeth?',
            answer:
              'Simply put – no, porcelain veneers will not ruin your teeth. This is a common misconception with veneers. We simply bond the veneer over the tooth, which provides great protection for your teeth!',
          },
          {
            question: 'How Long will My Veneers Last?',
            answer:
              'As long as you take care of them, your veneers can last decades! If you ever chip one, don’t worry. We can fix it up for you in no time!',
          },
          {
            question: 'Is Getting Veneers Painful?',
            answer:
              'Getting veneers is not painful at all! Most patients report little to no discomfort during their visit.',
          },
        ],
        image: 'emergency-appointments-overland-park.jpg',
        imageAlt: 'emergency-appointments-overland-park',
      },
    ],
  },
  {
    slug: 'general-dentistry',
    title: 'General Dentistry - HT Complete Family Dentistry',
    description:
      'From cleanings to crowns, get complete general dental care for the whole family in Overland Park, KS.',
    name: 'General Dentistry',
    h1: 'General Dental Services for All Ages in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: 'General Dentistry',
        subtitle: 'Dentistry Tailored to Meet Your Needs',
        paragraphs: [
          'At HTCFD, our top priority is to help each of our patients maintain their complete oral care. Whether you need a routine cleaning or a comprehensive treatment plan, our team is ready to provide top notch care ensuring you have a healthy smile for a lifetime.',
        ],
        image: 'crowns-overland-park.jpg',
        imageAlt: 'crowns-overland-park',
      },
      {
        type: 'split',
        title: 'General Dentistry in the Kansas City and Overland Park Areas',
        subtitle: 'Service You Can Trust',
        paragraphs: [
          'At HTCFD, each of our general dentistry services are tailored to meet the diverse needs of our patients, ensuring optimal oral health at every stage of life. For patients with missing teeth, we offer customized solutions such as bridges, dentures, and <a href="/general-dentistry/dental-implants/">dental implants</a> to restore functionality and to enhance the aesthetic of your smile. Our general dentistry options are designed to look and feel natural, helping you regain confidence and improve your overall quality of life.',
          'Our team also provides expert care for damaged or decayed teeth with services like <a href="/general-dentistry/crowns/">crowns</a>, <a href="/general-dentistry/dental-fillings/">fillings</a>, and <a href="/general-dentistry/root-canal-therapy/">root canals</a>. Crowns are used to protect and strengthen weak teeth, while fillings effectively repair cavities and prevent further decay. For more complex cases, root canals can save teeth that might otherwise need extraction, relieving pain and restoring dental health. Our team is dedicated to delivering gentle, efficient care, using the latest techniques and technologies to ensure your experience is as comfortable as possible.',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'cards',
        title: 'General Dental Services',
        intro: [
          'Our team at HTCFD is dedicated to utilizing state of the art technology and practicing the latest dental general dentistry methods to provide the below services to you and your family.',
        ],
        items: [
          {
            title: 'Bridges',
            body: 'Dental bridges are a reliable solution to replace missing teeth, restoring your smile and bite. They anchor to nearby teeth for a natural look and seamless function.',
            href: '/general-dentistry/bridges/',
          },
          {
            title: 'Crowns',
            body: 'Crowns protect and restore damaged teeth by covering them with a strong, custom-made cap. They improve both appearance and function, keeping your smile healthy and complete.',
            href: '/general-dentistry/crowns/',
          },
          {
            title: 'Dentures',
            body: 'Dentures are removable appliances designed to replace missing teeth, improving chewing, speech, and confidence. They’re crafted for comfort and a natural-looking smile.',
            href: '/general-dentistry/dentures-partials/',
          },
          {
            title: 'Dental Implants',
            body: 'Dental implants are a permanent solution for missing teeth, providing a natural look and feel. They restore your smile and bite with unmatched durability and comfort.',
            href: '/general-dentistry/dental-implants/',
          },
          {
            title: 'Fillings',
            body: 'Fillings repair cavities and restore your tooth’s strength and shape. We use tooth-colored materials that blend seamlessly with your natural teeth for a healthy, confident smile.',
            href: '/general-dentistry/dental-fillings/',
          },
          {
            title: 'Root Canals',
            body: 'Root canals save damaged or infected teeth by removing decay and sealing the root. This procedure relieves pain, prevents further damage, and preserves your natural tooth.',
            href: '/general-dentistry/root-canal-therapy/',
          },
        ],
      },
    ],
  },
  {
    slug: 'general-dentistry/bridges',
    title: 'Bridges in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      'Missing a tooth? Replace it with a fixed or implant-supported dental bridge. Call 913-962-0036 for your free new patient consultation. Serving Overland Park, Kansas City, and surrounding areas.',
    name: 'Dental Bridges',
    h1: 'Dental Bridges in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: 'Dental Bridges',
        subtitle: 'Filling in the Gap: Dental Bridges',
        paragraphs: [
          'Dental bridges are fixed prosthetic devices that replace one or more missing teeth by anchoring artificial teeth to the adjacent natural teeth or implants. They help restore function and appearance for our patients, improving chewing, speaking, and the alignment of remaining teeth.',
        ],
        image: 'dental-bridge-kansas-city.jpg',
        imageAlt: 'dental-bridge-kansas-city',
      },
      {
        type: 'split',
        title: 'Fixed and Implant-Supported Dental Bridges',
        subtitle: 'Bridging the Information Gap on Dental Bridges',
        paragraphs: [
          'Dental bridges are an effective solution for replacing missing teeth, providing both functional and aesthetic benefits. A fixed bridge involves placing crowns on the adjacent teeth to <a href="/general-dentistry/dentures-partials/">support a false tooth (or teeth)</a> in between, effectively filling the gap left by the missing tooth. This restoration helps restore the ability to chew, speak clearly, and maintain facial structure, preventing the remaining teeth from shifting out of alignment. Additionally, for those who prefer a more stable option, implant-supported bridges are anchored to dental implants, offering a secure and durable alternative that mimics the function of natural teeth.',
          'By choosing dental bridges, you not only enhance your smile but also improve your overall oral health. These restorations are custom-made to match your natural teeth, ensuring a seamless look that blends well with your existing dental structure. The procedure is efficient and relatively quick, allowing you to enjoy your new smile in no time. Whether you opt for a fixed bridge or an implant-supported bridge, you can trust that this treatment will provide lasting support and comfort while restoring your confidence in your smile.',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions About Dental Bridges',
        intro: [
          'We are here to answer all of your veneer-related questions! Don’t see a question you have below? Feel free to <a href="/contact/">contact us</a>, we’d love to answer any and all of your questions!',
        ],
        items: [
          {
            question: 'What is a Dental Bridge?',
            answer:
              'A dental bridge is an excellent way for a dentist to bridge, or close, a gap in your smile. Made of porcelain material, it’s connected to your real teeth on either side.',
          },
          {
            question: 'Are Dental Bridges Better than Implants?',
            answer:
              'After evaluating you and your needs, your dentist will determine what course of action to take. A lot of the time, a dental bridge is a good option because it isn’t implanted in the gum tissue, and therefore is less likely to be affected by gum disease.',
          },
          {
            question: 'How Long do Dental Bridges Last?',
            answer: 'With good oral hygiene, your dental bridge can last up to 15 years.',
          },
          {
            question: 'Are Dental Bridges Permanent?',
            answer:
              'Yes, dental bridges are permanent but can be professionally removed by a dentist.',
          },
        ],
        image: 'emergency-appointments-overland-park.jpg',
        imageAlt: 'emergency-appointments-overland-park',
      },
    ],
  },
  {
    slug: 'general-dentistry/crowns',
    title: 'Crown Restoration in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      'Crown restorations fix broken or fractured teeth and make them look like new. Call 913-962-0036 for your free new patient consultation. Serving Overland Park, Kansas City, and surrounding areas.',
    name: 'Crowns',
    h1: 'Crown Restoration in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: 'Crowns',
        subtitle: 'Mending Broken Teeth',
        paragraphs: [
          'At HTCFD, dental crowns are custom-made caps placed over a damaged, decayed, or weakened tooth to restore its shape, size, and strength while improving its appearance. Our crowns are crafted to blend seamlessly with your natural teeth, and they’re designed to protect and extend the life of your tooth by providing a durable layer of protection.',
        ],
      },
      {
        type: 'split',
        title: 'Crown Restoration of Broken or Fractured Teeth',
        subtitle: 'Crowns 101',
        paragraphs: [
          'When a tooth has broken or fractured, it becomes weakened due to the loss of tooth structure. To protect that tooth from further fracturing, some kind of full coverage restoration is necessary. Teeth that have large <a href="/general-dentistry/dental-fillings/">fillings</a>, typically silver fillings, can break from chewing forces over time and may also be a good candidate for a crown. Crown restorations have been used for many years with a proven track record of protection.',
          'There are many different types of materials used to make crowns. Ceramic or tooth-colored crowns are most often used, although some teeth may be better with an all-metal or gold crown. The tooth being crowned will be prepared with 1 mm of removal of tooth structure around the perimeter of the tooth and 1.5-2 mm on the biting surface of the tooth. This is necessary to get a crown to fit over the tooth. We are so fortunate to have Digital Solutions for this, <a href="/cad-cam-dentistry/">called CEREC</a>, that allows for many same-day crowns. So convenient to avoid a second appointment and comfortable due to no temporary crown!',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
        image: 'crowns-overland-park.jpg',
        imageAlt: 'crowns-overland-park',
        secondaryImage: 'emergency-appointments-overland-park.jpg',
        secondaryAlt: 'emergency-appointments-overland-park',
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions About Crowns',
        intro: [
          'We are here to answer all of your crown-related questions! Don’t see a question you have below? <a href="/contact/">Contact us</a>, as we’d love to answer any and all of your questions!',
        ],
        items: [
          {
            question: 'What is a Dental Crown?',
            answer:
              'A crown is a ceramic or metal device that is placed over a tooth to prevent further damage, such as fracturing',
          },
          {
            question: 'How Long Does a Dental Crown Last?',
            answer:
              'With good oral hygiene, a dental crown can last anywhere from 5 to 10 years before needing to be replaced.',
          },
          {
            question: 'How Do I Keep my Dental Crown Clean?',
            answer:
              'To keep your dental crown clean and to take good care of it, it is important to brush your teeth twice a day and to floss consistently.',
          },
          {
            question: 'Is Getting a Dental Crown Painful?',
            answer:
              'While you may experience some discomfort, getting a dental crown is by no means painful. We do our best here to make our patients as comfortable as possible, and most of our patients say they didn’t feel any discomfort at all!',
          },
        ],
      },
    ],
  },
  {
    slug: 'general-dentistry/dental-fillings',
    title:
      'Composite Dental Fillings in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      'We can repair cavities discreetly with composite tooth-colored dental fillings. Call 913-962-0036 for your free new patient consultation. Serving Overland Park, Kansas City, and surrounding areas.',
    name: 'Dental Fillings',
    h1: 'Composite Fillings in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: 'Dental Fillings',
        subtitle: 'A Discreet Dental Treatment',
        paragraphs: [
          'At Harman-Tinnel Complete Family Dentistry, we offer a permanent solution for missing teeth, dental implants. Dental Implants involve a titanium post fused with the jawbone to support a natural-looking dental crown, bridge, or denture. They not only restore function and aesthetics but also prevent bone loss by stimulating the jaw, offering a lasting, durable replacement for natural teeth.',
        ],
        image: 'dental-implants-kansas-city.jpg',
        imageAlt: 'dental-implants-kansas-city',
      },
      {
        type: 'split',
        title: 'Fixing Cavities with Tooth Colored Composite Dental Fillings',
        subtitle: 'The 411 on Dental Implants',
        paragraphs: [
          'Composite dental fillings offer a highly effective and natural-looking solution for repairing cavities and restoring damaged teeth. Crafted from tooth-colored materials, these fillings blend seamlessly with your natural teeth, making them a discreet choice. Beyond aesthetics, composite fillings also bond directly to the tooth’s surface, providing added strength to the structure and helping to protect against future decay.',
          'At HTCFD, we focus on patient comfort and quality, ensuring each filling is precisely shaped to fit your tooth and perfectly match its color. Our customized approach to composite fillings means you’ll leave with a restored, healthy, and beautiful smile you can feel confident about.',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions About Composite Dental Fillings',
        intro: [
          'See below for many filling-related questions! Don’t see a question that you have? <a href="/contact/">Contact us</a>, we’d love the opportunity to answer it for you!',
        ],
        items: [
          {
            question: 'What is a Filling?',
            answer:
              'A filling is a tooth-colored material that is used to restore a tooth that has decayed, such as a cavity.',
          },
          {
            question: 'Why Do I Need a Filling?',
            answer:
              'Your dentist might recommend you get a filling if you have a large amount of tooth decay. Getting a filling helps to fill the decay and ensures proper tooth health.',
          },
          {
            question: 'How Do I Know if I Have Tooth Decay?',
            answer:
              'When you come in for regular cleanings, we will check your teeth for any signs of decay. If you do have tooth decay, such as a cavity, we will recommend a specialized treatment plan for you and your needs.',
          },
          {
            question: 'Do Fillings Hurt?',
            answer:
              'While it can be normal to feel a little discomfort, it doesn’t hurt to get a filling! In fact, many of our patients said that they didn’t feel anything at all.',
          },
        ],
        image: 'dental-fillings-kansas-city.jpg',
        imageAlt: 'dental-fillings-kansas-city',
      },
    ],
  },
  {
    slug: 'general-dentistry/dental-implants',
    title: 'Dental Implants in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      'Missing teeth? Dental implants are a permanent solution to tooth loss. Call 913-962-0036 for your free new patient consultation. Serving Overland Park, Kansas City, and surrounding areas.',
    name: 'Dental Implants',
    h1: 'Implant Dentistry in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: 'Dental Implants',
        subtitle: 'The Permanent Solution for Missing Teeth',
        paragraphs: [
          'At Harman-Tinnel Complete Family Dentistry, we offer a permanent solution for missing teeth, dental implants. Dental Implants involve a titanium post fused with the jawbone to support a natural-looking dental crown, bridge, or denture. They not only restore function and aesthetics but also prevent bone loss by stimulating the jaw, offering a lasting, durable replacement for natural teeth.',
        ],
        image: 'dental-implants-kansas-city.jpg',
        imageAlt: 'dental-implants-kansas-city',
      },
      {
        type: 'split',
        title: 'Exploring Dental Implants',
        subtitle: 'The 411 on Dental Implants',
        paragraphs: [
          'The dental implants we use are made from durable titanium or zirconia and are placed directly into the bone where the missing tooth was located. Once the implant has integrated with the bone, a custom crown is attached, creating a natural look and feel that closely mimics a real tooth—although it won’t have the same flexibility. Implants have an impressive lifespan of 20-25 years, with some lasting even longer as technology continues to improve.',
          'For replacing an entire arch of teeth, 4-6 implants can be placed beneath a denture or zirconia prosthetic for a secure fit. Using our advanced CEREC and CBCT technology, we can plan and place implants virtually, allowing for a precise, guided approach that ensures your implant is positioned in the best possible location for long-term success. <a href="/our-practice/meet-dr-tinnel/">Dr. Tinnel is excited to walk patients through this virtual process</a>, giving them a clear understanding of their procedure.',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions About Dental Implants',
        intro: [
          'We are here to answer all of your questions about composite bonding! Don’t see a question you have? <a href="/contact/">Contact us</a>, we’d love to answer any and all of your questions!',
        ],
        subtitle: 'Dental Implants',
        items: [
          {
            question: 'What is a Dental Implant?',
            answer:
              'A dental implant is a device made up of titanium metal or zirconia that is placed directly in the bony socket of the missing tooth/teeth.',
          },
          {
            question: 'What is the Purpose of a Dental Implant?',
            answer:
              'The purpose of a dental implant is to act and behave just as a normal tooth does. After an implant is placed, a crown is then placed over it so that it looks and feels like a normal tooth.',
          },
          {
            question: 'Does Getting a Dental Implant Hurt?',
            answer:
              'Not at all. With state-of-the-art technology and practices, we are able to numb the exact location that your implant will be put in, allowing for maximum comfortability.',
          },
          {
            question: 'How Long do Dental Implants Last?',
            answer:
              'With proper oral hygiene, a dental implant can last up to 20-25 years, or even for a lifetime!',
          },
        ],
        image: 'emergency-appointments-overland-park.jpg',
        imageAlt: 'emergency-appointments-overland-park',
      },
      {
        type: 'split',
        title: 'About Our Dental Implant Process',
        youtubeId: 'zf9cF8GA7_o',
      },
    ],
  },
  {
    slug: 'general-dentistry/dentures-partials',
    title: 'Dentures & Partials in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      'Restore your smile after tooth loss with our high-quality dentures and partials. Call 913-962-0036 for your free new patient consultation. Serving Overland Park, Kansas City, and surrounding areas.',
    name: 'Dentures & Partials',
    h1: 'Full & Partial Dentures in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: 'Dentures & Partials',
        subtitle: 'Missing Teeth? No Problem!',
        paragraphs: [
          'Dentures are full sets of artificial teeth used when all teeth in an arch are missing, while partial dentures replace only some missing teeth and attach to remaining natural teeth. At Harman-Tinnel Complete Family Dentistry, both are custom-made to restore function, appearance, and support facial structure.',
        ],
      },
      {
        type: 'split',
        title: 'Restore Your Beautiful Smile with Full or Partial Dentures',
        subtitle: 'Missing Teeth? No Problem!',
        paragraphs: [
          'At HTCFD, our full and partial dentures are designed to provide a natural-looking, secure solution for missing teeth, helping you achieve a complete and confident smile. Crafted to suit the unique contours of each patient’s mouth, our dentures are made to look and feel as close to natural teeth as possible. With our advanced techniques, we create dentures that fit comfortably, allowing you to regain normal eating, speaking, and smiling without worry. Replacing missing teeth with dentures not only restores appearance but also helps maintain facial structure by supporting the muscles in your cheeks and jaw.',
          'Whether you need a few teeth replaced with partial dentures or a full arch replacement, we offer options to best meet your dental and aesthetic needs. Each denture is meticulously designed to ensure maximum comfort, durability, and ease of maintenance. By opting for full or partial dentures, patients can experience a boost in self-esteem and functionality, enjoying their everyday activities with confidence. At HTCFD, we are dedicated to making the transition to dentures as smooth as possible, <a href="/ht-smile-3d/">providing personalized care</a> so that your new smile truly feels like your own.',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
        image: 'dentures-overland-park.jpg',
        imageAlt: 'Dentures',
      },
      {
        type: 'split',
        title: 'Restore Your Beautiful Smile with Full or Partial Dentures',
        subtitle: 'All You Need to Know',
        image: 'emergency-appointments-overland-park.jpg',
        imageAlt: 'emergency-appointments-overland-park',
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions About Dentures & Partials',
        intro: [
          'See below for many frequently asked questions about dentures and partials! Don’t see what you’re looking for? <a href="/contact/">Contact us</a>, we’d love to answer any and all of your questions!',
        ],
        items: [
          {
            question: 'Why Would I Need Dentures?',
            answer:
              'You might need dentures if all or most of your teeth in one or both of your arches are missing.',
          },
          {
            question: 'Why Would I need a Partial?',
            answer: 'You might need a partial if you have many teeth in an arch that are missing.',
          },
          {
            question: 'What is The Difference Between a Partial and Dentures?',
            answer:
              'The main difference between a partial and dentures is that a partial is only when you have some teeth that are missing, but dentures are for when an entire row of teeth are missing in an arch',
          },
          {
            question: 'Are Dentures and Partials Permanent?',
            answer:
              'No, dentures and partials are not permanent! Typically, people will take them out at night and only wear them during the day.',
          },
        ],
      },
    ],
  },
  {
    slug: 'general-dentistry/root-canal-therapy',
    title: 'Root Canal Therapy in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      "Don't extract that infected tooth. Save it with root canal therapy. Call 913-962-0036 for your free new patient consultation. Serving Overland Park, Kansas City, and surrounding areas.",
    name: 'Root Canals',
    h1: 'Root Canal Therapy in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: 'Root Canals',
        subtitle: 'The Root Canal Process',
        paragraphs: [
          'Root canal therapy is a procedure used to save a severely decayed or infected tooth, preventing the need for extraction. Our team at HTCFD performs root canals with precision and care, using advanced techniques to ensure patient comfort and optimal outcomes.',
        ],
        image: 'root-canal-kansas-city.jpg',
        imageAlt: 'root-canal-kansas-city',
      },
      {
        type: 'split',
        title: 'Saving an Infected or Decayed Tooth with Root Canal Therapy',
        subtitle: 'Finding the Root Cause',
        paragraphs: [
          'When decay or infection reaches the tooth’s inner pulp, a root canal can remove the bacteria, relieving pain and restoring tooth function. In this process, <a href="/our-practice/meet-dr-tinnel/">Dr. Tinnel</a> or <a href="/our-practice/">Dr. Prinz</a> will carefully remove the infected tissue, thoroughly clean the area, and then fill the area to prevent further infection. This therapy allows patients to keep their natural teeth and maintain a healthy smile. At HTCFD, we prioritize your care and the longevity of your treatment throughout each step of the procedure to make the experience as smooth as possible.',
          'Our root canal therapy is typically performed in one to two visits and is usually managed with a local anesthetic. Post root canal, teeth are more susceptible to breakage and so you may need further procedures down the road. Our team at HT Complete Family Dentistry will keep a close eye on the health of your tooth, and will adjust treatment accordingly to keep you as comfortable as possible!',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions About Root Canal Therapy',
        intro: [
          'See below for our frequently asked root canal therapy questions! Can’t find an answer you’re looking for? <a href="/contact/">Contact us</a>, as we’d love to answer any and all of your questions!',
        ],
        items: [
          {
            question: 'Why Do I Need Root Canal Therapy?',
            answer:
              'If you have an infected nerve, you will need root canal therapy to help clean the infection out.',
          },
          {
            question: 'What Is The Root Canal Process Like?',
            answer:
              'After carefully mapping out your plan with our CBCT technology, you will come into your appointment and receive local anesthesia. Then, we will begin the process of cleaning your canals, shaping them, and sealing them to get rid of the infection.',
          },
          {
            question: 'What Are Some Signs I Might Have an Infection?',
            answer:
              'Some common signs of an infection are toothaches, over-sensitivity to hot and cold items, and biting sensitivity.',
          },
          {
            question: 'Do Root Canals Hurt?',
            answer:
              'It is not uncommon to feel some discomfort after a root canal, but due to local anesthesia, you shouldn’t feel any pain during the procedure.',
          },
        ],
        image: 'dental-fillings-kansas-city.jpg',
        imageAlt: 'dental-fillings-kansas-city',
      },
    ],
  },
  {
    slug: 'preventative-dentistry',
    title:
      'Preventative Dentistry in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      'Protect your smile with preventive dental care in Overland Park. Cleanings, exams, and early intervention for long-term health.',
    name: 'Preventative Dentistry',
    h1: 'Preventative Dental Services for All Ages in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: 'Preventative Dentistry',
        subtitle: 'Stop Oral Health Problems Before They Start',
        paragraphs: [
          'At Harman-Tinnel Complete Family Dentistry, we believe preventative care is some of the most important dental care you can receive. We believe preventative care is an essential step to maintaining long-term oral health and overall well-being.',
        ],
        image: 'understanding-gum-disease-1.jpg',
        imageAlt: 'Understanding and Preventing Gum Disease: A Comprehensive Guide',
      },
      {
        type: 'split',
        title: 'Preventative Dentistry in the Kansas City and Overland Park Areas',
        subtitle: 'Proactive Dental Care',
        paragraphs: [
          'Our preventative dentistry services are designed to catch potential issues early, ensuring your smile stays healthy and strong. Our periodontal treatments focus on preventing and managing gum disease, a leading cause of tooth loss and a condition closely linked to overall health concerns like heart disease and diabetes. Regular cleanings remove plaque and tartar buildup that daily brushing and flossing can’t fully eliminate, reducing your risk of cavities, gum disease, and bad breath. Additionally, our advanced X-ray technology allows us to detect hidden problems, such as tooth decay, bone loss, or impacted teeth, before they progress into more serious conditions.',
          'In addition to preserving your teeth and gums, preventative dental care at HTCFD has lasting benefits for your overall health, not just your oral health. Research concludes a strong link between oral health and conditions such as heart disease, diabetes, and respiratory infections. By practicing proper oral hygiene routines and regularly visiting our office, you are not only protecting your smile but also supporting your overall physical health. At Harman-Tinnel, we think of preventative care as an investment in your well-being, helping you maintain a healthy, confident smile for life.',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'cards',
        title: 'Preventative Dental Services',
        intro: [
          'It is always the right time to start proactively caring for your smile. Explore our preventative dental treatments below, and call us today if you have any questions or are ready to schedule your first appointment!',
        ],
        items: [
          {
            title: 'Periodontal Treatment',
            body: 'Periodontal treatment addresses gum disease, helping to prevent tooth loss and improve oral health. It targets bacteria, reduces inflammation, and restores healthy gums.',
            href: '/preventative-dentistry/periodontal-gum-treatment/',
          },
          {
            title: 'Radiographs (X-rays)',
            body: 'Radiographs, or X-rays, provide detailed images of your teeth and gums, helping to detect issues like decay, infections, or bone loss that aren’t visible during an exam.',
            href: '/preventative-dentistry/radiographs/',
          },
          {
            title: 'Dental Cleanings',
            body: 'Dental cleanings remove plaque and tartar buildup, keeping your teeth and gums healthy. They’re essential for preventing cavities, gum disease, and maintaining a bright smile.',
            href: '/preventative-dentistry/teeth-cleaning/',
          },
        ],
      },
    ],
  },
  {
    slug: 'preventative-dentistry/periodontal-gum-treatment',
    title:
      'Periodontal Gum Treatment in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      'Periodontal disease damages the surrounding soft tissues and bone that support the teeth. Call 913-962-0036 for your free new patient consultation. Serving Overland Park, Kansas City, and surrounding areas.',
    name: 'Periodontal Treatment',
    h1: 'Gum Disease Treatment in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: 'Periodontal Treatment',
        subtitle: 'Keeping Your Gums Healthy',
        paragraphs: [
          'Periodontal disease, commonly known as gum disease, is an infection of the tissues that hold your teeth in place, caused by bacteria that accumulate in plaque and tartar on the teeth. With treatment at Harman-Tinnel Complete Family Dentistry, we can alleviate gum disease before it turns into a more sevre issue.',
        ],
        image: 'pgt-overland-park.jpg',
        imageAlt: 'pgt-overland-park',
      },
      {
        type: 'split',
        title: 'Periodontal Gum Disease Evaluation and Treatment',
        subtitle: 'All You Need to Know About Gum Disease',
        paragraphs: [
          'During each examination Dr. Tinnel and Dr. Prinz perform a periodontal, or “gum,” evaluation to assess your risk for gum disease. This evaluation is based on various indicators such as tissue inflammation, bleeding, bone loss, loose teeth, tartar accumulation, and certain health conditions like diabetes, cardiovascular issues, dementia, and risks of preterm low birth weight. If gum disease is detected, our dentist or hygienist will diagnose the severity and recommend an appropriate treatment plan.',
          'In most cases, treatment involves a “deep” cleaning, formally known as scaling and root planing. This thorough cleaning targets areas beneath the gums to remove bacteria and tartar that contribute to disease progression. Consistent maintenance is essential to managing gum disease effectively, so we recommend regular periodontal cleanings every 3 to 6 months. This proactive approach helps prevent recurrence and supports long-term oral health.',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions About Periodontal Disease',
        intro: [
          'Take some time to read some of our most frequently asked questions regarding periodontal exams! Don’t see a question you have below? Feel free to <a href="/contact/">contact us</a> so we can answer it for you!',
        ],
        items: [
          {
            question: 'What is a Periodontal Exam?',
            answer: 'A periodontal exam is an examination of the gums to ensure maximum health.',
          },
          {
            question: 'Why do I Need a Periodontal Exam?',
            answer:
              'Ensuring that your gums are healthy is of paramount importance. Gum disease has been linked to diabetes, cardiovascular problems, and pre-term low birthweight babies.',
          },
          {
            question: 'What Happens if I Develop Gum Disease?',
            answer:
              'If during your periodontal exam we find signs of gum disease, we will assess the severity and will likely perform a deep dental cleaning, also known as scaling and root planing.',
          },
          {
            question: 'How Can I Prevent Gum Disease?',
            answer:
              'One of the biggest ways to prevent gum disease is by having great oral hygiene, such as brushing twice a day and flossing regularly.',
          },
        ],
        image: 'dental-fillings-kansas-city.jpg',
        imageAlt: 'dental-fillings-kansas-city',
      },
    ],
  },
  {
    slug: 'preventative-dentistry/radiographs',
    title:
      'Radiographs - Dental Imaging in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      'Radiographs are a valuable tool for identifying hidden dental and oral diseases and determining appropriate treatment. Call 913-962-0036 for your free new patient consultation. Serving Overland Park, Kansas City, and surrounding areas.',
    name: 'Radiographs',
    h1: 'Dental Imaging in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: 'Radiographs',
        subtitle: 'X-Ray Vision',
        paragraphs: [
          'Radiographs, more commonly known as X-rays, is an imaging technique used by Dr. Tinnel and Dr. Prinz to view the internal structures of your teeth, gums, and jaw. It helps us detect dental issues we wouldn’t see during a regular oral examination, such as cavities between teeth, impacted teeth, bone loss, and the health of the roots and surrounding bone.',
        ],
        image: 'radiographs-kansas-city.jpg',
        imageAlt: 'radiographs-kansas-city',
      },
      {
        type: 'split',
        title: 'Radiographs: Advanced Dental Imaging Technology',
        subtitle: 'Radiographs 101',
        paragraphs: [
          'At HT Complete Family Dentistry, radiographs are taken using the highest quality and lowest radiation digital imaging systems available, ensuring patient safety and accurate diagnostics. The level of radiation exposure from dental radiographs is minimal, often less than what a person encounters during a single day of natural background radiation. This makes the process both safe and efficient for our patients.',
          'Digital radiographs are displayed on a computer screen to enhance patient education and improve understanding of the diagnosis. These images us to explain conditions more clearly, fostering better communication and trust. Radiographs are essential for diagnosing a variety of dental issues, such as tooth decay, gum disease, infections, and any pain or sensitivity a patient may experience.',
          'Typically, every 3-5 years a panoramic radiograph will be taken and every year four bitewing radiographs. More radiographs may be necessary when needed as determined by the doctor. Types include bitewings, periapicals, full-mouth series, Cone-beam computerized technology (CBCT), and panoramic.',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions About Radiographs',
        intro: [
          'Take some time to look at some of our most frequently asked questions about radiographs below! Don’t see the answer you’re looking for? <a href="/contact/">Contact us</a>, we’d love to answer your questions!',
        ],
        items: [
          {
            question: 'What is a Radiograph?',
            answer: 'A radiograph is an advanced way to take images of your teeth, mouth, and jaw.',
          },
          {
            question: 'Why Do I Need a Radiograph?',
            answer:
              'Radiographs are important for many reasons. It can help diagnose gum ceases, dental decay, and infections, and can even help us understand why your teeth hurt or are oversensitive.',
          },
          {
            question: 'Is Radiation a Concern?',
            answer:
              'We use the lowest radiation digital system, and you are more likely to get more radiation from one day of natural background radiation than from a radiograph.',
          },
          {
            question: 'How Often Will I Have to Get Radiographs?',
            answer:
              'Typically, we like to do a full panoramic radiograph every 3-5 years, and a bitewing radiograph every year. Depending on your case, you may have to have them done more frequently.',
          },
        ],
        image: 'dental-fillings-kansas-city.jpg',
        imageAlt: 'dental-fillings-kansas-city',
      },
    ],
  },
  {
    slug: 'preventative-dentistry/teeth-cleaning',
    title: 'Teeth Cleaning in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      'Keep your teeth healthy and looking great with regular dental cleanings at HT Complete Family Dentistry. For a dentist near you call 913-962-0036 and get your free new patient consultation. Serving Overland Park, Kansas City, and surrounding areas.',
    name: 'Teeth Cleaning',
    h1: 'Preventive Dental Cleanings in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: 'Teeth Cleaning',
        subtitle: 'Preventing Future Issues',
        paragraphs: [
          'Regular dental cleanings are an essential part of maintaining oral health. During a professional cleaning at HT Complete Family Dentistry, plaque and tartar are removed from your teeth, preventing cavities, gum disease, and other oral health issues. Cleanings not only help to keep your teeth and gums healthy but also brighten your smile by removing surface stains caused by food, drinks, and daily wear.',
        ],
        image: 'root-canal-kansas-city.jpg',
        imageAlt: 'root-canal-kansas-city',
      },
      {
        type: 'split',
        title: 'Preventative Teeth Cleaning',
        subtitle: 'So Fresh and So Clean',
        paragraphs: [
          'At HTCFD, preventive dental cleanings are designed to maintain your oral health and prevent future dental problems. Regular cleanings help remove harmful bacteria and tartar buildup that daily brushing and flossing can’t always reach. This process is key in preventing conditions like periodontal disease, which can lead to gum recession and tooth loss if left untreated. Cleanings are customized to your specific needs and help ensure a long-lasting, healthy smile.',
          'In addition to preventing gum disease, routine cleanings can help detect early signs of decay or other dental issues before they become more serious. Our team uses advanced tools and techniques to thoroughly examine your teeth and gums, identifying potential problem areas and addressing them proactively. Early intervention is essential for reducing the need for complex treatments later on, saving you both time and money while preserving your natural teeth.',
          'Dental cleanings also contribute to your overall health, as oral health is closely linked to other areas of the body. Bacteria from oral infections can enter the bloodstream, potentially affecting cardiovascular health and other systems. By keeping up with regular cleanings, you’re not only investing in your smile but also supporting your long-term well-being. At HTCFD, we are committed to providing comprehensive care that enhances both your dental health and overall quality of life.',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions About Teeth Cleaning',
        intro: [
          'Take some time to look at some of our most frequently asked teeth cleaning questions! Don’t see the answer you’re looking for? <a href="/contact/">Contact us</a>, we’d love to answer any and all of your questions!',
        ],
        items: [
          {
            question: 'How Often Should I Get My Teeth Cleaned?',
            answer: 'It is recommended that you get your teeth cleaned every 6 months.',
          },
          {
            question: 'Why Is It Important to Get My Teeth Cleaned?',
            answer:
              'It’s important to get your teeth cleaned because it can help prevent various dental diseases, such as gum disease and tooth decay.',
          },
          {
            question: 'Do Teeth Cleanings Hurt?',
            answer:
              'No, not at all! In fact, we’ve had patients fall asleep during their teeth cleanings!',
          },
        ],
        image: 'dental-fillings-kansas-city.jpg',
        imageAlt: 'dental-fillings-kansas-city',
      },
    ],
  },
  {
    slug: 'aesthetics',
    title: 'Aesthetics in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      'Enhance your smile and facial balance with expert aesthetic dental treatments in Kansas City. Discover your most confident look today.',
    name: 'Aesthetic Services',
    h1: 'Non-surgical Aesthetic Care in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: 'Aesthetic Services',
        subtitle: 'Rejuvenate Your Smile and Boost Your Confidence',
        paragraphs: [
          'At Harman-Tinnel Complete Family Dentistry, our team can do more than clean and straighten your teeth. We are proud to offer Botox, Xeomin &amp; Jeuveau to enhance the overall aesthetics of our patients’ smiles.',
        ],
        image: 'aesthetic-treatments-hero-tinnel.jpg',
        imageAlt: 'aesthetic-treatments-hero-tinnel',
      },
      {
        type: 'split',
        title: 'Turn Back the Clock and Love Your Smile',
        subtitle: 'All About Botox',
        paragraphs: [
          'At Harman-Tinnel Complete Family Dentistry, we’ve merged our expertise in dental care and aesthetics to help you achieve not only a healthier smile but also a more youthful appearance. Our goal is to ensure that every patient feels confident in their smile, and sometimes that requires more than just <a href="/dental-blog/">maintaining good oral health</a>. That’s why we’re excited to offer injectable services that can enhance your appearance, reduce signs of aging, and even address dental concerns like gummy smiles and <a href="/tmj-treatment/">TMJ pain.</a>',
          'Our injectable treatments provide a fast, non-invasive, and affordable solution to help you turn back the clock and perfect your smile! Here is a look at some of the aesthetic services that the Harman-Tinnel Complete Family Dentistry team provides to the Overland Park community.',
        ],
        faqs: [
          {
            question: 'Gummy Smile',
            answer:
              'Looking for a simple, non-surgical solution to your gummy smile? Our team can quickly improve your gummy smile by strategically injecting a small amount of Botox®, Xeomin or Jeuveau between your nose and upper lip to relax those muscles. After this treatment, the muscles that elevate your upper lip will relax, significantly reducing your gummy smile!',
          },
          {
            question: 'TMJ Therapy',
            answer:
              'Our team understands just how painful TMJ disorder can be, and that’s why we offer Botox and Xeomin to combat that pain. Once injected into your jaws, these neurotoxins immediately relax muscle tension, relieving TMJ symptoms like jaw pain, headaches, and teeth grinding. Are you ready to learn more about correcting your gummy smile or combating your TMJ pain? If so, call our office today and we will schedule your complimentary consultation!',
          },
          {
            question: 'Cosmetic Botox®',
            answer:
              'Cosmetic Botox has gained widespread popularity for its ability to reduce the appearance of fine lines and wrinkles across the entire face. It’s no longer limited to dental needs; people turn to Botox to achieve a more youthful look in various facial areas. By injecting Botox into specific muscles, it relaxes them, resulting in a smoother and more youthful complexion. This non-invasive procedure has become a go-to solution for individuals seeking a refreshed appearance, offering benefits beyond traditional dental applications.',
          },
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions About Botox® and Botox® Alternatives',
        intro: [
          'With any new service or treatment option comes an array of questions, which is why we’re here to answer any questions you may have. Below are some of the most frequently asked questions about Botox, Xeomin, and Jeuveau. If you have any further questions, don’t hesitate to to <a href="/contact/">contact us</a> and we will do our best to help you!',
        ],
        subtitle: 'In-Office Facial Aesthetics',
        items: [
          {
            question: 'How long does it take for Botox®, Xeomin, and Jeuveau to begin working?',
            answer:
              'Our patients start to feel relief and notice muscle improvements just a few days after injections. Every patient’s treatment experience is unique, however, so treatment results and timelines will vary.',
          },
          {
            question: 'Are Botox®, Xeomin, and Jeuveau injections painful?',
            answer:
              'Shortly after receiving the injections, you might experience some mild pain, redness, and a little swelling at the rejection site. This is totally normal and will resolve on its own.',
          },
          {
            question: 'How often will I need follow up appointments after my initial injections?',
            answer:
              'Botox® and Xeomin are both temporary treatments, so you will want to return to our office for your next dose every 3-6 months depending on your specific case of TMJ or your gummy smile.',
          },
          {
            question: 'What is the recovery period after receiving these injectables?',
            answer:
              'Both BOTOX® and Xeomin are non-surgical and non-invasive treatments, so there is typically no issue returning to your regular activities after your appointment. Just remember to avoid touching or rubbing the injection sites to avoid spreading the injection to surrounding muscles.',
          },
        ],
        image: 'emergency-appointments-overland-park.jpg',
        imageAlt: 'emergency-appointments-overland-park',
      },
      {
        type: 'split',
        title: 'How We Use Botox® in Dentistry',
        youtubeId: '1E1MwLBVkts',
      },
    ],
  },
  {
    slug: 'bite-guards',
    title: 'Bite Guards in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      'Protect your teeth from nighttime grinding and clenching with bite guards. Serving Overland Park, Kansas City, and surrounding areas. Call a dentist near you at 913-962-0036 for your free new patient consultation.',
    name: 'Bite Guards',
    h1: 'Bite Guards & Splints in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: 'Bite Guards',
        subtitle: 'Guarding the Health of Your Smile',
        paragraphs: [
          'At HT Complete Family Dentistry, our number one goal is to help our patients have a healthy and happy smile, and one thing that keeps our patients from having a happy smile is pain or discomfort. With bite guards and splits, our team can alleviate jaw pain from grinding and clenching.',
        ],
        image: 'bite-guards-overland-park-ks.jpg',
        imageAlt: 'bite-guards-overland-park-ks',
      },
      {
        type: 'split',
        title: 'Protecting Vulnerable Teeth With Bite Guards and Splints',
        subtitle: 'Bite Guard 101',
        paragraphs: [
          'Bite guards are custom-made dental devices, crafted from hard acrylic and designed to be worn overnight. They help protect teeth from the damage caused by nighttime grinding (bruxism) or clenching, which can lead to excessive wear, fractures, or discomfort in the jaw. These guards are carefully fitted to either the upper or lower teeth, ensuring a comfortable and effective solution to protect against long-term damage.',
          'For patients suffering from symptoms like jaw pain, soreness in their “chewing” muscles, headaches, or clicking and popping of the jaw joints, custom-made splints offer relief. These splints help to take pressure off the <a href="/tmj-treatment/">temporomandibular joints (TMJ)</a> and reduce muscle tension, which can lead to decreased pain and fewer headaches. By addressing the underlying causes of these symptoms, bite guards and splints provide an essential solution for protecting both teeth and overall oral health.',
          'Do bite guards and splints sound like something you or your child needs to manage jaw pain and reverse grinding? If so, call our office today to schedule an appointment with the HT Complete Family Dentistry team! We can’t wait to meet you.',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions About Bite Guards',
        intro: [
          'Take some time to read some of our most frequently asked questions about bite guards! Don’t see an answer you’re looking for? <a href="/contact/">Contact us</a>, we’d love to answer any and all of your questions!',
        ],
        items: [
          {
            question: 'What Is a Bite Guard?',
            answer:
              'A bite guard is a mouthpiece made up of hard acrylic and is typically worn overnight to help prevent teeth from night grinding or night clenching.',
          },
          {
            question: 'Why Do I Need a Bite Guard?',
            answer:
              'You might need a bite guard (also called a night guard) for a couple of reasons! Perhaps you clench your teeth at night, resulting in headaches and jaw pain. Or, you might grind your teeth, which can severely damage your teeth. These are both common issues that can be helped with the use of a bite guard.',
          },
          {
            question: 'Are Bite Guards One Size Fits All?',
            answer:
              'The best kind of bite guard (night guard) you can get is one that is custom-fitted to your mouth and your needs.',
          },
          {
            question: "Bite Guards vs Splints: What's the Difference?",
            answer:
              'A bite guard is primarily used to protect teeth from grinding or clenching, especially during sleep. It cushions teeth, reducing the risk of wear and damage caused by teeth grinding (also known as bruxism). Bite guards are often made of softer materials and are mainly focused on protecting teeth. A dental splint, on the other hand, is a more specialized device used to stabilize and support the jaw joints and muscles. It is usually harder than a bite guard and is designed to help reposition your jaw, reduce muscle tension, and treat TMJ disorders or jaw pain. Splints are more often prescribed for therapeutic purposes, like correcting bite alignment issues.',
          },
        ],
        image: 'dental-fillings-kansas-city.jpg',
        imageAlt: 'dental-fillings-kansas-city',
      },
    ],
  },
  {
    slug: 'cad-cam-dentistry',
    title: 'CAD/CAM Dentistry in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      'Drs. Sarina Harman-Tinnel and Sarah Prinz are CAD/CAM dentists serving Overland Park, Kansas City, and surrounding areas. Call 913-962-0036 for your free new patient consultation.',
    name: 'CAD/CAM and CEREC Dentistry',
    h1: 'Cutting Edge Dental Technology in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: 'CAD/CAM and CEREC Dentistry',
        subtitle: 'High Quality Dental Care',
        paragraphs: [
          'Our team at Harman-Tinell Complete Family Dentistry utilizes CAD/CAM and CEREC technology to deliver high-quality dental restorations with precision and efficiency. This advanced system allows us to design, create, and place custom crowns, bridges, and veneers in a single appointment, minimizing the need for multiple visits. The process begins with a digital scan of your teeth, eliminating the discomfort of traditional impressions.',
        ],
        image: 'CAD-Tinnel-Body.jpg',
        imageAlt: 'CAD Tinnel - Body',
      },
      {
        type: 'split',
        title: 'We Use the Latest Dental Technology to Give You a Healthy Smile',
        subtitle: 'Learn about CAD/CAM and CEREC',
        paragraphs: [
          'At HTCFD, we are committed to providing you with the highest quality dental care through the use of advanced technology. Our state-of-the-art equipment enables us to deliver precise diagnostics and effective treatments tailored to your unique needs. From digital imaging that offers enhanced visualization of your dental health to laser treatments that minimize discomfort, our innovative tools help us achieve optimal results while prioritizing your comfort.',
          'We understand that a healthy smile is essential to your overall well-being, which is why we continuously invest in the latest dental technology and strive for a comprehensive dental approach. Our team stays up-to-date with the newest advancements in the field, ensuring that you benefit from cutting-edge techniques that <a href="/our-practice/testimonials/">enhance your experience</a>. With each patient, our team looks at the whole person before creating a treatment plan, so we can holistically treat your smile and improve your overall health as well as your oral health.',
          'Whether you’re here for a routine checkup or a more complex procedure, <a href="/ht-smile-3d/">you can trust that we are utilizing the best tools</a> available to give you the smile you deserve. Your health and satisfaction are our top priorities, and we are here to support you every step of the way!',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions About CAD/CAM and CEREC Dentistry',
        intro: [
          'At HTCFD, we understand that you may have questions about CAD/CAM and CEREC technology and how they can benefit your dental care. We’re here to provide you with the information you need to feel confident in your treatment decisions. If you don’t see the answer you’re looking for, <a href="/contact/">please reach out to us</a> —our team is always ready to assist you!',
        ],
        items: [
          {
            question: 'What are the advantages of CAD/CAM and CEREC dentistry?',
            answer:
              'CAD/CAM and CEREC technology allows for faster, more accurate restorations, often completed in a single visit. This means less time in the dental chair and immediate results without the need for temporary restorations.',
          },
          {
            question: 'How does the CAD/CAM process work?',
            answer:
              'The process begins with a digital scan of your teeth, which creates a precise 3D model. From there, we design your restoration using specialized software, and the CAD/CAM machine fabricates it right in our office.',
          },
          {
            question: 'Is the process painful?',
            answer:
              'Most patients find the CAD/CAM process to be comfortable, as it often requires less drilling and no traditional impressions. We prioritize your comfort and will ensure you feel at ease throughout your visit.',
          },
          {
            question: 'How long do CAD/CAM restorations last?',
            answer:
              'With proper care and maintenance, CAD/CAM restorations are designed to be durable and can last many years. Regular dental check-ups and good oral hygiene practices will help maximize their lifespan.',
          },
        ],
        image: 'dental-fillings-kansas-city.jpg',
        imageAlt: 'dental-fillings-kansas-city',
      },
    ],
  },
  {
    slug: 'ht-smile-3d',
    title:
      'HT Smile 3D Dental Imaging in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      'No more goop or bulky dental trays! HT Smile 3D is our leading edge CBCT-based digital imaging technology. Call 913-962-0036 for your free new patient consultation. Serving Overland Park, Kansas City, and surrounding areas.',
    name: 'HT Smile 3D',
    h1: '3D Dental Imaging Technology in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: 'HT Smile 3D',
        subtitle: 'Beyond Traditional X-Rays',
        paragraphs: [
          'At HT Complete Family Densitry, our team is committed to providing our patients with top-tier service using the latest, most advanced technology. That’s why we are proud to use the CBCT imaging system to gather a comprehensive image of your teeth, jaw, and smile.',
        ],
        image: '3dsmile-machine-tinnel.jpg',
        imageAlt: '3dsmile-machine-tinnel',
      },
      {
        type: 'split',
        title: 'HT Smile 3D: Next-Generation Dental Imaging Technology',
        subtitle: 'Say Goodbye to Goopy Impressions',
        paragraphs: [
          'Cone Beam Computed Tomography (CBCT) is an advanced imaging system that goes beyond traditional X-rays. While it may sound like a medical-grade CT scanner, CBCT offers a smaller field of view (FOV) specifically designed to give dentists a highly detailed, 3D perspective of your dental structures. This enables precise diagnosis and treatment planning.',
          'In addition to addressing dental issues, CBCT can sometimes reveal other concerns, such as sinus problems, which can then be referred to a specialist. One of the key benefits of this technology is its ability to detect issues that standard 2D X-rays might miss, like cracks in teeth or unexplained pain. This allows for a more conservative treatment approach, minimizing invasive procedures while ensuring effective care.',
          'With CBCT, we can plan procedures like crowns and root canals with greater accuracy, and even place dental implants with a guided, precision-based approach. <a href="/our-practice/meet-dr-tinnel/">Dr. Tinnel takes pride in showing patients their treatment plans</a> through this advanced technology, ensuring the best possible outcome for each individual case. Let us walk you through the benefits of this cutting-edge tool at your next appointment!',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'split',
        title: 'Why Patients Love HT Smile 3D',
        paragraphs: [
          'At HT Complete Family Dentistry, we use leading-edge dental imaging technology to create a detailed three-dimensional scan of your teeth and mouth that is goop-free, painless, and available for us to review in minutes.',
        ],
        youtubeId: 'OILHdl0MqDA',
      },
    ],
  },
  {
    slug: 'nitrous-oxide',
    title: 'Nitrous Oxide in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      "Your comfort is our top priority. That's why we offer nitrous oxide to help you feel calm and relaxed. Call 913-962-0036 for your free new patient consultation. Serving Overland Park, Kansas City, and surrounding areas.",
    name: 'Nitrous Oxide (Laughing Gas): The Anesthetic Pain-Reducer',
    h1: 'Comfort-First Dental Care in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: 'Nitrous Oxide (Laughing Gas): The Anesthetic Pain-Reducer',
        subtitle: 'All About Nitrous Oxide',
        paragraphs: [
          'Nitrous oxide, commonly known as laughing gas, is both an effective anesthetic and a pain reducer. By inhaling a carefully balanced mixture of nitrous oxide and oxygen through a mask, patients typically feel light, euphoric, and stress-free within minutes. This fast-acting sedative wears off quickly after treatment, allowing you to resume your daily activities without any lingering drowsiness.',
          'Whether you’re visiting us in Kansas City or Overland Park, <a href="/our-practice/meet-the-team/">our team is committed to delivering the highest standard of care</a> while ensuring you remain comfortable and relaxed during every visit. If you’re looking for a gentle, stress-free dental experience, nitrous oxide (laughing gas) might be the perfect solution for you.',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions About Nitrous Oxide',
        intro: [
          'Take some time to read some of our most frequently asked questions about nitrous oxide! Don’t see an answer you’re looking for? <a href="/contact/">Contact us</a>, we’d love to answer any and all of your questions!',
        ],
        items: [
          {
            question: 'What is Nitrous Oxide?',
            answer:
              'Nitrous oxide, also known as laughing gas, is a form of sedation comprised of oxygen and nitrous that help patients feel more relaxed.',
          },
          {
            question: 'How Is Nitrous Oxide Administered?',
            answer:
              'Nitrous oxide is administered by a small device that is placed over the nose, allowing the patient to breathe in the sedation.',
          },
          {
            question: 'Is Nitrous Oxide Safe?',
            answer:
              'Nitrous oxide is completely safe and wears off shortly after your appointment ends!',
          },
          {
            question: 'How Will I Feel While Under Nitrous Oxide Sedation?',
            answer:
              'Under nitrous oxide sedation, most patients feel relaxed, sometimes mildly euphoric and tingling, but are still conscious and able to respond. The effects wear off quickly after the gas is stopped, allowing you to return to normal within minutes without lingering grogginess.',
          },
        ],
        image: 'dental-fillings-kansas-city.jpg',
        imageAlt: 'dental-fillings-kansas-city',
      },
    ],
  },
  {
    slug: 'sleep-apnea',
    title: 'Sleep Apnea Treatment in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      'Did you know that proper dental care can help alleviate sleep apnea and other sleep-disordered breathing issues? For a dentist near you call 913-962-0036 and get your free new patient consultation. Serving Overland Park, Kansas City, and surrounding areas.',
    name: 'Sleep Apnea',
    h1: 'Sleep Apnea Treatment in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: 'Sleep Apnea',
        subtitle: 'Soothing our Patients into Better Sleep',
        paragraphs: [
          'Do you or a loved one suffer from loud snoring, restless nights, or excessive daytime fatigue? These could be signs of sleep apnea, a serious condition where breathing repeatedly stops and starts during sleep. At Harman-Tinnel Complete Family Dentistry, we offer effective treatment options to help manage sleep apnea and improve your quality of life.',
        ],
        image: 'sleep-apnea-overland-park.jpg',
        imageAlt: 'sleep-apnea-overland-park',
      },
      {
        type: 'split',
        title: 'Treating Sleep Apnea and Sleep-Disordered Breathing',
        subtitle: 'The Solution to Better Sleep',
        paragraphs: [
          'Sleep apnea affects more than just your sleep—it can have serious long-term effects on your health, contributing to heart disease, stroke, high blood pressure, and more. Fortunately, there are non-invasive treatments available that can provide relief. Our team at Harman-Tinnel Complete Family Dentistry works closely with patients to develop personalized solutions, including oral appliance therapy designed to keep your airway open while you sleep. At Harman-Tinnel Complete Family Dentistry, we offer the below services to help our patients combat their struggles with sleep apnea:',
          'Oral Appliance Therapy: A custom-made device, similar to a mouthguard, that repositions the jaw to prevent airway blockage during sleep. This is a comfortable and effective option for mild to moderate cases of sleep apnea.',
          'Collaboration with Sleep Specialists: We work alongside your physician or sleep specialist to ensure a coordinated treatment plan that addresses all aspects of your sleep health.',
          'Comprehensive Evaluation: During your consultation, we will evaluate your airway, bite, and overall oral health to determine the best course of action for your sleep apnea treatment.',
          'If you or someone you know is struggling with sleep apnea, don’t wait to seek treatment. Schedule a consultation with HTCFD today and learn how we can help you get the restful, healthy sleep you deserve.',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions About Sleep Apnea',
        intro: [
          'Take some time to read some of our most frequently asked questions below! Don’t see and answer you’re looking for? <a href="/contact/">Contact us</a>, we’d love to answer any and all of your questions!',
        ],
        subtitle: 'The Oral Health - Sleep Apnea Connection',
        items: [
          {
            question: 'What Is Sleep Apnea?',
            answer:
              'Sleep apnea is a potentially very serious disorder in which your breathing periodically stops while you’re asleep.',
          },
          {
            question: 'How Can My Dentist Help My Sleep Apnea?',
            answer:
              'Dr. Tinnel has completed special dental sleep training that enables her to identify sleep disorders and treat them.',
          },
          {
            question: 'How Does My Dental Health Impact Sleep Apnea?',
            answer:
              'Sleep apnea can sometimes be caused by the dental arches being too small or underdeveloped, which then causes the tongue to block the airway when laying down.',
          },
        ],
        image: 'dental-fillings-kansas-city.jpg',
        imageAlt: 'dental-fillings-kansas-city',
      },
      {
        type: 'split',
        title: 'Treating Sleep Apnea & Sleep-Disordered Breathing',
        youtubeId: 'azh6oiAUZM4',
      },
    ],
  },
  {
    slug: 'tmj-treatment',
    title: 'TMJ Treatment in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      'Relieve jaw pain and tension with TMJ therapy in Overland Park. Expert diagnosis and treatment tailored to your needs.',
    name: 'TMJ Treatment',
    h1: 'TMJ Treatment & Therapy in the Overland Park - Kansas City Area',
    blocks: [
      {
        type: 'split',
        title: 'TMJ Treatment',
        subtitle: 'Expert Solutions for TMJ',
        paragraphs: [
          'Do you experience jaw pain, headaches, or difficulty chewing? You may be suffering from TMJ, or temporomandibular joint, disorder, a condition that affects the muscles and joints controlling jaw movement. At Harman-Tinnel Complete Family Dentistry, we offer comprehensive TMJ treatment and therapy to help relieve your symptoms and improve your quality of life.',
        ],
        image: 'tmj-treatment-overland-park.jpg',
        imageAlt: 'tmj-treatment-overland-park',
      },
      {
        type: 'split',
        title: 'TMJ Treatment and Therapy',
        subtitle: 'Temporomandibular Joint Explained',
        paragraphs: [
          'TMJ disorders can cause a wide range of uncomfortable symptoms, including jaw pain, clicking or popping sounds, headaches, and even difficulty opening or closing your mouth. Our team understands how debilitating this condition can be, which is why we provide personalized TMJ treatments tailored to your needs. Whether it’s through lifestyle changes, bite correction, or advanced therapy techniques, we are committed to helping you find relief.',
          'Our TMJ treatment may include:',
          'Custom Night Guards: Designed to reduce teeth grinding (bruxism) and alleviate pressure on your jaw joint.',
          'Bite Adjustments: Correcting your bite can relieve strain on the TMJ, reducing pain and discomfort.',
          'Injectable Therapy: We offer injectables that can relax the jaw muscles and ease tension, providing significant relief from TMJ symptoms.',
          'Non-Surgical Therapies: We focus on non-invasive approaches that target the root cause of TMJ disorder, minimizing the need for more complex procedures.',
          'Don’t let TMJ pain control your life. Schedule a consultation with us today to explore your options for effective TMJ relief.',
        ],
        button: {
          label: 'Schedule an Appointment',
          href: 'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1',
        },
      },
      {
        type: 'faq',
        title: 'Frequently Asked Questions About TMJ Treatment',
        intro: [
          'Take some time to read some of our most frequently asked questions about TMJ treatment! Don’t see the answer you’re looking for? <a href="/contact/">Contact us</a>, as we’d love to answer any and all of your questions!',
        ],
        items: [
          {
            question: 'What is TMJ?',
            answer:
              'TMJ stands for the temporomandibular joint, which connects your jawbone to your skull. It acts like a sliding hinge, allowing you to open and close your mouth, chew, speak, and make other jaw movements. You have one TMJ on each side of your jaw. When people refer to TMJ disorders (TMD), they are talking about problems with this joint, the muscles around it, or both. TMJ disorders can cause pain in the jaw, face, neck, and even lead to headaches, difficulty chewing, or a clicking/popping sound when moving the jaw.',
          },
          {
            question: 'What Causes TMJ Discomfort?',
            answer:
              'There are many things that can cause TMJ discomfort. Among those are clenching your teeth, grinding your teeth, misalignment of the jaw and teeth, and stress, among many other things.',
          },
          {
            question: 'What Are Some Symptoms of TMJ Disorders?',
            answer:
              'Some common symptoms of TMJ disorders include pain in your jaw, headaches, neck aches, and pain when trying to open your mouth',
          },
        ],
        image: 'emergency-appointments-overland-park.jpg',
        imageAlt: 'emergency-appointments-overland-park',
      },
    ],
  },
];
