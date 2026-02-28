import { useEffect, useState } from 'react';

interface UseTypingEffectOptions {
    texts: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
}

export function useTypingEffect({
    texts,
    typingSpeed = 80,
    deletingSpeed = 40,
    pauseTime = 2000,
}: UseTypingEffectOptions): string {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];

        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    // Typing
                    if (charIndex < currentText.length) {
                        setDisplayText(currentText.slice(0, charIndex + 1));
                        setCharIndex((prev) => prev + 1);
                    } else {
                        // Pause then start deleting
                        setTimeout(() => setIsDeleting(true), pauseTime);
                    }
                } else {
                    // Deleting
                    if (charIndex > 0) {
                        setDisplayText(currentText.slice(0, charIndex - 1));
                        setCharIndex((prev) => prev - 1);
                    } else {
                        setIsDeleting(false);
                        setTextIndex((prev) => (prev + 1) % texts.length);
                    }
                }
            },
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

    return displayText;
}
