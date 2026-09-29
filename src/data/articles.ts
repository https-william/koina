export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: 'NDIS Insights' | 'Aged Care & HCP' | 'Physiotherapy & Mobility' | 'Occupational Therapy' | 'Speech & Nutrition';
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
  };
  featured?: boolean;
  imageSrc: string;
  imageAlt: string;
  keyTakeaways: string[];
}

export const ARTICLES_DATA: Article[] = [
  {
    slug: 'functional-capacity-assessment-ndis-guide',
    title: 'Functional Capacity Assessments (FCAs): What Every Support Coordinator and Family Needs to Know',
    excerpt:
      'A practical, clinical guide on how an Occupational Therapy FCA directly influences NDIS plan funding, core supports, and assistive technology approvals across Queensland.',
    category: 'NDIS Insights',
    readTime: '6 min read',
    publishedDate: '18 September 2026',
    author: {
      name: 'Sarah Mitchell, BOccThy',
      role: 'Senior Occupational Therapist & Clinical Intake Lead',
    },
    featured: true,
    imageSrc: '/images/service-ot.jpg',
    imageAlt: 'Occupational therapist conducting functional capacity assessment in home environment',
    keyTakeaways: [
      'Why FCAs are the gold-standard clinical justification for NDIS plan reviews',
      'The key difference between standardized outcome measures (WHODAS, Vineland) and observational findings',
      'How in-home assessments provide higher evidentiary weight than clinic-only reviews',
      'Typical clinical turnaround times and planning recommendations for support coordinators',
    ],
  },
  {
    slug: 'preventing-falls-older-australians-home-guide',
    title: 'Proactive Falls Prevention at Home: A Physiotherapist’s Framework for Supported Independence',
    excerpt:
      'Falls are not an inevitable part of aging. Discover the environmental hazards, balance conditioning techniques, and assistive equipment that keep older Australians confident at home.',
    category: 'Physiotherapy & Mobility',
    readTime: '5 min read',
    publishedDate: '12 September 2026',
    author: {
      name: 'David Reynolds, BPhysio',
      role: 'Principal Community Physiotherapist',
    },
    imageSrc: '/images/service-physio.jpg',
    imageAlt: 'Community physiotherapist assisting senior participant with balance and gait retraining',
    keyTakeaways: [
      'The critical 30-day window following hospital discharge for falls risk reduction',
      'Simple home environmental audits: rugs, lighting, and bathroom transitions',
      'Strength and balance exercises tailored for Home Care Package (HCP) recipients',
      'Funding pathways under Commonwealth Home Support and DVA Gold Card entitlements',
    ],
  },
  {
    slug: 'dysphagia-mealtime-management-speech-pathology',
    title: 'Recognising Dysphagia: Mealtime Management Plans and Safe Swallowing at Home',
    excerpt:
      'Understanding the early indicators of swallowing difficulty in neurological conditions and aging, plus how a Speech Pathologist ensures safety, hydration, and nutritional enjoyment.',
    category: 'Speech & Nutrition',
    readTime: '7 min read',
    publishedDate: '04 September 2026',
    author: {
      name: 'Elena Rostova, MSpPath, CPSP',
      role: 'Clinical Speech Pathologist',
    },
    imageSrc: '/images/service-speech.jpg',
    imageAlt: 'Speech pathologist conducting mealtime assessment and swallowing evaluation',
    keyTakeaways: [
      'Subtle signs of silent aspiration and dysphagia in everyday dining',
      'How texture modification (IDDSI Framework) protects respiratory health',
      'Creating compliant mealtime management plans for NDIS and aged care support workers',
      'Augmentative communication aids (AAC) to express dining preferences and meal comfort',
    ],
  },
  {
    slug: 'understanding-positive-behaviour-support-framework',
    title: 'Demystifying Positive Behaviour Support: Compassion, Communication, and Reducing Restrictions',
    excerpt:
      'Why behaviours of concern are fundamentally expressions of unmet needs. An overview of how trauma-informed PBS plans empower participants and their support circles.',
    category: 'NDIS Insights',
    readTime: '5 min read',
    publishedDate: '26 August 2026',
    author: {
      name: 'Marcus Chen, MPBS',
      role: 'Advanced Behaviour Support Practitioner',
    },
    imageSrc: '/images/service-pbs.jpg',
    imageAlt: 'Positive behaviour support team discussing person-centred support strategies',
    keyTakeaways: [
      'Viewing behaviour through a communicative and environmental lens',
      'The step-by-step Functional Behaviour Assessment (FBA) process',
      'Collaborative coaching for families and support workers to de-escalate stressors',
      'Strict adherence to NDIS Quality and Safeguards Commission regulatory reporting',
    ],
  },
  {
    slug: 'home-modifications-ndis-aged-care-checklist',
    title: 'Minor vs. Complex Home Modifications: Step-by-Step Approval Checklist for Queensland Homes',
    excerpt:
      'From simple non-structural grab rails to complex bathroom redesigns and wheelchair ramps: what clinicians, builders, and funding bodies evaluate before approving work.',
    category: 'Occupational Therapy',
    readTime: '8 min read',
    publishedDate: '15 August 2026',
    author: {
      name: 'Sarah Mitchell, BOccThy',
      role: 'Senior Occupational Therapist & Clinical Intake Lead',
    },
    imageSrc: '/images/contact-team.jpg',
    imageAlt: 'Occupational therapy clinical coordinator reviewing home modification specifications',
    keyTakeaways: [
      'Categorisation differences: Minor vs. Complex home modifications under NDIS guidelines',
      'How to obtain building quotes that match clinical scope-of-works documents',
      'Navigating tenancy and landlord consents for rental properties across Queensland',
      'Ensuring long-term accessibility to prevent early transition to residential aged care',
    ],
  },
  {
    slug: 'maximizing-therapy-budgets-allied-health-assistants',
    title: 'How Allied Health Assistants (AHAs) Stretch Your Therapy Budget Without Compromising Outcomes',
    excerpt:
      'Discover how delegating routine exercises and skill practice to supervised AHAs allows participants to receive twice the weekly therapy hours within their approved funding limits.',
    category: 'Aged Care & HCP',
    readTime: '4 min read',
    publishedDate: '02 August 2026',
    author: {
      name: 'David Reynolds, BPhysio',
      role: 'Principal Community Physiotherapist',
    },
    imageSrc: '/images/service-aha.jpg',
    imageAlt: 'Allied health assistant guiding participant through daily living exercises',
    keyTakeaways: [
      'The clinical delegation framework between primary therapists and AHAs',
      'Significant cost savings per hour under the NDIS price limits',
      'Real-world community practice: public transport training, shopping, and home exercise routines',
      'How frequent reinforcement accelerates muscle memory and functional recovery',
    ],
  },
];
