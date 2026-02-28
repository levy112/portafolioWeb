import { PERSONAL_INFO } from '../../data/portfolio';
import styles from './Footer.module.css';

const SOCIAL_ICONS: Record<string, string> = {
    github: '⌨️',
    linkedin: '💼',
    email: '✉️',
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer} role="contentinfo">
            <div className={`container ${styles.inner}`}>
                <div className={styles.brand}>
                    <div className={styles.logo}>&lt;LSR /&gt;</div>
                    <p className={styles.tagline}>{PERSONAL_INFO.title}</p>
                </div>

                <div className={styles.socials}>
                    {PERSONAL_INFO.socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            className={styles.socialLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visitar ${link.name}`}
                        >
                            {SOCIAL_ICONS[link.icon] || '🔗'}
                        </a>
                    ))}
                </div>

                <p className={styles.copyright}>
                    © {currentYear} {PERSONAL_INFO.name}. Hecho con{' '}
                    <span className={styles.heart}>❤️</span> y React + TypeScript
                </p>
            </div>
        </footer>
    );
}
