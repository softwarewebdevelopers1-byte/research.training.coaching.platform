import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { siteContent } from '../../data/siteContent';
import styles from './ExperienceSection.module.css';

export default function ExperienceSection() {
  const { experience } = siteContent;

  return (
    <section className={styles.section} aria-labelledby="experience-heading">
      <Container>
        <SectionHeading
          eyebrow={experience.eyebrow}
          title={experience.title}
          description={experience.description}
        />
        <ul className={styles.grid}>
          {experience.items.map((item) => (
            <li key={item.label} className={styles.item}>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.detail}>{item.detail}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
