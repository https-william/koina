export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  callout?: {
    title: string;
    text: string;
  };
}

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface Article {
  slug: string;
  title: string;
  searchIntentQuery?: string;
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
  sections: ArticleSection[];
  faqs: ArticleFAQ[];
}

export const ARTICLES_DATA: Article[] = [
  {
    slug: 'functional-capacity-assessment-ndis-guide',
    title: 'Functional Capacity Assessments (FCAs): What Every Support Coordinator and Family Needs to Know',
    searchIntentQuery: "How do I get an OT assessment for my NDIS plan?",
    excerpt:
      'A practical, plain-English guide on how an in-home Occupational Therapy FCA justifies NDIS plan funding, daily living supports, and assistive technology approvals across Queensland.',
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
      'Why in-home assessments carry far more evidentiary weight with the NDIA than clinic-only reviews',
      'The key difference between standardized outcome measures (WHODAS, Vineland) and observational daily living tasks',
      'How an FCA directly justifies Core support hours, Supported Independent Living (SIL), and assistive equipment',
      'Typical clinical turnaround times and planning recommendations for Queensland support coordinators',
    ],
    sections: [
      {
        heading: 'What is a Functional Capacity Assessment (FCA)?',
        paragraphs: [
          'If you or someone you care for has an NDIS plan, you have probably heard people talk about an "FCA." In simple terms, a Functional Capacity Assessment is a comprehensive evaluation conducted by a qualified Occupational Therapist (OT). It looks at how your condition affects your ability to manage everyday life at home and in the community.',
          'Rather than just focusing on a medical diagnosis, an FCA looks at real life: Can you safely make a cup of tea? How do you get in and out of the shower? Can you manage your own medications, pay bills, or catch a bus to the shops? The assessment maps out what you can do independently, where you need assistance, and what equipment or therapy could make your daily routine safer and more fulfilling.',
        ],
      },
      {
        heading: 'Why In-Home Assessments Matter to the NDIA',
        paragraphs: [
          'Doing an assessment in a medical clinic is rarely the same as being in your own living room or kitchen. A clinic has level floors, adjustable chairs, and quiet consultation rooms. Your home has rugs, door thresholds, pets, and specific kitchen cabinet heights that tell the real story of your daily routine.',
          'When an OT visits you at home across Queensland—whether on the Gold Coast, in Brisbane, Ipswich, or Toowoomba—they observe authentic physical transfers, environmental barriers, and family dynamics. The NDIA and plan evaluators give significantly higher weight to in-home observational evidence because it reflects authentic, everyday functional need.',
        ],
        callout: {
          title: 'Tip for Support Coordinators',
          text: 'Book an FCA at least 10 to 12 weeks before a scheduled NDIS plan review. This gives your clinician adequate time to complete observations, score standardized outcome measures, and finalize a thorough report that meets NDIA evidentiary requirements.',
        },
      },
      {
        heading: 'What Happens During the In-Home Visit?',
        paragraphs: [
          'Most in-home assessments take between 2 and 3 hours of direct contact time. Your OT will sit down with you and your family or support workers to talk through your daily routine, medical history, and personal goals.',
          'Next, the therapist will gently guide you through everyday tasks. They might ask to see how you transfer from your favourite armchair, step into the bathroom, or prepare a light meal. The goal is never to test you or make you feel uncomfortable; it is simply to understand your natural habits, where you feel fatigued, and what supports would make life easier.',
        ],
      },
      {
        heading: 'Standardized Clinical Measures NDIA Planners Look For',
        paragraphs: [
          'To ensure reports are objective and defensible, our clinicians use validated assessment tools such as the World Health Organization Disability Assessment Schedule (WHODAS 2.0), the Vineland Adaptive Behavior Scales, or the Lawton Instrumental Activities of Daily Living (IADL) scale.',
          'Combining standardized scores with real-world observations gives NDIA planners the concrete clinical data required to justify core support worker hours, capacity building therapy budgets, and assistive equipment recommendations.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much does an NDIS Functional Capacity Assessment cost?',
        answer:
          'Under the NDIS Price Guide, comprehensive FCAs are funded from your Capacity Building (Improved Daily Living) budget at the standard Occupational Therapy hourly price limit. A typical comprehensive assessment ranges between 10 and 15 total clinical hours, which covers direct in-home observation, family interviews, standardized scoring, and detailed report writing.',
      },
      {
        question: 'Can I request an FCA if I am plan-managed or self-managed?',
        answer:
          'Yes. Koina Allied Health accepts plan-managed and self-managed NDIS participants across Queensland. We bill your plan manager directly or provide itemized receipts for quick reimbursement via the NDIS myplace portal.',
      },
      {
        question: 'How quickly can Koina complete an FCA in Queensland?',
        answer:
          'We maintain immediate clinical capacity across 13 Queensland regional hubs. Initial in-home visits can typically be scheduled within 5 to 10 business days of intake referral, with completed comprehensive reports delivered within 10 to 14 business days following the assessment.',
      },
    ],
  },
  {
    slug: 'preventing-falls-older-australians-home-guide',
    title: 'Proactive Falls Prevention at Home: A Physiotherapist’s Guide to Supported Independence',
    searchIntentQuery: "Signs my elderly parent needs in-home physio (and how to prevent falls)",
    excerpt:
      'Falls are not an inevitable part of aging. Discover the environmental hazards, balance conditioning techniques, and mobility aids that keep older Australians confident and safe at home.',
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
      'Simple home environmental checks: loose rugs, poor lighting, and bathroom transitions',
      'Gentle strength and balance exercises tailored for Home Care Package (HCP) recipients',
      'Funding pathways under Commonwealth Home Support (CHSP) and DVA Gold Card entitlements',
    ],
    sections: [
      {
        heading: 'Why Falls Are Not Simply "Part of Growing Older"',
        paragraphs: [
          'Many families assume that as our parents get older, losing balance and experiencing occasional trips is just something that happens. But community physiotherapists see it differently: balance, joint mobility, and leg strength are skills that can be maintained, strengthened, and restored at any age.',
          'A fall can shatter an older person’s confidence, leading them to restrict their daily activities out of fear. This hesitation causes muscles to weaken further, actually increasing future falls risk. Breaking this cycle early with gentle, home-based physical therapy is one of the most effective ways to preserve independence.',
        ],
      },
      {
        heading: 'Early Warning Signs Your Parent May Need In-Home Physiotherapy',
        paragraphs: [
          'You do not have to wait for a dangerous fall before seeking support. Often, there are subtle clues in daily habits: "furniture walking" (holding onto walls, countertops, and chair backs as they move between rooms), reluctance to step outside into the garden, difficulty standing up from a low lounge chair, or walking with a shuffling gait.',
          'If your mum or dad seems hesitant when stepping over door frames or avoids the shower unless someone is in the house, a community physiotherapist can visit them at home, evaluate their movement, and recommend easy adjustments.',
        ],
        callout: {
          title: 'The Critical Post-Hospital Window',
          text: 'The first 30 days after hospital discharge are when older Australians face the highest risk of a fall. Hospital stays cause rapid loss of muscle mass. Early in-home rehabilitation restores strength before bad habits or falls occur.',
        },
      },
      {
        heading: 'Home Environmental Hazards to Check Today',
        paragraphs: [
          'More than 60% of falls occur inside the home. Take a walk through your loved one’s living spaces and look for: curling rug edges, electrical cords trailing across walkways, dark hallways between the bedroom and bathroom at night, and lack of sturdy handholds near steps or the shower.',
          'A visiting allied health team can assess these risks and arrange minor modifications—such as non-slip bathroom strips, sensor nightlights, and professionally installed grab rails—often funded entirely through Home Care Packages or DVA.',
        ],
      },
      {
        heading: 'How In-Home Balance Training Works',
        paragraphs: [
          'Therapy does not require heavy gym weights. A visiting physiotherapist guides older adults through gentle, practical exercises right in their kitchen or lounge: sit-to-stand repetitions from a dining chair, calf raises at the kitchen counter, and tandem balance stances.',
          'Over several weeks, these simple movements rebuild the stabilizer muscles in the hips, ankles, and core, giving seniors the stability and confidence to walk to the letterbox, potter in the garden, and stay independent in their own home.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can Home Care Packages (HCP Levels 1 to 4) pay for in-home physio?',
        answer:
          'Yes. Allied health services aimed at falls prevention, mobility maintenance, and restorative rehabilitation are approved under all Home Care Package levels (1, 2, 3, and 4) and CHSP. Koina invoices your package provider directly with no out-of-pocket costs.',
      },
      {
        question: 'Do DVA Gold Card holders pay anything for in-home physiotherapy?',
        answer:
          'No. DVA Gold Card holders receive fully covered in-home physiotherapy with zero out-of-pocket gap fees. All that is required is a valid D904 GP referral.',
      },
      {
        question: 'What if my parent is resistant to seeing a therapist?',
        answer:
          'This is very common. We approach home visits as friendly, low-stress partnership sessions. We focus on what your parent loves doing—like walking the dog, tending the garden, or playing with grandchildren—and frame exercises around keeping them doing those activities safely.',
      },
    ],
  },
  {
    slug: 'dysphagia-mealtime-management-speech-pathology',
    title: 'Recognising Dysphagia: Mealtime Management Plans and Safe Swallowing at Home',
    searchIntentQuery: "Why does my loved one cough when drinking water? Signs of swallowing problems",
    excerpt:
      'Understanding the early signs of swallowing difficulties in neurological conditions and aging, plus how a Speech Pathologist ensures safety, hydration, and meal enjoyment at home.',
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
      'Subtle signs of dysphagia and silent aspiration during everyday meals and drinks',
      'How the IDDSI Framework translates into real home cooking and textured meals',
      'Creating compliant Mealtime Management Plans for NDIS and aged care support teams',
      'Practical positioning, swallowing techniques, and adaptive dining utensils',
    ],
    sections: [
      {
        heading: 'What is Dysphagia and Why Does It Happen?',
        paragraphs: [
          'Swallowing seems simple, but it actually requires the coordinated work of dozens of muscles and nerves in your mouth, throat, and esophagus. When that coordination is disrupted—due to a stroke, Parkinson’s disease, dementia, cerebral palsy, or natural aging—it is known clinically as dysphagia.',
          'When swallowing becomes difficult, food or liquids can enter the airway instead of the stomach. This is called aspiration, and it can lead to recurrent chest infections, choking episodes, and aspiration pneumonia, which is a leading cause of hospital admissions among older adults and people with disabilities.',
        ],
      },
      {
        heading: 'Everyday Warning Signs to Watch For During Meals',
        paragraphs: [
          'Dysphagia does not always look like dramatic choking. Often, the clues are quiet and easy to miss: coughing or throat-clearing while drinking water, a gurgly or "wet" voice after swallowing, taking more than 30 to 45 minutes to finish a modest meal, or avoiding foods that were previously favourites, like dry toast, steak, or raw apples.',
          'In some cases, individuals experience "silent aspiration," where food slips into the lungs without triggering a cough reflex. Unexplained weight loss, recurring low-grade fevers, or repeated chest infections can be secondary signs that an in-home swallowing evaluation is needed.',
        ],
        callout: {
          title: 'Immediate Action for Families',
          text: 'If your loved one regularly coughs when drinking thin liquids (like water or tea), do not ignore it. A visiting Speech Pathologist can assess their swallow at home and recommend simple changes that keep them safe without taking away the joy of eating.',
        },
      },
      {
        heading: 'What is an NDIS Mealtime Management Plan?',
        paragraphs: [
          'For NDIS participants who require assistance with eating or drinking, the NDIS Quality and Safeguards Commission mandates that a comprehensive Mealtime Management Plan (MMP) be prepared by a qualified Speech Pathologist.',
          'This plan is a clear, step-by-step clinical guide for family members and support workers. It details exact food texture modifications (using the standardized IDDSI Framework), recommended drink thicknesses, safe seating postures, optimal pacing, and clear emergency protocols in the event of coughing or distress.',
        ],
      },
      {
        heading: 'Making Food Modifications Taste Good and Feel Dignified',
        paragraphs: [
          'Nobody wants to eat unappealing, bland purees. Modern speech pathology focuses on dignity and flavour. We work with families and carers to adapt everyday meals using gentle techniques: braising meats until tender, using gravies and sauces to bind minced vegetables, and using attractive moulds so pureed dishes look like real food on the plate.',
          'We also evaluate adaptive dining aids—such as nose-cutout cups, weighted cutlery, and partitioned plates—that allow participants to feed themselves with dignity for as long as possible.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does the NDIS fund speech pathology for swallowing problems?',
        answer:
          'Yes. Dysphagia assessments, mealtime management plans, and ongoing swallowing therapy are funded through Capacity Building (Improved Daily Living). Because mealtime safety is a critical health requirement, the NDIA routinely approves funding for qualified Speech Pathologists.',
      },
      {
        question: 'How does an in-home swallowing assessment work?',
        answer:
          'A speech pathologist visits during a regular meal or snack time. They observe oral muscle function, chewing patterns, swallow timing, and respiratory coordination with the participant’s usual foods and drinks in their own kitchen or dining area.',
      },
      {
        question: 'What is the IDDSI framework?',
        answer:
          'IDDSI stands for the International Dysphagia Diet Standardisation Initiative. It is a standardized global scale from Level 0 (thin liquids) to Level 7 (regular foods) that ensures hospital staff, in-home support workers, and family members prepare food to the exact consistency needed for safe swallowing.',
      },
    ],
  },
  {
    slug: 'understanding-positive-behaviour-support-framework',
    title: 'Demystifying Positive Behaviour Support: Compassion, Communication, and Reducing Restrictions',
    searchIntentQuery: "How does NDIS behaviour support work for meltdowns and sensory overload?",
    excerpt:
      'Why behaviours of concern are fundamentally expressions of unmet needs. An overview of how trauma-informed, neuroaffirming PBS plans empower participants, families, and support circles.',
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
      'Viewing behaviour through a communicative, neuroaffirming, and sensory lens',
      'The step-by-step Functional Behaviour Assessment (FBA) process at home and in the community',
      'Hands-on coaching for families and support teams to de-escalate stressors before distress occurs',
      'Strict adherence to NDIS Quality and Safeguards Commission regulatory reporting and human rights',
    ],
    sections: [
      {
        heading: 'All Behaviour is Communication',
        paragraphs: [
          'When an individual experiences severe anxiety, sensory overload, communication frustration, or physical pain they cannot put into words, it often surfaces as behaviours that challenge the people around them. This might include aggression, self-injury, running away (elopement), or severe distress and withdrawal.',
          'In the past, traditional systems often responded to these moments with punitive rules or physical restrictions. Positive Behaviour Support (PBS) takes an entirely different approach: we start with the belief that all behaviour is a meaningful attempt to communicate an unmet need.',
        ],
      },
      {
        heading: 'What Does a Behaviour Support Practitioner Actually Do?',
        paragraphs: [
          'Our registered PBS practitioners do not work in isolation. They step into the participant’s world—at home, at school, at day programs, or in the community. They listen closely to the person, their parents, and their support workers to understand what happens before, during, and after moments of distress.',
          'By conducting a Functional Behaviour Assessment (FBA), the practitioner uncovers the underlying triggers: Is the room too noisy? Is the person exhausted after lunch? Are they struggling to communicate that they want a break? Once the "why" is clear, we can change the environment and teach alternative ways to express those needs.',
        ],
        callout: {
          title: 'Human Rights and Restrictive Practices',
          text: 'Under NDIS Quality and Safeguards rules, any restriction on a person’s movement (such as locked cupboards, chemical sedation, or physical restraint) must be formally documented, justified as a last resort, and paired with an active reduction plan.',
        },
      },
      {
        heading: 'The Three Tiers of a Behaviour Support Plan (BSP)',
        paragraphs: [
          'A comprehensive Behaviour Support Plan is not an academic document that sits in a drawer; it is a practical guide with three clear layers: Proactive Strategies (modifying lighting, providing visual schedules, building predictable routines so distress does not arise in the first place); Active Strategies (early de-escalation cues when stress begins to rise); and Reactive Strategies (ensuring safety and dignity if a crisis occurs).',
          'We spend significant time training family members and support staff so that everyone in the participant’s circle responds with calm, consistent empathy rather than escalating the situation.',
        ],
      },
      {
        heading: 'Neuroaffirming and Trauma-Informed Care',
        paragraphs: [
          'At Koina Allied Health, our positive behaviour support is rooted in neuroaffirming care. We do not attempt to force autistic individuals or people with intellectual disabilities to "mask" or suppress harmless self-soothing behaviours (like stimming or pacing).',
          'Instead, our focus is entirely on safety, emotional well-being, building autonomy, and helping individuals live fulfilling lives in their Queensland communities.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How is Positive Behaviour Support funded under the NDIS?',
        answer:
          'PBS is funded under the NDIS Capacity Building budget under "Improved Relationships" (specifically Support Category 11). This covers both the practitioner’s assessment and plan development, as well as hands-on coaching hours for your support workers.',
      },
      {
        question: 'Who writes an NDIS Behaviour Support Plan?',
        answer:
          'Only practitioners who are formally registered and accredited with the NDIS Quality and Safeguards Commission (as Core, Proficient, Advanced, or Specialist practitioners) are permitted to submit BSPs.',
      },
      {
        question: 'Can behaviour practitioners help our support workers in our home?',
        answer:
          'Yes. In-home and community coaching is a central part of our model. We role-model de-escalation techniques directly with your family and support staff in your home environment.',
      },
    ],
  },
  {
    slug: 'home-modifications-ndis-aged-care-checklist',
    title: 'Home Modifications Checklist: What NDIS and Aged Care Packages Actually Pay For',
    searchIntentQuery: "Will NDIS or My Aged Care pay for a bathroom ramp or walk-in shower?",
    excerpt:
      'From simple non-structural grab rails to complex bathroom redesigns and wheelchair ramps: what clinicians, builders, and funding bodies evaluate before approving work across Queensland.',
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
      'The critical difference between Minor Home Modifications and Complex Home Modifications under NDIS guidelines',
      'How to obtain builder quotes that align exactly with clinical scope-of-works documents',
      'Navigating tenancy and landlord consent requirements for rental properties across Queensland',
      'Ensuring long-term accessibility to prevent premature moves to residential aged care facilities',
    ],
    sections: [
      {
        heading: 'Why Modifying Your Home Can Change Everything',
        paragraphs: [
          'For many Queenslanders living with disability or aging in place, their home’s physical design becomes the biggest barrier to daily independence. A steep front doorstep, a shower over a high bathtub, or a narrow hallway can make entering and moving around your own house dangerous.',
          'Home modifications adapt the physical environment to match your functional abilities. When done well, they eliminate falls, allow you to shower without relying on someone else to lift you, and give you freedom of movement in the home you love.',
        ],
      },
      {
        heading: 'Minor vs. Complex Modifications: Understanding the Rules',
        paragraphs: [
          'Both the NDIS and Home Care Packages divide home modifications into distinct tiers based on structural impact and cost:',
          'Minor Modifications (Category A & B under NDIS): Non-structural changes usually costing under $10,000. Examples include installing stainless-steel grab rails into wall studs, fitting handheld shower hoses, creating rubber threshold ramps over sliding door tracks, and installing lever-style taps.',
          'Complex Modifications: Structural changes costing $10,000 to $30,000+ that alter the home’s layout. Common examples include removing a bathtub to create a level-access roll-in hobless shower, widening doorways for bariatric wheelchairs, or constructing permanent concrete ramps with handrails.',
        ],
        callout: {
          title: 'Landlord & Tenancy Considerations in QLD',
          text: 'If you rent your home, minor non-structural modifications (like grab rails and threshold ramps) are readily supported under Queensland tenancy legislation, provided the property can be restored upon lease conclusion. We assist participants with formal landlord communication.',
        },
      },
      {
        heading: 'The Step-by-Step Approval Process',
        paragraphs: [
          'Step 1: Clinical Assessment. An Occupational Therapist visits your home to measure doorways, assess your transfer techniques, and evaluate your wheelchair or walker dimensions.',
          'Step 2: Scope of Works. The OT drafts detailed architectural specifications and clinical justifications detailing why each change is reasonable and necessary.',
          'Step 3: Builder Quotes. Licensed builders review the scope and provide quotes strictly aligned with Australian Building Standards (AS 1428.1).',
          'Step 4: Submission & Approval. The package is submitted to the NDIA Home Modifications panel or your Aged Care provider for funding release.',
          'Step 5: Construction & Sign-Off. Once works are finished, your OT conducts a final inspection to confirm equipment was installed correctly and you can use it safely.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Will NDIS pay for a completely new bathroom renovation?',
        answer:
          'The NDIS funds modifications directly related to your disability and functional access (such as removing a step, installing a hobless shower, and widening the door). They do not fund cosmetic upgrades like luxury tiles or aesthetic vanities beyond standard clinical requirements.',
      },
      {
        question: 'Can Home Care Packages (HCP) pay for ramps and grab rails?',
        answer:
          'Yes. Home safety modifications are one of the primary inclusions under Home Care Packages Levels 1 through 4. Your Care Manager approves the invoice directly from your package funds based on our OT recommendation.',
      },
      {
        question: 'How long does NDIS home modification approval take?',
        answer:
          'Minor modifications can often be quoted, approved, and installed within 3 to 6 weeks. Complex structural modifications require formal NDIA panel review, which typically takes between 8 and 16 weeks depending on plan status.',
      },
    ],
  },
  {
    slug: 'maximizing-therapy-budgets-allied-health-assistants',
    title: 'How Allied Health Assistants (AHAs) Stretch Your Therapy Budget Without Compromising Outcomes',
    searchIntentQuery: "What does an Allied Health Assistant do? How to get more therapy hours on NDIS",
    excerpt:
      'Discover how delegating routine exercises and daily practice to supervised AHAs allows participants to receive twice the weekly therapy hours within their approved funding limits.',
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
      'The clinical delegation framework between primary AHPRA clinicians and qualified AHAs',
      'Significant hourly cost savings under the NDIS Price Guide (AHA rates are less than half of primary therapists)',
      'Real-world community practice: public transport training, grocery shopping, and home exercise routines',
      'How frequent repetition accelerates muscle memory, neuroplasticity, and functional recovery',
    ],
    sections: [
      {
        heading: 'The Challenge: Running Out of Therapy Funding Too Soon',
        paragraphs: [
          'One of the most common frustrations support coordinators and families experience is watching a participant’s NDIS therapy budget run dry six months into a twelve-month plan. Seeing a senior Occupational Therapist or Physiotherapist every single week at standard hourly rates can quickly consume an entire allocation.',
          'Yet research consistently shows that clinical recovery and neuroplasticity require high repetition and consistent practice. Practising a walking routine once every fortnight is rarely enough to build lasting stability. This is where Allied Health Assistants (AHAs) create enormous value.',
        ],
      },
      {
        heading: 'What is an Allied Health Assistant (AHA)?',
        paragraphs: [
          'An AHA is a trained health worker who works under the direct clinical delegation and supervision of a registered Occupational Therapist, Physiotherapist, or Speech Pathologist.',
          'Think of the relationship like an architect and a master builder: the primary therapist evaluates the participant, designs the treatment plan, and establishes the clinical goals. The AHA then steps in to deliver the regular, hands-on practice sessions that turn those goals into daily habits.',
        ],
        callout: {
          title: 'The Budget Advantage',
          text: 'Under the NDIS Price Guide, an Allied Health Assistant costs approximately $86 to $98 per hour, compared to $193.99 per hour for a primary therapist. By incorporating an AHA, you can receive two or three sessions per week for the same total budget.',
        },
      },
      {
        heading: 'What Kind of Activities Does an AHA Guide?',
        paragraphs: [
          'Because therapy takes place in your natural environment, AHA sessions are practical, engaging, and directly relevant to everyday life:',
          'Mobility & Balance: Walking in your local neighbourhood, practising curb steps, or running through the home exercise program prescribed by your physiotherapist.',
          'Community Independence: Catching the bus to the local shops, practising handling money, or navigating supermarket aisles with an occupational therapy checklist.',
          'Speech & Communication: Practising speech articulation drills, reading aloud, or rehearsing how to order coffee using an AAC communication device.',
        ],
      },
      {
        heading: 'Ensuring Safety and Clinical Governance',
        paragraphs: [
          'AHAs do not work in isolation. At Koina Allied Health, our supervising clinicians maintain ongoing oversight. The therapist reviews progress notes weekly, adjusts exercises as the participant improves, and conducts regular joint review sessions.',
          'This ensures participants achieve the highest standard of evidence-based allied healthcare while getting the maximum possible value from their funding.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which NDIS funding categories can be used for an AHA?',
        answer:
          'Allied Health Assistants can be funded through both Capacity Building (Improved Daily Living - Therapy Assistant line item) and Core Supports (Assistance with Daily Life). This provides tremendous flexibility for participants with limited therapy budgets.',
      },
      {
        question: 'Can an AHA complete my NDIS plan review report?',
        answer:
          'No. Formal diagnostic reports, Functional Capacity Assessments, and plan review justifications must be written and signed by an AHPRA-registered clinician. The AHA provides valuable observational data that informs the therapist’s final report.',
      },
      {
        question: 'Do Home Care Packages fund Allied Health Assistants?',
        answer:
          'Yes. Many aged care providers love utilizing AHAs for routine reablement and exercise maintenance because it allows package funds to stretch significantly further across the year.',
      },
    ],
  },
  {
    slug: 'physiotherapy-vs-occupational-therapy-guide',
    title: 'Physiotherapy vs. Occupational Therapy: Which One Does My Loved One Actually Need?',
    searchIntentQuery: "Difference between physiotherapy and occupational therapy in home care",
    excerpt:
      'Wondering whether to book a physio or an OT? A clear, everyday guide explaining how both disciplines help, what each focuses on, and when having both creates the best outcome.',
    category: 'Physiotherapy & Mobility',
    readTime: '6 min read',
    publishedDate: '10 September 2026',
    author: {
      name: 'David Reynolds, BPhysio',
      role: 'Principal Community Physiotherapist',
    },
    imageSrc: '/images/cohort-aged-care.jpg',
    imageAlt: 'Senior woman discussing home rehabilitation and mobility goals with allied health practitioner',
    keyTakeaways: [
      'The simple rule of thumb: Physiotherapists help you move your body; Occupational Therapists help you do the things that matter',
      'Which clinician manages walking aids, wheelchairs, and complex equipment trials',
      'How OTs and Physios work together after hospital discharge or stroke recovery',
      'How to request a joint multidisciplinary intake through NDIS, Aged Care, or DVA',
    ],
    sections: [
      {
        heading: 'The Quickest Way to Tell the Difference',
        paragraphs: [
          'If you have ever felt confused about whether your aging parent or family member needs a physiotherapist or an occupational therapist, you are in good company. It is one of the most common questions our intake team answers every single day.',
          'Here is the simplest way to think about it: A Physiotherapist focuses on the movement of the physical body—joint flexibility, muscle strength, gait retraining, reducing pain, and keeping you on your feet safely. An Occupational Therapist focuses on function and purpose—the activities (or "occupations") you want and need to do every day, such as showering, cooking a meal, getting dressed, or engaging in your community.',
        ],
      },
      {
        heading: 'What a Community Physiotherapist Focuses On',
        paragraphs: [
          'A physio visits your home to assess how your joints and muscles work together. They look at your walking style, check your joint range of motion, test leg strength, and assess balance.',
          'If you are recovering from a knee replacement, managing arthritis, recovering from a stroke, or struggling with balance, your physio builds an active exercise program, helps you practice walking outdoors, and recommends walking frames or quad-sticks that match your gait.',
        ],
      },
      {
        heading: 'What an Occupational Therapist Focuses On',
        paragraphs: [
          'An OT looks at the whole picture: your abilities, your routines, and the physical environment you live in. If you want to prepare your own lunch but struggle to reach the high pantry, an OT rearranges your kitchen or recommends adapted utensils.',
          'If you are scared of slipping in the shower, an OT assesses your bathroom and specifies grab rails, bath boards, or a roll-in shower. They also conduct comprehensive Functional Capacity Assessments (FCAs) and evaluate complex power wheelchairs and home modifications.',
        ],
        callout: {
          title: 'The Power of Both Together',
          text: 'Often, the best outcome comes from Physio and OT working side by side. For example, the Physio builds leg strength so you can stand up securely, while the OT configures grab rails and a shower chair so you can wash yourself independently.',
        },
      },
    ],
    faqs: [
      {
        question: 'Can I have both a physio and an OT at the same time on my NDIS plan?',
        answer:
          'Yes, absolutely. Most NDIS participants with physical disabilities or neurological conditions have both disciplines funded under Capacity Building (Improved Daily Living). Our team coordinates internally so visits complement each other.',
      },
      {
        question: 'Who should assess for a wheelchair: a physio or an OT?',
        answer:
          'Both clinicians can assess mobility equipment, but comprehensive wheelchair seating, pressure-relieving cushions, and powered wheelchair trials are most commonly led by an Occupational Therapist with input on posture and transfers from a Physiotherapist.',
      },
      {
        question: 'Do I need two separate doctor referrals for physio and OT?',
        answer:
          'For NDIS and private care, no GP referral is required at all. For DVA or Medicare CDM plans, your GP can write referrals for both disciplines on the same appointment.',
      },
    ],
  },
  {
    slug: 'home-care-packages-allied-health-explained',
    title: 'How Home Care Packages (HCP Levels 1 to 4) Pay for In-Home Allied Health Across Queensland',
    searchIntentQuery: "Can I use my Home Care Package for physiotherapy or occupational therapy at home?",
    excerpt:
      'A straightforward guide for seniors, adult children, and care managers. Learn how HCP funds can be allocated directly to allied health with zero out-of-pocket costs.',
    category: 'Aged Care & HCP',
    readTime: '5 min read',
    publishedDate: '07 September 2026',
    author: {
      name: 'Sarah Mitchell, BOccThy',
      role: 'Senior Occupational Therapist & Clinical Intake Lead',
    },
    imageSrc: '/images/cohort-aged-care.jpg',
    imageAlt: 'Senior couple receiving supportive home care and therapy guidance',
    keyTakeaways: [
      'How HCP Levels 1 through 4 fund physiotherapy, occupational therapy, and speech pathology',
      'The role of proactive allied health in delaying or preventing entry into residential aged care',
      'How Koina coordinates billing directly with your Care Manager or package provider',
      'Getting mobility equipment and minor home modifications approved from package reserves',
    ],
    sections: [
      {
        heading: 'Your Home Care Package is Designed for Independence',
        paragraphs: [
          'Many older Australians and their adult children think Home Care Packages are only for domestic cleaning, meal delivery, and lawn mowing. While those services are helpful, the primary purpose of an Australian Home Care Package (HCP) is reablement and restorative care—helping you stay strong, capable, and confident at home.',
          'Under the My Aged Care framework, you have the right to allocate a portion of your package budget toward specialized allied health care, including in-home physiotherapy, occupational therapy, and speech pathology.',
        ],
      },
      {
        heading: 'How Allied Health Fits Across HCP Levels 1 to 4',
        paragraphs: [
          'Level 1 (Basic care needs): Ideal for an initial OT home safety audit and an occasional physiotherapist review to set up a home balance exercise program.',
          'Level 2 (Low-level care needs): Supports regular fortnightly or monthly allied health visits to manage joint arthritis, mobility changes, and falls prevention equipment.',
          'Level 3 & Level 4 (Intermediate to High-level care needs): Designed for more intensive support. This can include weekly therapy sessions, post-stroke rehabilitation, Parkinson’s disease management, dysphagia mealtime plans, and major home modifications like accessible bathrooms.',
        ],
        callout: {
          title: 'Direct Provider Billing',
          text: 'You never have to pay upfront out of your pension. Koina Allied Health enters into a service agreement with your Home Care Package provider (e.g. Anglicare, Bolton Clarke, Australian Unity, My Care Solution) and bills them directly.',
        },
      },
    ],
    faqs: [
      {
        question: 'Do I need my Care Manager’s permission to start therapy?',
        answer:
          'Yes, your Care Manager or package coordinator must confirm there is sufficient budget in your monthly allocation. You can simply ask them to refer you to Koina Allied Health, or you can contact us directly and we will coordinate with your Care Manager.',
      },
      {
        question: 'What if my package funds are running low?',
        answer:
          'If your package is stretched, our clinicians can conduct an assessment and train an Allied Health Assistant or support worker to guide your routine exercises, drastically lowering monthly costs while maintaining therapy momentum.',
      },
      {
        question: 'Can HCP funds pay for walking frames and shower chairs?',
        answer:
          'Yes. Assistive technology recommended by an Occupational Therapist or Physiotherapist is an approved expenditure under Home Care Package guidelines.',
      },
    ],
  },
  {
    slug: 'do-i-need-gp-referral-allied-health-australia',
    title: 'Do I Need a GP Referral for In-Home Physiotherapy or Occupational Therapy in Australia?',
    searchIntentQuery: "Do you need a doctor referral to see a physiotherapist or OT at home?",
    excerpt:
      'Answers to one of Australia’s most searched health questions. Learn when a doctor’s referral is required, when you can book directly, and how Medicare and DVA billing works.',
    category: 'NDIS Insights',
    readTime: '4 min read',
    publishedDate: '15 September 2026',
    author: {
      name: 'Sarah Mitchell, BOccThy',
      role: 'Senior Occupational Therapist & Clinical Intake Lead',
    },
    imageSrc: '/images/cohort-private.jpg',
    imageAlt: 'Healthcare clinician providing warm guidance on intake and referral pathways',
    keyTakeaways: [
      'NDIS participants: No GP referral required (self-refer or support coordinator referral)',
      'Private / Self-Funded clients: No referral required (book directly anytime)',
      'DVA Gold & White Card holders: GP Form D904 required for direct billing',
      'Medicare CDM/EPC: GP Chronic Disease Management plan required for Medicare rebates',
    ],
    sections: [
      {
        heading: 'The Short Answer: Usually, No!',
        paragraphs: [
          'In Australia, physiotherapists, occupational therapists, and speech pathologists are primary contact healthcare practitioners. This means you do not legally need a doctor’s permission or GP referral just to book an appointment.',
          'However, whether you need a referral depends entirely on who is paying for the service. Here is how it breaks down across the four primary funding pathways in Queensland.',
        ],
      },
      {
        heading: 'Referral Requirements by Funding Category',
        paragraphs: [
          '1. NDIS (Plan-Managed & Self-Managed): No GP referral needed. You, your family, or your Support Coordinator can submit a referral directly to our intake team at any time.',
          '2. Private & Self-Funded: No referral needed. If you have private health insurance extras cover, you can claim rebates directly with the itemized receipts we provide.',
          '3. Department of Veterans’ Affairs (DVA): Yes, a GP referral (Form D904) is required. This allows us to bill DVA directly so you pay zero out-of-pocket costs.',
          '4. Medicare Chronic Disease Management (CDM/EPC): Yes. Your GP must prepare a formal Chronic Disease Management Plan to authorize up to 5 Medicare-subsidized allied health sessions per calendar year.',
        ],
        callout: {
          title: 'Quick 2-Minute Referral',
          text: 'Ready to start? You can submit your details online through our website in under two minutes. Our Queensland clinical coordination team reviews every referral within 24 business hours.',
        },
      },
    ],
    faqs: [
      {
        question: 'Can I refer my elderly parent directly online?',
        answer:
          'Yes. Adult children and family members can complete our online intake form on behalf of a parent or loved one. Just include their details and your contact information.',
      },
      {
        question: 'How long does a DVA D904 GP referral last?',
        answer:
          'Under the DVA Treatment Cycle framework, a standard GP referral covers up to 12 sessions or 1 year of care, whichever comes first. At the end of the cycle, your therapist provides a progress report back to your GP.',
      },
      {
        question: 'Can private health funds be claimed on the spot for home visits?',
        answer:
          'We provide complete itemized receipts containing our clinician’s AHPRA registration number and health fund item numbers, which you can submit to your insurer’s app for immediate electronic reimbursement.',
      },
    ],
  },
  {
    slug: 'stroke-recovery-at-home-allied-health-guide',
    title: 'Stroke Recovery at Home: The First 90 Days and Building Your In-Home Allied Health Team',
    searchIntentQuery: "What therapy is needed after a stroke at home?",
    excerpt:
      'A practical, compassionate roadmap for stroke survivors and families leaving hospital. How Physiotherapy, OT, Speech Pathology, and AHAs collaborate to regain independence.',
    category: 'Physiotherapy & Mobility',
    readTime: '7 min read',
    publishedDate: '01 September 2026',
    author: {
      name: 'David Reynolds, BPhysio',
      role: 'Principal Community Physiotherapist',
    },
    imageSrc: '/images/service-physio.jpg',
    imageAlt: 'Physiotherapist supporting patient with upper limb and neurological gait recovery',
    keyTakeaways: [
      'The neuroplasticity window: Why intensive, early home therapy yields the fastest functional gains',
      'The Physio role: Safe transfers, gait retraining, and hemiplegic shoulder protection',
      'The OT role: Retraining arm use, fatigue management, and bathroom accessibility',
      'The Speech Pathologist role: Dysphagia swallowing safety and aphasia communication strategies',
    ],
    sections: [
      {
        heading: 'Leaving the Hospital: The Beginning of Real Recovery',
        paragraphs: [
          'Being discharged from the hospital after a stroke is both a huge milestone and a deeply overwhelming moment. In the hospital, nurses and therapists are available at the press of a call button. Suddenly, you or your loved one is back in your own house, faced with steps, tight hallways, and unfamiliar physical fatigue.',
          'The first 90 days following a stroke represent a period of heightened neuroplasticity—the brain’s natural ability to rewire neural connections and learn alternative ways to move and communicate. Starting organized, home-based rehabilitation immediately after hospital discharge is critical.',
        ],
      },
      {
        heading: 'Your In-Home Multidisciplinary Team',
        paragraphs: [
          'Effective stroke rehabilitation requires more than one clinical lens. An integrated team addresses every aspect of daily life:',
          'Physiotherapy: Focuses on mobility, rebuilding balance, preventing joint stiffness, and helping you transfer safely between the bed, wheelchair, and dining chair.',
          'Occupational Therapy: Focuses on functional arm recovery, fine motor tasks (like buttoning a shirt or holding a fork), energy conservation for post-stroke fatigue, and home safety modifications.',
          'Speech Pathology: Evaluates safe swallowing to prevent aspiration pneumonia, and provides speech therapy for aphasia (difficulty speaking or finding words) or dysarthria (slurred speech).',
          'Allied Health Assistants (AHAs): Deliver the daily, repetitive exercise drills that solidify the therapist’s program without exhausting your funding budget.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does the NDIS fund in-home stroke rehabilitation?',
        answer:
          'Yes. If you are under 65 at the time of your stroke and experience significant permanent functional impairment, you can apply for NDIS funding. For individuals over 65, Home Care Packages, CHSP, or DVA provide funding pathways.',
      },
      {
        question: 'Can stroke survivors regain hand and arm movement months later?',
        answer:
          'Yes. While early therapy is ideal, the brain maintains neuroplastic potential for years following a stroke. Targeted task-specific practice and constrained movement therapy can lead to meaningful functional improvements well beyond the initial recovery period.',
      },
      {
        question: 'How quickly can Koina clinicians visit after hospital discharge?',
        answer:
          'We prioritize hospital transition referrals and can often conduct an initial multidisciplinary intake visit within 48 to 72 hours across our Queensland hubs.',
      },
    ],
  },
  {
    slug: 'continence-assessment-ndis-aged-care-guide',
    title: 'Comprehensive Continence Assessments: Regaining Confidence, Dignity, and Funding Support',
    searchIntentQuery: "How to get an NDIS continence assessment for pads and products",
    excerpt:
      'A thoughtful, compassionate guide on bladder and bowel health. How Registered Nurses and OTs evaluate routines, trial discreet products, and secure NDIS funding for consumables.',
    category: 'Occupational Therapy',
    readTime: '5 min read',
    publishedDate: '20 August 2026',
    author: {
      name: 'Sarah Mitchell, BOccThy',
      role: 'Senior Occupational Therapist & Clinical Intake Lead',
    },
    imageSrc: '/images/service-assessments.jpg',
    imageAlt: 'Clinical coordinator conducting specialized health assessment',
    keyTakeaways: [
      'Why continence challenges are common, treatable, and nothing to feel embarrassed about',
      'What happens during an in-home clinical continence assessment',
      'Product trials: Finding the right fit, absorbency, and discretion for active daily life',
      'NDIS Core budget justification: How clinical reports secure annual funding for consumables',
    ],
    sections: [
      {
        heading: 'Breaking the Silence Around Continence',
        paragraphs: [
          'Incontinence affects millions of Australians living with neurological conditions, spinal injuries, autism, intellectual disabilities, and aging. Yet because of societal stigma, many individuals and families suffer in silence, paying hundreds of dollars out-of-pocket every month for pads and products that leak or cause skin irritation.',
          'Continence is a vital aspect of healthcare and personal dignity. A comprehensive continence assessment conducted by a qualified clinician (such as a Registered Nurse or Occupational Therapist) helps identify root causes, improve daily routines, and secure dedicated funding.',
        ],
      },
      {
        heading: 'How the In-Home Assessment Works',
        paragraphs: [
          'Our clinicians conduct continence assessments with the utmost sensitivity and discretion in the privacy of your home. We discuss your hydration, dietary habits, mobility, bathroom access, and daily routine.',
          'We evaluate what products you are currently using, identify whether skin integrity is compromised, and arrange free sample trials of modern, breathable, high-absorbency products that keep you comfortable and active.',
        ],
        callout: {
          title: 'Funding Your Annual Consumables',
          text: 'The NDIA requires a comprehensive Continence Assessment Report to allocate annual funding under Core Supports (Consumables). Our reports include precise product codes, daily usage rates, and itemized annual budgets to ensure smooth approvals.',
        },
      },
    ],
    faqs: [
      {
        question: 'Will NDIS pay for all my continence pads and aids?',
        answer:
          'Yes. If your continence needs are directly related to your disability, the NDIS will fund approved consumables (pads, pull-ups, sheaths, catheters, bed protection) through your Core Supports budget once a clinical assessment is submitted.',
      },
      {
        question: 'How often does a continence assessment need to be updated?',
        answer:
          'The NDIA typically requires an updated continence review every 1 to 2 years, or whenever there is a significant change in your functional health, weight, or medication.',
      },
      {
        question: 'Can this assessment be done via telehealth?',
        answer:
          'Yes. For regional Queensland participants or those who prefer remote consultation, our clinicians can conduct comprehensive continence interviews via secure telehealth and arrange product sample deliveries directly to your home.',
      },
    ],
  },
  {
    slug: 'dva-veteran-allied-health-entitlements-queensland',
    title: 'DVA Allied Health Entitlements: How Queensland Veterans Access Free In-Home Physio and OT',
    searchIntentQuery: "How do veterans get free in-home physiotherapy with DVA Gold Card?",
    excerpt:
      'A dedicated guide for Australian veterans and their families. Outlining DVA Gold and White Card coverage, direct billing with zero gap fees, and the Rehabilitation Appliances Program (RAP).',
    category: 'Physiotherapy & Mobility',
    readTime: '5 min read',
    publishedDate: '14 August 2026',
    author: {
      name: 'David Reynolds, BPhysio',
      role: 'Principal Community Physiotherapist',
    },
    imageSrc: '/images/cohort-dva.jpg',
    imageAlt: 'Veteran and community health practitioner reviewing mobility and health goals',
    keyTakeaways: [
      'Gold Card holders: 100% covered for all clinically indicated in-home therapy services',
      'White Card holders: 100% covered for accepted service-related health conditions',
      'Zero out-of-pocket costs: Koina bills DVA directly through the Medicare/DVA schedule',
      'Accessing mobility equipment, shower chairs, and home modifications via the DVA RAP scheme',
    ],
    sections: [
      {
        heading: 'Honouring Service with Respectful In-Home Care',
        paragraphs: [
          'Australian veterans who hold a Department of Veterans’ Affairs (DVA) Health Card are entitled to comprehensive, high-quality allied health care to maintain their physical independence and quality of life. Yet many veterans across Queensland are unaware that these services can be delivered directly in their own homes.',
          'At Koina Allied Health, we have a deep commitment to supporting veterans and war widows. Our mobile therapists travel to your home, assess your physical needs, and deliver personalized physiotherapy, occupational therapy, and speech pathology without requiring you to navigate traffic or clinic waiting rooms.',
        ],
      },
      {
        heading: 'Understanding Gold Card vs. White Card Entitlements',
        paragraphs: [
          'DVA Gold Card: Entitles the holder to clinically necessary allied health treatment for all health conditions, whether related to military service or not. There are zero gap fees or out-of-pocket costs.',
          'DVA White Card: Covers clinically necessary treatment for specific health conditions accepted by the DVA as service-related.',
          'Rehabilitation Appliances Program (RAP): Through RAP, our Occupational Therapists and Physiotherapists can prescribe and supply assistive equipment—including electric lift-recliner chairs, mobility scooters, walkers, shower stools, and home access ramps—fully funded by DVA.',
        ],
        callout: {
          title: 'The Simple 3-Step DVA Process',
          text: '1. Visit your GP and request a D904 referral for Koina Allied Health. 2. Contact our intake team or email your referral to contact@koina.com.au. 3. Your therapist visits you at home to begin your personalized care plan.',
        },
      },
    ],
    faqs: [
      {
        question: 'Are there any gap fees or out-of-pocket costs for DVA clients?',
        answer:
          'None at all. Koina Allied Health directly claims from the Department of Veterans’ Affairs at scheduled government rates. You will never receive a bill or out-of-pocket charge for clinically approved services.',
      },
      {
        question: 'Can an OT help me get a lift-recliner chair or ramp through DVA?',
        answer:
          'Yes. Our AHPRA-registered Occupational Therapists are accredited to assess your needs, complete RAP direct orders, and coordinate installation with approved medical equipment suppliers.',
      },
      {
        question: 'Does my GP need to refer me every year?',
        answer:
          'Under the DVA Treatment Cycle arrangements, a GP referral (Form D904) lasts for 12 sessions or 12 months, whichever comes first. When your cycle nears completion, we send a clinical report to your GP recommending whether another cycle is beneficial.',
      },
    ],
  },
];
