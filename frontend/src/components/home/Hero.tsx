import Container from '../common/Container';
import Button from '../common/Button';
import { siteContent } from '../../data/siteContent';
import styles from './Hero.module.css';

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.background} aria-hidden="true" />
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className="eyebrow">{hero.eyebrow}</span>
            <h1 id="hero-heading" className={styles.title}>
              {hero.title}
            </h1>
            <p className={styles.subtitle}>{hero.subtitle}</p>
            <div className={styles.actions}>
              <Button to={hero.primaryCta.path} variant="primary" size="lg">
                {hero.primaryCta.label}
              </Button>
              <Button
                to={hero.secondaryCta.path}
                variant="secondary"
                size="lg"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.imageWrapper}>
              <img
                src={hero.image}
                alt={hero.imageAlt}
                loading="eager"
                width={640}
                height={720}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
