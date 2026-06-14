import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import project5 from "../assets/projects/project-5.webp";
import project6 from "../assets/projects/project-6.webp";
import project7 from "../assets/projects/project-7.webp";
import project8 from "../assets/projects/project-8.webp";
import project9 from "../assets/projects/project-9.webp";
import project10 from "../assets/projects/project-10.webp";
import project11 from "../assets/projects/project-11.webp";
import project12 from "../assets/projects/project-12.webp";
import project13 from "../assets/projects/project-13.webp";


export const HERO_CONTENT = `Diseñadora web especializada en UX/UI y desarrollo frontend, con experiencia en optimización SEO y marketing digital. Uso tecnologías como React y herramientas como Figma, WordPress o Prestashop para crear sitios web atractivos, funcionales y orientados a resultados. Además, tengo conocimientos en backend, lo que me permite integrar soluciones completas y mejorar la funcionalidad de los proyectos. Mi objetivo es potenciar la presencia digital de marcas y e-commerce mediante un diseño coherente, estratégico y gestión integral del mismo.`;

export const ABOUT_TEXT = `Soy una profesional apasionada por el diseño web y la experiencia de usuario, con un fuerte enfoque en la optimización y el rendimiento digital. Con formación en marketing y desarrollo web, he trabajado en la creación y optimización de sitios para e-commerce, implementando estrategias de SEO y campañas publicitarias en Meta Ads. Disfruto diseñando interfaces intuitivas y visualmente atractivas, utilizando herramientas como Figma, Adobe XD y WordPress, así como tecnologías como HTML, CSS y JavaScript.`;

