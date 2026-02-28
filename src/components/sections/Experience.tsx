import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { EXPERIENCES } from '../../data/portfolio';
import { SectionTitle } from '../ui/SectionTitle';
import { Badge } from '../ui/Badge';
import styles from './Experience.module.css';

export function Experience() {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

    return (
        <section id="experience" className={`section ${styles.experience}`}>
            <div className="container">
                <SectionTitle
                    label="Trayectoria"
                    title="Experiencia Profesional"
                    subtitle="Mi camino profesional construyendo software de alto impacto"
                />

                <div ref={ref} className={styles.timeline}>
                    {EXPERIENCES.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className={styles.timelineItem}
                            initial={{ opacity: 0, x: -30 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className={styles.dot} />
                            <div className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div>
                                        <h3 className={styles.role}>{exp.role}</h3>
                                        <span className={styles.company}>{exp.company}</span>
                                    </div>
                                    <span className={styles.period}>{exp.period}</span>
                                </div>

                                <p className={styles.description}>{exp.description}</p>

                                <div className={styles.achievements}>
                                    {exp.achievements.map((achievement) => (
                                        <div key={achievement} className={styles.achievement}>
                                            <span className={styles.achievementIcon}>✓</span>
                                            <span>{achievement}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.technologies}>
                                    {exp.technologies.map((tech) => (
                                        <Badge key={tech}>{tech}</Badge>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
