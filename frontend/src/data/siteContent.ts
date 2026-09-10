import type {
  CredentialItem,
  Differentiator,
  SocialLink,
  TeamMember,
  ValueItem,
} from '../types';

export const siteContent = {
  company: {
    name: '[Company Name]',
    tagline: 'Coaching · Training · Research',
    shortDescription:
      '[Company Description] — a professional consultancy dedicated to empowering individuals and organisations through coaching, training, and research.',
    logoText: '[Company Name]',
  },

  contact: {
    email: '[Email Address]',
    phone: '[Phone Number]',
    phoneDisplay: '[Phone Number]',
    whatsapp: '[WhatsApp Number]',
    whatsappMessage: 'Hello, I would like to enquire about your services.',
    location: '[Address / Location]',
    mapEmbedUrl: '',
  },

  social: [
    { label: 'LinkedIn', href: '#' },
    { label: 'X (Twitter)', href: '#' },
    { label: 'Facebook', href: '#' },
  ] as SocialLink[],

  hero: {
    eyebrow: 'Coaching · Training · Research',
    title:
      'Empowering People and Organizations Through Coaching, Training & Research',
    subtitle:
      '[Short supporting statement about how the company helps clients achieve meaningful, measurable outcomes.]',
    primaryCta: { label: 'Get in Touch', path: '/contact' },
    secondaryCta: { label: 'Explore Services', path: '/services' },
    image: '/images/hero-placeholder.jpg',
    imageAlt: '[Professional photo of the company / team at work]',
  },

  credibility: {
    eyebrow: 'Who we are',
    title: 'A trusted partner for people and organisations',
    body:
      '[Company Name] works alongside individuals, teams, and organisations to design and deliver coaching, training, and research that create lasting impact. [Short description of the company’s background and approach.]',
    cta: { label: 'More about us', path: '/about' },
  },

  whyChooseUs: {
    eyebrow: 'Why choose us',
    title: 'What sets our work apart',
    description:
      'A snapshot of the principles that guide how we engage with every client.',
    items: [
      {
        title: 'Evidence-informed approach',
        description:
          'Our methods are grounded in established research and practical experience.',
      },
      {
        title: 'Client-focused solutions',
        description:
          'Every engagement is tailored to the context, goals, and people involved.',
      },
      {
        title: 'Practical expertise',
        description:
          'We focus on outcomes that clients can apply in their real environment.',
      },
      {
        title: 'Collaborative partnership',
        description:
          'We work with clients, not just for them, building capability along the way.',
      },
    ] as Differentiator[],
  },

  experience: {
    eyebrow: 'Experience & credibility',
    title: 'Trusted by organisations and professionals',
    description:
      'Replace the placeholders below with real partnerships, certifications, affiliations, and publications once available.',
    items: [
      { label: '[Partner / Client]', detail: '[Short description]' },
      { label: '[Certification]', detail: '[Issuing body, year]' },
      { label: '[Professional affiliation]', detail: '[Short description]' },
      { label: '[Publication / Achievement]', detail: '[Short description]' },
    ] as CredentialItem[],
  },

  cta: {
    title: "Let's work together",
    description:
      'Tell us about your goals and we will get back to you to explore how we can help.',
    primary: { label: 'Contact Us', path: '/contact' },
    whatsappLabel: 'WhatsApp',
  },

  about: {
    hero: {
      eyebrow: 'About us',
      title: 'A consultancy built on trust, expertise, and impact',
      subtitle:
        '[Short introduction to who the company is and the value it brings to clients.]',
    },
    story: {
      eyebrow: 'Our story',
      title: 'How we got here',
      body: [
        '[Paragraph 1 — background, origins, and motivation for starting the company.]',
        '[Paragraph 2 — the kinds of clients served and the problems we solve.]',
      ],
    },
    mission: {
      title: 'Our mission',
      body:
        '[Mission statement — what we exist to do and for whom.]',
    },
    vision: {
      title: 'Our vision',
      body:
        '[Vision statement — the long-term impact we want to have.]',
    },
    values: {
      eyebrow: 'Our values',
      title: 'What we stand for',
      items: [
        { title: '[Value 1]', description: '[Short description]' },
        { title: '[Value 2]', description: '[Short description]' },
        { title: '[Value 3]', description: '[Short description]' },
        { title: '[Value 4]', description: '[Short description]' },
      ] as ValueItem[],
    },
    team: {
      eyebrow: 'Our team',
      title: 'People behind the work',
      members: [
        {
          name: '[Founder Name]',
          role: '[Role / Title]',
          bio: '[Short professional biography.]',
          image: '/images/team-placeholder.jpg',
          imageAlt: '[Portrait of Founder Name]',
        },
      ] as TeamMember[],
    },
    credentials: {
      eyebrow: 'Credentials',
      title: 'Experience and professional background',
      items: [
        { label: '[Credential]', detail: '[Short description]' },
        { label: '[Credential]', detail: '[Short description]' },
        { label: '[Credential]', detail: '[Short description]' },
      ] as CredentialItem[],
    },
  },
} as const;

export type SiteContent = typeof siteContent;
