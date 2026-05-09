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
    statUsers: string;
    statLatency: string;
    statRecords: string;
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
      statUsers: 'users served',
      statLatency: 'latency drop',
      statRecords: 'records managed',
    },
    about: {
      sectionTag: 'About',
      titlePrefix: 'Who I',
      titleAccent: 'am.',
      p1: 'Backend Engineer with +8 years building distributed systems and high-performance APIs in Go. I specialize in event-driven architectures, async processing with workers and queues, and production observability.',
      p2: 'I take full ownership of problems from design to production. My track record includes rebuilding systems with critical design flaws, working directly with clients to arrive at the right solution. A key example: an authentication system rebuilt from scratch, now serving 70K+ users across 5 platforms with zero incidents post-launch.',
      p3: 'I have built and technically led marketplace, fintech and SaaS platforms deployed on AWS and Azure over Kubernetes with CI/CD. I design solutions oriented around availability, latency and cost, and mentor teams to scale delivery without sacrificing quality.',
      p4: 'I am a balanced and composed problem-solver, especially in high-pressure project situations. In leadership roles, I naturally act as a mediator and adapt quickly to changing constraints. I consistently mentor teammates and bring a meticulous, detail-oriented, and analytical mindset to architecture and delivery.',
      impact1: 'Users served by Auth Manager, rebuilt from scratch with zero post-launch incidents',
      impact2: 'Response time improvement after migrating services to Go + FastAPI',
      impact3: 'Records managed in Luxio (28K maintenance + 34K investigations) with background notifications',
      impact4: 'Registered users on NomadOS with ~2K active or historical memberships',
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
      statUsers: 'usuarios servidos',
      statLatency: 'reducción latencia',
      statRecords: 'registros gestionados',
    },
    about: {
      sectionTag: 'Sobre mí',
      titlePrefix: 'Quién',
      titleAccent: 'soy.',
      p1: 'Backend Engineer con +8 años construyendo sistemas distribuidos y APIs de alto rendimiento en Go. Me especializo en arquitecturas orientadas a eventos, procesamiento asíncrono con workers y colas, y observabilidad en producción.',
      p2: 'Asumo ownership completo de los problemas desde diseño hasta producción. Mi trayectoria incluye reconstruir sistemas con fallos críticos de diseño, trabajando directamente con clientes para llegar a la solución correcta. Ejemplo clave: un sistema de autenticación reconstruido desde cero, hoy sirviendo a 70K+ usuarios en 5 plataformas con cero incidentes post-lanzamiento.',
      p3: 'He construido y liderado técnicamente plataformas de marketplace, fintech y SaaS desplegadas en AWS y Azure sobre Kubernetes con CI/CD. Diseño soluciones orientadas a disponibilidad, latencia y costo, y mentoreo equipos para escalar la entrega sin sacrificar calidad.',
      p4: 'Soy un profesional equilibrado y sereno al gestionar problemas, especialmente en contextos de alta presión. En roles de liderazgo actúo naturalmente como mediador y me adapto rápido a cambios de contexto. Mentoreo constantemente a otras personas y aporto una mentalidad meticulosa, detallista y analítica en arquitectura y entrega.',
      impact1: 'Usuarios atendidos por Auth Manager, reconstruido desde cero con cero incidentes post-lanzamiento',
      impact2: 'Mejora en tiempos de respuesta después de migrar servicios a Go + FastAPI',
      impact3: 'Registros gestionados en Luxio (28K mantenimiento + 34K investigaciones) con notificaciones en segundo plano',
      impact4: 'Usuarios registrados en NomadOS con ~2K membresías activas o históricas',
    },
  },
};

export function getMessages(locale: string): SiteMessages {
  if (locale === 'es') {
    return messages.es;
  }

  return messages.en;
}
