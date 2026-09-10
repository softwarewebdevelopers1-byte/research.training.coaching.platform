import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import ServiceHero from '../components/services/ServiceHero';
import ServiceBenefits from '../components/services/ServiceBenefits';
import ServiceCTA from '../components/services/ServiceCTA';
import { getServiceBySlug } from '../data/services';
import styles from './ServicePage.module.css';

export default function Training() {
  const service = getServiceBySlug('training');

  if (!service) return null;

  return (
    <>
      <SEO
        title="Training Services"
        description="Tailored training programmes that build practical skills and lasting capability for teams, leaders, and organisations."
        path="/services/training"
      />

      <ServiceHero
        service={service}
        eyebrow="Training"
        intro="Our training programmes are practical, engaging, and designed around the real context and goals of the people taking part."
      />

      <section className={styles.section}>
        <Container>
          <h2 className={styles.columnTitle}>Training areas</h2>
          <ul className={styles.featureGrid}>
            {service.features.map((f) => (
              <li key={f.title} className={styles.featureItem}>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDescription}>{f.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <Container>
          <div className={styles.layout}>
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
            {service.deliveryOptions && (
              <div>
                <h2 className={styles.columnTitle}>Delivery options</h2>
                <ul className={styles.audienceList}>
                  {service.deliveryOptions.map((d) => (
                    <li key={d.title} className={styles.audienceItem}>
                      <span className={styles.audienceLabel}>{d.title}</span>
                      <span className={styles.audienceDesc}>
                        {d.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <ServiceBenefits benefits={service.benefits} />
        </Container>
      </section>

      <ServiceCTA serviceName="training" />
    </>
  );
}
