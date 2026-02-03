export interface Itinerary {
  day: number
  title: string
  description: string
  highlights: string[]
}

export interface TripDate {
  id: string
  startDate: string
  endDate: string
  spots: number
  totalSpots: number
  price: number
  originalPrice?: number
}

export interface Destination {
  slug: string
  name: string
  tagline: string
  heroImage: string
  galleryImages: string[]
  duration: string
  rating: number
  reviewCount: number
  price: number
  originalPrice?: number
  continent: string
  highlights: string[]
  description: string
  itinerary: Itinerary[]
  included: string[]
  notIncluded: string[]
  practicalInfo: {
    bestTime: string
    visa: string
    vaccines: string
    currency: string
    language: string
    timeZone: string
  }
  faqs: { question: string; answer: string }[]
  availableDates: TripDate[]
}

export const destinations: Destination[] = [
  {
    slug: "filipinas",
    name: "Filipinas",
    tagline: "El Nido, Coron y las playas mas bonitas del mundo",
    heroImage: "/images/trip-filipinas.jpg",
    galleryImages: [
      "/images/trip-filipinas.jpg",
      "/images/trip-thailand.jpg",
      "/images/trip-vietnam.jpg",
    ],
    duration: "14 dias",
    rating: 4.9,
    reviewCount: 127,
    price: 1397,
    originalPrice: 1597,
    continent: "Asia",
    highlights: [
      "Kayak en las lagunas secretas de El Nido",
      "Island hopping por las islas mas bonitas",
      "Snorkel en arrecifes de coral virgen",
      "Noche en bungalow sobre el agua",
      "Trekking a cascadas escondidas",
      "Atardeceres desde barcos tradicionales"
    ],
    description: "Filipinas es un archipielago de mas de 7.000 islas con algunas de las playas mas espectaculares del planeta. En este viaje exploraremos Palawan, votada como la isla mas bonita del mundo, navegando entre acantilados de caliza, lagunas turquesas y playas de arena blanca. Desde El Nido hasta Coron, descubriremos pecios de la Segunda Guerra Mundial, nadaremos con tortugas y viviremos la hospitalidad filipina en su maxima expresion.",
    itinerary: [
      {
        day: 1,
        title: "Llegada a Manila",
        description: "Llegada al aeropuerto de Manila donde nos recibira nuestro coordinador. Traslado al hotel y tiempo libre para descansar. Por la noche, cena de bienvenida y presentacion del grupo.",
        highlights: ["Recogida en aeropuerto", "Cena de bienvenida", "Conocer al grupo"]
      },
      {
        day: 2,
        title: "Vuelo a El Nido",
        description: "Vuelo domestico a El Nido, la joya de Palawan. Llegada y check-in en nuestro resort frente a la playa. Tarde libre para explorar el pueblo y primer atardecer en el paraiso.",
        highlights: ["Vuelo escenico", "Resort frente al mar", "Explorar El Nido"]
      },
      {
        day: 3,
        title: "Island Hopping Tour A",
        description: "El tour mas famoso de El Nido. Visitaremos la Big Lagoon, Small Lagoon (en kayak), Secret Lagoon y Shimizu Island. Almuerzo picnic en la playa y snorkel en aguas cristalinas.",
        highlights: ["Big & Small Lagoon", "Kayak en lagunas", "Snorkel", "Almuerzo en la playa"]
      },
      {
        day: 4,
        title: "Island Hopping Tour C",
        description: "Exploramos las islas del norte con playas escondidas y formaciones rocosas impresionantes. Visitamos Hidden Beach, Helicopter Island y Star Beach con tiempo para nadar y relajarnos.",
        highlights: ["Hidden Beach", "Helicopter Island", "Playas virgenes"]
      },
      {
        day: 5,
        title: "Nacpan Beach y Las Cabanas",
        description: "Dia de playa en Nacpan, una de las playas mas largas y bonitas de Filipinas. Por la tarde, atardecer desde el mirador de Las Cabanas con zipline opcional.",
        highlights: ["Nacpan Beach", "Playa de 4km", "Atardecer en Las Cabanas"]
      },
      {
        day: 6,
        title: "Expedition a Coron",
        description: "Navegamos en ferry rapido hacia Coron, atravesando el estrecho de Linapacan con sus islas virgenes. Llegada y check-in en nuestro hotel con vistas a la bahia.",
        highlights: ["Ferry escenico", "Islas virgenes", "Coron Town"]
      },
      {
        day: 7,
        title: "Coron Island Tour",
        description: "Dia completo explorando la mitica isla de Coron. Kayak en Kayangan Lake, considerado el lago mas limpio de Asia, y snorkel en Twin Lagoon con sus aguas termales.",
        highlights: ["Kayangan Lake", "Twin Lagoon", "Aguas termales naturales"]
      },
      {
        day: 8,
        title: "Naufragios de la WWII",
        description: "Snorkel en los famosos pecios japoneses de la Segunda Guerra Mundial. Los barcos hundidos ahora son arrecifes artificiales llenos de vida marina. Tarde en Malcapuya Island.",
        highlights: ["Snorkel en naufragios", "Historia WWII", "Malcapuya Island"]
      },
      {
        day: 9,
        title: "Calauit Safari y playas",
        description: "Excursion opcional al Calauit Safari Park para ver jirafas y cebras africanas en un entorno tropical unico. Alternativa: dia de relax en las playas de Busuanga.",
        highlights: ["Safari africano", "Animales exoticos", "Playas virgenes"]
      },
      {
        day: 10,
        title: "Pass Island y Banana Island",
        description: "Ultimo dia de island hopping visitando Pass Island con su increible banco de arena y Banana Island para snorkel con tortugas marinas.",
        highlights: ["Pass Island", "Banco de arena", "Snorkel con tortugas"]
      },
      {
        day: 11,
        title: "Vuelo a Boracay",
        description: "Volamos a Boracay, la isla de la fiesta y las playas perfectas. Llegada y tiempo libre en White Beach, considerada una de las mejores playas de Asia.",
        highlights: ["Vuelo a Boracay", "White Beach", "Ambiente festivo"]
      },
      {
        day: 12,
        title: "Boracay a tu ritmo",
        description: "Dia libre para disfrutar de la isla. Opciones: paddleboard, parasailing, buceo, masajes en la playa o simplemente relajarte con un coco fresco en la mano.",
        highlights: ["Actividades opcionales", "Relax en la playa", "Vida nocturna"]
      },
      {
        day: 13,
        title: "Ultimo dia en el paraiso",
        description: "Manana libre para ultimas compras o fotos. Por la tarde, vuelo de regreso a Manila. Cena de despedida con el grupo recordando la aventura.",
        highlights: ["Tiempo libre", "Vuelo a Manila", "Cena de despedida"]
      },
      {
        day: 14,
        title: "Regreso a casa",
        description: "Traslado al aeropuerto para tomar el vuelo de regreso. Nos llevamos recuerdos increibles y nuevos amigos para siempre.",
        highlights: ["Traslado aeropuerto", "Vuelo de regreso"]
      }
    ],
    included: [
      "Vuelos internos (Manila-El Nido, Coron-Boracay, Boracay-Manila)",
      "13 noches de alojamiento en hoteles/resorts seleccionados",
      "Desayunos diarios + 3 almuerzos + 2 cenas",
      "Todos los tours de island hopping mencionados",
      "Entradas a parques y lagunas",
      "Coordinador Awayna durante todo el viaje",
      "Seguro de viaje completo",
      "Traslados aeropuerto y entre islas",
      "Equipo de snorkel"
    ],
    notIncluded: [
      "Vuelos internacionales",
      "Tasas de salida de algunas islas (aprox. 20€)",
      "Comidas no especificadas",
      "Actividades opcionales",
      "Propinas",
      "Gastos personales"
    ],
    practicalInfo: {
      bestTime: "Noviembre a Mayo (estacion seca)",
      visa: "No necesario para estancias menores a 30 dias",
      vaccines: "Ninguna obligatoria. Recomendadas: Hepatitis A/B, Tetanos",
      currency: "Peso Filipino (PHP). 1€ ≈ 60 PHP",
      language: "Filipino e Ingles (ampliamente hablado)",
      timeZone: "UTC+8 (7 horas mas que Espana)"
    },
    faqs: [
      {
        question: "Necesito saber nadar o bucear?",
        answer: "No es imprescindible saber nadar, aunque si muy recomendable para disfrutar al maximo. Siempre hay chalecos salvavidas disponibles y las actividades de snorkel son opcionales."
      },
      {
        question: "Cual es el nivel fisico requerido?",
        answer: "Nivel bajo-medio. Las actividades principales son snorkel, kayak suave y caminar por playas. No hay trekkings exigentes."
      },
      {
        question: "Hay wifi en las islas?",
        answer: "Si, en los hoteles y restaurantes de El Nido, Coron y Boracay. En las islas pequenas durante los tours, no hay conexion."
      },
      {
        question: "Puedo viajar solo/a?",
        answer: "Por supuesto! La mayoria de nuestros viajeros vienen solos y es la mejor manera de conectar con el grupo. No hay suplemento individual."
      }
    ],
    availableDates: [
      { id: "fil-mar-25", startDate: "2026-03-15", endDate: "2026-03-28", spots: 3, totalSpots: 16, price: 1397, originalPrice: 1597 },
      { id: "fil-abr-25", startDate: "2026-04-05", endDate: "2026-04-18", spots: 8, totalSpots: 16, price: 1397, originalPrice: 1597 },
      { id: "fil-may-25", startDate: "2026-05-10", endDate: "2026-05-23", spots: 12, totalSpots: 16, price: 1297 }
    ]
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    tagline: "De Hanoi a Ho Chi Minh entre arrozales y bahias",
    heroImage: "/images/trip-vietnam.jpg",
    galleryImages: [
      "/images/trip-vietnam.jpg",
      "/images/trip-japan.jpg",
      "/images/trip-thailand.jpg",
    ],
    duration: "13 dias",
    rating: 4.8,
    reviewCount: 98,
    price: 1299,
    continent: "Asia",
    highlights: [
      "Crucero de noche en Ha Long Bay",
      "Moto por los arrozales de Ninh Binh",
      "Clase de cocina vietnamita en Hoi An",
      "Tuneles de Cu Chi",
      "Mercados flotantes del Mekong",
      "Street food tour en Hanoi"
    ],
    description: "Vietnam es un pais que enamora desde el primer momento. En este viaje de norte a sur recorreremos sus paisajes mas iconicos: desde las miticas aguas de Ha Long Bay hasta los canales del Delta del Mekong, pasando por la magica Hoi An y la frenetica Saigon. Descubriremos templos ancestrales, probaremos la mejor comida callejera del mundo y conectaremos con la hospitalidad vietnamita.",
    itinerary: [
      {
        day: 1,
        title: "Bienvenidos a Hanoi",
        description: "Llegada a Hanoi, la capital milenaria. Recogida en aeropuerto y traslado al hotel en el Old Quarter. Paseo de orientacion y cena de bienvenida con pho tradicional.",
        highlights: ["Llegada a Hanoi", "Old Quarter", "Cena de bienvenida"]
      },
      {
        day: 2,
        title: "Hanoi historico",
        description: "Tour por los highlights de Hanoi: Templo de la Literatura, Mausoleo de Ho Chi Minh, Pagoda del Pilar Unico. Por la tarde, street food tour por el casco antiguo.",
        highlights: ["Templo Literatura", "Ho Chi Minh", "Street food tour"]
      },
      {
        day: 3,
        title: "Ninh Binh - Ha Long terrestre",
        description: "Excursion a Ninh Binh, conocida como la 'Ha Long en tierra'. Paseo en barca por Tam Coc entre formaciones karsticas y arrozales. Visita a la pagoda Bai Dinh.",
        highlights: ["Tam Coc en barca", "Arrozales", "Pagoda Bai Dinh"]
      },
      {
        day: 4,
        title: "Ha Long Bay - Embarque",
        description: "Viaje a Ha Long Bay y embarque en nuestro crucero tradicional. Navegamos entre miles de islotes karsticos mientras disfrutamos del almuerzo a bordo. Kayak al atardecer.",
        highlights: ["Crucero Ha Long", "Kayak", "Noche a bordo"]
      },
      {
        day: 5,
        title: "Ha Long Bay - Amanecer",
        description: "Tai Chi al amanecer en la cubierta. Visita a cuevas y pueblos flotantes. Desembarque y vuelo a Da Nang. Traslado a Hoi An.",
        highlights: ["Tai Chi", "Cuevas", "Vuelo a Da Nang"]
      },
      {
        day: 6,
        title: "Hoi An antigua",
        description: "Dia explorando Hoi An, Patrimonio de la Humanidad. Puente Japones, casas de mercaderes, templos chinos. Tarde libre para hacerte ropa a medida.",
        highlights: ["Casco antiguo", "Puente Japones", "Ropa a medida"]
      },
      {
        day: 7,
        title: "Clase de cocina",
        description: "Manana en el mercado local comprando ingredientes frescos. Clase de cocina vietnamita: aprendemos a hacer fresh rolls, banh mi y pho. Tarde libre en la playa.",
        highlights: ["Mercado local", "Clase cocina", "Playa An Bang"]
      },
      {
        day: 8,
        title: "My Son y vuelo a Saigon",
        description: "Visita a las ruinas de My Son, el centro religioso del reino Champa. Por la tarde, vuelo a Ho Chi Minh City (Saigon). Paseo nocturno por la ciudad.",
        highlights: ["Ruinas My Son", "Vuelo a Saigon", "Ciudad de noche"]
      },
      {
        day: 9,
        title: "Saigon colonial",
        description: "Tour por Saigon: Palacio de la Reunificacion, Catedral de Notre Dame, Correos Centrales, mercado Ben Thanh. Por la tarde, barrio Cho Lon (Chinatown).",
        highlights: ["Palacio Reunificacion", "Catedral", "Chinatown"]
      },
      {
        day: 10,
        title: "Tuneles de Cu Chi",
        description: "Excursion a los Tuneles de Cu Chi, la red subterranea usada durante la guerra. Experiencia unica bajando a los tuneles. Regreso y noche libre en Saigon.",
        highlights: ["Tuneles Cu Chi", "Historia de Vietnam", "Noche libre"]
      },
      {
        day: 11,
        title: "Delta del Mekong",
        description: "Excursion al Delta del Mekong. Mercados flotantes de Cai Be, fabricas artesanales de caramelos y licor de arroz. Paseo en sampan por los canales.",
        highlights: ["Mercado flotante", "Sampan", "Fabricas locales"]
      },
      {
        day: 12,
        title: "Ultimo dia en Vietnam",
        description: "Manana libre para ultimas compras o masaje vietnamita. Por la tarde, cena de despedida en un rooftop con vistas al skyline de Saigon.",
        highlights: ["Tiempo libre", "Cena despedida", "Rooftop bar"]
      },
      {
        day: 13,
        title: "Hasta pronto, Vietnam",
        description: "Traslado al aeropuerto para el vuelo de regreso. Nos despedimos con la promesa de volver.",
        highlights: ["Traslado aeropuerto", "Vuelo regreso"]
      }
    ],
    included: [
      "Vuelos internos (Hanoi-Da Nang, Da Nang-Saigon)",
      "12 noches de alojamiento en hoteles 3-4*",
      "1 noche en crucero Ha Long Bay",
      "Desayunos diarios + 4 almuerzos + 3 cenas",
      "Todos los tours y entradas mencionados",
      "Clase de cocina en Hoi An",
      "Coordinador Awayna",
      "Seguro de viaje",
      "Traslados"
    ],
    notIncluded: [
      "Vuelos internacionales",
      "Visa Vietnam (aprox. 25€ e-visa)",
      "Comidas no especificadas",
      "Actividades opcionales",
      "Propinas"
    ],
    practicalInfo: {
      bestTime: "Marzo a Mayo y Septiembre a Noviembre",
      visa: "E-visa obligatoria. Tramite online sencillo (25€ aprox.)",
      vaccines: "Ninguna obligatoria. Recomendadas: Hepatitis A/B, Tetanos, Tifoidea",
      currency: "Dong vietnamita (VND). 1€ ≈ 26.000 VND",
      language: "Vietnamita. Ingles en zonas turisticas",
      timeZone: "UTC+7 (6 horas mas que Espana)"
    },
    faqs: [
      {
        question: "Es seguro viajar a Vietnam?",
        answer: "Vietnam es uno de los paises mas seguros del sudeste asiatico. La gente es muy amable y los crimenes contra turistas son raros."
      },
      {
        question: "Necesito vacunas?",
        answer: "No hay vacunas obligatorias pero se recomiendan Hepatitis A/B y Tetanos. Consulta con tu centro de vacunacion internacional."
      },
      {
        question: "Como es la comida?",
        answer: "Increible y muy variada. Si tienes restricciones alimentarias, no hay problema - hay opciones vegetarianas en todos los sitios."
      }
    ],
    availableDates: [
      { id: "vn-mar-25", startDate: "2026-03-08", endDate: "2026-03-20", spots: 4, totalSpots: 16, price: 1299 },
      { id: "vn-abr-25", startDate: "2026-04-12", endDate: "2026-04-24", spots: 10, totalSpots: 16, price: 1299 },
      { id: "vn-oct-25", startDate: "2026-10-03", endDate: "2026-10-15", spots: 14, totalSpots: 16, price: 1199 }
    ]
  },
  {
    slug: "tailandia",
    name: "Tailandia",
    tagline: "Bangkok, Chiang Mai y las islas paradisiacas",
    heroImage: "/images/trip-thailand.jpg",
    galleryImages: [
      "/images/trip-thailand.jpg",
      "/images/trip-vietnam.jpg",
      "/images/trip-filipinas.jpg",
    ],
    duration: "12 dias",
    rating: 4.9,
    reviewCount: 156,
    price: 1197,
    originalPrice: 1397,
    continent: "Asia",
    highlights: [
      "Templos dorados de Bangkok",
      "Mercado flotante de Damnoen Saduak",
      "Santuario de elefantes etico",
      "Clase de cocina thai",
      "Phi Phi Islands en barco",
      "Full moon party (opcional)"
    ],
    description: "Tailandia es la puerta de entrada perfecta al sudeste asiatico. Este viaje combina lo mejor del pais: la energia de Bangkok con sus templos y mercados, la espiritualidad del norte en Chiang Mai, y el paraiso tropical de las islas del sur. Probaremos la mejor comida thai, visitaremos elefantes de forma etica y bailaremos bajo la luna llena.",
    itinerary: [
      {
        day: 1,
        title: "Sawadee Bangkok!",
        description: "Llegada a Bangkok. Recogida y traslado al hotel en el corazon de la ciudad. Tarde libre para recuperarse del vuelo. Cena de bienvenida con autentica comida thai.",
        highlights: ["Llegada Bangkok", "Hotel centrico", "Cena bienvenida"]
      },
      {
        day: 2,
        title: "Bangkok imprescindible",
        description: "Visita al Gran Palacio y Wat Phra Kaew (Buda Esmeralda). Wat Pho con el Buda reclinado gigante. Por la tarde, paseo en barco por los klongs (canales).",
        highlights: ["Gran Palacio", "Wat Pho", "Canales en barco"]
      },
      {
        day: 3,
        title: "Mercados y street food",
        description: "Excursion al mercado flotante de Damnoen Saduak y el mercado sobre las vias del tren. Regreso a Bangkok para street food tour por Chinatown.",
        highlights: ["Mercado flotante", "Mercado del tren", "Chinatown food"]
      },
      {
        day: 4,
        title: "Vuelo a Chiang Mai",
        description: "Vuelo al norte, a Chiang Mai. Tarde explorando el casco antiguo y sus 300 templos. Noche en el famoso Night Bazaar.",
        highlights: ["Vuelo Chiang Mai", "Casco antiguo", "Night Bazaar"]
      },
      {
        day: 5,
        title: "Santuario de elefantes",
        description: "Dia completo en un santuario etico de elefantes. Alimentamos, banamos y aprendemos sobre estos increibles animales rescatados del turismo irresponsable.",
        highlights: ["Santuario etico", "Banar elefantes", "Aprender y cuidar"]
      },
      {
        day: 6,
        title: "Doi Inthanon",
        description: "Excursion al Doi Inthanon, la montana mas alta de Tailandia. Trekking suave por la jungla, cascadas y pagodas gemelas con vistas espectaculares.",
        highlights: ["Montana mas alta", "Cascadas", "Trekking jungla"]
      },
      {
        day: 7,
        title: "Clase de cocina thai",
        description: "Visita al mercado local y clase de cocina thai. Aprendemos a hacer pad thai, curry verde y mango sticky rice. Tarde libre: masaje thai recomendado!",
        highlights: ["Clase cocina", "Pad Thai casero", "Masaje thai"]
      },
      {
        day: 8,
        title: "Vuelo a las islas",
        description: "Vuelo a Phuket o Krabi y traslado a nuestro resort en la playa. Tarde libre para disfrutar del Indico. Atardecer con cocktail en la arena.",
        highlights: ["Vuelo al sur", "Resort playa", "Primer atardecer"]
      },
      {
        day: 9,
        title: "Phi Phi Islands",
        description: "Excursion en speedboat a las famosas islas Phi Phi. Maya Bay (la playa de 'La Playa'), snorkel con peces tropicales, almuerzo en Phi Phi Don.",
        highlights: ["Maya Bay", "Phi Phi Don", "Snorkel"]
      },
      {
        day: 10,
        title: "Dia libre en el paraiso",
        description: "Dia libre para disfrutar a tu ritmo: kayak, paddleboard, buceo, o simplemente hamaca y libro. Por la noche, cena en la playa.",
        highlights: ["Relax total", "Actividades opcionales", "Cena playa"]
      },
      {
        day: 11,
        title: "Ultimo dia thai",
        description: "Manana libre. Traslado a Phuket para el vuelo a Bangkok. Ultima cena de despedida con el grupo recordando la aventura.",
        highlights: ["Manana libre", "Vuelo Bangkok", "Cena despedida"]
      },
      {
        day: 12,
        title: "Khop khun, Thailand!",
        description: "Traslado al aeropuerto de Bangkok para el vuelo de regreso a casa. Gracias por viajar con Awayna!",
        highlights: ["Traslado aeropuerto", "Vuelo regreso"]
      }
    ],
    included: [
      "Vuelos internos (Bangkok-Chiang Mai, Chiang Mai-Phuket/Krabi)",
      "11 noches alojamiento hoteles 3-4* y resort",
      "Desayunos diarios + 3 almuerzos + 3 cenas",
      "Santuario de elefantes dia completo",
      "Excursion Phi Phi Islands",
      "Clase de cocina thai",
      "Todas las entradas mencionadas",
      "Coordinador Awayna",
      "Seguro de viaje"
    ],
    notIncluded: [
      "Vuelos internacionales",
      "Comidas no especificadas",
      "Actividades opcionales",
      "Propinas"
    ],
    practicalInfo: {
      bestTime: "Noviembre a Marzo (temporada seca)",
      visa: "No necesario para estancias menores a 30 dias",
      vaccines: "Ninguna obligatoria. Recomendadas: Hepatitis A/B, Tetanos",
      currency: "Baht (THB). 1€ ≈ 38 THB",
      language: "Thai. Ingles turistico ampliamente hablado",
      timeZone: "UTC+7 (6 horas mas que Espana)"
    },
    faqs: [
      {
        question: "Como es el santuario de elefantes?",
        answer: "Trabajamos solo con santuarios eticos certificados donde los elefantes fueron rescatados de la industria turistica. No se monta a los elefantes."
      },
      {
        question: "Hay que vacunarse?",
        answer: "No hay vacunas obligatorias. Se recomienda tener al dia Hepatitis A/B y Tetanos."
      },
      {
        question: "Puedo extender el viaje en las islas?",
        answer: "Si! Muchos viajeros extienden unos dias en las islas. Te ayudamos con la logistica."
      }
    ],
    availableDates: [
      { id: "th-mar-25", startDate: "2026-03-01", endDate: "2026-03-12", spots: 2, totalSpots: 14, price: 1197, originalPrice: 1397 },
      { id: "th-abr-25", startDate: "2026-04-18", endDate: "2026-04-29", spots: 6, totalSpots: 14, price: 1197, originalPrice: 1397 },
      { id: "th-nov-25", startDate: "2026-11-14", endDate: "2026-11-25", spots: 14, totalSpots: 14, price: 1097 }
    ]
  },
  {
    slug: "japon",
    name: "Japon",
    tagline: "Tokio, Kioto, Hiroshima y los templos ancestrales",
    heroImage: "/images/trip-japan.jpg",
    galleryImages: [
      "/images/trip-japan.jpg",
      "/images/trip-iceland.jpg",
      "/images/trip-thailand.jpg",
    ],
    duration: "11 dias",
    rating: 4.8,
    reviewCount: 89,
    price: 1759,
    originalPrice: 1979,
    continent: "Asia",
    highlights: [
      "Tokio: tradicion y futuro",
      "Kioto y sus geishas",
      "Monte Fuji (segun temporada)",
      "Hiroshima y Miyajima",
      "Ceremonia del te",
      "Noche en ryokan tradicional"
    ],
    description: "Japon es un pais de contrastes fascinantes donde conviven rascacielos futuristas con templos milenarios, robots con geishas, sushi de mercado con alta gastronomia. Este viaje recorre lo esencial del pais del sol naciente con el JR Pass, descubriendo la magia de una cultura unica que te cambiara para siempre.",
    itinerary: [
      {
        day: 1,
        title: "Konnichiwa Tokio!",
        description: "Llegada a Tokio. Recogida y traslado al hotel en Shinjuku. Tiempo para descansar del vuelo. Por la noche, primera inmersion en Shibuya y su famoso cruce.",
        highlights: ["Llegada Tokio", "Hotel Shinjuku", "Shibuya crossing"]
      },
      {
        day: 2,
        title: "Tokio tradicion",
        description: "Templo Senso-ji en Asakusa, el mas antiguo de Tokio. Barrio de Ueno con sus museos. Por la tarde, barrio de Akihabara (paraiso otaku) y Harajuku.",
        highlights: ["Senso-ji", "Akihabara", "Harajuku"]
      },
      {
        day: 3,
        title: "Tokio futuro",
        description: "Mercado de Tsukiji para desayunar sushi fresco. TeamLab Borderless (arte digital inmersivo). Tarde en Odaiba con vistas a la bahia.",
        highlights: ["Tsukiji sushi", "TeamLab", "Odaiba"]
      },
      {
        day: 4,
        title: "Hakone y Monte Fuji",
        description: "Excursion a Hakone. Navegamos por el lago Ashi con vistas al Fuji (si el tiempo lo permite). Telesferico sobre el valle volcanico. Aguas termales.",
        highlights: ["Monte Fuji", "Lago Ashi", "Aguas termales"]
      },
      {
        day: 5,
        title: "Kioto - Bienvenidos",
        description: "Shinkansen (tren bala) a Kioto. Tarde explorando Gion, el barrio de las geishas. Con suerte, veremos alguna maiko camino al trabajo.",
        highlights: ["Tren bala", "Gion", "Geishas"]
      },
      {
        day: 6,
        title: "Templos de Kioto",
        description: "Fushimi Inari con sus miles de torii rojos. Kinkaku-ji (Pabellon Dorado). Arashiyama y el bosque de bambu. Ceremonia del te tradicional.",
        highlights: ["Fushimi Inari", "Pabellon Dorado", "Bosque bambu"]
      },
      {
        day: 7,
        title: "Nara - Los ciervos sagrados",
        description: "Excursion a Nara, la primera capital de Japon. Parque de los ciervos, Todai-ji con el Buda gigante. Regreso a Kioto para noche libre.",
        highlights: ["Ciervos Nara", "Buda gigante", "Todai-ji"]
      },
      {
        day: 8,
        title: "Hiroshima",
        description: "Shinkansen a Hiroshima. Visita al Parque de la Paz y Museo de la Bomba Atomica. Experiencia emotiva e importante. Tarde en la isla de Miyajima.",
        highlights: ["Parque de la Paz", "Museo Atomico", "Miyajima"]
      },
      {
        day: 9,
        title: "Miyajima y regreso",
        description: "Manana en Miyajima con el torii flotante y templo Itsukushima. Regreso a Kioto. Noche especial en ryokan tradicional con onsen.",
        highlights: ["Torii flotante", "Ryokan", "Onsen"]
      },
      {
        day: 10,
        title: "Regreso a Tokio",
        description: "Ultimo paseo por Kioto. Shinkansen a Tokio. Tarde libre para compras en Ginza o explorar lo que te falte. Cena de despedida.",
        highlights: ["Shinkansen", "Compras Tokio", "Cena despedida"]
      },
      {
        day: 11,
        title: "Sayonara Japon",
        description: "Traslado al aeropuerto de Narita/Haneda para el vuelo de regreso. Nos llevamos un pedacito de Japon en el corazon.",
        highlights: ["Traslado aeropuerto", "Vuelo regreso"]
      }
    ],
    included: [
      "JR Pass 7 dias (valor 250€)",
      "10 noches alojamiento hoteles 3* + 1 ryokan",
      "Desayunos diarios + 2 cenas",
      "Excursion Hakone con telesferico y barco",
      "Ceremonia del te en Kioto",
      "Entradas TeamLab y museos",
      "Coordinador Awayna",
      "Seguro de viaje"
    ],
    notIncluded: [
      "Vuelos internacionales",
      "Comidas no especificadas",
      "Transporte local en Tokio (metro)",
      "Actividades opcionales"
    ],
    practicalInfo: {
      bestTime: "Marzo-Mayo (sakura) y Octubre-Noviembre (momiji)",
      visa: "No necesario para estancias menores a 90 dias",
      vaccines: "Ninguna obligatoria ni recomendada especifica",
      currency: "Yen (JPY). 1€ ≈ 160 JPY. Japon usa mucho efectivo",
      language: "Japones. Ingles limitado pero buena senalizacion",
      timeZone: "UTC+9 (8 horas mas que Espana)"
    },
    faqs: [
      {
        question: "Es caro Japon?",
        answer: "Japon tiene fama de caro pero no lo es tanto. Comer bien cuesta 8-15€ por comida. El JR Pass incluido ahorra mucho dinero."
      },
      {
        question: "Necesito saber japones?",
        answer: "No. Aunque poca gente habla ingles, la senalizacion es buena, hay apps de traduccion y los japoneses son muy serviciales."
      },
      {
        question: "Cuando es la epoca de sakura?",
        answer: "Finales de marzo a mediados de abril, variando segun la zona. Consultanos para fechas exactas de floracion."
      }
    ],
    availableDates: [
      { id: "jp-abr-25", startDate: "2026-04-04", endDate: "2026-04-14", spots: 8, totalSpots: 14, price: 1759, originalPrice: 1979 },
      { id: "jp-may-25", startDate: "2026-05-09", endDate: "2026-05-19", spots: 12, totalSpots: 14, price: 1659 },
      { id: "jp-nov-25", startDate: "2026-11-07", endDate: "2026-11-17", spots: 14, totalSpots: 14, price: 1759, originalPrice: 1979 }
    ]
  },
  {
    slug: "islandia",
    name: "Islandia",
    tagline: "Aurora boreal, cascadas y paisajes de otro planeta",
    heroImage: "/images/trip-iceland.jpg",
    galleryImages: [
      "/images/trip-iceland.jpg",
      "/images/trip-japan.jpg",
      "/images/trip-costarica.jpg",
    ],
    duration: "8 dias",
    rating: 4.9,
    reviewCount: 73,
    price: 1469,
    originalPrice: 1699,
    continent: "Europa",
    highlights: [
      "Caza de auroras boreales",
      "Circulo Dorado completo",
      "Glaciar Vatnajokull",
      "Playa negra de Vik",
      "Blue Lagoon",
      "Avistamiento de ballenas"
    ],
    description: "Islandia es como visitar otro planeta sin salir de la Tierra. Geiseres, volcanes, glaciares, auroras boreales, cascadas imposibles y paisajes que quitan el aliento. Este viaje recorre la mitica Ring Road sur, donde cada curva esconde una postal. Prepara la camara y el asombro.",
    itinerary: [
      {
        day: 1,
        title: "Bienvenidos a Islandia",
        description: "Llegada a Keflavik. Traslado a Reikiavik con parada en Blue Lagoon para relajarnos en sus aguas termales azul turquesa. Check-in y cena de bienvenida.",
        highlights: ["Llegada Keflavik", "Blue Lagoon", "Reikiavik"]
      },
      {
        day: 2,
        title: "Circulo Dorado",
        description: "La ruta mas famosa de Islandia: Thingvellir (donde se separan las placas tectonicas), Geysir (geiseres activos) y Gullfoss (la cascada dorada). Noche de caza de auroras.",
        highlights: ["Thingvellir", "Geysir", "Gullfoss", "Auroras"]
      },
      {
        day: 3,
        title: "Costa Sur - Cascadas",
        description: "Ruta por la costa sur parando en las cascadas Seljalandsfoss (puedes caminar detras!) y Skogafoss. Llegada a Vik y su famosa playa de arena negra Reynisfjara.",
        highlights: ["Seljalandsfoss", "Skogafoss", "Playa negra Vik"]
      },
      {
        day: 4,
        title: "Glaciares y icebergs",
        description: "Parque Nacional Vatnajokull con el glaciar mas grande de Europa. Laguna glaciar Jokulsarlon con sus icebergs flotantes. Diamond Beach donde el hielo brilla en la arena negra.",
        highlights: ["Vatnajokull", "Jokulsarlon", "Diamond Beach"]
      },
      {
        day: 5,
        title: "Trekking en glaciar",
        description: "Experiencia unica: trekking guiado sobre el glaciar con crampones. Cuevas de hielo azul (segun condiciones). Tarde explorando la zona.",
        highlights: ["Trekking glaciar", "Crampones", "Cuevas de hielo"]
      },
      {
        day: 6,
        title: "Regreso a Reikiavik",
        description: "Regreso pausado parando en lugares que nos quedaron pendientes o nuevos descubrimientos. Llegada a Reikiavik para noche libre en la capital.",
        highlights: ["Ruta escenica", "Paradas libres", "Noche Reikiavik"]
      },
      {
        day: 7,
        title: "Reikiavik y ballenas",
        description: "Manana de avistamiento de ballenas en la bahia de Reikiavik. Tarde libre para explorar la ciudad: Hallgrimskirkja, puerto viejo, museos. Cena de despedida.",
        highlights: ["Ballenas", "Hallgrimskirkja", "Cena despedida"]
      },
      {
        day: 8,
        title: "Bless Islandia",
        description: "Traslado al aeropuerto de Keflavik para el vuelo de regreso. Nos llevamos paisajes inolvidables y (con suerte) fotos de auroras.",
        highlights: ["Traslado aeropuerto", "Vuelo regreso"]
      }
    ],
    included: [
      "7 noches alojamiento hoteles/guesthouses",
      "Desayunos diarios + 2 cenas",
      "Transporte en minibus 4x4",
      "Entrada Blue Lagoon con mascarilla",
      "Trekking en glaciar con equipo",
      "Tour avistamiento ballenas",
      "Caza de auroras (3 noches)",
      "Coordinador Awayna",
      "Seguro de viaje"
    ],
    notIncluded: [
      "Vuelos internacionales",
      "Comidas no especificadas",
      "Actividades opcionales (moto nieve, buceo Silfra)",
      "Propinas"
    ],
    practicalInfo: {
      bestTime: "Septiembre a Marzo para auroras. Junio-Agosto sol de medianoche",
      visa: "No necesario (Espacio Schengen)",
      vaccines: "Ninguna requerida",
      currency: "Corona islandesa (ISK). 1€ ≈ 150 ISK. Se paga todo con tarjeta",
      language: "Islandes. Ingles practicamente universal",
      timeZone: "UTC+0 (1-2 horas menos que Espana)"
    },
    faqs: [
      {
        question: "Veremos auroras boreales seguro?",
        answer: "Las auroras dependen de la actividad solar y el clima. Tenemos 3 noches de caza y apps de prevision. La probabilidad en temporada es alta pero no garantizada."
      },
      {
        question: "Hace mucho frio?",
        answer: "En invierno la media es -1 a 5 grados, con viento. Llevando capas y buen equipamiento se esta bien. Te mandamos lista de equipaje."
      },
      {
        question: "Necesito experiencia para el glaciar?",
        answer: "No. El trekking es para todos los niveles con guia certificado y equipo proporcionado (crampones, piolet, arnes)."
      }
    ],
    availableDates: [
      { id: "is-feb-25", startDate: "2026-02-14", endDate: "2026-02-21", spots: 5, totalSpots: 12, price: 1469, originalPrice: 1699 },
      { id: "is-mar-25", startDate: "2026-03-07", endDate: "2026-03-14", spots: 8, totalSpots: 12, price: 1469, originalPrice: 1699 },
      { id: "is-sep-25", startDate: "2026-09-12", endDate: "2026-09-19", spots: 12, totalSpots: 12, price: 1369 }
    ]
  },
  {
    slug: "costa-rica",
    name: "Costa Rica",
    tagline: "Volcanes, selva y playas del Caribe",
    heroImage: "/images/trip-costarica.jpg",
    galleryImages: [
      "/images/trip-costarica.jpg",
      "/images/trip-filipinas.jpg",
      "/images/trip-thailand.jpg",
    ],
    duration: "10 dias",
    rating: 4.8,
    reviewCount: 64,
    price: 1549,
    continent: "America",
    highlights: [
      "Volcan Arenal y aguas termales",
      "Puentes colgantes en la selva",
      "Avistamiento de perezosos",
      "Rafting en el Pacuare",
      "Playas del Caribe",
      "Tortugas marinas (segun temporada)"
    ],
    description: "Costa Rica es pura vida en estado puro. Este pequeno pais centroamericano concentra una biodiversidad increible: volcanes activos, selvas tropicales, playas caribenas y pacifico, y fauna unica. Desde el imponente Arenal hasta las tranquilas aguas de Puerto Viejo, viviremos la aventura y la naturaleza en su maxima expresion.",
    itinerary: [
      {
        day: 1,
        title: "Pura Vida!",
        description: "Llegada a San Jose. Recogida y traslado al hotel. Cena de bienvenida para conocer al grupo y briefing del viaje.",
        highlights: ["Llegada San Jose", "Cena bienvenida", "Conocer grupo"]
      },
      {
        day: 2,
        title: "Volcan Arenal",
        description: "Viaje a La Fortuna, dominada por el majestuoso volcan Arenal. Tarde de puentes colgantes en la selva con vistas al volcan. Noche en aguas termales.",
        highlights: ["Volcan Arenal", "Puentes colgantes", "Aguas termales"]
      },
      {
        day: 3,
        title: "Aventura en Arenal",
        description: "Dia de actividades: rapel en cascada, tubing por el rio o caminata por senderos de lava. Tarde libre para disfrutar de La Fortuna.",
        highlights: ["Rapel cascada", "Tubing", "Senderos volcanicos"]
      },
      {
        day: 4,
        title: "Monteverde",
        description: "Viaje escenico a Monteverde, el bosque nuboso mas famoso del mundo. Tour nocturno para ver animales activos: ranas, serpientes, kinkajous.",
        highlights: ["Bosque nuboso", "Tour nocturno", "Fauna nocturna"]
      },
      {
        day: 5,
        title: "Reserva Monteverde",
        description: "Caminata por la reserva con guia naturalista. Avistamiento de quetzales (con suerte), monos, perezosos y colibries. Tirolinas opcionales sobre el dosel.",
        highlights: ["Reserva natural", "Quetzal", "Tirolinas"]
      },
      {
        day: 6,
        title: "Hacia el Caribe",
        description: "Cruzamos el pais hacia la costa caribe. Parada en el rio Pacuare para rafting nivel II-III entre selva y cascadas. Llegada a Puerto Viejo.",
        highlights: ["Rafting Pacuare", "Selva", "Puerto Viejo"]
      },
      {
        day: 7,
        title: "Caribe puro",
        description: "Dia libre en las playas caribenas. Playa Cocles para surf, Punta Uva para snorkel, o simplemente hamaca con coco. Vibra reggae garantizada.",
        highlights: ["Playas Caribe", "Surf", "Vibra reggae"]
      },
      {
        day: 8,
        title: "Refugio de perezosos",
        description: "Visita al santuario de perezosos de Cahuita. Snorkel en el Parque Nacional Cahuita con arrecifes y peces tropicales. Cena caribena.",
        highlights: ["Santuario perezosos", "Snorkel Cahuita", "Comida caribena"]
      },
      {
        day: 9,
        title: "Ultimo dia Caribe",
        description: "Manana libre. Viaje de regreso a San Jose. Cena de despedida en restaurante tipico con casado y cerveza Imperial.",
        highlights: ["Manana playa", "Regreso San Jose", "Cena despedida"]
      },
      {
        day: 10,
        title: "Hasta luego Costa Rica",
        description: "Traslado al aeropuerto de San Jose para el vuelo de regreso. Pura vida para siempre!",
        highlights: ["Traslado aeropuerto", "Vuelo regreso"]
      }
    ],
    included: [
      "9 noches alojamiento hoteles/lodges selva",
      "Desayunos diarios + 3 almuerzos + 3 cenas",
      "Transporte privado todo el viaje",
      "Puentes colgantes Arenal",
      "Tour nocturno Monteverde",
      "Rafting rio Pacuare",
      "Entrada Parque Nacional Cahuita",
      "Visita santuario perezosos",
      "Coordinador Awayna",
      "Seguro de viaje"
    ],
    notIncluded: [
      "Vuelos internacionales",
      "Comidas no especificadas",
      "Actividades opcionales (tirolinas, buceo)",
      "Propinas"
    ],
    practicalInfo: {
      bestTime: "Diciembre a Abril (estacion seca). Septiembre-Octubre para tortugas",
      visa: "No necesario para estancias menores a 90 dias",
      vaccines: "Ninguna obligatoria. Recomendadas: Hepatitis A, Tetanos",
      currency: "Colon (CRC) y dolares americanos aceptados. 1€ ≈ 570 CRC",
      language: "Espanol (perfecto para practicar!)",
      timeZone: "UTC-6 (7-8 horas menos que Espana)"
    },
    faqs: [
      {
        question: "Veremos perezosos seguro?",
        answer: "Muy probable! Costa Rica tiene muchos perezosos y nuestros guias saben donde encontrarlos. En el santuario es garantizado."
      },
      {
        question: "Necesito saber espanol?",
        answer: "Costa Rica es hispanohablante, asi que es una gran oportunidad para practicar. Nuestro coordinador traduce si es necesario."
      },
      {
        question: "El rafting es peligroso?",
        answer: "Hacemos nivel II-III, apto para principiantes. Es emocionante pero seguro, con guias certificados y todo el equipo."
      }
    ],
    availableDates: [
      { id: "cr-feb-25", startDate: "2026-02-07", endDate: "2026-02-16", spots: 7, totalSpots: 14, price: 1549 },
      { id: "cr-mar-25", startDate: "2026-03-14", endDate: "2026-03-23", spots: 10, totalSpots: 14, price: 1549 },
      { id: "cr-dic-25", startDate: "2026-12-05", endDate: "2026-12-14", spots: 14, totalSpots: 14, price: 1649 }
    ]
  }
]

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find(d => d.slug === slug)
}

export function getAllDestinationSlugs(): string[] {
  return destinations.map(d => d.slug)
}
