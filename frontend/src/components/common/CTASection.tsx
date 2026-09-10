import Container from './Container';
import Button from './Button';
import { siteContent } from '../../data/siteContent';
import styles from './CTASection.module.css';

interface CTASectionProps {
  title?: string;
  description?: string;
}

export default function CTASection({
  title = siteContent.cta.title,
  description = siteContent.cta.description,
}: CTASectionProps) {
  const whatsappHref = siteContent.contact.whatsapp.startsWith('http')
    ? siteContent.contact.whatsapp
    : `https://wa.me/${siteContent.contact.whatsapp.replace(
        /[^\d]/g,
        '',
      )}?text=${encodeURIComponent(siteContent.contact.whatsappMessage)}`;

  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <Container>
        <div className={styles.inner}>
          <div className={styles.text}>
            <h2 id="cta-heading" className={styles.title}>
              {title}
            </h2>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.actions}>
            <Button to={siteContent.cta.primary.path} variant="primary" size="lg">
              {siteContent.cta.primary.label}
            </Button>
            <Button href={whatsappHref} variant="secondary" size="lg">
              {siteContent.cta.whatsappLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
