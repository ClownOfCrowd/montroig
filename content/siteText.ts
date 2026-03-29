export type LanguageCode = "ES" | "EN" | "RU";

type NavText = {
  property: string;
  investment: string;
  location: string;
  process: string;
  contact: string;
};

type Step = {
  title: string;
  description: string;
};

type Metric = {
  value: string;
  label: string;
};

type Scenario = {
  name: string;
  details: string[];
  result: string;
};

type StatItem = {
  value: string;
  label: string;
};

type GalleryItem = {
  title: string;
};

type FeatureItem = {
  title: string;
  detail: string;
};

export type SiteText = {
  header: {
    brand: string;
    nav: NavText;
    requestDetails: string;
    menuLabel: string;
    closeLabel: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  stats: {
    ariaLabel: string;
    items: StatItem[];
  };
  concept: {
    title: string;
    paragraph1: string;
    paragraph2: string;
  };
  gallery: {
    kicker: string;
    title: string;
    cinematicLine: string;
    items: GalleryItem[];
  };
  breaks: {
    kicker: string;
    firstTitle: string;
    firstSubtitle: string;
    secondTitle: string;
    secondSubtitle: string;
  };
  property: {
    title: string;
    anchorLabel: string;
    anchorValue: string;
    features: FeatureItem[];
  };
  investment: {
    title: string;
    leftTitle: string;
    leftItems: string[];
    rightTitle: string;
    rightItems: string[];
  };
  vision: {
    title: string;
    options: string[];
  };
  investor: {
    title: string;
    subtitle: string;
    keyMetricsTitle: string;
    keyMetrics: Metric[];
    revenueTitle: string;
    scenarios: Scenario[];
    valueTitle: string;
    opportunities: string[];
    disclaimer: string;
  };
  advisor: {
    kicker: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    trustMetrics: string[];
    positioning: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
  };
  location: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    mapLabel: string;
    aerialAlt: string;
    mapAlt: string;
  };
  process: {
    title: string;
    steps: Step[];
  };
  lifestyle: {
    title: string;
    text: string;
  };
  price: {
    description: string;
  };
  cta: {
    title: string;
  };
  leadForm: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    submit: string;
    supportText: string;
    trust: string[];
  };
  leadModal: {
    title: string;
    subtitle: string;
    close: string;
  };
  leadCapture: {
    title: string;
    subtitle: string;
  };
  sticky: {
    title: string;
    button: string;
  };
  prompt: {
    title: string;
    button: string;
    dismiss: string;
  };
  footer: {
    brandTitle: string;
    brandDescription: string;
    navTitle: string;
    contactTitle: string;
    legalTitle: string;
    contactEmail: string;
    contactPhone: string;
    contactWhatsapp: string;
    contactLocation: string;
    legalDisclaimer: string;
    privacy: string;
    terms: string;
    copyright: string;
  };
};

const processEN: Step[] = [
  {
    title: "Initial Inquiry",
    description: "Submit a request to receive full property details and financial overview.",
  },
  {
    title: "Investment Brief",
    description: "We provide rental projections, licensing details, and acquisition structure.",
  },
  {
    title: "Property Visit / Due Diligence",
    description: "On-site or remote viewing with full legal and technical review.",
  },
  {
    title: "Transaction & Completion",
    description: "End-to-end support through negotiation, contracts, and closing.",
  },
];

const processES: Step[] = [
  {
    title: "Consulta inicial",
    description: "Envias una solicitud y recibes la ficha completa del activo junto con su vision financiera.",
  },
  {
    title: "Dossier de inversion",
    description: "Compartimos proyecciones de renta, estado de licencias y estructura de adquisicion.",
  },
  {
    title: "Visita y due diligence",
    description: "Visita presencial o remota con revision legal y tecnica integral.",
  },
  {
    title: "Transaccion y cierre",
    description: "Acompanamiento completo en negociacion, contratos y formalizacion final.",
  },
];

