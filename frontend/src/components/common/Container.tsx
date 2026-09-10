import type { ReactNode } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: ReactNode;
  as?: 'div' | 'section' | 'header' | 'footer';
  className?: string;
}

export default function Container({
  children,
  as: Tag = 'div',
  className,
}: ContainerProps) {
  const cls = className ? `${styles.container} ${className}` : styles.container;
  return <Tag className={cls}>{children}</Tag>;
}
