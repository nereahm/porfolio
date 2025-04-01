import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import project5 from "../assets/projects/project-5.webp";
import project6 from "../assets/projects/project-6.webp";
import project7 from "../assets/projects/project-7.webp";


export const HERO_CONTENT = `Soy especialista en diseño web, UX/UI y marketing digital con experiencia en optimización SEO y estrategias de conversión. Combino creatividad y tecnología para desarrollar sitios web atractivos, funcionales y orientados a resultados. Con conocimientos en herramientas como WordPress, Figma y Prestashop, así como en tecnologías front-end y marketing de rendimiento, ayudo a potenciar la presencia digital de marcas y e-commerce.`;

export const ABOUT_TEXT = `Soy una profesional apasionada por el diseño web y la experiencia de usuario, con un fuerte enfoque en la optimización y el rendimiento digital. Con formación en marketing y desarrollo web, he trabajado en la creación y optimización de sitios para e-commerce, implementando estrategias de SEO y campañas publicitarias en Meta Ads. Disfruto diseñando interfaces intuitivas y visualmente atractivas, utilizando herramientas como Figma, Adobe XD y WordPress, así como tecnologías como HTML, CSS y JavaScript.`;

export const EXPERIENCES = [
  {
    year: "2024 - Presente",
    role: "Especialista en marketing digital y gestión de e-commerce",
    company: "Masaltos.com",
    description: `Diseño y optimización de e-commerce con estrategias UX/UI para mejorar la conversión. Gestión de campañas de email marketing y Meta Ads, además de rediseño de secciones clave del sitio web.`,
    technologies: ["WordPress", "Prestashop", "SEO", "Meta Ads", "Google Analytics", "FileZilla"],
  },
  {
    year: "2023",
    role: "Asistente de marketing digital",
    company: "Berner Agency",
    description: `Gestión de contenido para redes sociales, diseño gráfico y campañas de email marketing. Uso de herramientas como Canva y Metricool para la optimización de estrategias.`,
    technologies: ["Canva", "Metricool", "OnlyPut"],
  },
  {
    year: "2023",
    role: "Asistente dpto. marketing y comunicación",
    company: "Evirom",
    description: `Creación de contenido digital, campañas de posicionamiento SEO/SEM y gestión de newsletters con diseño responsivo.`,
    technologies: ["SEO", "SEM", "WordPress", "Google Ads", "RRSS", "Email marketing"],
  },
  {
    year: "2023",
    role: "Auxiliar administrativo",
    company: "Ayuntamiento Cañada Rosal",
    description: `Gestión de contenido en redes sociales, monitoreo de la competencia y mantenimiento de plataformas digitales.`,
    technologies: ["Excel", "Paquete Office", "RRSS"],
  },
];


export const PROJECTS = {
  frontend: [
    {
      title: "To-Do List App",
      image: project1,
      description: "Aplicación de gestión de tareas con funcionalidad CRUD, almacenamiento en localStorage y diseño responsivo.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      url:"https://todolist-hazel-mu.vercel.app/"
    },
    {
      title: "Landing Page - App Triage",
      image: project2,
      description: "Landing page para una app de gestión de emergencias médicas, optimizada para conversión.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      url:"https://react-ten-gamma-39.vercel.app/"
    },
    {
      title: "Web SoundSafari",
      image: project3,
      description: "Web sobre festivales de música creada con HTML,CSS y JavaScript",
      technologies: ["HTML", "CSS", "JavaScript"],
      url:"https://soundsafari-seven.vercel.app/"
    },
    {
      title: "Web con Frontend y Backend",
      image: project4,
      description: "Sitio web desarrollado con React y Node.js. Actualmente funcionando solo el frontend por falta de base de datos.",
      technologies: ["React", "Node.js", "Express"],
      url:"https://react-proyecto-final-seven.vercel.app/"
    },
  ],
  
  wordpress: [
    {
      title: "Web de Vino y Pintura",
      image: project5,
      description: "Página web desarrollada en WordPress para un negocio que combina catas de vino con sesiones de pintura.",
      technologies: ["WordPress", "Elementor", "SEO"],
    },
    {
      title: "Web para Asociación Breast Cancer Survivor Sevilla",
      image: project6,
      description: "Sitio web con información sobre actividades, inscripciones y noticias del club.",
      technologies: ["WordPress", "Elementor", "SEO"],
      url:"https://bcssevilla.com/"
    },
  ],
  
  uxui: [
    {
      title: "Landing Page - Tienda de Café",
      image: project7,
      description: "Diseño UX/UI de una landing page para una tienda de café, enfocada en branding y conversión.",
      technologies: ["Figma", "Adobe XD"],
      url:"https://www.figma.com/proto/O5t2edEggBgnV1g4yaGAY0/Syra-redise%C3%B1o?node-id=1-2&p=f&t=wdG7H8eSXskHfPOr-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2"
    },
    {
      title: "Landing Page - Gimnasio (Mobile & Desktop)",
      image: project4,
      description: "Diseño de una landing page adaptable para una cadena de gimnasios, optimizando la experiencia en móvil y escritorio.",
      technologies: ["Figma", "Adobe XD"],
      url:"https://www.figma.com/proto/xnJeb6WRGrUKFMvLs9S61K/Landing-gym?node-id=8-169&p=f&t=Wi8LEX4EQrf2tJQX-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
    },
    {
      title: "App Masaltos.com",
      image: project1,
      description: "Diseño UX/UI de una app móvil para la tienda de calzado Masaltos.com, enfocada en experiencia de compra.",
      technologies: ["Figma", "Adobe XD"],
      url:"https://www.figma.com/proto/ykOI4GwvnZ0tJIuRTMyUQ3/Masaltos-app?node-id=1-1205&p=f&t=AfEVmIoHZREHmcsX-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A1419"
    },
    {
      title: "App Fast Food",
      image: project2,
      description: "Aplicación para pedidos de comida rápida con interfaz optimizada para rapidez y usabilidad.",
      technologies: ["Figma", "Adobe XD"],
      url:"https://www.figma.com/proto/ksTOUwsfr2iGv0NoEF2Qmn/Fast-Food-App?node-id=2-3&p=f&t=YC8dQg8HQdfKr3ZX-0&scaling=contain&content-scaling=fixed&page-id=0%3A1"
    },
  ],
  
  marketing: [
    {
      title: "Diseño para RRSS",
      image: project3,
      description: "Creación de contenido visual para redes sociales, incluyendo stories, posts y reels.",
      technologies: ["Canva", "Photoshop", "Illustrator"],
    },
    {
      title: "Publicidad Digital",
      image: project4,
      description: "Diseño de campañas publicitarias para Meta Ads y Google Ads con enfoque en conversión.",
      technologies: ["Canva", "Photoshop", "Illustrator"],
    },
    {
      title: "Banners y Material Promocional",
      image: project1,
      description: "Diseño de banners y creatividades para campañas de marketing digital.",
      technologies: ["Illustrator", "Photoshop"],
    },
  ],
};


export const CONTACT = {
  phoneNo: "+34 664 52 35 84",
  email: "molinahebles@gmail.com",
};