const processRU: Step[] = [
  {
    title: "Первичный запрос",
    description: "Вы оставляете контакт и получаете полный пакет по объекту и финансовой модели.",
  },
  {
    title: "Инвестиционный brief",
    description: "Передаем прогноз аренды, статус лицензий и структуру приобретения.",
  },
  {
    title: "Просмотр и due diligence",
    description: "Очный или дистанционный просмотр с полной юридической и технической проверкой.",
  },
  {
    title: "Сделка и закрытие",
    description: "Сопровождаем переговоры, договоры и финальное закрытие под ключ.",
  },
];

export const siteText: Record<LanguageCode, SiteText> = {
  ES: {
    header: {
      brand: "Mont-Roig Seaside Residences",
      nav: {
        property: "Propiedad",
        investment: "Inversion",
        location: "Ubicacion",
        process: "Proceso",
        contact: "Contacto",
      },
      requestDetails: "Solicitar detalles",
      menuLabel: "Menu",
      closeLabel: "Cerrar",
    },
    hero: {
      kicker: "Montroig Mediterranean Asset",
      title: "Terreno en primera linea del Mediterraneo con potencial de ingresos",
      subtitle: "5 unidades de alquiler con licencia sobre 5.600 m2 de propiedad costera privada en Costa Dorada",
      primaryCta: "Request Investment Brief",
      secondaryCta: "Explore Opportunity",
    },
    stats: {
      ariaLabel: "Indicadores clave de la propiedad",
      items: [
        { value: "5.621", label: "M2 parcela" },
        { value: "566", label: "M2 construidos" },
        { value: "5", label: "Apartamentos" },
        { value: "10", label: "Dormitorios" },
        { value: "1a", label: "Primera linea" },
      ],
    },
    concept: {
      title: "No es solo una finca. Es un activo turistico listo para escalar.",
      paragraph1: "Esta propiedad combina ubicacion, superficie y una configuracion operativa pensada para generar ingresos desde el primer dia.",
      paragraph2: "Su estructura actual permite mantener un modelo turistico rentable hoy y, al mismo tiempo, proyectar nuevas capas de valor con una gestion profesional.",
    },
    gallery: {
      kicker: "Visual Portfolio",
      title: "Primera linea, amplitud y atmosfera",
      cinematicLine: "Una oportunidad unica para controlar una parte significativa de costa mediterranea",
      items: [
        { title: "Primera linea del mar" },
        { title: "Vistas desde la parcela" },
        { title: "Terrazas abiertas" },
        { title: "Escala del terreno" },
        { title: "Atardecer mediterraneo" },
      ],
    },
    breaks: {
      kicker: "Mediterranean Frontline",
      firstTitle: "Primera linea real del Mediterraneo",
      firstSubtitle: "La parcela mira al mar sin filtros urbanos: horizonte abierto, privacidad y posicion irrepetible.",
      secondTitle: "Escala de terreno dificil de replicar",
      secondSubtitle: "5.621 m2 frente al mar con configuracion lista para producto turistico boutique.",
    },
    property: {
      title: "Configuracion de la propiedad",
      anchorLabel: "Scale Anchor",
      anchorValue: "5.621 m2 de terreno frente al mar",
      features: [
        { title: "3 edificaciones", detail: "Distribucion separada para operaciones flexibles" },
        { title: "5 apartamentos", detail: "Unidades independientes listas para renta" },
        { title: "10 dormitorios / 5 banos", detail: "Capacidad ideal para modelo premium" },
        { title: "Cocinas independientes", detail: "Operacion autonoma por unidad" },
        { title: "Terrazas con vistas", detail: "Experiencia mediterranea de alto valor" },
      ],
    },
    investment: {
      title: "Investment Potential",
      leftTitle: "Rentabilidad inmediata",
      leftItems: [
        "Activo operativo con distribucion turistica existente",
        "Multiples unidades para diversificar reservas",
        "Potencial de ocupacion anual por ubicacion prime",
      ],
      rightTitle: "Value-add",
      rightItems: [
        "Reposicionamiento como producto boutique premium",
        "Optimizacion de pricing y canales de venta",
        "Escalado de ingresos con mejoras selectivas",
      ],
    },
    vision: {
      title: "Vision de reposicionamiento",
      options: ["Boutique hotel", "Luxury rental", "Wellness retreat", "Residencia familiar"],
    },
    investor: {
      title: "Potencial de inversion",
      subtitle: "Estimacion orientativa basada en alquiler turistico en mercados costeros del Mediterraneo.",
      keyMetricsTitle: "Metricas clave",
      keyMetrics: [
        { value: "EUR 140 - 220", label: "Tarifa media por noche" },
        { value: "55% - 75%", label: "Ocupacion" },
        { value: "EUR 140k - 260k", label: "Ingreso anual estimado" },
        { value: "5", label: "Apartamentos con licencia" },
      ],
      revenueTitle: "Escenarios de ingresos",
      scenarios: [
        { name: "Conservador", details: ["ADR mas bajo", "Menor ocupacion"], result: "~ EUR 120.000 / ano" },
        { name: "Caso base", details: ["Rendimiento equilibrado", "Referencia de mercado actual"], result: "~ EUR 180.000 / ano" },
        { name: "Upside", details: ["Tras reposicionamiento", "Mejora de ADR y ocupacion"], result: "~ EUR 250.000+ / ano" },
      ],
      valueTitle: "Oportunidades de creacion de valor",
      opportunities: [
        "Rediseno interior para subir la tarifa por noche",
        "Posicionamiento como boutique resort",
        "Gestion profesional especializada",
        "Optimizacion de espacios exteriores",
      ],
      disclaimer: "Estas cifras son orientativas y se basan en referencias de mercado. El rendimiento real puede variar.",
    },
    advisor: {
      kicker: "Private Real Estate Advisory",
      title: "Estructuramos y facilitamos adquisiciones costeras de alto valor",
      paragraph1: "Trabajamos con inversores privados para acceder a activos off-market y oportunidades costeras con alto potencial.",
      paragraph2: "Desde el underwriting inicial hasta el cierre legal, cada fase se gestiona con expertise local y criterio institucional.",
      trustMetrics: ["EUR 12M+ en transacciones facilitadas", "25+ propiedades cerradas", "Red internacional de inversores"],
      positioning: "Enfoque en activos generadores de ingresos en Costa Dorada",
      primaryCta: "Hablar con un advisor",
      secondaryCta: "Solicitar investment brief",
      imageAlt: "Advisor junto al activo costero",
    },
    location: {
      title: "Ubicacion estrategica",
      paragraph1: "La finca se ubica en primera linea del Mediterraneo, en un entorno de alta demanda turistica y excelente conexion con servicios, ocio y transporte.",
      paragraph2: "Esta combinacion entre privacidad, vistas abiertas y acceso rapido la convierte en un activo especialmente atractivo para operadores y viajeros premium.",
      mapLabel: "Coastal Access Map",
      aerialAlt: "Aerial coastal context",
      mapAlt: "Stylized access map",
    },
    process: {
      title: "Proceso de adquisicion",
      steps: processES,
    },
    lifestyle: {
      title: "Lifestyle appeal",
      text: "Un enclave pensado para quienes buscan mar, espacio y calma sin renunciar al confort; una experiencia mediterranea con aura privada, deseable y duradera.",
    },
    price: {
      description: "Activos en primera linea con estas caracteristicas son extremadamente limitados",
    },
    cta: {
      title: "Solicita informacion completa",
    },
    leadForm: {
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Email",
      emailPlaceholder: "tu@email.com",
      phoneLabel: "Telefono (opcional)",
      phonePlaceholder: "+34 ...",
      submit: "Solicitar dossier completo",
      supportText: "Te enviaremos informacion completa, desglose financiero y opciones de visita",
      trust: ["Directo de propietario / agente", "Propiedad con licencia de alquiler", "Ubicacion costera de alta demanda"],
    },
    leadModal: {
      title: "Solicitar dossier completo",
      subtitle: "Recibe el paquete integral directamente en tu email.",
      close: "Cerrar",
    },
    leadCapture: {
      title: "Solicita el dossier completo",
      subtitle: "Recibe cifras, estructura legal y opciones de visita en un solo mensaje.",
    },
    sticky: {
      title: "Solicita el dossier completo",
      button: "Ver detalles",
    },
    prompt: {
      title: "Interesado? Solicita informacion completa",
      button: "Solicitar ahora",
      dismiss: "Cerrar",
    },
    footer: {
      brandTitle: "Mont-Roig Seaside Residences",
      brandDescription: "Activo privado en costa con infraestructura de alquiler licenciada.",
      navTitle: "Navegacion",
      contactTitle: "Contacto",
      legalTitle: "Legal",
      contactEmail: "Email: advisory@montroig-residences.com",
      contactPhone: "Telefono (Espana): +34 600 000 000",
      contactWhatsapp: "WhatsApp: +34 600 000 000",
      contactLocation: "Ubicacion: Costa Dorada, Spain",
      legalDisclaimer: "All information is provided for guidance only and does not constitute a contractual offer.",
      privacy: "Privacy Policy",
      terms: "Terms",
      copyright: "© 2026 Mont-Roig Seaside Residences",
    },
  },
  EN: {
    header: {
      brand: "Mont-Roig Seaside Residences",
      nav: {
        property: "Property",
        investment: "Investment",
        location: "Location",
        process: "Process",
        contact: "Contact",
      },
      requestDetails: "Request Details",
      menuLabel: "Menu",
      closeLabel: "Close",
    },
    hero: {
      kicker: "Montroig Mediterranean Asset",
      title: "Frontline Mediterranean Land with Income Potential",
      subtitle: "5 licensed rental units on 5,600 m2 of private coastal property in Costa Dorada",
      primaryCta: "Request Investment Brief",
      secondaryCta: "Explore Opportunity",
    },
    stats: {
      ariaLabel: "Property highlights",
      items: [
        { value: "5,621", label: "M2 land" },
        { value: "566", label: "M2 built" },
        { value: "5", label: "Apartments" },
        { value: "10", label: "Bedrooms" },
        { value: "1st", label: "Frontline" },
      ],
    },
    concept: {
      title: "Not just a residence. A coastal hospitality asset ready to scale.",
      paragraph1: "This property combines location, footprint and an operational setup built to generate income from day one.",
      paragraph2: "Its current structure supports immediate rental performance while opening clear upside through professional repositioning.",
    },
    gallery: {
      kicker: "Visual Portfolio",
      title: "Frontline sea views, scale and atmosphere",
      cinematicLine: "A rare opportunity to control a significant piece of Mediterranean coastline",
      items: [
        { title: "Mediterranean frontline" },
        { title: "View from the plot" },
        { title: "Open terraces" },
        { title: "Land scale" },
        { title: "Sunset mood" },
      ],
    },
    breaks: {
      kicker: "Mediterranean Frontline",
      firstTitle: "True Mediterranean frontline positioning",
      firstSubtitle: "Uninterrupted sea exposure, open horizon and privacy that is increasingly hard to replicate.",
      secondTitle: "Land scale with strategic scarcity",
      secondSubtitle: "5,621 m2 facing the sea with a structure already aligned to a boutique rental product.",
    },
    property: {
      title: "Property Configuration",
      anchorLabel: "Scale Anchor",
      anchorValue: "5,621 m2 of sea-facing land",
      features: [
        { title: "3 buildings", detail: "Segmented layout for flexible operations" },
        { title: "5 apartments", detail: "Independent units ready for rentals" },
        { title: "10 bedrooms / 5 baths", detail: "Capacity aligned with premium demand" },
        { title: "Independent kitchens", detail: "Autonomous use per unit" },
        { title: "Sea-view terraces", detail: "High perceived guest value" },
      ],
    },
    investment: {
      title: "Investment Potential",
      leftTitle: "Immediate Yield",
      leftItems: [
        "Operating asset with existing rental distribution",
        "Multiple units to diversify occupancy",
        "Strong annual demand due to prime location",
      ],
      rightTitle: "Value-add",
      rightItems: [
        "Repositioning as a premium boutique product",
        "Pricing and channel optimization",
        "Revenue scaling through selective upgrades",
      ],
    },
    vision: {
      title: "Repositioning Vision",
      options: ["Boutique hotel", "Luxury rental", "Wellness retreat", "Family residence"],
    },
    investor: {
      title: "Investment Potential",
      subtitle: "Estimated performance based on short-term rental in coastal Mediterranean markets.",
      keyMetricsTitle: "Key Metrics",
      keyMetrics: [
        { value: "EUR 140 - 220", label: "Average nightly rate" },
        { value: "55% - 75%", label: "Occupancy" },
        { value: "EUR 140k - 260k", label: "Estimated annual revenue" },
        { value: "5", label: "Licensed apartments" },
      ],
      revenueTitle: "Revenue Scenarios",
      scenarios: [
        { name: "Conservative", details: ["Low ADR", "Lower occupancy"], result: "~ EUR 120.000 / year" },
        { name: "Base Case", details: ["Balanced performance", "Current market baseline"], result: "~ EUR 180.000 / year" },
        { name: "Upside", details: ["After repositioning", "Improved ADR and occupancy"], result: "~ EUR 250.000+ / year" },
      ],
      valueTitle: "Value Creation Opportunities",
      opportunities: [
        "Interior redesign to unlock higher nightly rates",
        "Branding as boutique resort",
        "Professional management",
        "Outdoor space optimization",
      ],
      disclaimer: "These figures are indicative and based on market benchmarks. Actual performance may vary.",
    },
    advisor: {
      kicker: "Private Real Estate Advisory",
      title: "We structure and facilitate high-value coastal property acquisitions",
      paragraph1: "We work with private investors to acquire off-market and high-potential coastal assets.",
      paragraph2: "From initial underwriting to legal completion, every step of the acquisition process is handled with local expertise and institutional-level structuring.",
      trustMetrics: ["EUR 12M+ transactions facilitated", "25+ properties closed", "International investor network"],
      positioning: "Focused on income-generating assets along the Costa Dorada",
      primaryCta: "Speak with an advisor",
      secondaryCta: "Request full investment brief",
      imageAlt: "Advisor near the coastal asset",
    },
    location: {
      title: "Strategic Location",
      paragraph1: "The asset sits on the Mediterranean frontline in a high-demand tourism area with strong connectivity to services, leisure and transport.",
      paragraph2: "This mix of privacy, open views and quick access makes it especially attractive for premium operators and guests.",
      mapLabel: "Coastal Access Map",
      aerialAlt: "Aerial coastal context",
      mapAlt: "Stylized access map",
    },
    process: {
      title: "Acquisition Process",
      steps: processEN,
    },
    lifestyle: {
      title: "Lifestyle Appeal",
      text: "A coastal setting for buyers seeking sea, space and calm without sacrificing comfort; a Mediterranean experience with durable premium positioning.",
    },
    price: {
      description: "Frontline assets with this profile remain exceptionally limited in the current market.",
    },
    cta: {
      title: "Request complete information",
    },
    leadForm: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@email.com",
      phoneLabel: "Phone (optional)",
      phonePlaceholder: "+34 ...",
      submit: "Request full dossier",
      supportText: "We will send full details, financial breakdown and viewing options",
      trust: ["Direct from owner / agent", "Licensed rental property", "High-demand coastal location"],
    },
    leadModal: {
      title: "Request full dossier",
      subtitle: "Receive the full package directly in your inbox.",
      close: "Close",
    },
    leadCapture: {
      title: "Request full dossier",
      subtitle: "Get all numbers, legal details and viewing options in one message.",
    },
    sticky: {
      title: "Request full dossier",
      button: "Get details",
    },
    prompt: {
      title: "Interested? Request full details",
      button: "Request now",
      dismiss: "Dismiss",
    },
    footer: {
      brandTitle: "Mont-Roig Seaside Residences",
      brandDescription: "Private coastal property with licensed rental infrastructure.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      legalTitle: "Legal",
      contactEmail: "Email: advisory@montroig-residences.com",
      contactPhone: "Phone (Spain): +34 600 000 000",
      contactWhatsapp: "WhatsApp: +34 600 000 000",
      contactLocation: "Location: Costa Dorada, Spain",
      legalDisclaimer: "All information is provided for guidance only and does not constitute a contractual offer.",
      privacy: "Privacy Policy",
      terms: "Terms",
      copyright: "© 2026 Mont-Roig Seaside Residences",
    },
  },
  RU: {
    header: {
      brand: "Mont-Roig Seaside Residences",
      nav: {
        property: "Объект",
        investment: "Инвестиции",
        location: "Локация",
        process: "Процесс",
        contact: "Контакт",
      },
      requestDetails: "Получить детали",
      menuLabel: "Меню",
      closeLabel: "Закрыть",
    },
    hero: {
      kicker: "Montroig Mediterranean Asset",
      title: "Первая линия Средиземного моря с доходным потенциалом",
      subtitle: "5 лицензированных арендных юнитов на 5 600 м2 частной прибрежной территории Costa Dorada",
      primaryCta: "Request Investment Brief",
      secondaryCta: "Explore Opportunity",
    },
    stats: {
      ariaLabel: "Ключевые параметры объекта",
      items: [
        { value: "5 621", label: "М2 участка" },
        { value: "566", label: "М2 застройки" },
        { value: "5", label: "Апартаментов" },
        { value: "10", label: "Спален" },
        { value: "1я", label: "Линия моря" },
      ],
    },
    concept: {
      title: "Это не просто дом. Это туристический актив с потенциалом роста.",
      paragraph1: "Объект объединяет сильную локацию, масштаб участка и рабочую операционную модель, способную приносить доход уже сейчас.",
      paragraph2: "Текущая конфигурация поддерживает стабильную аренду и одновременно открывает понятные сценарии увеличения стоимости.",
    },
    gallery: {
      kicker: "Visual Portfolio",
      title: "Первая линия, масштаб и атмосфера",
      cinematicLine: "Редкая возможность получить контроль над значимым участком средиземноморского побережья",
      items: [
        { title: "Первая линия моря" },
        { title: "Вид с участка" },
        { title: "Открытые террасы" },
        { title: "Масштаб земли" },
        { title: "Атмосфера заката" },
      ],
    },
    breaks: {
      kicker: "Mediterranean Frontline",
      firstTitle: "Реальная первая линия Средиземного моря",
      firstSubtitle: "Открытый горизонт, приватность и дефицитное позиционирование без городской застройки перед фасадом.",
      secondTitle: "Масштаб участка, который сложно повторить",
      secondSubtitle: "5 621 м2 у моря с конфигурацией, готовой под бутик-формат арендного продукта.",
    },
    property: {
      title: "Конфигурация объекта",
      anchorLabel: "Scale Anchor",
      anchorValue: "5 621 м2 участка на первой линии моря",
      features: [
        { title: "3 здания", detail: "Разделенная структура для гибкой эксплуатации" },
        { title: "5 апартаментов", detail: "Независимые юниты, готовые к аренде" },
        { title: "10 спален / 5 ванных", detail: "Емкость под премиальный спрос" },
        { title: "Отдельные кухни", detail: "Автономность каждой единицы" },
        { title: "Террасы с видом", detail: "Высокая ценность для арендатора" },
      ],
    },
    investment: {
      title: "Инвестиционный потенциал",
      leftTitle: "Быстрый денежный поток",
      leftItems: [
        "Рабочий актив с существующей арендной инфраструктурой",
        "Несколько юнитов для диверсификации загрузки",
        "Сильный годовой спрос за счет prime-локации",
      ],
      rightTitle: "Value-add",
      rightItems: [
        "Репозиционирование в премиальный бутик-продукт",
        "Оптимизация цены и каналов продаж",
        "Рост выручки через селективные улучшения",
      ],
    },
    vision: {
      title: "Сценарии позиционирования",
      options: ["Boutique hotel", "Luxury rental", "Wellness retreat", "Семейная резиденция"],
    },
    investor: {
      title: "Инвестиционный потенциал",
      subtitle: "Оценка основана на модели краткосрочной аренды в прибрежных зонах Средиземноморья.",
      keyMetricsTitle: "Ключевые метрики",
      keyMetrics: [
        { value: "EUR 140 - 220", label: "Средняя ставка за ночь" },
        { value: "55% - 75%", label: "Заполняемость" },
        { value: "EUR 140k - 260k", label: "Оценка годовой выручки" },
        { value: "5", label: "Апартаментов с лицензией" },
      ],
      revenueTitle: "Сценарии выручки",
      scenarios: [
        { name: "Консервативный", details: ["Низкий ADR", "Более скромная загрузка"], result: "~ EUR 120.000 / год" },
        { name: "Базовый", details: ["Сбалансированная модель", "Текущий рыночный ориентир"], result: "~ EUR 180.000 / год" },
        { name: "Upside", details: ["После репозиционирования", "Рост ADR и заполняемости"], result: "~ EUR 250.000+ / год" },
      ],
      valueTitle: "Точки роста стоимости",
      opportunities: [
        "Редизайн интерьеров для роста ставки за ночь",
        "Позиционирование как boutique resort",
        "Профессиональное операционное управление",
        "Оптимизация открытых пространств",
      ],
      disclaimer: "Показатели ориентировочные и основаны на рыночных бенчмарках. Фактический результат может отличаться.",
    },
    advisor: {
      kicker: "Private Real Estate Advisory",
      title: "Мы структурируем и сопровождаем сделки по прибрежным активам высокой стоимости",
      paragraph1: "Работаем с частными инвесторами по покупке off-market и high-potential объектов на побережье.",
      paragraph2: "От первичного андеррайтинга до юридического закрытия сделки - с локальной экспертизой и дисциплиной институционального уровня.",
      trustMetrics: ["EUR 12M+ сопровождённых сделок", "25+ закрытых объектов", "Международная сеть инвесторов"],
      positioning: "Фокус на доходных активах побережья Costa Dorada",
      primaryCta: "Связаться с advisor",
      secondaryCta: "Запросить инвестиционный brief",
      imageAlt: "Advisor рядом с прибрежным активом",
    },
    location: {
      title: "Стратегическая локация",
      paragraph1: "Объект расположен на первой линии Средиземного моря в зоне стабильного туристического спроса и удобной транспортной доступности.",
      paragraph2: "Сочетание приватности, открытых видов и быстрой связи с инфраструктурой делает актив привлекательным для премиального сегмента.",
      mapLabel: "Coastal Access Map",
      aerialAlt: "Контекст побережья с воздуха",
      mapAlt: "Стилизованная карта доступности",
    },
    process: {
      title: "Как проходит сделка",
      steps: processRU,
    },
    lifestyle: {
      title: "Lifestyle-ценность",
      text: "Пространство для тех, кто ищет море, масштаб и тишину без компромисса по комфорту; премиальный средиземноморский формат с устойчивым спросом.",
    },
    price: {
      description: "Активы на первой линии с такими характеристиками остаются крайне ограниченными на рынке.",
    },
    cta: {
      title: "Запросить полную информацию",
    },
    leadForm: {
      nameLabel: "Имя",
      namePlaceholder: "Ваше имя",
      emailLabel: "Email",
      emailPlaceholder: "you@email.com",
      phoneLabel: "Телефон (необязательно)",
      phonePlaceholder: "+34 ...",
      submit: "Запросить полное досье",
      supportText: "Мы отправим подробности объекта, финансовую модель и варианты просмотра",
      trust: ["Прямой контакт с владельцем / агентом", "Объект с лицензией на аренду", "Локация на побережье с высоким спросом"],
    },
    leadModal: {
      title: "Запросить полное досье",
      subtitle: "Получите полный пакет информации на почту.",
      close: "Закрыть",
    },
    leadCapture: {
      title: "Запросить полное досье",
      subtitle: "Все цифры, юридические детали и формат сделки одним сообщением.",
    },
    sticky: {
      title: "Запросить полное досье",
      button: "Получить детали",
    },
    prompt: {
      title: "Интересно? Запросите детали",
      button: "Запросить",
      dismiss: "Скрыть",
    },
    footer: {
      brandTitle: "Mont-Roig Seaside Residences",
      brandDescription: "Частный прибрежный актив с лицензированной арендной инфраструктурой.",
      navTitle: "Навигация",
      contactTitle: "Контакты",
      legalTitle: "Юридическая информация",
      contactEmail: "Email: advisory@montroig-residences.com",
      contactPhone: "Телефон (Испания): +34 600 000 000",
      contactWhatsapp: "WhatsApp: +34 600 000 000",
      contactLocation: "Локация: Costa Dorada, Spain",
      legalDisclaimer: "All information is provided for guidance only and does not constitute a contractual offer.",
      privacy: "Privacy Policy",
      terms: "Terms",
      copyright: "© 2026 Mont-Roig Seaside Residences",
    },
  },
};
