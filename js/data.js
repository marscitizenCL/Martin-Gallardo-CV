/* ============================================================
   DATA — todo el contenido del sitio vive aquí.
   Para actualizar el CV, edita solo este archivo.
   ============================================================ */

const PROFILE = {
  name: "Martín Gallardo",
  initials: "MG",
  role: "VP Business Development · IIoT & Smart Grid · LATAM",
  location: "Santiago, Chile",
  summary:
    "Dirijo equipos comerciales y estrategias de entrada a mercado en industrias técnicas complejas — automatización industrial, instrumentación y ahora smart grid — hace más de 15 años, en compañías como Schneider Electric, Xylem, Danaher, Thermo Fisher Scientific y CHINT. Historial consistente de superar objetivos de ingresos en Chile y el Cono Sur, reportando en forma directa a casas matrices en EE. UU. y Europa. Trilingüe: español, inglés y portugués básico.",
  contact: {
    email: "martin.ignacio.gallardo@gmail.com",
    phone: "+56 9 9698 0306",
    linkedin: "https://www.linkedin.com/in/martingallardo/",
  },
  stats: [
    { value: "15+", label: "años en liderazgo comercial B2B" },
    { value: "40%", label: "crecimiento interanual en órdenes, CHINT 24–25" },
    { value: "5", label: "mercados LATAM bajo gestión directa" },
    { value: "3", label: "idiomas — ES / EN / PT" },
  ],
};

const REGIONS = ["Chile", "Argentina", "Perú", "Sudamérica", "EE. UU. / Europa — reporte directo"];

/* Orden cronológico ascendente — el nodo más reciente queda "energizado".
   Campo opcional "photo": ruta a una imagen cuadrada (ej. "assets/roles/chint.jpg")
   para mostrar junto a la descripción de ese cargo en el panel de detalle. */
const CAREER = [
  {
    id: "root",
    company: "Fundamentos técnicos",
    short: "Raíces técnicas",
    photo: "assets/roles/root.jpg",
    role: "Cientec Instrumentos · Hanna Instruments · Duoc UC",
    period: "2003–2012",
    root: true,
    bullets: [
      "Ventas técnicas e instrumentación de laboratorio y proceso.",
      "Docencia técnica en automatización — origen de su perfil híbrido ventas/ingeniería.",
    ],
  },
  {
    id: "schneider",
    company: "Schneider Electric Chile",
    short: "Schneider Electric",
    photo: "assets/roles/schneider.jpg",
    role: "Product Manager — Baja Tensión",
    period: "2009–2014",
    bullets: [
      "Desarrollo de marketing estratégico y soporte comercial para la línea de equipamiento de baja tensión.",
      "Coordinación con equipos regionales LATAM para lanzamiento de producto y posicionamiento en el mercado chileno.",
    ],
  },
  {
    id: "xylem",
    company: "Xylem Water Solutions",
    short: "Xylem",
    photo: "assets/roles/xylem.jpg",
    role: "Líder de Unidad — Monitoreo & Control",
    period: "2015–2017",
    metric: "105% (2015) · 108% (2016)",
    bullets: [
      "Resultados de ventas sobre objetivo: 105% (2015) y 108% (2016).",
      "Establecimiento del proceso de venta de proyectos en la unidad de control y automatización.",
      "Gestión de equipo técnico y de servicio de la unidad.",
    ],
  },
  {
    id: "danaher",
    company: "Danaher Corporation (McCrometer)",
    short: "Danaher · McCrometer",
    photo: "assets/roles/danaher.jpg",
    role: "Business Development Manager — Sudamérica",
    period: "2017–2019",
    metric: "117% (2018) · 115% (2019)",
    bullets: [
      "Resultados de ventas sobre objetivo: 117% (2018) y 115% (2019).",
      "Desarrollo del plan de comercialización y distribución regional para toda Sudamérica.",
      "Reporte directo a fábrica (EE. UU.), coordinando estrategia de producto y pricing para el mercado local.",
    ],
  },
  {
    id: "thermofisher",
    company: "Thermo Fisher Scientific",
    short: "Thermo Fisher",
    photo: "assets/roles/thermofisher.jpg",
    role: "Gerente de Canal — Cono Sur",
    period: "2019–2024",
    metric: "105% (2021) · 116% (2022) · 100% (2023)",
    bullets: [
      "Resultados de ventas sobre objetivo: 105% (2021), 116% (2022), 100% (2023).",
      "Liderazgo de la expansión regional de socios estratégicos en Chile, Argentina y Perú.",
      "Gestión de distribuidores especializados en instrumentación científica e industrial para laboratorio, minería y agua.",
    ],
  },
  {
    id: "chint",
    company: "CHINT Chile",
    short: "CHINT",
    photo: "assets/roles/chint.jpg",
    role: "Director de Ventas",
    period: "2024–2026",
    metric: "+40% órdenes · +30% facturación",
    bullets: [
      "Incremento interanual del 40% en órdenes y 30% en facturación (2024–2025).",
      "Gestión de equipo de ventas y marketing de productos.",
      "Desarrollo de estrategia comercial y de marketing a 3–5 años.",
      "Reestructuración de la red de socios de canal y mejora de la Gestión de Cuentas Clave (KAM).",
    ],
  },
  {
    id: "trilliant",
    company: "Trilliant",
    role: "VP Business Development",
    period: "Jun 2026 — presente",
    current: true,
    bullets: [
      "Desarrollo de nuevas cuentas en el sector de infraestructura energética.",
      "Desarrollo y ejecución de estrategias de entrada y expansión en múltiples mercados, en colaboración con utilities, reguladores y gobiernos de la región.",
      "Construcción y gestión de un pipeline de bookings de múltiples años — desde pilotos y despliegues iniciales hasta implementaciones de smart grid a gran escala.",
      "Desarrollo de relaciones a nivel ejecutivo con utilities, organismos reguladores y asociaciones de la industria, con influencia directa en marcos regulatorios y decisiones de compra.",
    ],
  },
];

