import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import Container from '../common/Container';
import Logo from '../common/Logo';
import { footerNav } from '../../data/navigation';
import { siteContent } from '../../data/siteContent';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Logo variant="light" />
            <p className={styles.description}>
              {siteContent.company.shortDescription}
            </p>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Company</h3>
            <ul className={styles.list}>
              {footerNav.company.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Services</h3>
            <ul className={styles.list}>
              {footerNav.services.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact</h3>
            <ul className={styles.list}>
              <li className={styles.contactItem}>
                <Mail size={16} aria-hidden="true" />
                <span>{siteContent.contact.email}</span>
              </li>
              <li className={styles.contactItem}>
                <Phone size={16} aria-hidden="true" />
                <span>{siteContent.contact.phoneDisplay}</span>
              </li>
              <li className={styles.contactItem}>
                <MapPin size={16} aria-hidden="true" />
                <span>{siteContent.contact.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} {siteContent.company.name}. All rights reserved.
          </p>
          <ul className={styles.socials}>
            {siteContent.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
