import type { SectionHeadingProps } from '../../types';
import styles from './SectionHeading.module.css';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={`${styles.wrapper} ${align === 'center' ? styles.center : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
