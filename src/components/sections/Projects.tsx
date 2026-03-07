import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, PROJECT_CATEGORIES } from '../../data/portfolio';
import { SectionTitle } from '../ui/SectionTitle';
import { Badge } from '../ui/Badge';
import type { ProjectCategory } from '../../types';
import styles from './Projects.module.css';

const PROJECT_ICONS: Record<string, string> = {
    'expediente-digital': '📁',
    'motor-extraccion-ia': '🤖',
    'optimizacion-db': '⚡',
    'cicd-pipeline': '🔄',
    'apis-empresariales': '🔌',
    'web-naturista': '🛒',
};

export function Projects() {
    const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

    const filteredProjects =
        activeFilter === 'all'
            ? PROJECTS
            : PROJECTS.filter((p) => p.category === activeFilter);

    return (
        <section id="projects" className={`section ${styles.projects}`}>
            <div className="container">
                <SectionTitle
                    label="Portafolio"
                    title="Proyectos Destacados"
                    subtitle="Una selección de proyectos que demuestran mi experiencia y habilidades técnicas"
                />

                <div className={styles.filters}>
                    {PROJECT_CATEGORIES.map((cat) => (
                        <button
                            key={cat.key}
                            className={`${styles.filterBtn} ${activeFilter === cat.key ? styles.filterBtnActive : ''}`}
                            onClick={() => setActiveFilter(cat.key)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className={styles.grid}>
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.article
                                key={project.id}
                                className={styles.card}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <div className={styles.imageWrapper}>
                                    <div className={styles.imagePlaceholder}>
                                        {PROJECT_ICONS[project.id] || '🚀'}
                                    </div>
                                    <div className={styles.imageOverlay}>
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                className={styles.overlayLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Ver demo de ${project.title}`}
                                            >
                                                🔗
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                className={styles.overlayLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Ver código de ${project.title}`}
                                            >
                                                ⌨️
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className={styles.cardBody}>
                                    {project.featured && (
                                        <span className={styles.featured}>⭐ Destacado</span>
                                    )}
                                    <h3 className={styles.cardTitle}>
                                        {project.demoUrl ? (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.titleLink}
                                            >
                                                {project.title}
                                            </a>
                                        ) : (
                                            project.title
                                        )}
                                    </h3>
                                    <p className={styles.cardDescription}>{project.description}</p>
                                    <div className={styles.tags}>
                                        {project.tags.map((tag) => (
                                            <Badge key={tag}>{tag}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
