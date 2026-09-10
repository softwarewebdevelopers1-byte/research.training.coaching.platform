import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import CTASection from '../components/common/CTASection';
import { siteContent } from '../data/siteContent';
import styles from './About.module.css';

export default function About() {
  const { about } = siteContent;

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about [Company Name] — our story, mission, vision, values, and the team behind our coaching, training, and research work."
        path="/about"
      />

      <section className={styles.hero}>
        <Container>
          <span className="eyebrow">{about.hero.eyebrow}</span>
          <h1 className={styles.heroTitle}>{about.hero.title}</h1>
          <p className={styles.heroSubtitle}>{about.hero.subtitle}</p>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.twoCol}>
            <div>
              <span className="eyebrow">{about.story.eyebrow}</span>
              <h2>{about.story.title}</h2>
            </div>
            <div>
              {about.story.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <Container>
          <div className={styles.missionVision}>
            <div className={styles.mvCard}>
              <h3>{about.mission.title}</h3>
              <p>{about.mission.body}</p>
            </div>
            <div className={styles.mvCard}>
              <h3>{about.vision.title}</h3>
              <p>{about.vision.body}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <SectionHeading
            eyebrow={about.values.eyebrow}
            title={about.values.title}
            align="center"
          />
          <ul className={styles.valuesGrid}>
            {about.values.items.map((v) => (
              <li key={v.title} className={styles.valueItem}>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p>{v.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <Container>
          <SectionHeading
            eyebrow={about.team.eyebrow}
            title={about.team.title}
          />
          <div className={styles.teamGrid}>
            {about.team.members.map((m) => (
              <article key={m.name} className={styles.teamCard}>
                <div className={styles.teamImage}>
                  <img src={m.image} alt={m.imageAlt} loading="lazy" />
                </div>
                <h3 className={styles.teamName}>{m.name}</h3>
                <p className={styles.teamRole}>{m.role}</p>
                <p className={styles.teamBio}>{m.bio}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <SectionHeading
            eyebrow={about.credentials.eyebrow}
            title={about.credentials.title}
          />
          <ul className={styles.credentialsList}>
            {about.credentials.items.map((c) => (
              <li key={c.label} className={styles.credentialItem}>
                <span className={styles.credentialLabel}>{c.label}</span>
                <span className={styles.credentialDetail}>{c.detail}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