const COMPETENCIES = {
  "Estratégico": [
    "Estrategia Go-to-Market (GTM)",
    "Gestión de P&L",
    "Ventas B2B de ciclo largo",
    "Gestión de canales & distribuidores",
    "Key Account Management (KAM)",
    "Expansión regional LATAM",
    "Negociación contractual",
    "CRM & pipeline management",
  ],
  "Técnico": [
    "IIoT",
    "Automatización industrial",
    "Industria 4.0",
    "Instrumentación",
    "SCADA",
    "Medición & control",
    "Smart grid / AMI",
  ],
};

const EDUCATION = [
  { degree: "Posgrado en IoT", school: "Universidad Católica de Valparaíso", year: "2022" },
  { degree: "Posgrado en Dirección de Ventas B2B", school: "Universidad de Chile", year: "2021" },
  { degree: "Posgrado en Dirección de Marketing B2B", school: "Universidad de Chile", year: "2016" },
  { degree: "Ingeniero en Automatización Industrial", school: "Duoc UC", year: "2011" },
];

/* Hogan Leadership Forecast — Potential (HPI). Instrumento 100% orientado a fortalezas. */
const HOGAN_POTENTIAL = [
  { scale: "Adjustment", label: "Adaptación", value: 79, note: "Composición y estabilidad bajo presión." },
  { scale: "Ambition", label: "Ambición", value: 73, note: "Orientación a resultados y liderazgo." },
  { scale: "Sociability", label: "Sociabilidad", value: 52, note: "Cómodo en equipo o de forma autónoma." },
  { scale: "Interpersonal Sensitivity", label: "Sensibilidad interpersonal", value: 40, note: "Directo, dispuesto a tomar postura." },
  { scale: "Prudence", label: "Prudencia", value: 76, note: "Organizado, confiable, orientado al detalle." },
  { scale: "Inquisitive", label: "Inquisitivo", value: 91, note: "Visión estratégica y pensamiento rápido." },
  { scale: "Learning Approach", label: "Enfoque de aprendizaje", value: 75, note: "Aprendizaje continuo y actualización constante." },
];

/* Documentos descargables — solo instrumentos 100% orientados a fortalezas.
   Los reportes Hogan Challenge/Flash/Summary quedan fuera a propósito: contienen
   los puntajes crudos del HDS (derailers), pensados para coaching interno. */
const DOCUMENTS = [
  {
    title: "Curriculum Vitae",
    desc: "Trayectoria completa, formación y competencias.",
    file: "assets/docs/Martin-Gallardo-CV.pdf",
    meta: "PDF · 67 KB",
  },
  {
    title: "Hogan — Potencial de Liderazgo",
    desc: "Informe HPI completo: las 7 escalas de fortalezas de liderazgo.",
    file: "assets/docs/Martin-Gallardo-Hogan-Potencial.pdf",
    meta: "PDF · 161 KB",
  },
  {
    title: "Hogan — Valores y Motivadores",
    desc: "Informe MVPI completo: motivadores centrales y fit cultural.",
    file: "assets/docs/Martin-Gallardo-Hogan-Valores.pdf",
    meta: "PDF · 167 KB",
  },
  {
    title: "Strengthscope — Informe de Fortalezas",
    desc: "Detalle de las 7 fortalezas significativas y los 24 puntos del modelo.",
    file: "assets/docs/Martin-Gallardo-Strengthscope.pdf",
    meta: "PDF · 27 MB",
  },
];

const STRENGTHS = [
  { name: "Liderazgo", icon: "leadership", desc: "Asume la responsabilidad de motivar a otros hacia objetivos comunes; suele ser el punto de referencia del equipo." },
  { name: "Creatividad", icon: "creativity", desc: "Explora perspectivas nuevas y propone soluciones originales fuera del molde tradicional." },
  { name: "Desarrollo de los demás", icon: "development", desc: "Reconoce el potencial de otras personas y busca activamente ayudarlas a crecer." },
  { name: "Superación personal", icon: "growth", desc: "Se plantea desafíos constantes para aprender fuera de su zona de confort." },
  { name: "Colaboración", icon: "collaboration", desc: "Construye entendimiento común entre partes y promueve un clima de trabajo cooperativo." },
  { name: "Autoconfianza", icon: "confidence", desc: "Alto nivel de confianza en su criterio; transmite ideas con seguridad e impacto." },
  { name: "Flexibilidad", icon: "flexibility", desc: "Se adapta con facilidad a situaciones impredecibles o cambiantes." },
];
