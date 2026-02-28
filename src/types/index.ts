export interface NavItem {
    label: string;
    href: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

export interface Skill {
    name: string;
    icon: string;
    level: number; // 0-100
    category: SkillCategory;
}

export type SkillCategory = 'frontend' | 'backend' | 'devops' | 'tools';

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    tags: string[];
    category: ProjectCategory;
    demoUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

export type ProjectCategory = 'fullstack' | 'frontend' | 'backend' | 'mobile' | 'all';

export interface Experience {
    id: string;
    company: string;
    role: string;
    period: string;
    description: string;
    achievements: string[];
    technologies: string[];
}

export interface PersonalInfo {
    name: string;
    title: string;
    subtitle: string;
    email: string;
    location: string;
    bio: string;
    avatarUrl: string;
    resumeUrl: string;
    socialLinks: SocialLink[];
    stats: Stat[];
}

export interface Stat {
    label: string;
    value: number;
    suffix: string;
}

export type Theme = 'dark' | 'light';
