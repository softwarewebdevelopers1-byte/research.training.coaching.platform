import Container from '../common/Container';
import Button from '../common/Button';
import { siteContent } from '../../data/siteContent';
import styles from './ServiceCTA.module.css';

interface ServiceCTAProps {
  serviceName: string;
}

export default function ServiceCTA({ serviceName }: ServiceCTAProps) {
  const whatsappHref = siteContent.contact.whatsapp.startsWith('http')
    ? siteContent.contact.whatsapp
    : `https://wa.me/${siteContent.contact.whatsapp.replace(
        /[^\d]/g,
        '',
      )}?text=${encodeURIComponent(
        `Hello, I would like to enquire about your ${serviceName} services.`,
      )}`;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <div>
            <h2 className={styles.title}>
              Interested in our {serviceName} services?
            </h2>
            <p className={styles.description}>
              Get in touch to discuss how we can support your goals.
            </p>
          </div>
          <div className={styles.actions}>
            <Button to="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
            <Button href={whatsappHref} variant="secondary" size="lg">
              WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
