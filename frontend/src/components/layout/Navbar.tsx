import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import Logo from '../common/Logo';
import MobileMenu from './MobileMenu';
import { mainNav } from '../../data/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Logo />

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.navList}>
            {mainNav.map((item) =>
              item.children ? (
                <li
                  key={item.path}
                  className={styles.navItemHasChildren}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    className={styles.navButton}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    {item.label}
                    <ChevronDown size={16} aria-hidden="true" />
                  </button>
                  {servicesOpen && (
                    <ul className={styles.dropdown}>
                      {item.children.map((child) => (
                        <li key={child.path}>
                          <NavLink
                            to={child.path}
                            className={({ isActive }) =>
                              isActive
                                ? `${styles.dropdownLink} ${styles.active}`
                                : styles.dropdownLink
                            }
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? `${styles.navLink} ${styles.active}`
                        : styles.navLink
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button to="/contact" variant="primary" size="md">
            Get in Touch
          </Button>
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </Container>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
