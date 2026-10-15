import type { ImageMetadata } from 'astro';
import type { Treatment } from './treatments';

import img_body from '../assets/practice/patient-information-body-overland-park.jpg';
import img_team from '../assets/practice/team-tinnel.jpg';
import img_full_team from '../assets/practice/dr-tinnel-full-team.jpg';
import img_garling from '../assets/practice/dr-garling-family-dentistry.jpg';
import img_doctors from '../assets/practice/ht-doctors.jpg';
import img_whitney from '../assets/practice/Dr.-W-2-1.jpg';
import img_patient_info from '../assets/practice/patient-information-kansas-city.jpg';
import img_testimonials from '../assets/practice/patient-testimonials-kansas-city.jpg';
import img_implants from '../assets/practice/dental-implants-overland-park.jpg';
import img_finance from '../assets/practice/patient-information-finance-tinnel.jpg';
import img_emergency from '../assets/practice/emergency-appointments-kansas-city.jpg';

const appointment =
  'https://d1.patientconnect365.com/Portal/Index/02ada69b765a4aba9c9b4667a2e6d1f0/RequestAppointment/1';

export const practiceImages: Record<string, ImageMetadata> = {
  'patient-information-body-overland-park.jpg': img_body,
  'team-tinnel.jpg': img_team,
  'dr-tinnel-full-team.jpg': img_full_team,
  'dr-garling-family-dentistry.jpg': img_garling,
  'ht-doctors.jpg': img_doctors,
  'Dr.-W-2-1.jpg': img_whitney,
  'patient-information-kansas-city.jpg': img_patient_info,
  'patient-testimonials-kansas-city.jpg': img_testimonials,
  'dental-implants-overland-park.jpg': img_implants,
  'patient-information-finance-tinnel.jpg': img_finance,
  'emergency-appointments-kansas-city.jpg': img_emergency,
};

