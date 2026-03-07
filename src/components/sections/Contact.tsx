import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { PERSONAL_INFO } from '../../data/portfolio';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';
import styles from './Contact.module.css';

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' as const },
    },
} as const;

export function Contact() {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/xojvzbvr', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitted(true);
                form.reset();
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                alert("❌ Ocurrió un error al enviar el mensaje.");
            }
        } catch (error) {
            alert("❌ No se pudo enviar el mensaje.");
        }
    };

    return (
        <section id="contact" className={`section ${styles.contact}`}>
            <div className="container">
                <SectionTitle
                    label="Hablemos"
                    title="Contacto"
                    subtitle="¿Tienes un proyecto en mente? Me encantaría escuchar sobre él"
                />

                <motion.div
                    ref={ref}
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                >
                    <motion.div className={styles.info} variants={containerVariants}>
                        <motion.div variants={itemVariants}>
                            <h3 className={styles.infoTitle}>
                                Trabajemos juntos en algo{' '}
                                <span className="gradient-text">increíble</span>
                            </h3>
                            <p className={styles.infoText}>
                                Estoy disponible para proyectos freelance, colaboraciones y
                                oportunidades de empleo. No dudes en contactarme.
                            </p>
                        </motion.div>

                        <motion.div className={styles.contactMethods} variants={containerVariants}>
                            <motion.div className={styles.contactMethod} variants={itemVariants}>
                                <div className={styles.methodIcon}>✉️</div>
                                <div>
                                    <div className={styles.methodLabel}>Email</div>
                                    <div className={styles.methodValue}>{PERSONAL_INFO.email}</div>
                                </div>
                            </motion.div>
                            <motion.div className={styles.contactMethod} variants={itemVariants}>
                                <div className={styles.methodIcon}>📍</div>
                                <div>
                                    <div className={styles.methodLabel}>Ubicación</div>
                                    <div className={styles.methodValue}>{PERSONAL_INFO.location}</div>
                                </div>
                            </motion.div>
                            <motion.div className={styles.contactMethod} variants={itemVariants}>
                                <div className={styles.methodIcon}>💼</div>
                                <div>
                                    <div className={styles.methodLabel}>Disponibilidad</div>
                                    <div className={styles.methodValue}>Disponible para proyectos</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.form
                        className={styles.form}
                        onSubmit={handleSubmit}
                        variants={itemVariants}
                    >
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="contact-name" className={styles.label}>
                                    Nombre
                                </label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="nombre"
                                    className={styles.input}
                                    placeholder="Tu nombre"
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="contact-email" className={styles.label}>
                                    Email
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    className={styles.input}
                                    placeholder="tu@email.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="contact-subject" className={styles.label}>
                                Asunto
                            </label>
                            <input
                                id="contact-subject"
                                type="text"
                                name="tema"
                                className={styles.input}
                                placeholder="¿En qué puedo ayudarte?"
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="contact-message" className={styles.label}>
                                Mensaje
                            </label>
                            <textarea
                                id="contact-message"
                                name="mensaje"
                                className={styles.textarea}
                                placeholder="Cuéntame sobre tu proyecto..."
                                required
                            />
                        </div>

                        {submitted && (
                            <motion.div
                                className={styles.successMessage}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                ✅ ¡Mensaje enviado con éxito! Te contactaré pronto.
                            </motion.div>
                        )}

                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            className={styles.submitBtn}
                        >
                            Enviar Mensaje
                        </Button>
                    </motion.form>
                </motion.div>
            </div>
        </section>
    );
}
