import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { PERSONAL_INFO } from '../../data/portfolio';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';
import styles from './About.module.css';

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' as const },
    },
} as const;

export function About() {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

    return (
        <section id="about" className={`section ${styles.about}`}>
            <div className="container">
                <SectionTitle
                    label="Conóceme"
                    title="Sobre Mí"
                    subtitle="Desarrollador apasionado con experiencia creando soluciones digitales de impacto"
                />

                <motion.div
                    ref={ref}
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                >
                    <motion.div className={styles.imageWrapper} variants={itemVariants}>
                        <div className={styles.imageContainer}>
                            <img
                                src={PERSONAL_INFO.avatarUrl}
                                alt={PERSONAL_INFO.name}
                                className={styles.profileImage}
                            />
                        </div>
                        <div className={styles.imageGlow} />
                    </motion.div>

                    <motion.div className={styles.info} variants={containerVariants}>
                        <motion.p className={styles.bio} variants={itemVariants}>
                            {PERSONAL_INFO.bio}
                        </motion.p>

                        <motion.div className={styles.details} variants={itemVariants}>
                            <div className={styles.detailItem}>
                                <span className={styles.detailIcon}>📍</span>
                                <span className={styles.detailLabel}>Ubicación:</span>
                                {PERSONAL_INFO.location}
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.detailIcon}>🎓</span>
                                <span className={styles.detailLabel}>Educación:</span>
                                Ing. en Computación — UAM Cuajimalpa
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.detailIcon}>🎯</span>
                                <span className={styles.detailLabel}>Enfoque:</span>
                                Microservicios, Bases de Datos, IA/ML
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.detailIcon}>🌐</span>
                                <span className={styles.detailLabel}>Idiomas:</span>
                                Español (nativo), Inglés (técnico)
                            </div>
                        </motion.div>

                        <motion.div className={styles.cta} variants={itemVariants}>
                            <Button variant="primary" href={PERSONAL_INFO.resumeUrl}>
                                Descargar CV
                            </Button>
                            <Button variant="outline" href="#contact">
                                Contactar
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