export const EXPERIENCES = [
{
year: "Oct 2025 - Presente",
role: "Diseñadora Web UX/UI",
company: "Mood Marketing",
description: "Diseño y desarrollo de interfaces web centradas en experiencia de usuario y conversión. Creación de wireframes, prototipos y diseños responsive optimizados para mejorar la usabilidad y el rendimiento digital de clientes. Colaboración en proyectos de branding digital, diseño visual y optimización de experiencia en entornos e-commerce.",
technologies: ["Figma", "WordPress", "Elementor", "HTML", "CSS", "UX/UI", "Responsive Design"],
},
{
year: "2024 - Oct 2025",
role: "Especialista en E-commerce, CRO y Marketing Digital",
company: "Masaltos.com",
description: "Optimización de e-commerce enfocada en CRO y experiencia de usuario, mejorando la navegación, usabilidad y conversión del sitio web. Diseño y rediseño de secciones estratégicas aplicando principios UX/UI orientados a aumentar ventas y retención. Gestión de campañas de email marketing y Meta Ads, creación de creatividades digitales y análisis de rendimiento para la mejora continua del funnel de conversión.",
technologies: ["WordPress", "Prestashop", "CRO", "UX/UI", "SEO", "Meta Ads", "Google Analytics", "Email Marketing", "FileZilla"],
},
{
year: "2023",
role: "Asistente de Marketing Digital",
company: "Berner Agency",
description: "Gestión de contenido para redes sociales, diseño de creatividades digitales y apoyo en campañas de email marketing. Optimización de estrategias de comunicación y análisis de métricas para mejorar el rendimiento de campañas digitales.",
technologies: ["Canva", "Metricool", "OnlyPut", "Email Marketing", "RRSS"],
},
{
year: "2023",
role: "Asistente dpto. Marketing y Comunicación",
company: "Evirom",
description: "Creación de contenido digital y apoyo en campañas SEO/SEM para mejorar el posicionamiento online de la marca. Diseño y envío de newsletters responsive orientadas a engagement y captación.",
technologies: ["SEO", "SEM", "WordPress", "Google Ads", "RRSS", "Email Marketing"],
},
{
year: "2023",
role: "Auxiliar Administrativo",
company: "Ayuntamiento Cañada Rosal",
description: "Gestión y actualización de contenido digital, soporte administrativo y mantenimiento de plataformas y canales de comunicación institucional.",
technologies: ["Excel", "Paquete Office", "RRSS"],
}
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
      title: "Web SoundSafari",
      image: project3,
      description: "Web sobre festivales de música creada con HTML,CSS y JavaScript",
      technologies: ["HTML", "CSS", "JavaScript"],
      url:"https://soundsafari-seven.vercel.app/"
    }
  ],
    fullstack: [
    {
      title: "Web Adogtame",
      image: project4,
      description: "Sitio web para adoptar animales desarrollado con React y Node.js. Actualmente funcionando solo el frontend por falta de base de datos.",
      technologies: ["React", "Node.js", "Express"],
      url: "https://react-proyecto-final-seven.vercel.app/"
    },
    {
      title: "Blog en PHP",
      image: project11,
      description: "Blog desarrollado desde cero con PHP y MySQL. Incluye gestión de publicaciones, edición, eliminación y sistema de comentarios.",
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
      url: 'https://github.com/nereahm/php',
    },
      {
    title: "Image Social",
    image: project1,
    description: "Mini red social para subir imágenes con registro, login y gestión de perfiles. Desarrollada con Laravel, PHP y MySQL.",
    technologies: ["Laravel", "PHP", "MySQL", "Blade", "Bootstrap"],
    url: "https://github.com/nereahm/image-social"
  },
  ],

  wordpress: [
    {
      title: "Web de Vino y Pintura",
      image: project5,
      description: "Eccomerce desarrollada en WordPress para un negocio que combina vino con sesiones de pintura.",
      technologies: ["WordPress", "Elementor", "SEO"],
    },
    {
      title: "Web para asociación Breast Cancer Survivor Sevilla",
      image: project6,
      description: "Sitio web con información sobre actividades, inscripciones y noticias del club.",
      technologies: ["WordPress", "Elementor", "SEO", "HTML"],
      url:"https://bcssevilla.com/"
    },
    {
      title: "Web Milunayunsol",
      image: project1,
      description: "Mejora integral de SEO, optimización de rendimiento, ajustes de diseño y diversas integraciones, incluyendo email marketing",
      technologies: ["Prestashop", "Filezilla", "SEO", "HTML", "JavaScript"],
      url:"https://milunayunsol.com/"
    },
  ],
  
  uxui: [
    {
      title: "Landing Page - Tienda Syra",
      image: project7,
      description: "Diseño UX/UI de una landing page para una tienda de café, enfocada en branding y conversión de sus principales productos.",
      technologies: ["Figma"],
      url:"https://www.figma.com/proto/O5t2edEggBgnV1g4yaGAY0/Syra-redise%C3%B1o?node-id=1-2&p=f&t=wdG7H8eSXskHfPOr-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2"
    },
    {
      title: "Web - Gimnasio (Mobile & Desktop)",
      image: project8,
      description: "Diseño web adaptable para un gimnasio local, optimizando la experiencia en móvil y escritorio.",
      technologies: ["Figma", "Photoshop"],
      url:"https://www.figma.com/proto/xnJeb6WRGrUKFMvLs9S61K/Landing-gym?node-id=8-169&p=f&t=Wi8LEX4EQrf2tJQX-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
    },
    {
      title: "App Masaltos.com",
      image: project9,
      description: "Diseño UX/UI de una app móvil para la tienda de calzado Masaltos.com, enfocada en experiencia de compra.",
      technologies: ["Figma", "Canva"],
      url:"https://www.figma.com/proto/ykOI4GwvnZ0tJIuRTMyUQ3/Masaltos-app?node-id=1-1205&p=f&t=AfEVmIoHZREHmcsX-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A1419"
    },
    {
      title: "App Fast Food",
      image: project10,
      description: "Aplicación para pedidos de comida rápida con interfaz optimizada para rapidez y usabilidad.",
      technologies: ["Figma", "Adobe XD"],
      url:"https://www.figma.com/proto/ksTOUwsfr2iGv0NoEF2Qmn/Fast-Food-App?node-id=2-3&p=f&t=YC8dQg8HQdfKr3ZX-0&scaling=contain&content-scaling=fixed&page-id=0%3A1"
    },
    {
      title: "Landing Agencia marketing",
      image: project2,
      description: "Diseño UX/UI de una landing page para una agencia de marketing junto a su Design sistem",
      technologies: ["Figma"],
      url:"https://www.figma.com/design/Zaau3yWfc9u1Uh6PuIKzjD/Landing-Agencia?node-id=4-377&t=qowESlqi6p9kOI1O-1"
    },
  ],
  
  marketing: [
    {
      title: "Diseño para RRSS",
      image: project11,
      description: "Creación de contenido visual para redes sociales, incluyendo stories, posts y reels.",
      technologies: ["Canva", "Photoshop", "CapCut"],
    },
    {
      title: "Publicidad digital",
      image: project12,
      description: "Diseño de campañas publicitarias para Meta Ads y Google Ads con enfoque en conversión.",
      technologies: ["Canva", "Photoshop"],
    },
    {
      title: "Banners y material promocional",
      image: project13,
      description: "Diseño de banners y creatividades para campañas de marketing digital y web.",
      technologies: ["Canva", "Photoshop"],
    },
  ],
};


export const CONTACT = {
  phoneNo: "+34 664 52 35 84",
  email: "molinahebles@gmail.com",
};
