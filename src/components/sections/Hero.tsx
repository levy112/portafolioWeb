import { motion } from 'framer-motion';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { PERSONAL_INFO } from '../../data/portfolio';
import { Button } from '../ui/Button';
import styles from './Hero.module.css';
import { useEffect, useRef, useState } from 'react';

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const [ref, isVisible] = useIntersectionObserver<HTMLSpanElement>();
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (isVisible && !hasAnimated.current) {
            hasAnimated.current = true;
            const duration = 2000;
            const steps = 60;
            const increment = target / steps;
            let current = 0;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    setCount(target);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);
            return () => clearInterval(timer);
        }
    }, [isVisible, target]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
}

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' as const },
    },
} as const;

export function Hero() {
    const typingText = useTypingEffect({
        texts: [
            'Desarrollador Full Stack',
            'Java & Spring Boot Expert',
            'React & TypeScript Developer',
            'Database Performance Engineer',
            'DevOps & Cloud Architecture',
        ],
        typingSpeed: 70,
        deletingSpeed: 35,
        pauseTime: 2500,
    });

    return (
        <section id="hero" className={styles.hero}>
            {/* Floating orbs */}
            <div className={`${styles.orb} ${styles.orb1}`} />
            <div className={`${styles.orb} ${styles.orb2}`} />
            <div className={`${styles.orb} ${styles.orb3}`} />

            <div className="container">
                <motion.div
                    className={styles.content}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className={styles.badge} variants={itemVariants}>
                        <span className={styles.badgeIcon}>🚧</span>
                        <span>Sitio en desarrollo - ¡Próximamente más novedades!</span>
                    </motion.div>

                    <motion.span className={styles.greeting} variants={itemVariants}>
                        👋 ¡Hola! Mi nombre es
                    </motion.span>

                    <motion.h1 className={styles.name} variants={itemVariants}>
                        {PERSONAL_INFO.name}
                    </motion.h1>

                    <motion.div className={styles.typingLine} variants={itemVariants}>
                        <span className="gradient-text">{typingText}</span>
                        <span className={styles.cursor} />
                    </motion.div>

                    <motion.p className={styles.subtitle} variants={itemVariants}>
                        {PERSONAL_INFO.subtitle}. Especializado en construir aplicaciones web
                        de alto rendimiento con arquitecturas escalables y experiencias de
                        usuario excepcionales.
                    </motion.p>

                    <motion.div className={styles.cta} variants={itemVariants}>
                        <Button variant="primary" size="lg" href="#projects">
                            Ver Proyectos
                        </Button>
                        <Button variant="outline" size="lg" href={PERSONAL_INFO.resumeUrl}>
                            Descargar CV
                        </Button>
                        <Button variant="ghost" size="lg" href="#contact">
                            Contactar
                        </Button>
                    </motion.div>

                    <motion.div className={styles.stats} variants={itemVariants}>
                        {PERSONAL_INFO.stats.map((stat) => (
                            <div key={stat.label} className={styles.stat}>
                                <div className={styles.statValue}>
                                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className={styles.statLabel}>{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <div className={styles.scrollIndicator}>
                <div className={styles.scrollMouse} />
                <span>Scroll</span>
            </div>
        </section>
    );
}
