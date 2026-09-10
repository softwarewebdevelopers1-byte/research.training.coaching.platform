import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { mainNav } from '../../data/navigation';
import Button from '../common/Button';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <div
      className={`${styles.root} ${open ? styles.open : ''}`}
      aria-hidden={!open}
    >
      <button
        type="button"
        className={styles.backdrop}
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />

      <aside
        id="mobile-menu"
        className={styles.drawer}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className={styles.header}>
          <span className={styles.brand}>Menu</span>
          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className={styles.nav} aria-label="Mobile primary">
          <ul className={styles.list}>
            {mainNav.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className={styles.link} onClick={onClose}>
                  {item.label}
                </Link>
                {item.children && (
                  <ul className={styles.sublist}>
                    {item.children.map((child) => (
                      <li key={child.path}>
                        <Link
                          to={child.path}
                          className={styles.sublink}
                          onClick={onClose}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.cta}>
          <Button to="/contact" variant="primary" size="lg" fullWidth>
            Get in Touch
          </Button>
        </div>
      </aside>
    </div>
  );
}
