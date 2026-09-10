import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Service } from '../../types';
import ServiceIcon from './ServiceIcon';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrap}>
        <ServiceIcon iconKey={service.iconKey} size={24} />
      </div>
      <h3 className={styles.title}>{service.name}</h3>
      <p className={styles.description}>{service.shortDescription}</p>
      <Link
        to={`/services/${service.slug}`}
        className={styles.link}
        aria-label={`Learn more about ${service.name}`}
      >
        Learn more
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}
