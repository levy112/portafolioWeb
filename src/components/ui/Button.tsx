import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    href?: string;
}

export function Button({
    variant = 'primary',
    size = 'md',
    children,
    href,
    className = '',
    ...props
}: ButtonProps) {
    const classes = [
        styles.button,
        styles[variant],
        size !== 'md' ? styles[size] : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    if (href) {
        return (
            <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
