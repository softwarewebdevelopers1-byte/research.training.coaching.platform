import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import ContactForm from '../components/contact/ContactForm';
import { siteContent } from '../data/siteContent';
import styles from './Contact.module.css';

export default function Contact() {
  const { contact, social } = siteContent;

  const whatsappHref = contact.whatsapp.startsWith('http')
    ? contact.whatsapp
    : `https://wa.me/${contact.whatsapp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(
        contact.whatsappMessage,
      )}`;

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with [Company Name] to discuss coaching, training, or research support. Email, phone, WhatsApp, or send us a message."
        path="/contact"
      />

      <section className={styles.hero}>
        <Container>
          <span className="eyebrow">Contact</span>
          <h1 className={styles.title}>Let’s start a conversation</h1>
          <p className={styles.subtitle}>
            Tell us about your goals or the challenge you’re facing. We’ll get
            back to you as soon as we can.
          </p>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.grid}>
            <aside className={styles.info}>
              <h2 className={styles.infoTitle}>Contact information</h2>

              <ul className={styles.infoList}>
                <li>
                  <Mail size={18} aria-hidden="true" />
                  <div>
                    <span className={styles.infoLabel}>Email</span>
                    <span className={styles.infoValue}>{contact.email}</span>
                  </div>
                </li>
                <li>
                  <Phone size={18} aria-hidden="true" />
                  <div>
                    <span className={styles.infoLabel}>Phone</span>
                    <span className={styles.infoValue}>
                      {contact.phoneDisplay}
                    </span>
                  </div>
                </li>
                <li>
                  <MessageCircle size={18} aria-hidden="true" />
                  <div>
                    <span className={styles.infoLabel}>WhatsApp</span>
                    <a
                      href={whatsappHref}
                      className={styles.infoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Message us on WhatsApp
                    </a>
                  </div>
                </li>
                <li>
                  <MapPin size={18} aria-hidden="true" />
                  <div>
                    <span className={styles.infoLabel}>Location</span>
                    <span className={styles.infoValue}>
                      {contact.location}
                    </span>
                  </div>
                </li>
              </ul>

              <div className={styles.socialBlock}>
                <span className={styles.infoLabel}>Follow</span>
                <ul className={styles.socialList}>
                  {social.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        className={styles.infoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className={styles.formWrapper}>
              <h2 className={styles.infoTitle}>Send us a message</h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {contact.mapEmbedUrl && (
        <section className={styles.mapSection}>
          <Container>
            <div className={styles.mapWrapper}>
              <iframe
                src={contact.mapEmbedUrl}
                title="Company location map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
