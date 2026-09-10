import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import ServiceCard from '../services/ServiceCard';
import { services } from '../../data/services';
import styles from './ServicesPreview.module.css';

export default function ServicesPreview() {
  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Three ways we help clients grow"
          description="Focused services designed to meet people and organisations where they are."
        />
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
