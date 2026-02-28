import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
    label: string;
    title: string;
    subtitle?: string;
}

export function SectionTitle({ label, title, subtitle }: SectionTitleProps) {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

    return (
        <motion.div
            ref={ref}
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <span className={styles.label}>{label}</span>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </motion.div>
    );
}
