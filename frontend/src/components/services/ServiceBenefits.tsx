import type { ServiceBenefit } from '../../types';
import styles from './ServiceBenefits.module.css';

interface ServiceBenefitsProps {
  title?: string;
  benefits: ServiceBenefit[];
}

export default function ServiceBenefits({
  title = 'Benefits',
  benefits,
}: ServiceBenefitsProps) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.grid}>
        {benefits.map((b) => (
          <li key={b.title} className={styles.item}>
            <h3 className={styles.itemTitle}>{b.title}</h3>
            <p className={styles.itemDescription}>{b.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
