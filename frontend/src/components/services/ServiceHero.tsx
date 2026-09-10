import Container from '../common/Container';
import type { Service } from '../../types';
import styles from './ServiceHero.module.css';

interface ServiceHeroProps {
  service: Service;
  eyebrow: string;
  intro: string;
}

export default function ServiceHero({ service, eyebrow, intro }: ServiceHeroProps) {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className="eyebrow">{eyebrow}</span>
            <h1 className={styles.title}>{service.name}</h1>
            <p className={styles.tagline}>{service.tagline}</p>
            <p className={styles.intro}>{intro}</p>
          </div>
          <div className={styles.visual}>
            <img
              src={service.image}
              alt={service.imageAlt}
              loading="eager"
              width={640}
              height={480}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
