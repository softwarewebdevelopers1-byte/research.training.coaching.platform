import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import ServiceCard from '../components/services/ServiceCard';
import CTASection from '../components/common/CTASection';
import { services } from '../data/services';
import styles from './Services.module.css';

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Explore our professional services — coaching, training, and research designed to help people and organisations achieve meaningful outcomes."
        path="/services"
      />

      <section className={styles.hero}>
        <Container>
          <span className="eyebrow">Our services</span>
          <h1 className={styles.title}>
            Coaching, Training & Research that make a difference
          </h1>
          <p className={styles.subtitle}>
            Explore our three core service areas. Each one is designed to
            create practical, lasting value for individuals and organisations.
          </p>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.grid}>
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
