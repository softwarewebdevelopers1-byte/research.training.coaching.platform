import type { ReactNode } from 'react';

export interface NavLink {
  label: string;
  path: string;
}

export interface NavItem extends NavLink {
  children?: NavLink[];
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceAudienceItem {
  label: string;
  description: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  iconKey: 'coaching' | 'training' | 'research';
  image: string;
  imageAlt: string;
  benefits: ServiceBenefit[];
  audience: ServiceAudienceItem[];
  features: ServiceFeature[];
  process?: ServiceFeature[];
  deliveryOptions?: ServiceFeature[];
  deliverables?: ServiceFeature[];
}

export interface Differentiator {
  title: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  imageAlt: string;
}

export interface CredentialItem {
  label: string;
  detail: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'lg';
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}
