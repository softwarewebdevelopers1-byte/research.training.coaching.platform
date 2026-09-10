import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import ServiceHero from '../components/services/ServiceHero';
import ServiceBenefits from '../components/services/ServiceBenefits';
import ServiceCTA from '../components/services/ServiceCTA';
import { getServiceBySlug } from '../data/services';
import styles from './ServicePage.module.css';

export default function Coaching() {
  const service = getServiceBySlug('coaching');

  if (!service) return null;

  return (
    <>
      <SEO
        title="Coaching Services"
        description="Professional coaching for individuals, teams, and organisations. Gain clarity, build capability, and make meaningful progress with [Company Name]."
        path="/services/coaching"
      />

      <ServiceHero
        service={service}
        eyebrow="Coaching"
        intro="Our coaching services create a focused, supportive space for people to think clearly, build capability, and move forward with confidence."
      />

      <section className={styles.section}>
        <Container>
          <div className={styles.layout}>
            <div>
              <h2 className={styles.columnTitle}>What our coaching offers</h2>
              <ul className={styles.featureGrid}>
                {service.features.map((f) => (
                  <li key={f.title} className={styles.featureItem}>
                    <h3 className={styles.featureTitle}>{f.title}</h3>
                    <p className={styles.featureDescription}>{f.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className={styles.columnTitle}>Who it is for</h2>
              <ul className={styles.audienceList}>
                {service.audience.map((a) => (
                  <li key={a.label} className={styles.audienceItem}>
                    <span className={styles.audienceLabel}>{a.label}</span>
                    <span className={styles.audienceDesc}>{a.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {service.process && (
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <Container>
            <h2 className={styles.columnTitle}>Our approach</h2>
            <ol className={styles.processList}>
              {service.process.map((p) => (
                <li key={p.title} className={styles.processItem}>
                  <h3 className={styles.processTitle}>{p.title}</h3>
                  <p className={styles.processDesc}>{p.description}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      <section className={styles.section}>
        <Container>
          <ServiceBenefits benefits={service.benefits} />
        </Container>
      </section>

      <ServiceCTA serviceName="coaching" />
    </>
  );
}
