import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
}

const SITE_NAME = '[Company Name]';
const BASE_URL = 'https://example.com'; // replace with production domain

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function SEO({
  title,
  description,
  path = '/',
  image = '/og-placeholder.jpg',
  type = 'website',
}: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;

  useEffect(() => {
    document.title = fullTitle;

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', `${BASE_URL}${image}`);
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
  }, [fullTitle, description, url, image, type]);

  return null;
}
