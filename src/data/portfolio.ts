import type { PersonalInfo, Project, Skill, Experience, NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Contacto', href: '#contact' },
];

export const PERSONAL_INFO: PersonalInfo = {
    name: 'Levy Sánchez Rivera',
    title: 'Desarrollador Full Stack',
    subtitle: 'Ingeniero en Computación especializado en arquitectura de microservicios y optimización de sistemas',
    email: 'levyjoanisanchezrivera@gmail.com',
    location: 'Cuajimalpa de Morelos, CDMX, México',
    bio: 'Desarrollador Full Stack con dominio avanzado en Java/Spring Boot, Python y React. Experiencia sólida en administración de bases de datos (PostgreSQL, Oracle, SQL Server, Sybase) y arquitectura de microservicios. He logrado mejorar el rendimiento de sistemas en un 70% mediante optimización de APIs y bases de datos. Competente en DevOps (Docker, Kubernetes, CI/CD) e integración de IA/ML.',
    avatarUrl: '/portafolioWeb/profile.jpg',
    resumeUrl: '/portafolioWeb/cv-levy-sanchez.pdf',
    socialLinks: [
        { name: 'GitHub', url: 'https://github.com/levy112', icon: 'github' },
        { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
        { name: 'Email', url: 'mailto:levyjoanisanchezrivera@gmail.com', icon: 'email' },
    ],
    stats: [
        { label: 'Años de experiencia', value: 3, suffix: '+' },
        { label: 'Microservicios desarrollados', value: 15, suffix: '+' },
        { label: 'Mejora en rendimiento', value: 70, suffix: '%' },
        { label: 'Documentos procesados/día', value: 1000, suffix: '+' },
    ],
};

export const SKILLS: Skill[] = [
    // Backend
    { name: 'Java / Spring Boot', icon: '☕', level: 95, category: 'backend' },
    { name: 'Spring Cloud / Security', icon: '🛡️', level: 90, category: 'backend' },
    { name: 'Python / Django / Flask', icon: '🐍', level: 90, category: 'backend' },
    { name: 'FastAPI / pandas', icon: '⚡', level: 85, category: 'backend' },
    { name: 'Node.js', icon: '🟢', level: 78, category: 'backend' },
    { name: 'PHP / CodeIgniter', icon: '🐘', level: 75, category: 'backend' },
    // Frontend
    { name: 'React.js (Hooks, Redux)', icon: '⚛️', level: 90, category: 'frontend' },
    { name: 'TypeScript / JavaScript', icon: '🔷', level: 88, category: 'frontend' },
    { name: 'Vue.js', icon: '💚', level: 82, category: 'frontend' },
    { name: 'HTML5 / CSS3', icon: '🎨', level: 92, category: 'frontend' },
    { name: 'Material UI', icon: '🎯', level: 80, category: 'frontend' },
    // Bases de Datos
    { name: 'PostgreSQL', icon: '🐘', level: 92, category: 'devops' },
    { name: 'Oracle (PL/SQL)', icon: '🔶', level: 88, category: 'devops' },
    { name: 'SQL Server (T-SQL)', icon: '🗄️', level: 88, category: 'devops' },
    { name: 'MySQL', icon: '🐬', level: 85, category: 'devops' },
    { name: 'Sybase ASE', icon: '📊', level: 80, category: 'devops' },
    // DevOps & IA
    { name: 'Docker / Kubernetes', icon: '🐳', level: 85, category: 'tools' },
    { name: 'Azure DevOps / CI/CD', icon: '🔄', level: 88, category: 'tools' },
    { name: 'Git / GitHub', icon: '📚', level: 92, category: 'tools' },
    { name: 'Machine Learning / IA', icon: '🤖', level: 82, category: 'tools' },
];

export const PROJECTS: Project[] = [
    {

        "id": "ecomerce-levy",
        "title": "Levy E-Commerce Platform",
        "description": "Plataforma de comercio electrónico premium desarrollada con React 19, Vite y TypeScript.",
        "longDescription": "Aplicación web de vanguardia que utiliza Feature-Sliced Design (FSD) para una arquitectura escalable y mantenible. Incluye una experiencia de usuario fluida con React Router para navegación, gestión de estado modular con Zustand, y un sistema de diseño personalizado basado en CSS Modules y variables CSS, garantizando un rendimiento óptimo y una estética moderna.",
        "image": "/projects/ecommerce.webp",
        "tags": ["REACT", "VITE", "TYPESCRIPT", "ZUSTAND", "FSD", "CSS-MODULES"],
        "category": "frontend",
        "demoUrl": "https://levy112.github.io/EcomerceLevy/",
        "githubUrl": "https://github.com/levy112/EcomerceLevy",
        "featured": true
    },
    {
        id: "modern-portfolio",
        title: "Modern Developer Portfolio",
        description: "Mi portafolio personal desarrollado con React, TypeScript y animaciones avanzadas.",
        longDescription: "Un portafolio web de alto rendimiento y estética premium. Utiliza Framer Motion para micro-animaciones, CSS Modules para estilos aislados y una arquitectura limpia. Diseñado para ser completamente responsivo y accesible, reflejando mi enfoque en la calidad del código y la experiencia de usuario.",
        image: "/portafolioWeb/projects/portfolio-thumb.webp",
        tags: ["REACT", "TYPESCRIPT", "FRAMER-MOTION", "VITE", "CSS-MODULES"],
        category: "frontend",
        demoUrl: "https://levy112.github.io/portafolioWeb/",
        githubUrl: "https://github.com/levy112/portafolioWeb",
        featured: true
    },
    {
        id: 'expediente-digital',
        title: 'Sistema de Expediente Digital',
        description: 'Sistema de gestión de expedientes digitales con 15+ microservicios que procesa 1000+ documentos diarios.',
        longDescription: 'Plataforma empresarial de gestión documental construida con arquitectura de microservicios. Incluye procesamiento automático de documentos, clasificación inteligente, búsqueda avanzada y panel de administración en tiempo real. Redujo el tiempo de procesamiento en un 70%.',
        image: '/projects/expediente.webp',
        tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker', 'Kubernetes'],
        category: 'fullstack',
        featured: true,
    },
    {
        id: 'motor-extraccion-ia',
        title: 'Motor de Extracción de Datos con IA',
        description: 'Motor inteligente de extracción automática de datos con 95% de precisión usando Machine Learning.',
        longDescription: 'Sistema de inteligencia artificial para extracción automática de información de documentos no estructurados. Utiliza modelos de ML entrenados con scikit-learn y pandas para clasificar y extraer datos con alta precisión, integrándose con el ecosistema de microservicios existente.',
        image: '/projects/ia-motor.webp',
        tags: ['Python', 'scikit-learn', 'FastAPI', 'Machine Learning', 'pandas'],
        category: 'backend',
        featured: true,
    },
    {
        id: 'optimizacion-db',
        title: 'Optimización Multi-Motor de Bases de Datos',
        description: 'Optimización de consultas críticas logrando 60% de mejora en rendimiento en múltiples motores de BD.',
        longDescription: 'Proyecto de auditoría y optimización de rendimiento en bases de datos PostgreSQL, Oracle (PL/SQL), SQL Server (T-SQL) y Sybase ASE. Incluyó reescritura de queries, indexación estratégica, particionamiento y tuning de parámetros del motor.',
        image: '/projects/db-optimization.webp',
        tags: ['PostgreSQL', 'Oracle', 'SQL Server', 'Sybase', 'Performance Tuning'],
        category: 'backend',
        featured: true,
    },
    {
        id: 'cicd-pipeline',
        title: 'Pipeline CI/CD Automatizado',
        description: 'Pipeline de integración y despliegue continuo que redujo el tiempo de deploy en un 80%.',
        longDescription: 'Implementación de pipeline CI/CD completo en Azure DevOps con Docker y Kubernetes. Incluye testing automatizado, análisis de código estático, builds containerizados, y despliegue blue-green en múltiples ambientes.',
        image: '/projects/cicd.webp',
        tags: ['Docker', 'Kubernetes', 'Azure DevOps', 'CI/CD', 'Git'],
        category: 'fullstack',
        featured: false,
    },
    {
        id: 'apis-empresariales',
        title: 'APIs Empresariales REST',
        description: 'Arquitectura de APIs RESTful empresariales con Spring Boot y seguridad avanzada.',
        longDescription: 'Diseño e implementación de APIs empresariales con Java/Spring Boot, Spring Security y Spring Cloud. Incluye autenticación JWT, rate limiting, documentación OpenAPI, y monitoreo con métricas en tiempo real.',
        image: '/projects/api.webp',
        tags: ['Java', 'Spring Boot', 'Spring Security', 'REST API', 'OpenAPI'],
        category: 'backend',
        featured: false,
    },
];

export const EXPERIENCES: Experience[] = [
    {
        id: 'exp-1',
        company: 'Financiera Independencia (FINDEP-FINTECH)',
        role: 'Desarrollador Full Stack',
        period: 'Ago 2023 — Presente',
        description: 'Desarrollo y arquitectura de microservicios y APIs empresariales en el sector fintech.',
        achievements: [
            'Arquitectura de microservicios y APIs empresariales de alto rendimiento',
            'Desarrollo backend con Java/Spring Boot y frontend con React/Vue.js',
            'Integración de IA/ML para extracción automática de datos con Python',
            'Tuning y optimización de bases de datos (PostgreSQL, Oracle, SQL Server, Sybase)',
            'Reducción del 70% en tiempo de procesamiento de documentos',
            'Sistema de expediente digital procesando 1000+ documentos diarios',
        ],
        technologies: ['Java', 'Spring Boot', 'React', 'Vue.js', 'Python', 'PostgreSQL', 'Oracle', 'Docker'],
    },
    {
        id: 'exp-2',
        company: 'Super Mayoría Naturista',
        role: 'Desarrollador Web',
        period: 'Feb 2023 — Ago 2023',
        description: 'Desarrollo full-stack de plataforma web para empresa de productos naturistas.',
        achievements: [
            'Desarrollo full-stack con PHP/CodeIgniter 4 y MySQL',
            'Implementación de frontend con HTML5, CSS3, JavaScript y HTMX',
            'Gestión de base de datos y optimización de consultas',
        ],
        technologies: ['PHP', 'CodeIgniter 4', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'HTMX'],
    },
    {
        id: 'exp-3',
        company: 'UAM Cuajimalpa',
        role: 'Integrador TIC (Servicio Social)',
        period: 'Ago 2022 — Ago 2023',
        description: 'Desarrollo de APIs y optimización de bases de datos para la universidad.',
        achievements: [
            'Desarrollo de APIs RESTful con Python/Flask',
            'Optimización de consultas para PostgreSQL y SQL Server',
            'Integración de sistemas universitarios',
        ],
        technologies: ['Python', 'Flask', 'PostgreSQL', 'SQL Server', 'REST API'],
    },
];

export const SKILL_CATEGORIES = [
    { key: 'backend' as const, label: 'Backend', icon: '⚙️' },
    { key: 'frontend' as const, label: 'Frontend', icon: '🎨' },
    { key: 'devops' as const, label: 'Bases de Datos', icon: '🗄️' },
    { key: 'tools' as const, label: 'DevOps & IA', icon: '🛠️' },
];

export const PROJECT_CATEGORIES = [
    { key: 'all' as const, label: 'Todos' },
    { key: 'frontend' as const, label: 'Frontend' },
    { key: 'fullstack' as const, label: 'Full Stack' },
    { key: 'backend' as const, label: 'Backend' },
];
