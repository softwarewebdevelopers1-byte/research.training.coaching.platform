import type { NavItem } from '../types';

export const mainNav: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Coaching', path: '/services/coaching' },
      { label: 'Training', path: '/services/training' },
      { label: 'Research', path: '/services/research' },
    ],
  },
  { label: 'Contact', path: '/contact' },
];

export const footerNav = {
  company: [
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ],
  services: [
    { label: 'Coaching', path: '/services/coaching' },
    { label: 'Training', path: '/services/training' },
    { label: 'Research', path: '/services/research' },
  ],
};
