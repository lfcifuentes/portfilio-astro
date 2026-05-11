export type Locale = 'en' | 'es';

export interface SiteMessages {
  meta: {
    title: string;
    description: string;
    ogLocale: string;
  };
  nav: {
    about: string;
    stack: string;
    projects: string;
    personal: string;
    experience: string;
    contact: string;
    contactCta: string;
    languageSwitchLabel: string;
  };
  hero: {
    eyebrow: string;
    role: string;
    description: string;
    viewProjects: string;
    linkedIn: string;
    pythonCvCta: string;
    goCvCta: string;
    termFile: string;
    termLoading: string;
    termStack: string;
    termStatus: string;
    termExp: string;
    termLang: string;
    termArch: string;
    statYearsValue: string;
    statYearsLabel: string;
    statUsersValue: string;
    statUsersLabel: string;
    statSystemsValue: string;
    statSystemsLabel: string;
    statTechnologiesValue: string;
    statTechnologiesLabel: string;
  };
  about: {
    sectionTag: string;
    titlePrefix: string;
    titleAccent: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    impact1: string;
    impact2: string;
    impact3: string;
    impact4: string;
  };
  stack: {
    sectionTag: string;
    titlePrefix: string;
    titleAccent: string;
    pythonBackendTitle: string;
    architectureTitle: string;
    polyglotBackendTitle: string;
    cloudDevopsTitle: string;
    dataObservabilityTitle: string;
  };
  projects: {
    sectionTag: string;
    titlePrefix: string;
    titleAccent: string;
    goTab: string;
    pythonTab: string;
    authManagerTag: string;
    authManagerTitle: string;
    authManagerDesc: string;
    adminPlatformTag: string;
    adminPlatformTitle: string;
    adminPlatformDesc: string;
    nomadOsTag: string;
    nomadOsTitle: string;
    nomadOsDesc: string;
    xGrowTag: string;
    xGrowTitle: string;
    xGrowDesc: string;
    prepaidMedicineTag: string;
    prepaidMedicineTitle: string;
    prepaidMedicineDesc: string;
    metricUsersLabel: string;
    metricPlatformsLabel: string;
    metricIncidentsLabel: string;
    metricRuntimeLabel: string;
    metricLatencyLabel: string;
    metricDeliveryLabel: string;
    metricArchitectureLabel: string;
    metricMaintenanceLabel: string;
    metricInvestigationsLabel: string;
    metricMembershipsLabel: string;
  };
  personalProjects: {
    sectionTag: string;
    titlePrefix: string;
    titleAccent: string;
    subtitle: string;
    allFilter: string;
    projects: Array<{
      title: string;
      description: string;
      tag: string;
    }>;
  };
  experienceSection: {
    sectionTag: string;
    title: string;
    titleAccent: string;
    items: Array<{
      role: string;
      company: string;
      date: string;
      bullets: string[];
    }>;
  };
  contactSection: {
    sectionTag: string;
    titlePrefix: string;
    titleAccent: string;
    subtitle: string;
    linkedInLabel: string;
    githubLabel: string;
  };
  footer: {
    copyright: string;
    builtWithPrefix: string;
    highlightedWord: string;
    builtWithSuffix: string;
  };
}

