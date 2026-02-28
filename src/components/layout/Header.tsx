import { useState, useCallback, useEffect } from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useTheme } from '../../context/ThemeContext';
import { NAV_ITEMS } from '../../data/portfolio';
import styles from './Header.module.css';

export function Header() {
    const scrollY = useScrollPosition();
    const { theme, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const isScrolled = scrollY > 50;

    // Track active section
    useEffect(() => {
        const sections = NAV_ITEMS.map((item) => item.href.replace('#', ''));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -60% 0px' }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const handleNavClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
            e.preventDefault();
            const el = document.querySelector(href);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                setMenuOpen(false);
            }
        },
        []
    );

    return (
        <header
            className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
            role="banner"
        >
            <div className={styles.inner}>
                <a href="#hero" className={styles.logo} aria-label="Ir al inicio">
                    &lt;LSR /&gt;
                </a>

                <nav
                    className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
                    role="navigation"
                    aria-label="Navegación principal"
                >
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`${styles.navLink} ${activeSection === item.href.replace('#', '') ? styles.navLinkActive : ''
                                }`}
                            onClick={(e) => handleNavClick(e, item.href)}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className={styles.actions}>
                    <button
                        className={styles.themeToggle}
                        onClick={toggleTheme}
                        aria-label={`Cambiar a tema ${theme === 'dark' ? 'claro' : 'oscuro'}`}
                    >
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                    <button
                        className={`${styles.menuButton} ${menuOpen ? styles.menuOpen : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={menuOpen}
                    >
                        <span className={styles.menuBar} />
                        <span className={styles.menuBar} />
                        <span className={styles.menuBar} />
                    </button>
                </div>
            </div>
        </header>
    );
}
