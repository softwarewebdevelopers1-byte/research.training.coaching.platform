import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import ServiceHero from '../components/services/ServiceHero';
import ServiceBenefits from '../components/services/ServiceBenefits';
import ServiceCTA from '../components/services/ServiceCTA';
import { getServiceBySlug } from '../data/services';
import styles from './ServicePage.module.css';

export default function Research() {
  const service = getServiceBySlug('research');

  if (!service) return null;

  return (
    <>
      <SEO
        title="Research Services"
        description="Applied research and evaluation that helps organisations understand what works and make evidence-informed decisions."
        path="/services/research"
      />

      <ServiceHero
        service={service}
        eyebrow="Research"
        intro="Our research services provide rigorous, independent insight that helps organisations make better-informed decisions."
      />

      <section className={styles.section}>
        <Container>
          <h2 className={styles.columnTitle}>Research capabilities</h2>
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
            {service.process && (
              <div>
                <h2 className={styles.columnTitle}>Our approach</h2>
                <ol className={styles.processList}>
                  {service.process.map((p) => (
                    <li key={p.title} className={styles.processItem}>
                      <h3 className={styles.processTitle}>{p.title}</h3>
                      <p className={styles.processDesc}>{p.description}</p>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </Container>
      </section>

      {service.deliverables && (
        <section className={styles.section}>
          <Container>
            <h2 className={styles.columnTitle}>Potential deliverables</h2>
            <ul className={styles.featureGrid}>
              {service.deliverables.map((d) => (
                <li key={d.title} className={styles.featureItem}>
                  <h3 className={styles.featureTitle}>{d.title}</h3>
                  <p className={styles.featureDescription}>{d.description}</p>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <Container>
          <ServiceBenefits benefits={service.benefits} />
        </Container>
      </section>

      <ServiceCTA serviceName="research" />
    </>
  );
}
