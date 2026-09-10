import type { Service } from '../types';

export const services: Service[] = [
  {
    slug: 'coaching',
    name: 'Coaching',
    tagline: 'Personal and professional growth',
    shortDescription:
      'One-to-one and group coaching that helps people gain clarity, build capability, and make meaningful progress.',
    iconKey: 'coaching',
    image: '/images/coaching-placeholder.jpg',
    imageAlt: 'Coaching session placeholder image',
    benefits: [
      {
        title: 'Clarity and direction',
        description:
          'Structured conversations that help clients define goals and priorities.',
      },
      {
        title: 'Sustainable progress',
        description:
          'Practical strategies that translate insight into lasting habits.',
      },
      {
        title: 'Confidence and resilience',
        description:
          'Support to navigate challenges with a stronger sense of self.',
      },
    ],
    audience: [
      {
        label: 'Individual professionals',
        description: 'Leaders, managers, and specialists seeking growth.',
      },
      {
        label: 'Teams and groups',
        description: 'Teams working through change or new challenges.',
      },
      {
        label: 'Organisations',
        description: 'Programmes that develop people and culture.',
      },
    ],
    features: [
      {
        title: '[Coaching offer 1]',
        description: '[Short description of what this coaching offer covers.]',
      },
      {
        title: '[Coaching offer 2]',
        description: '[Short description of what this coaching offer covers.]',
      },
      {
        title: '[Coaching offer 3]',
        description: '[Short description of what this coaching offer covers.]',
      },
    ],
    process: [
      {
        title: 'Discovery',
        description:
          'We begin by understanding the client’s context, goals, and challenges.',
      },
      {
        title: 'Design',
        description:
          'Together we agree on a coaching focus, format, and cadence.',
      },
      {
        title: 'Engagement',
        description:
          'Regular sessions with reflection, tools, and accountability.',
      },
      {
        title: 'Review',
        description:
          'We review progress and adjust the approach as needed.',
      },
    ],
  },
  {
    slug: 'training',
    name: 'Training',
    tagline: 'Practical learning for real results',
    shortDescription:
      'Tailored training programmes that build skills, confidence, and capability for individuals and organisations.',
    iconKey: 'training',
    image: '/images/training-placeholder.jpg',
    imageAlt: 'Training session placeholder image',
    benefits: [
      {
        title: 'Relevant content',
        description:
          'Learning designed around the client’s actual context and goals.',
      },
      {
        title: 'Engaging delivery',
        description:
          'Interactive sessions that keep participants involved and motivated.',
      },
      {
        title: 'Lasting impact',
        description:
          'Practical tools participants can apply immediately.',
      },
    ],
    audience: [
      {
        label: 'Teams',
        description: 'Groups that need to build shared skills or alignment.',
      },
      {
        label: 'Leaders and managers',
        description: 'Programmes focused on leadership capability.',
      },
      {
        label: 'Organisations',
        description: 'Wider training programmes and staff development.',
      },
    ],
    features: [
      {
        title: '[Training area 1]',
        description: '[Short description of this training area.]',
      },
      {
        title: '[Training area 2]',
        description: '[Short description of this training area.]',
      },
      {
        title: '[Training area 3]',
        description: '[Short description of this training area.]',
      },
    ],
    deliveryOptions: [
      {
        title: 'In-person workshops',
        description:
          'Facilitated sessions delivered at the client’s location or a venue.',
      },
      {
        title: 'Virtual sessions',
        description:
          'Live online workshops and webinars for distributed teams.',
      },
      {
        title: 'Blended programmes',
        description:
          'A combination of formats designed for maximum flexibility.',
      },
    ],
  },
  {
    slug: 'research',
    name: 'Research',
    tagline: 'Insight that informs decisions',
    shortDescription:
      'Applied research and evaluation that helps organisations understand what works and make evidence-informed decisions.',
    iconKey: 'research',
    image: '/images/research-placeholder.jpg',
    imageAlt: 'Research and analysis placeholder image',
    benefits: [
      {
        title: 'Rigorous methods',
        description:
          'Research approaches matched to the question and context.',
      },
      {
        title: 'Actionable insight',
        description:
          'Findings presented clearly and with practical recommendations.',
      },
      {
        title: 'Independent perspective',
        description:
          'Objective analysis to inform strategy and decision-making.',
      },
    ],
    audience: [
      {
        label: 'Organisations',
        description: 'Teams needing evidence to guide strategy or programmes.',
      },
      {
        label: 'Programme owners',
        description: 'Those evaluating the impact of initiatives.',
      },
      {
        label: 'Partners',
        description: 'Collaborators on joint research or evaluation projects.',
      },
    ],
    features: [
      {
        title: '[Research capability 1]',
        description: '[Short description of this capability.]',
      },
      {
        title: '[Research capability 2]',
        description: '[Short description of this capability.]',
      },
      {
        title: '[Research capability 3]',
        description: '[Short description of this capability.]',
      },
    ],
    process: [
      {
        title: 'Framing',
        description:
          'Clarify the research question, scope, and intended use of findings.',
      },
      {
        title: 'Design',
        description:
          'Select methods, sampling, and tools appropriate to the question.',
      },
      {
        title: 'Fieldwork',
        description:
          'Collect and manage data with attention to quality and ethics.',
      },
      {
        title: 'Analysis & reporting',
        description:
          'Interpret findings and present clear, usable recommendations.',
      },
    ],
    deliverables: [
      {
        title: 'Research report',
        description: 'A clear written report with findings and recommendations.',
      },
      {
        title: 'Executive summary',
        description: 'A short summary for decision-makers and stakeholders.',
      },
      {
        title: 'Presentation',
        description: 'A briefing session to walk through the findings.',
      },
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