export const messages: Record<Locale, SiteMessages> = {
  en: {
    meta: {
      title: 'Senior Backend Engineer Portfolio (Python & Go)',
      description:
        'Senior Backend Engineer specialized in Python and Go, with strong focus on FastAPI, distributed systems, and architecture-driven APIs.',
      ogLocale: 'en_US',
    },
    nav: {
      about: 'About',
      stack: 'Stack',
      projects: 'Projects',
      personal: 'Personal',
      experience: 'Experience',
      contact: 'Contact',
      contactCta: 'contact →',
      languageSwitchLabel: 'Ver versión en español',
    },
    hero: {
      eyebrow: 'Available for Senior / Lead roles',
      role: 'Senior Backend Engineer · Python & Go · Distributed Systems',
      description:
        'Building high-performance backend systems with +8 years of experience. Strong focus on Python/FastAPI and Go for architecture-driven APIs, with end-to-end ownership from design to production.',
      viewProjects: 'View projects',
      linkedIn: 'LinkedIn →',
      pythonCvCta: 'Request Python CV',
      goCvCta: 'Request Go CV',
      termFile: '~ engineer.go',
      termLoading: 'distributed systems',
      termStack: 'Go · K8s · Redis · AWS',
      termStatus: '● production ready',
      termExp: '+8 years',
      termLang: 'Python + Go',
      termArch: 'event-driven · microservices',
      statYearsValue: '8+',
      statYearsLabel: 'years building backend',
      statUsersValue: '70K+',
      statUsersLabel: 'users served in production',
      statSystemsValue: '10+',
      statSystemsLabel: 'systems and APIs delivered',
      statTechnologiesValue: '8+',
      statTechnologiesLabel: 'technologies used in production',
    },
    about: {
      sectionTag: 'About',
      titlePrefix: 'Who I',
      titleAccent: 'am.',
      p1: 'Backend Engineer with +8 years building distributed systems and high-performance APIs in Python and Go. I specialize in FastAPI services, event-driven architectures, async processing with workers and queues, and production observability.',
      p2: 'I take full ownership of problems from design to production. My track record includes rebuilding systems with critical design flaws, working directly with clients to arrive at the right solution. A key example: an authentication system rebuilt from scratch, now serving 70K+ users across 5 platforms with zero incidents post-launch.',
      p3: 'I have built and technically led marketplace, fintech and SaaS platforms deployed on AWS and Azure over Kubernetes with CI/CD. I design solutions oriented around availability, latency and cost, and mentor teams to scale delivery without sacrificing quality.',
      p4: 'I am a balanced and composed problem-solver, especially in high-pressure project situations. In leadership roles, I naturally act as a mediator and adapt quickly to changing constraints. I consistently mentor teammates and bring a meticulous, detail-oriented, and analytical mindset to architecture and delivery.',
      impact1: 'Users served by Auth Manager, rebuilt from scratch with zero post-launch incidents',
      impact2: 'Response time improvement after migrating services to Go + FastAPI',
      impact3: 'Records managed in a centralized admin platform (28K maintenance + 34K investigations) with background notifications',
      impact4: 'Registered users on NomadOS with ~2K active or historical memberships',
    },
    stack: {
      sectionTag: 'Technology',
      titlePrefix: 'My',
      titleAccent: 'stack.',
      pythonBackendTitle: 'Python Backend',
      architectureTitle: 'Architecture',
      polyglotBackendTitle: 'Polyglot Backend',
      cloudDevopsTitle: 'Cloud & DevOps',
      dataObservabilityTitle: 'Data & Observability',
    },
    projects: {
      sectionTag: 'Featured work',
      titlePrefix: 'Professional',
      titleAccent: 'projects.',
      goTab: 'Go',
      pythonTab: 'Python',
      authManagerTag: 'Production · Full Ownership',
      authManagerTitle: 'Auth Manager',
      authManagerDesc:
        'Took full ownership after identifying critical design flaws in the previous version. Rebuilt from scratch working directly with the client — defining architecture, versioned REST contracts and data model. Zero authentication incidents post-launch.',
      adminPlatformTag: 'Admin Platform · Private Client',
      adminPlatformTitle: 'Centralized Admin Platform',
      adminPlatformDesc:
        'Unified scattered admin modules into a single panel, defining the internal standard for admin module development. Automated flat-file record loading, eliminating hours of manual work per cycle.',
      nomadOsTag: 'SaaS · Online Learning',
      nomadOsTitle: 'NomadOS',
      nomadOsDesc:
        'Online learning and workflow automation platform. Cloud integrations on AWS with end-to-end continuous deployment. Active user base with paying memberships.',
      xGrowTag: 'Automation · AI Operations',
      xGrowTitle: 'X-Grow AI Orchestration API',
      xGrowDesc:
        'Built Python services for AI-driven automation flows, exposing internal APIs for chatbot orchestration, validation and downstream integrations with queue-driven workloads.',
      prepaidMedicineTag: 'Healthcare API · Private Client',
      prepaidMedicineTitle: 'Prepaid Medicine API 2024',
      prepaidMedicineDesc:
        'Built the complete backend from scratch for a prepaid healthcare client: data model design with DDD architecture, database migrations, and REST APIs for memberships, policy holders, and beneficiaries. Established the project technical foundation with Clean Architecture and FastAPI + Pydantic for strict contract validation, ensuring scalability from day one.',
      metricUsersLabel: 'Users',
      metricPlatformsLabel: 'Platforms',
      metricIncidentsLabel: 'Incidents',
      metricRuntimeLabel: 'Runtime',
      metricLatencyLabel: 'Latency',
      metricDeliveryLabel: 'Delivery',
      metricArchitectureLabel: 'Architecture',
      metricMaintenanceLabel: 'Maintenance',
      metricInvestigationsLabel: 'Investigations',
      metricMembershipsLabel: 'Memberships',
    },
    personalProjects: {
      sectionTag: 'Side work',
      titlePrefix: 'Personal',
      titleAccent: 'projects.',
      subtitle: 'Front-end experiments, tools, and side projects built on my own time.',
      allFilter: 'All',
      projects: [
        {
          title: 'Terminal Portfolio',
          description:
            'Interactive portfolio built as a terminal emulator. Features multi-language support, custom hooks, and multi-theme switching — all built with React + Vite and SCSS.',
          tag: 'Frontend',
        },
        {
          title: 'Email Indexer',
          description:
            'Full-stack email search engine. Indexes large volumes of emails using ZincSearch, exposes a REST API with Go + Chi, and provides a Vue 3 frontend with dark/light theme and Swagger docs.',
          tag: 'Full Stack',
        },
        {
          title: 'Go Redis Lock',
          description:
            'Reference implementation of a distributed lock system using Redis to prevent duplicate job executions. Useful pattern for cron jobs and background workers in concurrent environments.',
          tag: 'Backend',
        },
        {
          title: 'Go SOLID',
          description:
            'Study project documenting SOLID design principles implemented in Go. Each principle (SRP, OCP, LSP, ISP, DIP) has its own directory with practical examples and explanations.',
          tag: 'Backend',
        },
        {
          title: 'DDD Go',
          description:
            'Reference backend project in Go applying Domain-Driven Design patterns with configuration and CLI tooling. Includes MongoDB integration, environment-based configuration, and test coverage for domain and application behavior.',
          tag: 'Backend',
        },
      ],
    },
    experienceSection: {
      sectionTag: 'Career',
      title: 'Experience',
      titleAccent: '.',
      items: [
        {
          role: 'Tech Lead — X-Grow AI',
          company: 'WACO Services · Remote',
          date: 'Oct 2025 — Present',
          bullets: [
            'Defined Go backend architecture exposing REST APIs and MCP servers consumed by LLM agents and automation flows (N8N).',
            'Designed async chatbot interaction processing to sustain traffic spikes without latency degradation using workers and queues.',
            'Established observability standards (structured logs, metrics, alerts) and team onboarding documentation.',
          ],
        },
        {
          role: 'Senior Backend Engineer',
          company: 'WACO Services · Remote',
          date: 'Aug 2020 — Present',
          bullets: [
            'Designed and implemented microservices in Go and Node.js for internal and third-party integrations, prioritizing concurrency, high availability and low latency.',
            'Built a prepaid healthcare backend from scratch using Python, FastAPI, SQLAlchemy and Alembic under DDD and Clean Architecture principles, delivering strict API contracts for memberships, policy holders and beneficiaries.',
            'Built CI/CD pipelines on AWS and Azure with GitLab, <strong>significantly reducing deployment time</strong> and eliminating recurring manual errors.',
            'Led architecture decisions, standardized integration templates and mentored the team in Go and FastAPI, <strong>improving response times by 80%</strong>.',
          ],
        },
        {
          role: 'Software Developer',
          company: 'Oktal Desarrollos Tecnológicos · Cali, Colombia',
          date: 'Sep 2016 — Aug 2020',
          bullets: [
            'Took full ownership of a legacy PHP 5.3 to 7.0 migration end-to-end, <strong>improving response times by 90%</strong> and eliminating tech debt blocking new features.',
            'Designed PHP/Laravel web services integrated with external APIs, optimizing critical queries and processes.',
          ],
        },
      ],
    },
    contactSection: {
      sectionTag: 'Contact',
      titlePrefix: "Let's",
      titleAccent: 'talk.',
      subtitle:
        'Open to Senior Backend Engineer and Tech Lead roles — remote or Colombia. Especially interested in high-scale, distributed systems challenges.',
      linkedInLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },
    footer: {
      copyright: '© 2026 Luis Fernando Cifuentes',
      builtWithPrefix: 'Built with',
      highlightedWord: 'Go',
      builtWithSuffix: 'mindset · Deployed with Astro',
    },
  },
  es: {
    meta: {
      title: 'Portafolio Senior Backend Engineer (Python y Go)',
      description:
        'Senior Backend Engineer especializado en Python y Go, con foco en FastAPI, sistemas distribuidos y APIs orientadas a arquitectura.',
      ogLocale: 'es_ES',
    },
    nav: {
      about: 'Sobre mí',
      stack: 'Stack',
      projects: 'Proyectos',
      personal: 'Personales',
      experience: 'Experiencia',
      contact: 'Contacto',
      contactCta: 'contacto →',
      languageSwitchLabel: 'Switch to English version',
    },
    hero: {
      eyebrow: 'Disponible para roles Senior / Lead',
      role: 'Senior Backend Engineer · Python y Go · Sistemas Distribuidos',
      description:
        'Construyendo sistemas backend de alto rendimiento con +8 años de experiencia. Foco fuerte en Python/FastAPI y Go para APIs orientadas a arquitectura, con ownership completo desde diseño hasta producción.',
      viewProjects: 'Ver proyectos',
      linkedIn: 'LinkedIn →',
      pythonCvCta: 'Solicitar CV Python',
      goCvCta: 'Solicitar CV Go',
      termFile: '~ engineer.go',
      termLoading: 'sistemas distribuidos',
      termStack: 'Go · K8s · Redis · AWS',
      termStatus: '● listo para producción',
      termExp: '+8 años',
      termLang: 'Python + Go',
      termArch: 'event-driven · microservicios',
      statYearsValue: '8+',
      statYearsLabel: 'años construyendo backend',
      statUsersValue: '70K+',
      statUsersLabel: 'usuarios servidos en producción',
      statSystemsValue: '10+',
      statSystemsLabel: 'sistemas y APIs entregados',
      statTechnologiesValue: '8+',
      statTechnologiesLabel: 'tecnologías usadas en producción',
    },
    about: {
      sectionTag: 'Sobre mí',
      titlePrefix: 'Quién',
      titleAccent: 'soy.',
      p1: 'Backend Engineer con +8 años construyendo sistemas distribuidos y APIs de alto rendimiento en Python y Go. Me especializo en servicios con FastAPI, arquitecturas orientadas a eventos, procesamiento asíncrono con workers y colas, y observabilidad en producción.',
      p2: 'Asumo ownership completo de los problemas desde diseño hasta producción. Mi trayectoria incluye reconstruir sistemas con fallos críticos de diseño, trabajando directamente con clientes para llegar a la solución correcta. Ejemplo clave: un sistema de autenticación reconstruido desde cero, hoy sirviendo a 70K+ usuarios en 5 plataformas con cero incidentes post-lanzamiento.',
      p3: 'He construido y liderado técnicamente plataformas de marketplace, fintech y SaaS desplegadas en AWS y Azure sobre Kubernetes con CI/CD. Diseño soluciones orientadas a disponibilidad, latencia y costo, y mentoreo equipos para escalar la entrega sin sacrificar calidad.',
      p4: 'Soy un profesional equilibrado y sereno al gestionar problemas, especialmente en contextos de alta presión. En roles de liderazgo actúo naturalmente como mediador y me adapto rápido a cambios de contexto. Mentoreo constantemente a otras personas y aporto una mentalidad meticulosa, detallista y analítica en arquitectura y entrega.',
      impact1: 'Usuarios atendidos por Auth Manager, reconstruido desde cero con cero incidentes post-lanzamiento',
      impact2: 'Mejora en tiempos de respuesta después de migrar servicios a Go + FastAPI',
      impact3: 'Registros gestionados en una plataforma de administración centralizada (28K mantenimiento + 34K investigaciones) con notificaciones en segundo plano',
      impact4: 'Usuarios registrados en NomadOS con ~2K membresías activas o históricas',
    },
    stack: {
      sectionTag: 'Tecnología',
      titlePrefix: 'Mi',
      titleAccent: 'stack.',
      pythonBackendTitle: 'Backend en Python',
      architectureTitle: 'Arquitectura',
      polyglotBackendTitle: 'Backend políglota',
      cloudDevopsTitle: 'Nube y DevOps',
      dataObservabilityTitle: 'Datos y observabilidad',
    },
    projects: {
      sectionTag: 'Trabajo destacado',
      titlePrefix: 'Proyectos',
      titleAccent: 'profesionales.',
      goTab: 'Go',
      pythonTab: 'Python',
      authManagerTag: 'Producción · Ownership Completo',
      authManagerTitle: 'Auth Manager',
      authManagerDesc:
        'Asumí ownership completo después de identificar fallos críticos de diseño en la versión anterior. Reconstruida desde cero trabajando directamente con el cliente — definiendo arquitectura, contratos REST versionados y modelo de datos. Cero incidentes de autenticación post-lanzamiento.',
      adminPlatformTag: 'Plataforma Admin · Cliente Privado',
      adminPlatformTitle: 'Plataforma de Administración Centralizada',
      adminPlatformDesc:
        'Unificación de módulos admin dispersos en un único panel, definiendo el estándar interno para desarrollo de módulos admin. Automatización de carga de archivos, eliminando horas de trabajo manual por ciclo.',
      nomadOsTag: 'SaaS · Educación Online',
      nomadOsTitle: 'NomadOS',
      nomadOsDesc:
        'Plataforma de educación online y automatización de flujos de trabajo. Integraciones cloud en AWS con deployment continuo end-to-end. Base de usuarios activos con membresías pagadas.',
      xGrowTag: 'Automatización · Operaciones IA',
      xGrowTitle: 'X-Grow AI Orchestration API',
      xGrowDesc:
        'Construí servicios Python para flujos de automatización impulsados por IA, exponiendo APIs internas para orquestación de chatbots, validación e integraciones downstream con workloads manejados por colas.',
      prepaidMedicineTag: 'Healthcare API · Cliente Privado',
      prepaidMedicineTitle: 'API Medicina Prepagada 2024',
      prepaidMedicineDesc:
        'Construí el backend completo desde cero para un cliente de medicina prepagada: diseño de modelo de datos con arquitectura DDD, migraciones de base de datos y APIs REST para membresías, titulares de pólizas y beneficiarios. Establecí la base técnica del proyecto con Clean Architecture y FastAPI + Pydantic para validación estricta de contratos, asegurando escalabilidad desde el primer día.',
      metricUsersLabel: 'Usuarios',
      metricPlatformsLabel: 'Plataformas',
      metricIncidentsLabel: 'Incidentes',
      metricRuntimeLabel: 'Runtime',
      metricLatencyLabel: 'Latencia',
      metricDeliveryLabel: 'Entrega',
      metricArchitectureLabel: 'Arquitectura',
      metricMaintenanceLabel: 'Mantenimiento',
      metricInvestigationsLabel: 'Investigaciones',
      metricMembershipsLabel: 'Membresías',
    },
    personalProjects: {
      sectionTag: 'Proyectos personales',
      titlePrefix: 'Proyectos',
      titleAccent: 'personales.',
      subtitle: 'Experimentos de front-end, herramientas y side projects construidos en mi tiempo personal.',
      allFilter: 'Todos',
      projects: [
        {
          title: 'Terminal Portfolio',
          description:
            'Portafolio interactivo construido como emulador de terminal. Características de soporte multi-idioma, custom hooks y cambio de temas — todo construido con React + Vite y SCSS.',
          tag: 'Frontend',
        },
        {
          title: 'Email Indexer',
          description:
            'Motor de búsqueda de emails full-stack. Indexa grandes volúmenes de emails usando ZincSearch, expone una API REST con Go + Chi, y proporciona un frontend Vue 3 con tema oscuro/claro y docs de Swagger.',
          tag: 'Full Stack',
        },
        {
          title: 'Go Redis Lock',
          description:
            'Implementación de referencia de un sistema de bloqueo distribuido usando Redis para prevenir ejecuciones duplicadas de jobs. Patrón útil para cron jobs y background workers en entornos concurrentes.',
          tag: 'Backend',
        },
        {
          title: 'Go SOLID',
          description:
            'Proyecto de estudio documentando principios SOLID implementados en Go. Cada principio (SRP, OCP, LSP, ISP, DIP) tiene su propio directorio con ejemplos prácticos y explicaciones.',
          tag: 'Backend',
        },
        {
          title: 'DDD Go',
          description:
            'Proyecto backend de referencia en Go aplicando patrones Domain-Driven Design con configuración y tooling CLI. Incluye integración con MongoDB, configuración basada en ambiente y cobertura de tests para comportamiento de dominio y aplicación.',
          tag: 'Backend',
        },
      ],
    },
    experienceSection: {
      sectionTag: 'Trayectoria',
      title: 'Experiencia',
      titleAccent: '.',
      items: [
        {
          role: 'Tech Lead — X-Grow AI',
          company: 'WACO Services · Remoto',
          date: 'Oct 2025 — Presente',
          bullets: [
            'Definí la arquitectura backend en Go, exponiendo APIs REST y servidores MCP consumidos por agentes LLM y flujos de automatización (N8N).',
            'Diseñé el procesamiento asíncrono de interacciones de chatbot para sostener picos de tráfico sin degradación de latencia usando workers y colas.',
            'Establecí estándares de observabilidad (logs estructurados, métricas, alertas) y documentación técnica de onboarding para el equipo.',
          ],
        },
        {
          role: 'Senior Backend Engineer',
          company: 'WACO Services · Remoto',
          date: 'Ago 2020 — Presente',
          bullets: [
            'Diseñé e implementé microservicios en Go y Node.js para integraciones internas y de terceros, priorizando concurrencia, alta disponibilidad y baja latencia.',
            'Construí desde cero un backend de medicina prepagada con Python, FastAPI, SQLAlchemy y Alembic bajo principios de DDD y Clean Architecture, entregando contratos de API estrictos para membresías, titulares y beneficiarios.',
            'Implementé pipelines de CI/CD en AWS y Azure con GitLab, <strong>reduciendo significativamente el tiempo de despliegue</strong> y eliminando errores manuales recurrentes.',
            'Lideré decisiones de arquitectura, estandaricé plantillas de integración y mentoreé al equipo en Go y FastAPI, <strong>mejorando los tiempos de respuesta en un 80%</strong>.',
          ],
        },
        {
          role: 'Software Developer',
          company: 'Oktal Desarrollos Tecnológicos · Cali, Colombia',
          date: 'Sep 2016 — Ago 2020',
          bullets: [
            'Asumí ownership completo de una migración legacy de PHP 5.3 a 7.0 de extremo a extremo, <strong>mejorando los tiempos de respuesta en un 90%</strong> y eliminando deuda técnica que bloqueaba nuevas funcionalidades.',
            'Diseñé servicios web en PHP/Laravel integrados con APIs externas, optimizando consultas y procesos críticos.',
          ],
        },
      ],
    },
    contactSection: {
      sectionTag: 'Contacto',
      titlePrefix: 'Hablemos',
      titleAccent: '.',
      subtitle:
        'Abierto a oportunidades como Senior Backend Engineer y Tech Lead, remoto o en Colombia. Especial interés en retos de sistemas distribuidos y plataformas de alto tráfico.',
      linkedInLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },
    footer: {
      copyright: '© 2026 Luis Fernando Cifuentes',
      builtWithPrefix: 'Construido con mentalidad',
      highlightedWord: 'Go',
      builtWithSuffix: '· Desplegado con Astro',
    },
  },
};

export function getMessages(locale: string): SiteMessages {
  if (locale === 'es') {
    return messages.es;
  }

  return messages.en;
}