export const practicePages: Treatment[] = [
  {
    slug: 'our-practice',
    title: 'Our Practice in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      'Learn what makes our Kansas City dental office different—dedicated care, cutting-edge technology, and a welcoming environment.',
    name: 'Our Practice',
    h1: 'Why Choose Us',
    hero: {
      image: '',
      title: 'General and Cosmetic Dentistry in the Overland Park / Kansas City Area',
      paragraphs: [],
    },
    blocks: [
      {
        type: 'split',
        eyebrow: 'The Harman-Tinnel Difference',
        title: 'We are Your 5-Star General and Cosmetic Dentists in Overland Park, Kansas',
        paragraphs: [
          'Our team at Harman-Tinnel Complete Family Dentistry is committed to providing exceptional dental care to every patient we see. We combine dental expertise with a patient-first approach to deliver a beautiful, healthy smile. Our compassionate team strives to create a comfortable environment where you can relax, knowing you’re in skilled hands. We understand that every smile is unique, which is why we offer personalized care using the latest dental technology to achieve precise, long-lasting results. Our services range from routine cleanings to advanced cosmetic treatments, ensuring comprehensive care for all your dental needs.',
          'Whether you’re interested in a simple check-up or a complete smile makeover, our goal is to exceed your expectations every step of the way. With HT Complete Family Dentistry, experience dental care that’s as comfortable and welcoming as it is effective. Are you ready to join the HT Complete Family Dentistry and begin your journey to your healthiest smile? If so, call our office today to schedule an appointment. We cannot wait for you to join our community of satisfied patients!',
        ],
        image: 'patient-information-body-overland-park.jpg',
        imageAlt: 'The team at HT Complete Family Dentistry',
        imageSide: 'start',
        button: { label: 'Request an Appointment', href: appointment },
      },
      {
        type: 'split',
        eyebrow: 'Proudly Serving The Overland Park Community',
        title: 'Our Mission',
        paragraphs: [
          'To guide our patients along a path of optimal health and wellness for life, with an emphasis on dental health. To deliver the highest level of care, empathy, and understanding. To treat our patients and employees as family members. To educate our patients on their dental health in an understandable manner so they can receive quality care. To continuously pursue excellence through continuing education, personal and team growth and mastering of current technology. To respect our patients’ time and accept our patients as partners in their wellness. To assume a leadership role in our community for dental health and education. To consistently deliver more than would be expected.',
        ],
        image: 'team-tinnel.jpg',
        imageAlt: 'HT Complete Family Dentistry team',
        imageSide: 'end',
      },
    ],
  },
  {
    slug: 'our-practice/meet-dr-tinnel',
    title: 'Meet Dr. Tinnel in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      'Meet Dr. Harmen Tinnel, your trusted family dentist in Overland Park. Passionate about beautiful, healthy smiles.',
    name: 'Meet Dr. Tinnel',
    h1: 'General & Cosmetic Dentist in Overland Park / Kansas City',
    hero: {
      image: '',
      title: 'Meet Dr. Sarina Harman-Tinnel',
      paragraphs: [],
    },
    blocks: [
      {
        type: 'split',
        eyebrow: 'Get to Know Dr. Sarina Harman-Tinnel',
        title: 'Dr. Sarina is Your General and Cosmetic Dentist in the Overland Park, Kansas Area',
        paragraphs: [
          'Dr. Tinnel graduated from the University of Missouri-Kansas City Dental School in 2005, after earning her undergraduate degree a year early and gaining early admittance to dental school. While studying, she gained invaluable experience as a dental assistant and receptionist for Dr. Larry Pribyl’s practice, with whom she now collaborates professionally. Dr. Sarina’s approach to dentistry emphasizes a warm, family-like experience for her patients, built on compassion, understanding, and years of expertise.',
          'Dr. Sarina’s experience in dentistry has shaped her commitment to advancing dental care, particularly in modern techniques and technologies. Certified in CEREC CAD-CAM dentistry, she is an active mentor at CEREC Doctors on the Spear Campus and holds certifications in Invisalign, Fast Braces, and sleep appliances. She is passionate about bringing awareness to sleep-disordered breathing, recognizing its significant impact on overall health. As a result, Dr. Sarina is constantly expanding her knowledge, connecting general dentistry with broader health practices to benefit her patients comprehensively.',
        ],
        image: 'dr-tinnel-full-team.jpg',
        imageAlt: 'Dr. Sarina Harman-Tinnel with the dental team',
        imageSide: 'start',
        button: { label: 'Request an Appointment', href: appointment },
      },
      {
        type: 'split',
        eyebrow: 'Get to Know Dr. Sarina Harman-Tinnel',
        title: 'Dr. Sarina is Your General and Cosmetic Dentist in the Overland Park, Kansas Area',
        paragraphs: [
          'Known for her calming demeanor and personalized care, Dr. Sarina treats every patient like family. She prioritizes chairside discussions and has been praised by her patients for her detailed explanations of treatments, ensuring her patients feel comfortable and informed during every visit.',
          'Dr. Sarina stays at the top of her field by attending classes in general dentistry and whole-body health, especially in sleep-disordered breathing. Her involvement in study clubs like Women in Dentistry and Spear Study Clubs keeps her connected with peers and updated on advancements in patient care. Her early completion of her undergrad reflects her commitment to ongoing education, ensuring her patients receive the best care and latest technology.',
          'Outside of her practice, Dr. Sarina enjoys spending time with her Family. Her husband, Nick, and their four children, Jake, Zach, and twins Emery and Kate, enjoy spending time outside and soaking up the time together. Their Cavapoo, Fluffy, often steals the show as the family’s spirited “diva.”',
          'Together, the Tinnel family loves to travel and stay active, especially enjoying weekends spent at local sporting events and sailing at a nearby lake. Dr. Sarina’s involvement extends to the American Dental Association, Kansas Dental Association, Academy of General Dentistry, and multiple study clubs, where she continually works to enhance her skills for her patients’ benefit.',
          'Choosing Dr. Sarina as your trusted family dentist means choosing excellence. Dr. Sarina is dedicated to leading a top-tier dental team that goes above and beyond in every aspect of their work, serving the Overland Park, KS community. Being a patient at Harman-Tinnel Complete Family Dentistry means joining the HTCFD family and working toward comprehensive dental health.',
        ],
        image: 'patient-information-body-overland-park.jpg',
        imageAlt: 'Dr. Sarina with a patient at HT Complete Family Dentistry',
        imageSide: 'end',
      },
      {
        type: 'split',
        title: 'Dr. Sarina is a proud member and participant in the following organizations:',
      },
    ],
  },
  {
    slug: 'our-practice/meet-dr-garling',
    title: 'Meet Dr. Garling - HT Complete Family Dentistry',
    description:
      'Dr. Garling hails from Springfield, Missouri, but after completing dental school, she wanted to call Kansas City home. A proud graduate of the University of',
    name: 'Meet Dr. Garling',
    h1: 'General & Cosmetic Dentist in Overland Park / Kansas City',
    hero: {
      image: '',
      title: 'Meet Dr. Garling',
      paragraphs: [],
    },
    blocks: [
      {
        type: 'split',
        eyebrow: 'Get to Know Dr. Garling',
        title: 'Dr. Garling is Your General and Cosmetic Dentist in the Overland Park, Kansas Area',
        paragraphs: [
          'Dr. Garling hails from Springfield, Missouri, but after completing dental school, she wanted to call Kansas City home. A proud graduate of the University of Missouri – Kansas City (UMKC) School of Dentistry in 2022, she also earned her undergraduate degree from the University of Missouri – Columbia. M-I-Z! During her college years, she worked as a dental assistant, laying the foundation for her passion within the field.',
          'As an active member of the dental community, Dr. Garling serves as the treasurer on the board of Kansas City Women Dentists. She enjoys collaborating, supporting, and learning from fellow women in dentistry.',
          'With a gentle, patient-centered approach, Dr. Garling’s primary goal is to ensure every patient feels informed, comfortable, and at ease throughout their visit. She understands that many people find dental appointments stressful, which is why she excels at easing dental anxieties by building trust, clearly explaining procedures, and creating a compassionate, welcoming environment. To Dr. Garling, exceptional dental care is not just about healthy teeth! Exceptional dental care is about trust, comfort, compassion, and delivering results that exceed expectations. Her meticulous attention to detail and dedication to the highest standards of care shine through in every aspect of her practice.',
          'Outside of dentistry, Dr. Garling leads an active lifestyle as a fitness instructor at a local studio, and loves spending time outdoors with her beloved golden retriever, Millie. She enjoys reading, traveling, making memories with loved ones, and cheering on her favorite team – the Kansas City Chiefs!',
        ],
        image: 'dr-garling-family-dentistry.jpg',
        imageAlt: 'Dr. Garling',
        imageSide: 'start',
      },
      {
        type: 'split',
        title: "Dr. Garling's Expertise",
        paragraphs: [
          'Dentistry is a lifelong journey of learning to Dr. Garling. With new techniques, innovative technologies, and ongoing research constantly shaping the field, she views continuing education as both exciting and essential. Dr. Garling holds certifications in Invisalign, Botox, and TMJ/Trigger Point injections, and she is passionate about staying at the forefront of dental advancements to provide the best care for her patients.',
          'Dr. Garling finds the most rewarding aspect of her work to be the transformation in her patients’ confidence after completing their treatment. There’s nothing more fulfilling than seeing a patient leave her office with a brighter, healthier, more confident smile!',
          'Dr. Garling is thrilled to be a part of HT Complete Family Dentistry, where she works alongside a highly talented team of like-minded professionals who share her unwavering commitment to patient-centered care.',
        ],
      },
    ],
  },
  {
    slug: 'our-practice/meet-dr-whitney',
    title: 'Meet Dr. Whitney - HT Complete Family Dentistry',
    description:
      'Dr. Whitney is a proud native of Overland Park and is deeply committed to serving her hometown community. She completed her undergraduate studies at The',
    name: 'Meet Dr. Whitney',
    h1: 'General & Cosmetic Dentist in Overland Park / Kansas City',
    hero: {
      image: '',
      title: 'Meet Dr. Nicole Whitney',
      paragraphs: [],
    },
    blocks: [
      {
        type: 'split',
        eyebrow: 'Get to Know Dr. Nicole whitney',
        title: 'Dr. Nicole is Your General and Cosmetic Dentist in the Overland Park, Kansas Area',
        paragraphs: [
          'Dr. Whitney is a proud native of Overland Park and is deeply committed to serving her hometown community. She completed her undergraduate studies at The University of Kansas, where she proudly cheered for the Jayhawks! She then pursued her dental education at The University of Missouri-Kansas City (UMKC) School of Dentistry, where she not only excelled academically but also served as the class president. Her dedication and hard work allowed her to graduate ahead of schedule with her dental degree. Dr. Whitney then took advantage of this extra time to pursue additional education, becoming fully trained in administering Botox and providing Invisalign treatment.',
          'With her exceptional attention to detail and unwavering commitment to patient care, Dr. Whitney consistently delivers outstanding results. Whether it’s a routine dental exam or a complex procedure, you can trust that Dr. Whitney will provide comprehensive dental care that surpasses your expectations!',
          'Beyond her passion for dentistry, Dr. Whitney enjoys indulging in her hobbies such as reading, cooking, and traveling. She also cherishes spending quality time with her loved ones, including her husband, Peter.',
        ],
        image: 'ht-doctors.jpg',
        imageAlt: 'Dr. Nicole Whitney',
        imageSide: 'start',
      },
      {
        type: 'split',
        title: "Dr. Whitney's Expertise",
        paragraphs: [
          'Dr. Whitney brings a well-rounded skill set to HT Complete Family Dental, combining a passion for both restorative and cosmetic dentistry. Whether relieving patients from pain or creating beautiful, confident smiles, she finds great reward in making a real difference through her work. Her approach emphasizes personalized care, ensuring patients understand all of their treatment options and feel fully supported in their dental journey. Driven by a commitment to excellence, Dr. Whitney upholds the practice’s mission of delivering patient-centered care with outstanding results.',
        ],
        image: 'Dr.-W-2-1.jpg',
        imageAlt: 'Dr. Nicole Whitney',
        imageSide: 'end',
      },
    ],
  },
  {
    slug: 'our-practice/meet-the-team',
    title: 'Meet the Team - HT Complete Family Dentistry',
    description:
      'Our caring dental team is here to make every visit comfortable and stress-free. Meet the friendly faces behind your care.',
    name: 'Meet the Team',
    h1: 'Your Overland Park / Kansas City Area Dental Team',
    hero: {
      image: '',
      title: 'Meet the Team',
      paragraphs: [],
    },
    blocks: [
      {
        type: 'split',
        eyebrow: 'Dedicated to Your Comfort',
        title: 'Get to Know Your Overland Park, Kansas Dental Team',
        paragraphs: [
          'At Harman-Tinnel Complete Family Dentistry, our team is dedicated to creating a comfortable, positive experience for every patient who walks through our doors. We understand that dental visits can sometimes be stressful, and we are here to ensure that you feel at ease from the moment you arrive. Our compassionate staff members are trained not only in delivering top-notch dental care but are also trained to provide a warm, supportive environment where you and your family can feel relaxed. We focus on educating our patients about dental issues and solutions, because we feel that being informed helps bring peace of mind to each of our patients.',
          'We take pride in listening to your concerns, addressing any questions you may have, and making sure that each treatment is tailored to your needs. Whether you’re here for a routine cleaning, a cosmetic treatment, or anything in between, our goal is to make your experience as pleasant and comfortable as possible. We love what we do, and it shows in the care, patience, and dedication we bring to every appointment.',
        ],
        image: 'dr-tinnel-full-team.jpg',
        imageAlt: 'The HT Complete Family Dentistry team',
        imageSide: 'start',
      },
      {
        type: 'split',
        eyebrow: 'Meet Your Dental Team',
        title: 'Our Dedicated Team is Here for You',
        paragraphs: [
          'Each and every member of our dental care team is committed to providing you and your family with the absolute best patient experience. We love what we do and it shows in every aspect of the care we provide.',
        ],
      },
      {
        type: 'split',
        eyebrow: 'Comprehensive Dentistry',
        title: 'Complete Dental Care for Your Whole Family',
        align: 'center',
        youtubeId: '9FIp0krlgt0',
      },
    ],
  },
  {
    slug: 'our-practice/testimonials',
    title: 'Patient Testimonials - HT Complete Family Dentistry',
    description:
      'See what real patients are saying about their experiences with Harmen Tinnel Complete Family Dentistry in Kansas City.',
    name: 'Patient Testimonials',
    h1: 'Family Dentist Serving Overland Park / Kansas City',
    hero: {
      image: '',
      title: 'Patient Testimonials',
      paragraphs: [],
    },
    blocks: [
      {
        type: 'split',
        eyebrow: '250+ Five Star Reviews',
        title: 'What Our Patients Are Saying About Us',
        paragraphs: [
          'Our team is passionate about building lasting relationships with our patients, from young children to adults, ensuring that every family member receives the personalized care they deserve. We understand that every patient has unique needs and preferences, so we go above and beyond to make sure each visit is relaxed, informative, and tailored to you. Our goal is to make your family feel valued and confident in the care they’re receiving.',
          'Our team is so grateful for the trust our patients place in us, and we’re excited to share their positive feedback. They consistently mention our friendly staff, state-of-the-art technology, and commitment to patient comfort. Hearing our patients share that they feel at ease and well cared for motivates us every day to continue delivering the best experience possible. Each testimonial affirms our belief that a family-friendly, supportive environment leads to happy, healthy smiles.',
          'We appreciate every patient’s journey and take pride in exceeding expectations. From routine cleanings to more advanced care, our goal is to make each visit a positive experience that families can count on.',
        ],
        image: 'patient-information-kansas-city.jpg',
        imageAlt: 'A patient at HT Complete Family Dentistry',
        imageSide: 'start',
      },
    ],
  },
  {
    slug: 'patient-information',
    title: 'Patient Information - HT Complete Family Dentistry - Overland Park - Kansas City KS',
    description:
      'Need to know more about dental treatment financing options or insurance plans we accept? Call 913-962-0036 for your free new patient consultation. Serving Overland Park, Kansas City, and surrounding areas.',
    name: 'Patient Information',
    h1: 'Family Dentist Serving Overland Park / Kansas City',
    hero: {
      image: '',
      title: 'Patient Information',
      paragraphs: [],
    },
    blocks: [
      {
        type: 'split',
        eyebrow: 'Thank You for Choosing HTCFD',
        title: 'Welcome to the HT Complete Family Dentistry Family',
        paragraphs: [
          'Welcome to the HT Complete Family Dentistry family- thank you for taking a moment to learn about us and visiting our website! We are overjoyed that you have entrusted us with your family’s dental care and cannot wait to add you to our family of patients.',
          'We are a general dentistry practice that offers a wide variety of services, ranging from veneers and composite bonding to Invisalign, in addition to offering regular cleanings and periodontal exams! We are a truly unique office in that everyone who steps through our doors immediately becomes part of our family.',
          'If you have any questions about our services, or if you are curious about a specific treatment, please reach out to our office and our amazing team will answer any and every question you have. Once you are ready to begin your dental treatment, our team will work with you to find an appointment time that best fits into your schedule. We cannot wait to meet you and add you to our family!',
        ],
        image: 'patient-testimonials-kansas-city.jpg',
        imageAlt: 'Patients welcomed at HT Complete Family Dentistry',
        imageSide: 'start',
        button: { label: 'Request an Appointment', href: appointment },
      },
      {
        type: 'split',
        id: 'forms',
        eyebrow: 'Appointments and Patient Forms',
        title: 'Schedule Your Appointment Now',
        paragraphs: [
          'The first step towards a beautiful, healthy smile is to schedule an appointment. Please contact our office by phone or complete an online appointment request. If you need to cancel your appointment for any reason, please call us at least 48 business hours before your scheduled time to avoid a missed appointment charge.',
          'If you are a new patient to our office, please follow the link below to complete your new patient forms online. We ask that these forms are completed at least 24 hours prior to your scheduled appointment. If you are unable to complete the forms online, please arrive 20 minutes prior to your appointment to complete them at the office.',
        ],
        image: 'dental-implants-overland-park.jpg',
        imageAlt: 'A visit at HT Complete Family Dentistry',
        imageSide: 'end',
        button: {
          label: 'Complete Your New Patient Forms',
          href: 'https://forms.patientconnect365.com/9221',
        },
      },
      {
        type: 'split',
        id: 'financing',
        eyebrow: 'Know Your Payment Options',
        title: 'Financing and Insurance Information',
        paragraphs: [
          'We aim to make your dental experience as smooth as possible, from filling out your new patient forms to understanding your payment options. We work with a range of insurance providers and offer various payment methods to ensure your visit is stress-free. Whether you’re insured or need financing assistance, our team is here to help you navigate the options available.',
          'Cash<br>Personal Check<br>All Major Credit Cards<br>Care Credit Financing',
          'We believe everyone deserves access to high-quality dental care, so we provide flexible payment solutions for your convenience. With financing through CareCredit and various payment options, we’re dedicated to helping you achieve and maintain a healthy smile. For any questions about insurance coverage or payment plans, please reach out to our friendly team.',
        ],
        image: 'patient-information-finance-tinnel.jpg',
        imageAlt: 'Financing a visit at HT Complete Family Dentistry',
        imageSide: 'start',
        button: { label: 'Learn More About Care Credit', href: '#care' },
      },
      {
        type: 'split',
        id: 'care',
        eyebrow: 'No Insurance? No problem.',
        title: 'Dental Financing With Care Credit',
        paragraphs: [
          'At Harman-Tinnel Complete Family Dentistry, we are pleased to offer Care Credit dental financing to our patients in the Overland Park – Kansas City area. With Care Credit, you can finance 100% of your dental care, and there are no upfront costs, annual fees, or pre-payment penalties. So, you can begin your treatment today and conveniently pay with low, monthly payments.',
          'Care Credit provides a variety of payment plans to fit your needs. Their popular No Interest Payment Plans* allow you to avoid interest charges, as long as the balance is paid in full within the specified time frame. Monthly payments can be as low as 3% of your balance. For procedures costing $1,000 or more, Care Credit also offers 24, 36, and 48-month plans with low monthly payment options available.',
        ],
        button: {
          label: 'Apply for Care Credit Financing',
          href: 'https://www.carecredit.com/apply/',
        },
      },
    ],
  },
  {
    slug: 'emergency-appointments',
    title:
      'Emergency Appointments in Overland Park - Kansas City KS - HT Complete Family Dentistry',
    description:
      'Dental emergency? Call 913-962-0036 for same-day urgent dental care in Overland Park from a trusted local team.',
    name: 'Emergency Appointments',
    h1: 'Family Dentist Serving Overland Park / Kansas City',
    hero: {
      image: '',
      title: 'Emergency Appointments',
      paragraphs: [],
    },
    blocks: [
      {
        type: 'split',
        eyebrow: 'Have a Dental Emergency?',
        title: "Got a Dental Emergency? We're Here When You Need Us",
        paragraphs: [
          'If you’re experiencing a dental emergency, don’t wait—contact us immediately. Whether it’s a sudden toothache, a lost filling, or a chipped tooth, we prioritize urgent appointments and will work quickly to alleviate your discomfort. Our goal is to make you feel comfortable and cared for, providing solutions to restore your dental health. Reach out to us, and let us help you get back to feeling your best as soon as possible!',
          'Remember, emergencies happen, and there is no shame in an emergency dental visit. Please make sure to call us as soon as a dental emergency strikes. <a href="tel:+19139620036">913-962-0036</a> The sooner we know about your emergency, the sooner we can get you into our office and fix the issue. If you are not sure if you have a dental emergency or not, call us anyway. We always prefer the “better safe than sorry,” motto!',
        ],
        image: 'emergency-appointments-kansas-city.jpg',
        imageAlt: 'Emergency dental care in Overland Park',
        imageSide: 'start',
        button: { label: 'Schedule an Appointment', href: appointment },
      },
      {
        type: 'faq',
        eyebrow: 'In Case of Emergency',
        title: 'Frequently Asked Questions About Dental Emergencies',
        intro: [
          'We have compiled a list of some of the most frequently asked questions about dental emergencies and what to do when one arises. Do you have a question that isn’t answered below? Be sure to <a href="/contact/">contact us</a> – we are always happy to help you.',
        ],
        image: 'emergency-appointments-overland-park.jpg',
        imageAlt: 'Emergency dental visit in Overland Park',
        imageSide: 'end',
        items: [
          {
            question: 'What Do I Do if My Tooth Falls Out?',
            answer:
              'If your tooth falls out, try placing it back on the socket with firm but gentle pressure. If it doesn’t take, put it in a glass of milk or the person who lost the tooth saliva and contact us immediately.',
          },
          {
            question: 'What Do I Do if I Chip My Tooth?',
            answer:
              'If you chip your tooth, try to find the fractured piece and put it in a glass of milk or the person’s saliva. Then, contact us immediately.',
          },
          {
            question: 'What Do I Do if I Fracture My Jaw?',
            answer:
              'Gently support the jaw with your hands to minimize movement while waiting for medical help. You can also try to tie the jaw closed using a bandage or cloth, if possible',
          },
          {
            question: 'What Do I Do if I Have Severe Tooth Pain?',
            answer:
              'If you experience severe tooth pain, rinse your mouth with warm water and gently floss around the area to remove any trapped particles. Avoid applying heat, as this can increase inflammation. Contact us as soon as possible to schedule an emergency appointment.',
          },
          {
            question: 'What Should I Do if I Have Something Stuck Between My Teeth?',
            answer:
              'If something is lodged between your teeth, try to remove it gently with dental floss. Avoid using sharp objects, as these can damage your gums and teeth. If the object won’t come out, call us for assistance.',
          },
        ],
      },
    ],
  },
  {
    slug: 'dental-specials-discounts',
    title: 'Dental Specials - HT Complete Family Dentistry',
    description:
      'Save on your next visit! Check out the latest dental specials and offers from Harmen Tinnel Complete Family Dentistry.',
    name: 'Specials',
    h1: 'Family Dentist Serving Overland Park / Kansas City',
    hero: {
      image: '',
      title: 'Dental Specials',
      paragraphs: [],
    },
    blocks: [
      {
        type: 'split',
        eyebrow: 'Harman-Tinnel Family Discounts',
        title: 'Current Dental Specials and Discounts',
        paragraphs: [
          'We understand that dental care can sometimes feel like a big financial investment, and we know how important it is to balance quality care with affordability. That’s why we’ve put together special offers to help you save money on a variety of dental services. Whether you’re visiting us as a brand-new patient or you’re a loyal client returning for continued care, our promotions are here to ensure that you’re receiving top-notch care at competitive rates. Be sure to take a moment to explore our current dental specials, and we’re confident you’ll find the perfect option to meet your individual needs and goals.',
          'If you have any questions about the discounts or promotions listed below, please don’t hesitate to call our office. Our friendly team is always happy to assist and will do their best to provide clear and helpful answers to all your inquiries. Additionally, if you’re searching for a particular discount or special offer but don’t see it included in the list, remember that our HTCFD team is committed to working closely with you to review your insurance benefits and create a customized financial plan to help you manage the cost of your treatment.',
        ],
        image: 'emergency-appointments-kansas-city.jpg',
        imageAlt: 'A smile from HT Complete Family Dentistry',
        imageSide: 'start',
      },
      {
        type: 'split',
        eyebrow: 'Achieve a Brighter, Whiter, Smile in No Time',
        title: 'ZOOM Teeth Whitening Special',
        paragraphs: [
          'Achieve a brighter smile with our ZOOM Teeth Whitening Special! For a limited time, take advantage of this incredible offer and enhance the brightness of your smile by several shades in just one visit. This professional treatment, available for only $450, includes:',
          'Custom whitening trays<br>1 complimentary tube of whitening gel',
          'Call <a href="tel:+19139620036">913-962-0036</a> or click the button below to schedule your appointment for a whiter, brighter smile today!',
          '* An exam must be performed by a dentist within 6 months of the whitening appointment with no outstanding treatment needed.',
        ],
        image: 'teeth-whitening-special-shawnee-ks.jpg',
        imageAlt: 'ZOOM teeth whitening special',
        imageSide: 'end',
        button: { label: 'Schedule an Appointment', href: appointment },
      },
    ],
  },
  {
    slug: 'careers',
    title: 'Careers at HT Complete Family Dentistry',
    description:
      'Join a passionate, patient-focused dental team in Overland Park. Explore career opportunities at Harmen Tinnel Complete Family Dentistry.',
    name: 'Careers',
    h1: 'Family Dentist Serving Overland Park / Kansas City',
    hero: {
      image: '',
      title: 'Careers',
      paragraphs: [
        'Are you interested in elevating your career and investing your time in a business that will support your growth and provide you with unique learning opportunities? If so, then look no further than Harman-Tinnel Complete Family Dentistry.',
      ],
    },
    blocks: [
      {
        type: 'split',
        eyebrow: 'Work With The Best',
        title: 'Join Our Fun, Caring Dental Team',
        paragraphs: [
          'At our office, we believe that going to the dentist should be an enjoyable experience, and we work hard to make that a reality for each of our patients. Our team is made up of individuals who are committed to providing top-notch dental care with a positive attitude and a smile on their face.',
          'Our team members enjoy working together to achieve common goals, and we celebrate our successes along the way. We believe that a happy team makes for happy patients, and we work hard to foster a culture of positivity and teamwork.',
          'If you are looking for a fun, fast-paced dental office where you can grow your career and make a difference in the lives of others, we invite you to apply today. Come join our team and experience the joy of creating healthy, happy smiles every day!',
          'HT Complete Family Dentistry<br>7621 Frontage Road<br>Overland Park, KS 66204',
          'Email: <a href="mailto:info@drtinnel.com">info@drtinnel.com</a> Phone: <a href="tel:+19139620036">913-962-0036</a> Hours: Mon – Thur 8am – 5pm',
        ],
      },
      {
        type: 'split',
        eyebrow: 'Join Our Team',
        title: 'Current Openings',
        paragraphs: ['We currently have no new openings. Please check back again soon!'],
      },
      { type: 'map' },
    ],
  },
  {
    slug: 'contact',
    title: 'Contact Your Overland Park KS Family Dentist - HT Complete Family Dentistry',
    description:
      'HT Complete Family Dentistry is here for all of your dental needs. Call 913-962-0036 for your free new patient consultation. Serving Overland Park, Kansas City, and surrounding areas.',
    name: 'Contact Us',
    h1: 'Family Dentist Serving Overland Park / Kansas City',
    hero: {
      image: '',
      title: 'Contact Us',
      paragraphs: [
        'We are so glad you took the time to visit our website! Are you ready to learn more about our services at HTCFD? If so, call us today, or fill out the form below. We can’t wait for you to join our dental family and we look forward to serving you and your family!',
      ],
    },
    blocks: [
      {
        type: 'split',
        eyebrow: "We Can't Wait to Hear From You!",
        title: 'Contact Your Overland Park - Kansas City Area Family Dentist',
        paragraphs: [
          'HT Complete Family Dentistry<br>7621 Frontage Road<br>Overland Park, KS 66204',
          'Email: <a href="mailto:info@drtinnel.com">info@drtinnel.com</a> Phone: <a href="tel:+19139620036">913-962-0036</a> Hours: Mon – Thur 8am – 5pm',
          'Thanks for stopping by our website! Do you have a question about a dental procedure or office policy? Do you need to know if we accept your dental insurance? No matter your question or concern, we’re here to help. Give us a call at <a href="tel:+19139620036">913-962-0036</a> or fill out the contact form below and one of our friendly team members will be happy to help you!',
          'If you would like to schedule an appointment please call our office or click the Request Appointment button below.',
        ],
        button: { label: 'Request Appointment', href: appointment },
      },
      {
        type: 'split',
        title: 'Cancellation Policy',
        paragraphs: [
          'If you need to cancel your appointment please call us at least 48 business hours before your scheduled time to avoid a missed appointment charge.',
        ],
      },
      { type: 'map' },
    ],
  },
];
