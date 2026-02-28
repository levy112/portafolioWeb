import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { SKILLS, SKILL_CATEGORIES } from '../../data/portfolio';
import { SectionTitle } from '../ui/SectionTitle';
import type { SkillCategory } from '../../types';
import styles from './Skills.module.css';

export function Skills() {
    const [activeCategory, setActiveCategory] = useState<SkillCategory | 'all'>('all');
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

    const filteredSkills =
        activeCategory === 'all'
            ? SKILLS
            : SKILLS.filter((s) => s.category === activeCategory);

    return (
        <section id="skills" className={`section ${styles.skills}`}>
            <div className="container">
                <SectionTitle
                    label="Habilidades"
                    title="Stack Tecnológico"
                    subtitle="Tecnologías y herramientas que domino para crear soluciones completas"
                />

                <div className={styles.categories}>
                    <button
                        className={`${styles.categoryBtn} ${activeCategory === 'all' ? styles.categoryBtnActive : ''}`}
                        onClick={() => setActiveCategory('all')}
                    >
                        🔥 Todos
                    </button>
                    {SKILL_CATEGORIES.map((cat) => (
                        <button
                            key={cat.key}
                            className={`${styles.categoryBtn} ${activeCategory === cat.key ? styles.categoryBtnActive : ''}`}
                            onClick={() => setActiveCategory(cat.key)}
                        >
                            {cat.icon} {cat.label}
                        </button>
                    ))}
                </div>

                <div ref={ref} className={styles.grid}>
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className={styles.skillCard}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <div className={styles.skillHeader}>
                                    <div className={styles.skillName}>
                                        <span className={styles.skillIcon}>{skill.icon}</span>
                                        {skill.name}
                                    </div>
                                    <span className={styles.skillLevel}>{skill.level}%</span>
                                </div>
                                <div className={styles.progressBar}>
                                    <motion.div
                                        className={styles.progressFill}
                                        initial={{ width: 0 }}
                                        animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                                        transition={{ duration: 1.2, delay: index * 0.08, ease: 'easeOut' }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
