const translations = {
  en: {
    navServices:"Services",navWork:"Selected work",navAbout:"About",navContact:"Contact",letsTalk:"Let’s talk",
    eyebrow:"INDEPENDENT WEB DEVELOPER · CHILE",headline:'I build useful digital products with <em>interactive</em> experiences.',
    lead:"Web applications, 2D/3D interfaces, data visualization and practical AI integrations — designed around real-world needs.",
    contactMe:"Contact me",exploreWork:"Explore selected work ↓",location:"Based in Chile · Available for remote projects",
    whatIDo:"WHAT I DO",servicesTitle:"Development for ideas that need more than a template.",
    service1Title:"Web applications",service1Text:"Custom browser-based tools, interactive interfaces and business applications.",
    service2Title:"2D & 3D experiences",service2Text:"Product configurators, maps, simulations and visual experiences with Canvas and WebGL.",
    service3Title:"Data visualization",service3Text:"Interactive charts, dashboards and custom visual components for complex information.",
    service4Title:"AI integrations",service4Text:"AI-assisted search, conversational interfaces and integrations with existing data.",
    selectedWork:"SELECTED WORK & EXPERIENCE",workTitle:"A few areas I’ve worked in.",workNote:"A selection of project types and technical work. Detailed case studies and links can be added here.",
    work1Title:"Interactive 2D & 3D applications",work1Text:"Browser-based configurators, maps, simulations and custom visual interfaces using JavaScript, Three.js, A-Frame and Canvas.",
    work2Title:"Smart product and plant catalogues",work2Text:"Catalogue experiences with natural-language search, structured product data and PostgreSQL-backed retrieval.",
    work3Title:"Data-driven visual tools",work3Text:"Custom visual components and interactive 3D data views, including work with Tableau extensions and ECharts.",
    work4Title:"Engineering and practical web tools",work4Text:"Web interfaces for specialized workflows, including engineering calculations and medical or scientific use cases.",
    aboutMe:"ABOUT ME",aboutTitle:"Independent developer focused on practical, custom-built solutions.",
    aboutText:"I’m Alexander Goryushkin, a web developer based in Chile. I work across front-end development, interactive graphics and data-driven applications. I enjoy turning complex requirements into clear, usable tools and can contribute to an existing product or build a focused solution from scratch.",
    contactEyebrow:"HAVE A PROJECT IN MIND?",contactTitle:"Let’s build something useful.",contactText:"Tell me what you’re working on and where you need help.",
    footerNote:"Independent professional · Chile",footerRight:"Built with care, not a template."
  },
  es: {
    navServices:"Servicios",navWork:"Proyectos",navAbout:"Sobre mí",navContact:"Contacto",letsTalk:"Hablemos",
    eyebrow:"DESARROLLADOR WEB INDEPENDIENTE · CHILE",headline:'Creo productos digitales útiles con experiencias <em>interactivas</em>.',
    lead:"Aplicaciones web, interfaces 2D/3D, visualización de datos e integraciones prácticas de IA, enfocadas en necesidades reales.",
    contactMe:"Contactarme",exploreWork:"Ver proyectos ↓",location:"En Chile · Disponible para proyectos remotos",
    whatIDo:"QUÉ HAGO",servicesTitle:"Desarrollo para ideas que necesitan algo más que una plantilla.",
    service1Title:"Aplicaciones web",service1Text:"Herramientas web a medida, interfaces interactivas y aplicaciones para negocios.",
    service2Title:"Experiencias 2D y 3D",service2Text:"Configuradores, mapas, simulaciones y experiencias visuales con Canvas y WebGL.",
    service3Title:"Visualización de datos",service3Text:"Gráficos interactivos, paneles y componentes visuales para información compleja.",
    service4Title:"Integraciones de IA",service4Text:"Búsqueda asistida por IA, interfaces conversacionales e integración con datos existentes.",
    selectedWork:"EXPERIENCIA Y PROYECTOS",workTitle:"Algunas áreas en las que he trabajado.",workNote:"Una selección de tipos de proyectos y experiencia técnica. Aquí se pueden añadir casos de estudio y enlaces.",
    work1Title:"Aplicaciones interactivas 2D y 3D",work1Text:"Configuradores, mapas, simulaciones e interfaces visuales en navegador con JavaScript, Three.js, A-Frame y Canvas.",
    work2Title:"Catálogos inteligentes de productos y plantas",work2Text:"Catálogos con búsqueda en lenguaje natural, datos estructurados y consultas respaldadas por PostgreSQL.",
    work3Title:"Herramientas visuales basadas en datos",work3Text:"Componentes visuales personalizados y vistas 3D interactivas, incluyendo extensiones de Tableau y ECharts.",
    work4Title:"Herramientas web especializadas",work4Text:"Interfaces para flujos de trabajo específicos, incluidos cálculos de ingeniería y soluciones médicas o científicas.",
    aboutMe:"SOBRE MÍ",aboutTitle:"Desarrollador independiente enfocado en soluciones prácticas y a medida.",
    aboutText:"Soy Alexander Goryushkin, desarrollador web radicado en Chile. Trabajo en desarrollo frontend, gráficos interactivos y aplicaciones basadas en datos. Me interesa convertir requisitos complejos en herramientas claras y fáciles de usar, tanto colaborando en productos existentes como desarrollando soluciones específicas desde cero.",
    contactEyebrow:"¿TIENES UN PROYECTO EN MENTE?",contactTitle:"Construyamos algo útil.",contactText:"Cuéntame en qué estás trabajando y cómo puedo ayudarte.",
    footerNote:"Profesional independiente · Chile",footerRight:"Hecho con cuidado, no con una plantilla."
  }
};
let lang = "en";
const switcher = document.getElementById("langSwitch");
function setLanguage(next) {
  lang = next;
  document.documentElement.lang = next;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = translations[next][el.dataset.i18n];
    if (value) el.innerHTML = value;
  });
  switcher.textContent = next === "en" ? "ES" : "EN";
}
switcher.addEventListener("click", () => setLanguage(lang === "en" ? "es" : "en"));
document.getElementById("year").textContent = new Date().getFullYear();
