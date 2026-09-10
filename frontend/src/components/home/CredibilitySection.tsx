import Container from '../common/Container';
import Button from '../common/Button';
import { siteContent } from '../../data/siteContent';
import styles from './CredibilitySection.module.css';

export default function CredibilitySection() {
  const { credibility } = siteContent;

  return (
    <section className={styles.section} aria-labelledby="credibility-heading">
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className="eyebrow">{credibility.eyebrow}</span>
            <h2 id="credibility-heading" className={styles.title}>
              {credibility.title}
            </h2>
            <p className={styles.body}>{credibility.body}</p>
            <Button to={credibility.cta.path} variant="secondary">
              {credibility.cta.label}
            </Button>
          </div>

          <div className={styles.visual} aria-hidden="true">
            <div className={styles.panel} />
          </div>
        </div>
      </Container>
    </section>
  );
}
