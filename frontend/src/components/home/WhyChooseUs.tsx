import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { siteContent } from '../../data/siteContent';
import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
  const { whyChooseUs } = siteContent;

  return (
    <section className={styles.section} aria-labelledby="why-heading">
      <Container>
        <SectionHeading
          eyebrow={whyChooseUs.eyebrow}
          title={whyChooseUs.title}
          description={whyChooseUs.description}
          align="center"
        />
        <ul className={styles.grid}>
          {whyChooseUs.items.map((item) => (
            <li key={item.title} className={styles.item}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDescription}>{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
