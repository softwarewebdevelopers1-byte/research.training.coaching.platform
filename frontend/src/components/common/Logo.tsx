import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import styles from './Logo.module.css';

interface LogoProps {
  variant?: 'dark' | 'light';
}

/**
 * Replace the text-based mark below with the client's logo <img>
 * once the asset is provided. The wrapper and sizing will remain the same.
 */
export default function Logo({ variant = 'dark' }: LogoProps) {
  return (
    <Link
      to="/"
      className={`${styles.logo} ${styles[variant]}`}
      aria-label={`${siteContent.company.name} — home`}
    >
      <span className={styles.mark} aria-hidden="true">
        {/* Replace with: <img src="/images/logo.svg" alt="" /> */}
        {'{'}Logo{'}'}
      </span>
      <span className={styles.text}>{siteContent.company.logoText}</span>
    </Link>
  );
}
