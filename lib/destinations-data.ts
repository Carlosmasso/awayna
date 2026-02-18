export interface Itinerary {
  day: number;
  title: string;
  description: string[];
  highlights: string[];
  image?: string;
}

export interface TripDate {
  id: string;
  startDate: string;
  endDate: string;
  spots: number;
  totalSpots: number;
  price: number;
  originalPrice?: number;
}

export interface TripComponent {
  name: string;
  rating: number; // 0-5
}

export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  heroImage: string;
  galleryImages: string[];
  duration: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  continent: string;
  highlights: string[];
  components: TripComponent[];
  description: string[];
  itinerary: Itinerary[];
  included: string[];
  notIncluded: string[];
  practicalInfo: {
    bestTime: string;
    visa: string;
    vaccines: string;
    currency: string;
    language: string;
    timeZone: string;
  };
  faqs: { question: string; answer: string }[];
  availableDates: TripDate[];
}

export const destinations: Destination[] = [
  {
    slug: "filipinas",
    name: "Filipinas",
    tagline: "El Nido, Coron y las playas mas bonitas del mundo",
    heroImage: "/images/filipinas/trip-filipinas.jpg",
    galleryImages: [
      "/images/filipinas/filipinas-1.jpg",
      "/images/filipinas/filipinas-2.jpg",
      "/images/filipinas/filipinas-3.jpg",
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
      "Atardeceres desde barcos tradicionales",
    ],
    components: [
      { name: "Playas", rating: 5 },
      { name: "Snorkel/Buceo", rating: 5 },
      { name: "Naturaleza", rating: 5 },
      { name: "Aventura", rating: 4.5 },
      { name: "Relajación", rating: 4 },
      { name: "Gastronomía", rating: 3.5 },
    ],
    description: [
      "Filipinas es un archipiélago de más de 7.000 islas con algunas de las playas más espectaculares del planeta. En este viaje exploraremos Palawan, votada como la isla más bonita del mundo, navegando entre acantilados de caliza, lagunas turquesas y playas de arena blanca. Desde El Nido hasta Coron, descubriremos pecios de la Segunda Guerra Mundial, nadaremos con tortugas y viviremos la hospitalidad filipina en su máxima expresión.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Llegada a Manila",
        description: [
          "Llegada al aeropuerto de Manila donde nos recibira nuestro coordinador. Traslado al hotel y tiempo libre para descansar. Por la noche, cena de bienvenida y presentacion del grupo.",
        ],
        highlights: [
          "Recogida en aeropuerto",
          "Cena de bienvenida",
          "Conocer al grupo",
        ],
      },
      {
        day: 2,
        title: "Vuelo a El Nido",
        description: [
          "Vuelo domestico a El Nido, la joya de Palawan. Llegada y check-in en nuestro resort frente a la playa. Tarde libre para explorar el pueblo y primer atardecer en el paraiso.",
        ],
        highlights: [
          "Vuelo escenico",
          "Resort frente al mar",
          "Explorar El Nido",
        ],
      },
      {
        day: 3,
        title: "Island Hopping Tour A",
        description: [
          "El tour mas famoso de El Nido. Visitaremos la Big Lagoon, Small Lagoon (en kayak), Secret Lagoon y Shimizu Island. Almuerzo picnic en la playa y snorkel en aguas cristalinas.",
        ],
        highlights: [
          "Big & Small Lagoon",
          "Kayak en lagunas",
          "Snorkel",
          "Almuerzo en la playa",
        ],
      },
      {
        day: 4,
        title: "Island Hopping Tour C",
        description: [
          "Exploramos las islas del norte con playas escondidas y formaciones rocosas impresionantes. Visitamos Hidden Beach, Helicopter Island y Star Beach con tiempo para nadar y relajarnos.",
        ],
        highlights: ["Hidden Beach", "Helicopter Island", "Playas virgenes"],
      },
      {
        day: 5,
        title: "Nacpan Beach y Las Cabanas",
        description: [
          "Dia de playa en Nacpan, una de las playas mas largas y bonitas de Filipinas. Por la tarde, atardecer desde el mirador de Las Cabanas con zipline opcional.",
        ],
        highlights: [
          "Nacpan Beach",
          "Playa de 4km",
          "Atardecer en Las Cabanas",
        ],
      },
      {
        day: 6,
        title: "Expedition a Coron",
        description: [
          "Navegamos en ferry rapido hacia Coron, atravesando el estrecho de Linapacan con sus islas virgenes. Llegada y check-in en nuestro hotel con vistas a la bahia.",
        ],
        highlights: ["Ferry escenico", "Islas virgenes", "Coron Town"],
      },
      {
        day: 7,
        title: "Coron Island Tour",
        description: [
          "Dia completo explorando la mitica isla de Coron. Kayak en Kayangan Lake, considerado el lago mas limpio de Asia, y snorkel en Twin Lagoon con sus aguas termales.",
        ],
        highlights: [
          "Kayangan Lake",
          "Twin Lagoon",
          "Aguas termales naturales",
        ],
      },
      {
        day: 8,
        title: "Naufragios de la WWII",
        description: [
          "Snorkel en los famosos pecios japoneses de la Segunda Guerra Mundial. Los barcos hundidos ahora son arrecifes artificiales llenos de vida marina. Tarde en Malcapuya Island.",
        ],
        highlights: [
          "Snorkel en naufragios",
          "Historia WWII",
          "Malcapuya Island",
        ],
      },
      {
        day: 9,
        title: "Calauit Safari y playas",
        description: [
          "Excursion opcional al Calauit Safari Park para ver jirafas y cebras africanas en un entorno tropical unico. Alternativa: dia de relax en las playas de Busuanga.",
        ],
        highlights: ["Safari africano", "Animales exoticos", "Playas virgenes"],
      },
      {
        day: 10,
        title: "Pass Island y Banana Island",
        description: [
          "Ultimo dia de island hopping visitando Pass Island con su increible banco de arena y Banana Island para snorkel con tortugas marinas.",
        ],
        highlights: ["Pass Island", "Banco de arena", "Snorkel con tortugas"],
      },
      {
        day: 11,
        title: "Vuelo a Boracay",
        description: [
          "Volamos a Boracay, la isla de la fiesta y las playas perfectas. Llegada y tiempo libre en White Beach, considerada una de las mejores playas de Asia.",
        ],
        highlights: ["Vuelo a Boracay", "White Beach", "Ambiente festivo"],
      },
      {
        day: 12,
        title: "Boracay a tu ritmo",
        description: [
          "Dia libre para disfrutar de la isla. Opciones: paddleboard, parasailing, buceo, masajes en la playa o simplemente relajarte con un coco fresco en la mano.",
        ],
        highlights: [
          "Actividades opcionales",
          "Relax en la playa",
          "Vida nocturna",
        ],
      },
      {
        day: 13,
        title: "Ultimo dia en el paraiso",
        description: [
          "Manana libre para ultimas compras o fotos. Por la tarde, vuelo de regreso a Manila. Cena de despedida con el grupo recordando la aventura.",
        ],
        highlights: ["Tiempo libre", "Vuelo a Manila", "Cena de despedida"],
      },
      {
        day: 14,
        title: "Regreso a casa",
        description: [
          "Traslado al aeropuerto para tomar el vuelo de regreso. Nos llevamos recuerdos increibles y nuevos amigos para siempre.",
        ],
        highlights: ["Traslado aeropuerto", "Vuelo de regreso"],
      },
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
      "Equipo de snorkel",
    ],
    notIncluded: [
      "Vuelos internacionales",
      "Tasas de salida de algunas islas (aprox. 20€)",
      "Comidas no especificadas",
      "Actividades opcionales",
      "Propinas",
      "Gastos personales",
    ],
    practicalInfo: {
      bestTime: "Noviembre a Mayo (estacion seca)",
      visa: "No necesario para estancias menores a 30 dias",
      vaccines: "Ninguna obligatoria. Recomendadas: Hepatitis A/B, Tetanos",
      currency: "Peso Filipino (PHP). 1€ ≈ 60 PHP",
      language: "Filipino e Ingles (ampliamente hablado)",
      timeZone: "UTC+8 (7 horas mas que Espana)",
    },
    faqs: [
      {
        question: "Necesito saber nadar o bucear?",
        answer:
          "No es imprescindible saber nadar, aunque si muy recomendable para disfrutar al maximo. Siempre hay chalecos salvavidas disponibles y las actividades de snorkel son opcionales.",
      },
      {
        question: "Cual es el nivel fisico requerido?",
        answer:
          "Nivel bajo-medio. Las actividades principales son snorkel, kayak suave y caminar por playas. No hay trekkings exigentes.",
      },
      {
        question: "Hay wifi en las islas?",
        answer:
          "Si, en los hoteles y restaurantes de El Nido, Coron y Boracay. En las islas pequenas durante los tours, no hay conexion.",
      },
      {
        question: "Puedo viajar solo/a?",
        answer:
          "Por supuesto! La mayoria de nuestros viajeros vienen solos y es la mejor manera de conectar con el grupo. No hay suplemento individual.",
      },
    ],
    availableDates: [
      {
        id: "fil-mar-25",
        startDate: "2026-03-15",
        endDate: "2026-03-28",
        spots: 3,
        totalSpots: 16,
        price: 1397,
        originalPrice: 1597,
      },
      {
        id: "fil-abr-25",
        startDate: "2026-04-05",
        endDate: "2026-04-18",
        spots: 8,
        totalSpots: 16,
        price: 1397,
        originalPrice: 1597,
      },
      {
        id: "fil-may-25",
        startDate: "2026-05-10",
        endDate: "2026-05-23",
        spots: 12,
        totalSpots: 16,
        price: 1297,
      },
    ],
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    tagline:
      "De Hanoi, recorriendo Ninh Binh, la provincia de la costura y Ha giang loop. ",
    heroImage: "/images/vietnam/trip-vietnam.jpg",
    galleryImages: [
      "/images/vietnam/vietnam-1.jpg",
      "/images/vietnam/vietnam-2.jpg",
      "/images/vietnam/vietnam-3.jpg",
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
      "Street food tour en Hanoi",
    ],
    components: [
      { name: "Relax", rating: 2 },
      { name: "Actividad física", rating: 4 },
      { name: "Naturaleza", rating: 5 },
      { name: "Cultural", rating: 5 },
      { name: "Gastronómico", rating: 4 },
      { name: "Nightlife", rating: 3 },
    ],
    description: [
      "Vietnam es un destino apetece siempre por su mezcla de vibraciones, el contraste entre el loco tráfico de Hanoi y la paz inesperada que te da Ninh Binh, donde el tiempo baja el ritmo y una barca tradicional se desliza en silencio entre montañas de piedra caliza y arrozales infinitos.",
      "Vietnam es perderte durante tres días en la Ha Giang Loop, atravesando puertos de montaña imposibles y aldeas donde la vida sigue otro compás. Es despertarte en Sapa rodeado de niebla y terrazas verdes, compartir una cena casera en un homestay y entender que viajar también es conectar.",
      "Este viaje está diseñado para quienes quieren algo más que ver paisajes bonitos. Aquí caminamos, navegamos, convivimos con comunidades locales y nos dejamos atravesar por una cultura intensa, resiliente y profundamente humana.",
      "Durante 14 días recorreremos el norte de Vietnam combinando aventura, naturaleza brutal y momentos de calma que equilibran el alma. No vienes solo a descubrir Vietnam. Vienes a sentirlo.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Primer contacto con Vietnam: bienvenida a Hanoi",
        description: [
          "Aterrizamos en Hanoi y, desde el primer momento, empezamos a sentir que estamos lejos de casa. El equipo de Awayna nos espera en el aeropuerto para organizarnos, conocernos y poner rumbo al alojamiento. Tras instalarnos y dejar las mochilas, salimos a dar nuestro primer paseo por la ciudad. Calles llenas de vida, motos que parecen bailar entre el tráfico, aromas intensos de comida callejera y una energía que no se parece a nada que hayas vivido antes. Cerramos el día con nuestra primera cena en grupo, rompiendo el hielo y empezando a construir lo que será una experiencia compartida muy potente."
        ],
        highlights: ["Llegada a Hanoi", "Cena en grupo", "Paseo por la ciudad"],
      },
      { 
        day: 2,
        title: "Hanoi sin filtros, con Hung",
        description: [
          "Hoy nos adentramos en la Hanoi más auténtica de la mano de Hung, nuestro guía local y cómplice en esta aventura. Caminamos por mercados tradicionales, templos escondidos y barrios donde la vida sigue su propio ritmo, lejos del turismo masivo. Hung nos contará historias reales del país, anécdotas personales y detalles que ayudan a entender Vietnam desde dentro, no desde un libro. Por la noche, Awayna invita a cenar en un restaurante reconocido por la Guía Michelin, donde brindamos por el grupo y disfrutamos de una gastronomía que sorprende en cada plato."
        ],
        highlights: ["Guía local Hung", "Mercados tradicionales", "Cena Michelin"],
      },
      {
        day: 3,
        title: "Ninh Binh: el dragón despierta",
        description: [
          "Dejamos la ciudad y ponemos rumbo a Ninh Binh. Nuestro objetivo es el famoso mirador del Dragón, un lugar que exige esfuerzo, pero recompensa con creces. Subimos escalón a escalón, sintiendo el primer reto físico del viaje, hasta alcanzar una panorámica que deja sin palabras: montañas de piedra caliza, ríos serpenteantes y un paisaje que parece irreal. Por la tarde, cambiamos el ritmo con un trekking suave entre templos antiguos y senderos tranquilos, conectando con la historia del lugar y con una Vietnam mucho más serena."
        ],
        highlights: ["Mirador del Dragón", "Trekking", "Templos antiguos"],
      },
      {
        day: 4,
        title: "Barcas, calma y vida local",
        description: [
          "Nos levantamos temprano para disfrutar de un paseo en barca tradicional por uno de los escenarios naturales más impresionantes del viaje. Navegamos entre formaciones rocosas y arrozales, en un entorno que parece sacado de una película (y sí, aquí se rodó <em>King Kong</em>). Visitamos pequeños pueblos locales y aprendemos sobre la mezcla cultural que define esta región. Es un día para bajar revoluciones, observar y dejarse llevar. Por la tarde, nos acercamos a la zona más moderna de Hoa Lu, perfecta para seguir explorando la cocina callejera vietnamita."
        ],
        highlights: ["Barca tradicional", "Pueblos locales", "Hoa Lu"],
      },
      {
        day: 5,
        title: "Hacia el norte más salvaje",
        description: [
          "Hoy toca carretera. Dejamos atrás los paisajes tranquilos para avanzar hacia el norte más remoto del país. Durante el trayecto, el entorno cambia poco a poco y sentimos que nos estamos adentrando en una Vietnam menos conocida y más auténtica. Llegamos por la noche a la zona de Ha Giang, donde descansamos y nos preparamos mentalmente para la experiencia que viene. Mañana empieza algo grande."
        ],
        highlights: ["Viaje a Ha Giang", "Norte remoto", "Cambio de paisajes"],
      },
      {
        day: 6,
        title: "Ha Giang Loop: el corazón del viaje",
        description: [
          "Arranca la legendaria Ha Giang Loop, una de las rutas más espectaculares del sudeste asiático y el verdadero corazón de esta expedición. Durante tres días recorremos puertos de montaña imposibles, valles escondidos y aldeas de minorías étnicas donde el tiempo parece haberse detenido. Cada curva regala paisajes brutales y cada parada es una lección de humildad. Dormimos en alojamientos sencillos, auténticos y llenos de alma, apoyando directamente a las comunidades locales y compartiendo momentos que se quedan grabados para siempre."
        ],
        highlights: ["Ha Giang Loop", "Montañas", "Aldeas étnicas", "Alojamientos locales"],
      },
      {
        day: 9,
        title: "Sapa y el abrazo de Mama Sumi",
        description: [
          "Tras completar la última etapa de la loop, ponemos rumbo a Sapa. Allí nos espera Mama Sumi, una mujer que representa como pocas la hospitalidad del norte de Vietnam. Nos instalamos en su homestay tradicional, rodeados de montañas y silencio. Por la noche compartimos una cena casera, preparada con ingredientes locales y mucho cariño. No es solo una cena, es una experiencia humana profunda que conecta al grupo de una forma especial."
        ],
        highlights: ["Sapa", "Mama Sumi", "Homestay", "Cena casera"],
      },
      {
        day: 10,
        title: "Caminando entre arrozales infinitos",
        description: [
          "Acompañados por Mama Sumi, realizamos un trekking a través de valles, terrazas de arroz y pueblos tradicionales cercanos a Sapa. Caminamos por senderos que usan los locales en su día a día, lejos de rutas turísticas masificadas. Cada paso nos acerca más a la tierra, a la forma de vida de las etnias del norte y a una manera distinta de entender el mundo."
        ],
        highlights: ["Trekking arrozales", "Pueblos tradicionales", "Vida local"],
      },
      {
        day: 11,
        title: "Del techo de Indochina a la noche de Hanoi",
        description: [
          "Nos despedimos de la preciosa SaPa, pero no antes visitar el famoso Fansipan, el pico más alto de Indochina, su increíble teleférico nos subirá hasta el mismísimo pico. Tras esta experiencia, regresamos a Hanoi. Por la noche celebramos todo lo vivido en Beer Street, el lugar perfecto para brindar, reír y compartir historias alrededor de cerveza fría y comida callejera vietnamita."
        ],
        highlights: ["Fansipan", "Teleférico", "Beer Street", "Regreso a Hanoi"],
      },
      {
        day: 12,
        title: "Ha Long Bay: un paisaje que se queda contigo",
        description: [
          "Hoy visitamos uno de los lugares más icónicos del planeta, una de las siete maravillas naturales del mundo. Navegamos por la Bahía de Ha Long, rodeados de miles de formaciones kársticas que emergen del agua color esmeralda. Es un día para mirar, respirar y dejarse impresionar. El paisaje habla por sí solo, tras un precioso atardecer comenzamos nuestra vuelta a Hanoi."
        ],
        highlights: ["Ha Long Bay", "Formaciones kársticas", "Atardecer"],
      },
      {
        day: 13,
        title: "Últimos pasos por Hanoi",
        description: [
          "Nuestro último día lo dedicamos a perdernos una vez más por Hanoi. Visitamos mercados, tiendas locales y rincones que se nos quedaron pendientes. Vamos a conocer la famosa Train Street, donde nos tomaremos un respiro directamente a metros de la via del tren. Es el momento ideal para comprar recuerdos con sentido, apoyar a los artesanos locales y sentarnos a asimilar todo lo vivido. Cerramos el viaje con una última cena en grupo, mochilas listas y muchas sonrisas cómplices."
        ],
        highlights: ["Train Street", "Mercados", "Cena final", "Compras locales"],
      },
      {
        day: 14,
        title: "Nos despedimos de Vietnam",
        description: [
          "Traslado al aeropuerto y vuelo de regreso a España. Nos vamos con la mochila llena de historias, aprendizajes y momentos compartidos. Vietnam queda atrás, pero el vínculo creado con el grupo y la esencia de este viaje nos acompañarán mucho tiempo. Y, como siempre pasa con Awayna, el próximo destino ya empieza a llamar."
        ],
        highlights: ["Vuelo de regreso", "Despedida", "Historias compartidas"],
      },
    ],
    included: [
      "Recogida en el aeropuerto de Hanoi el día de la llegada (vuelos internacionales no incluidos, puedes llegar a cualquier hora del 15 de octubre)",
      "Asistencia del coordinador durante todo el viaje a Vietnam",
      "Alojamiento en habitaciones compartidas durante todo el viaje (hoteles y homestay tradicional)",
      "Desayunos incluidos durante todo el itinerario",
      "Cena de bienvenida en restaurante recomendado por la guía Michelin en Hanoi",
      "Guía local en Hanoi para descubrir la ciudad desde dentro",
      "Transporte privado durante todo el recorrido; Hanoi–Ninh Binh–Ha Giang–Sapa–Hanoi–Ha Long–Hanoi",
      "Experiencia completa de la Ha Giang Loop durante 3 días con conductores locales, alojamientos, transporte, cenas, etc.",
      "Paseo en barca tradicional en Ninh Binh entre arrozales y formaciones kársticas",
      "Trekking por templos y senderos naturales en Ninh Binh",
      "Homestay tradicional en Sapa",
      "Cena casera tradicional en Sapa con productos locales durante dos noches",
      "Trekking entre arrozales y aldeas étnicas en Sapa con guía local",
      "Excursión a Ha Long Bay con navegación incluida",
      "Mochila Awayna",
    ],
    notIncluded: [
      "Vuelos ida y vuelta desde España.",
      "Comidas y bebidas no especificadas en el apartado anterior.",
      "Cualquier otro servicio no especificado en el apartado anterior.",
      "Teleférico a Fansipan (actividad de altura que dejamos para los más atrevidos).",
      "Fondo común.",
    ],
    practicalInfo: {
      bestTime: "Marzo a Mayo y Septiembre a Noviembre",
      visa: "E-visa obligatoria. Tramite online sencillo (25€ aprox.)",
      vaccines:
        "Ninguna obligatoria. Recomendadas: Hepatitis A/B, Tetanos, Tifoidea",
      currency: "Dong vietnamita (VND). 1€ ≈ 26.000 VND",
      language: "Vietnamita. Ingles en zonas turisticas",
      timeZone: "UTC+7 (6 horas mas que Espana)",
    },
    faqs: [
      {
        question: "¿Qué tipo de experiencias viviremos en Vietnam?",
        answer: "Vietnam es contraste puro. Caos bonito en Hanoi, arrozales infinitos en el norte, bahías de película y ciudades con historia en cada esquina.\n\nDormiremos en barco en la Bahía de Ha Long, recorreremos pueblos entre montañas, probaremos street food que te vuela la cabeza y entenderemos la historia del país desde dentro.\n\nNo es solo ver Vietnam. Es sentirlo. Con contexto, con guía local y con respeto por la cultura que nos abre la puerta."
      },
      {
        question: "¿Hay que vacunarse para viajar a Vietnam?",
        answer: "No hay vacunas obligatorias para viajeros desde España.\n\nSe suelen recomendar Hepatitis A y tétanos, y dependiendo del tipo de viaje, duración o zonas rurales, podrían sugerirse otras. Lo mejor es consultar en un centro de vacunación internacional unas semanas antes de salir para viajar tranquilo."
      },
      {
        question: "¿Puedo alargar el viaje por mi cuenta?",
        answer: "Sí, y es muy buena idea.\n\nPuedes quedarte más días en el norte explorando más trekkings, bajar al sur para descubrir el Delta del Mekong o terminar en alguna isla como Phu Quoc.\n\nTe damos recomendaciones y tips para que lo organices fácil, pero las noches extra y cambios en vuelos no están incluidos en el precio del viaje."
      },
      {
        question: "¿Necesito visado para este viaje?",
        answer: "Actualmente, para pasaporte español, Vietnam permite la entrada sin visado para estancias cortas (según normativa vigente en el momento del viaje).\n\nLas condiciones pueden cambiar, así que siempre recomendamos revisar la información oficial antes de salir.\n\nNecesitarás pasaporte con al menos 6 meses de validez desde la fecha de entrada."
      },
      {
        question: "¿Qué tipo de alojamientos utilizamos?",
        answer: "Hoteles de 3–4 estrellas bien ubicados y seleccionados por comodidad, limpieza y buen ambiente.\n\nTambién incluimos experiencias especiales, como noche en barco en Ha Long o alojamientos con encanto en zonas rurales.\n\nHabitaciones dobles o triples compartidas, con opción de suplemento individual si está disponible."
      },
      {
        question: "¿Es un viaje muy físico?",
        answer: "No necesitas estar en modo ultramaratón.\n\nIncluye caminatas suaves, algún trekking sencillo entre arrozales, paseos en barco y días activos, pero está pensado para personas sanas con condición física normal.\n\nSi tienes alguna condición médica específica, avísanos antes de reservar para adaptarlo en lo posible."
      },
    ],
    availableDates: [
      {
        id: "vn-mar-25",
        startDate: "2026-03-08",
        endDate: "2026-03-20",
        spots: 4,
        totalSpots: 16,
        price: 1299,
      },
      {
        id: "vn-abr-25",
        startDate: "2026-04-12",
        endDate: "2026-04-24",
        spots: 10,
        totalSpots: 16,
        price: 1299,
      },
      {
        id: "vn-oct-25",
        startDate: "2026-10-03",
        endDate: "2026-10-15",
        spots: 14,
        totalSpots: 16,
        price: 1199,
      },
    ],
  },
  {
    slug: "tailandia",
    name: "Tailandia",
    tagline: "Bangkok, islas paradisiacas y el Norte del Pais.",
    heroImage: "/images/thailand/trip-thailand.jpg",
    galleryImages: [
      "/images/thailand/thailand-1.jpg",
      "/images/thailand/thailand-2.jpg",
      "/images/thailand/thailand-3.jpg",
    ],
    duration: "13 dias",
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
      "Full moon party (opcional)",
    ],
    components: [
      { name: "Cultura", rating: 5 },
      { name: "Gastronomía", rating: 5 },
      { name: "Playas", rating: 4.5 },
      { name: "Aventura", rating: 4 },
      { name: "Naturaleza", rating: 4 },
      { name: "Relajación", rating: 4.5 },
    ],
    description: [
      "¿Qué vas a vivir?",
      "Tailandia es considerado uno de nuestros destinos top por la versatilidad con la que cuenta en cualquier ámbito. Si nunca has estado en Tailandia este viaje es perfecto para que descubras un poquito de cada parte del país de una forma en la que podamos exprimir 13 días al máximo, conociendo lugares a los que los turistas tradicionales no llegan.",
      "Este paraiso cuenta con una gastronomía increíble, una cultura muy amigable que te hace sentir cómodo en todo momento, una mezcla de paisajes irreales que van desde la selva tropical a playas de escenarios de películas.",
      "Todo esto podrás descubrirlo con nosotros y tu nuevo grupo de amigos, con muy buen rollo y con todas las ganas de profundizar y ver como vive la gente de aquí, conociendo la cultura desde dentro vamos a recorrer de norte a sur pasando por los escenarios mas increíbles del país.",
      "¿Estais preparados?",
    ],
    itinerary: [
      {
        day: 1,
        title:
          "Llegada al paraíso: paseo gastronómico por Chinatown y Khao San Road",
        description: [
          "¡Bienvenidos a Tailandia! 🇹🇭 A vuestra llegada a Bangkok, os estaremos esperando en el aeropuerto, así que desde el primer momento podéis relajaros y dejaros llevar. Una vez reunido todo el grupo, ponemos rumbo a la gran ciudad. Tras acomodarnos en el alojamiento y una ducha reparadora, salimos directos al corazón de Bangkok para empezar el viaje como se merece: probando street food tailandés. Visitamos Chinatown, uno de los barrios más vibrantes y auténticos de la capital, famoso por sus puestos callejeros, aromas intensos y recetas tradicionales chinas y tailandesas. Después de deleitarnos con todo tipo de sabores asiáticos, subimos a un tuk tuk para dirigirnos a Khao San Road, la calle más animada de Bangkok, punto de encuentro de viajeros de todo el mundo. La noche continúa… hasta que el cuerpo aguante.",
        ],
        highlights: [
          "Llegada Bangkok",
          "Chinatown",
          "Khao San Road",
          "Street food",
        ],
        image: "/images/thailand/itinerary/Foto_dia_1.jpg",
      },
      {
        day: 2,
        title: "Bangkok Express",
        description: [
          "Nos despertamos con energía para descubrir los templos y monumentos más emblemáticos de la capital tailandesa. Visitamos el impresionante Gran Palacio Real, antigua residencia de los reyes de Siam; el Buda Reclinado (Wat Pho), uno de los más grandes del país; y los curiosos mercados de amuletos, donde nos perderemos entre puestos llenos de historia y simbolismo. Al mediodía, disfrutamos de la gastronomía local en un restaurante reconocido por la Guía Michelin, una experiencia que demuestra por qué Bangkok es una de las capitales gastronómicas del mundo. Cerramos con un bubble coffee y ponemos rumbo al aeropuerto para volar hacia el sur del país, destino Krabi, puerta de entrada al mar de Andamán.",
        ],
        highlights: [
          "Gran Palacio Real",
          "Wat Pho",
          "Mercados de amuletos",
          "Restaurante Michelin",
        ],
        image: "/images/thailand/itinerary/Foto_dia_2.jpg",
      },
      {
        day: 3,
        title: "Primer día de playas paradisíacas en Railay",
        description: [
          "Primer día en el sur y llega el momento de disfrutar del calor, el mar y la naturaleza. Subimos a una barca tradicional tailandesa con nuestro capitán de confianza para recorrer la espectacular costa del mar de Andamán. Nos esperan aguas cristalinas, snorkel, acantilados de piedra caliza y playas de película. Tras un atardecer inolvidable, regresamos a Ao Nang, una de las zonas con más ambiente del sudeste asiático. Limpios y descansados, es el momento perfecto para un masaje tradicional tailandés, una cena tranquila y postres locales para recargar energías.",
        ],
        highlights: [
          "Railay Beach",
          "Snorkel",
          "Mar de Andamán",
          "Masaje tradicional",
        ],
        image: "/images/thailand/itinerary/Foto_dia_3.jpg",
      },
      {
        day: 4,
        title: "Bautizo de buceo entre corales multicolor",
        description: [
          "¡Buenos días! Hoy nos dirigimos a las famosas islas Phi Phi, uno de los grandes iconos de Tailandia. Nos espera una experiencia muy especial: bautismo de buceo en algunas de las aguas más transparentes del país. No importa si es tu primera vez: nuestro equipo profesional te acompañará en todo momento para que disfrutes con total seguridad de los arrecifes de coral y la vida marina. Tras la actividad, asistiremos a un combate de Muay Thai, el deporte nacional tailandés. Y para quienes aún tengan energía, la noche continúa en lo que muchos llaman la 'Ibiza tailandesa'.",
        ],
        highlights: [
          "Phi Phi Islands",
          "Bautismo de buceo",
          "Muay Thai",
          "Vida nocturna",
        ],
        image: "/images/thailand/itinerary/Foto_dia_4.jpg",
      },
      {
        day: 5,
        title: "Playas de película en Koh Phi Phi",
        description: [
          "Si ayer te supo a poco, hoy vamos a más. Recorremos en barca privada todos los rincones de Koh Phi Phi: playas habitadas por monos, lagunas naturales de agua turquesa y paisajes irreales. Aquí se han rodado películas mundialmente famosas, y entenderás por qué. Tras un día perfecto, regresamos a Krabi para descansar. Sabemos que cuesta despedirse de lugares así… pero la aventura continúa.",
        ],
        highlights: [
          "Koh Phi Phi",
          "Lagunas turquesa",
          "Maya Bay",
          "Barca privada",
        ],
        image: "/images/thailand/itinerary/Foto_dia_5.jpg",
      },
      {
        day: 6,
        title: "Travesía hacia la jungla",
        description: [
          "Ponemos rumbo a uno de los lugares más especiales del viaje: el Parque Nacional de Khao Sok, uno de los bosques tropicales más antiguos y extensos del sudeste asiático. Selva pura, naturaleza salvaje y la posibilidad de cruzarnos con monos, serpientes o incluso elefantes. Aquí todo queda en manos del destino. Prepárate para descubrir uno de esos lugares que se quedan grabados para siempre.",
        ],
        highlights: ["Khao Sok", "Jungla", "Fauna salvaje", "Aventura"],
        image: "/images/thailand/itinerary/Foto_dia_6.jpg",
      },
      {
        day: 7,
        title: "Parque Nacional de Khao Sok y lago Cheow Lan",
        description: [
          "Cambiamos el agua salada del mar por el agua dulce del espectacular lago Cheow Lan, rodeado de montañas kársticas cubiertas de selva. Exploramos la zona como auténticos aventureros, visitando templos escondidos en la jungla, con respeto y calma, conociendo de cerca la vida de los monjes budistas. Después, navegamos por el lago acompañados de nuestro guía local, Peeranut, disfrutando de uno de los paisajes más relajantes del viaje.",
        ],
        highlights: [
          "Lago Cheow Lan",
          "Templos en la jungla",
          "Monjes budistas",
          "Navegación",
        ],
        image: "/images/thailand/itinerary/Foto_dia_7.jpg",
      },
      {
        day: 8,
        title: "Despedida del sur de Tailandia",
        description: [
          "Antes de despedirnos del sur, realizamos rafting suave, una experiencia tranquila y divertida, descendiendo por un río rodeado de vegetación exuberante. Una actividad perfecta para desconectar y disfrutar del entorno sin prisas. Tras comer y darnos una ducha reparadora, nos dirigimos al aeropuerto de Krabi para volar hacia el norte del país.",
        ],
        highlights: ["Rafting", "Vegetación exuberante", "Vuelo al norte"],
        image: "/images/thailand/itinerary/Foto_dia_8.jpg",
      },
      {
        day: 9,
        title: "¡Buenos días, Chiang Mai!",
        description: [
          "Amanecemos en Chiang Mai, nuestro lugar favorito del viaje. Cultura, tradición, gastronomía y hospitalidad se multiplican aquí por cien. Visitamos un santuario ético de elefantes, donde aprenderemos cómo se protege y cuida a estos animales de forma responsable (actividad opcional). Para quienes prefieran otra experiencia, tenemos alternativas igual de especiales. De vuelta a la ciudad, recorremos algunos de los templos más impresionantes del norte, muy diferentes a los del sur. Por la noche, cena incluida para probar el famoso Khao Soi, plato típico del norte… aviso: enamora.",
        ],
        highlights: [
          "Chiang Mai",
          "Santuario elefantes",
          "Templos del norte",
          "Khao Soi",
        ],
        image: "/images/thailand/itinerary/Foto_dia_9.jpg",
      },
      {
        day: 10,
        title: "Termas naturales y camino a Chiang Rai",
        description: [
          "Seguimos explorando Chiang Mai y visitamos uno de sus templos más emblemáticos, con vistas panorámicas de toda la ciudad. Tras la visita, ponemos rumbo a Chiang Rai, pero antes hacemos una parada para relajarnos en termas naturales, el plan perfecto para bajar pulsaciones. Por la tarde, llegada y noche en la mágica Chiang Rai.",
        ],
        highlights: ["Templo panorámico", "Termas naturales", "Chiang Rai"],
        image: "/images/thailand/itinerary/Foto_dia_10.jpg",
      },
      {
        day: 11,
        title: "Los famosos templos de Chiang Rai",
        description: [
          "Chiang Rai es pequeña, pero culturalmente fascinante. Visitamos sus templos más icónicos: el Templo Azul o Wat Rong Suea Ten, un increíble edificio de tonalidades azules que alberga un Buda de más de seis metros de altura en su interior. Por otro lado iremos al famoso Templo Blanco o Wat Rong Khun, símbolo de la ciudad en el que nos adentraremos para maravillarnos con su decoración. Después vamos a ir a visitar el Gran Buda de Chiang Rai, una representación de la diosa Guanyin, la figura de la compasión en el budismo. Su estatua sentada alcanza los 40 metros de altura, está construida sobre una flor de loto y puede verse desde varios kilómetros de distancia. Cerramos el día con un masaje tradicional tailandés y una buena cena.",
        ],
        highlights: [
          "Templo Azul",
          "Templo Blanco",
          "Gran Buda",
          "Masaje tradicional",
        ],
        image: "/images/thailand/itinerary/Foto_dia_11.jpg",
      },
      {
        day: 12,
        title: "Conociendo a los monjes budistas",
        description: [
          "Último día en el norte y uno de los más especiales. Madrugamos para hacer una ofrenda a los monjes, un gesto sencillo pero muy significativo. Compartimos tiempo con ellos en un templo remoto y continuamos el día con una familia local, disfrutando de comida sencilla, auténtica y llena de cariño. Una experiencia que confirma que este viaje no es uno más.",
        ],
        highlights: [
          "Ofrenda a monjes",
          "Templo remoto",
          "Familia local",
          "Comida auténtica",
        ],
        image: "/images/thailand/itinerary/Foto_dia_12..jpg",
      },
      {
        day: 13,
        title: "¡Hasta pronto, Tailandia!",
        description: [
          "Regresamos a Bangkok para conectar con nuestros vuelos internacionales. Despedirse no es fácil, pero nos llevamos recuerdos, amistades y la certeza de que esta no será la última vez en Tailandia. Para quienes tengan el vuelo más tarde o al día siguiente, existe la opción de pasar una última noche en Bangkok junto al grupo.",
        ],
        highlights: ["Regreso Bangkok", "Despedida", "Vuelos internacionales"],
        image: "/images/thailand/itinerary/Foto_dia_13.jpg",
      },
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
      "Seguro de viaje",
    ],
    notIncluded: [
      "Vuelos internacionales",
      "Comidas no especificadas",
      "Actividades opcionales",
      "Propinas",
    ],
    practicalInfo: {
      bestTime: "Noviembre a Marzo (temporada seca)",
      visa: "No necesario para estancias menores a 30 dias",
      vaccines: "Ninguna obligatoria. Recomendadas: Hepatitis A/B, Tetanos",
      currency: "Baht (THB). 1€ ≈ 38 THB",
      language: "Thai. Ingles turistico ampliamente hablado",
      timeZone: "UTC+7 (6 horas mas que Espana)",
    },
    faqs: [
      {
        question: "Como es el santuario de elefantes?",
        answer:
          "Trabajamos solo con santuarios eticos certificados donde los elefantes fueron rescatados de la industria turistica. No se monta a los elefantes.",
      },
      {
        question: "Hay que vacunarse?",
        answer:
          "No hay vacunas obligatorias. Se recomienda tener al dia Hepatitis A/B y Tetanos.",
      },
      {
        question: "Puedo extender el viaje en las islas?",
        answer:
          "Si! Muchos viajeros extienden unos dias en las islas. Te ayudamos con la logistica.",
      },
    ],
    availableDates: [
      {
        id: "th-mar-25",
        startDate: "2026-03-01",
        endDate: "2026-03-12",
        spots: 2,
        totalSpots: 14,
        price: 1197,
        originalPrice: 1397,
      },
      {
        id: "th-abr-25",
        startDate: "2026-04-18",
        endDate: "2026-04-29",
        spots: 6,
        totalSpots: 14,
        price: 1197,
        originalPrice: 1397,
      },
      {
        id: "th-nov-25",
        startDate: "2026-11-14",
        endDate: "2026-11-25",
        spots: 14,
        totalSpots: 14,
        price: 1097,
      },
    ],
  },
  {
    slug: "japon",
    name: "Japon",
    tagline:
      "Del caos perfecto de Tokio a la calma de Nara, atravesando el oeste japonés",
    heroImage: "/images/japan/japonportada.jpeg",
    galleryImages: [
      "/images/japan/japon-01.jpg",
      "/images/japan/japon-02.jpg",
      "/images/japan/japon-04.jpg",
      "/images/japan/japon-05.jpg",
      "/images/japan/japon-06.jpg",
      "/images/japan/japon-07.jpg",
      "/images/japan/japon-08.jpg",
      "/images/japan/japon-09.jpg",
      "/images/japan/japon-10.jpg",
      "/images/japan/japon-11.jpg",
      "/images/japan/japon-12.jpg",
      "/images/japan/japon-13.jpg",
      "/images/japan/japon-14.jpg",
      "/images/japan/japon-15.jpg",
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
      "Noche en ryokan tradicional",
    ],
    components: [
      { name: "Cultura", rating: 5 },
      { name: "Naturaleza", rating: 4.5 },
      { name: "Gastronomía", rating: 5 },
      { name: "Aventura", rating: 3.5 },
      { name: "Relajación", rating: 4.5 },
      { name: "Playas", rating: 2.5 },
    ],
    description: [
      "<strong>Si lo tuyo es viajar de verdad y no solo visitar sitios, este viaje a Japón es para ti.</strong>",
      "Durante 13 noches nos sumergimos en un país de contrastes brutales, donde la tradición y el futuro conviven en la misma calle. Aquí no venimos a correr ni a tachar lugares: venimos a <strong>vivir Japón desde dentro</strong>, en grupo, con calma y con mucha curiosidad.",
      "Empezamos en Tokio, dejándonos llevar por su energía infinita, sus barrios imposibles y su caos perfectamente ordenado. De ahí damos un giro total hacia la naturaleza: costa salvaje en la península de Izu, onsen, silencio y paisajes volcánicos, antes de encontrarnos cara a cara con el mítico Fuji.",
      "Seguimos rumbo a Kansai, donde Osaka nos recibe con su espíritu callejero y su amor por la buena comida, Kyoto nos regala templos, rituales y paseos que parecen detenidos en el tiempo, y Nara nos baja aún más el ritmo entre naturaleza y espiritualidad.",
      "<strong>Este es un viaje para explorar sin prisas</strong>, para compartir momentos cotidianos que se vuelven especiales, para perderse por calles secundarias y entender por qué Japón se siente tanto como se recuerda.",
      "<strong>Japón no se explica.</strong>",
      "<strong>Japón se vive.</strong>",
      "<strong>Y mejor, juntos.</strong>",
    ],
    itinerary: [
      {
        day: 1,
        title: "Konnichiwa Tokio!",
        description: [
          "<strong>DÍA 1 · ATERRIZAMOS JUNTOS</strong>",
          "Llegamos a Tokio y empieza oficialmente la aventura. Entre mochilas, primeras miradas y esa mezcla de cansancio y emoción, sentimos que algo grande está arrancando.",
          "Dejamos las cosas en el alojamiento y salimos a caminar sin rumbo fijo, simplemente para empezar a entender dónde estamos. Luces, orden, sonidos distintos, carteles que no entendemos y, aun así, todo fluye.",
          "Cena sencilla para romper el hielo, primeras conversaciones largas y esa sensación de ‘ya estamos aquí’. Hoy no se trata de hacer mucho, sino de empezar a vivirlo juntos.",
        ],
        highlights: ["Llegada Tokio", "Hotel Shinjuku", "Shibuya crossing"],
      },
      {
        day: 2,
        title: "Tokio tradicion",
        description: [
          "<strong>DÍA 2 · DEL JAPÓN TRADICIONAL AL TOKIO QUE VIBRA DE LA MANO DE NUESTRO AMIGO MATSU</strong>",
          "Amanecemos en Tokio, y ponemos rumbo a Asakusa, uno de los barrios más tradicionales de la ciudad. Caminamos hacia el templo Senso-ji entre incienso, farolillos y pequeños puestos en la calle Nakamise. Probamos dulces típicos y dejamos que el ambiente nos envuelva.",
          "Por la tarde conoceremos a nuestro amigo Matsu, autóctono de Tokio, que será quien nos acompañe en nuestra ruta por la Japón que viven los locales. Cuando cae la noche, Tokio cambia de piel. Pantallas gigantes, luces de neón, barrios que laten con fuerza. Nos dejamos llevar por ese caos perfectamente organizado que solo existe aquí.",
          "Un día de contrastes brutales que nos recuerda por qué Japón es tan especial.",
        ],
        highlights: ["Senso-ji", "Akihabara", "Harajuku"],
      },
      {
        day: 3,
        title: "Tokio sin filtros",
        description: [
          "<strong>DÍA 3 · TOKIO SIN FILTROS</strong>",
          "Hoy exploramos el lado más creativo de la ciudad. Harajuku nos muestra su estética libre, diferente, sin reglas.",
          "Después cruzamos al santuario Meiji, donde el ruido desaparece y todo se vuelve verde y silencioso. Ese contraste constante es parte del encanto. En los alrededores, disfrutaremos de uno de los mejores ramen de la ciudad, perfecto para coger fuerzas y seguir con el día.",
          "Por la tarde Shibuya, su cruce mítico y sus miradores. Nos mezclamos con la gente local, paseamos sin prisa y cerramos la noche deleitando sushi y sake, celebrando que el grupo ya empieza a sentirse como equipo.",
        ],
        highlights: ["Harajuku", "Santuario Meiji", "Shibuya", "Sushi y sake"],
      },
      {
        day: 4,
        title: "Japón natural en la península de Izu",
        description: [
          "<strong>DÍA 4 · JAPÓN NATURAL EN LA PENÍNSULA DE IZU</strong>",
          "Dejamos atrás la gran ciudad y nos movemos hacia la península de Izu. El paisaje cambia por completo: costa volcánica, acantilados, aire más limpio y menos turistas.",
          "Caminamos junto al océano, paramos en miradores y disfrutamos de un Japón más tranquilo y auténtico.",
          "Por la tarde nos alojamos en un ryokan tradicional. Tatamis, puertas correderas y onsen para relajar cuerpo y mente. Cena japonesa elaborada y conversación pausada. Este día nos invita a bajar revoluciones. Verás que con solo una sonrisa es posible entender perfectamente lo que la otra persona te quiere decir.",
        ],
        highlights: ["Península de Izu", "Costa volcánica", "Ryokan", "Onsen"],
      },
      {
        day: 5,
        title: "El encuentro con el Fuji",
        description: [
          "<strong>DÍA 5 · EL ENCUENTRO CON EL FUJI</strong>",
          "Seguimos hacia la zona de Kawaguchiko. El plan del día gira en torno al paisaje: lago Ashi, paseos tranquilos y la posibilidad de ver el Monte Fuji asomando imponente si el cielo nos regala la vista.",
          "Es un día contemplativo, muy visual, perfecto para seguir conectando con el entorno, observando como funciona la vida en Japón fuera de la ciudad.",
          "Por la noche, más onsen y descanso. Japón también se vive en silencio.",
        ],
        highlights: ["Kawaguchiko", "Lago Ashi", "Monte Fuji", "Onsen"],
      },
      {
        day: 6,
        title: "Osaka en modo calle - Sabores y neón",
        description: [
          "<strong>DÍA 6 · SABORES Y NEÓN</strong>",
          "Llegamos a Osaka y se nota el cambio de energía. Aquí todo es más directo, más callejero, más espontáneo.",
          "Salimos hacia Dotonbori y nos dejamos guiar por el olor a comida y los carteles gigantes iluminando el canal. Probamos takoyaki, okonomiyaki y todo lo que se cruce en el camino.",
          "Osaka se disfruta compartiendo platos y riendo sin mirar el reloj.",
        ],
        highlights: ["Osaka", "Dotonbori", "Takoyaki", "Okonomiyaki"],
      },
      {
        day: 7,
        title: "Osaka auténtica",
        description: [
          "<strong>DÍA 7 · OSAKA AUTÉNTICA</strong>",
          "Empezamos el día en el Castillo de Osaka y paseamos por su parque. Después nos vamos al mercado Kuromon para seguir descubriendo sabores locales.",
          "Por la tarde exploramos Shinsekai, un barrio con carácter propio, menos pulido y más real.",
          "Última noche en la ciudad, ideal para despedirnos de su energía vibrante.",
        ],
        highlights: [
          "Castillo de Osaka",
          "Parque",
          "Mercado Kuromon",
          "Shinsekai",
        ],
      },
      {
        day: 8,
        title: "Kyoto con calma - El Japón que imaginabas",
        description: [
          "<strong>DÍA 8 · EL JAPÓN QUE IMAGINABAS</strong>",
          "Llegamos a Kyoto y el ritmo baja automáticamente. Paseamos por Gion, entre casas tradicionales y calles que parecen detenidas en el tiempo.",
          "Aquí no hay prisas. Solo caminar, observar y dejar que la ciudad se revele poco a poco.",
        ],
        highlights: ["Kyoto", "Gion", "Casas tradicionales"],
      },
      {
        day: 9,
        title: "Templos y postales reales",
        description: [
          "<strong>DÍA 9 · TEMPLOS Y POSTALES REALES</strong>",
          "Visitamos Fushimi Inari y caminamos bajo sus miles de torii rojos. Seguimos hacia Higashiyama y terminamos en Kiyomizu-dera al atardecer.",
          "Es uno de esos días que sabes que recordarás durante años.",
        ],
        highlights: ["Fushimi Inari", "Higashiyama", "Kiyomizu-dera"],
      },
      {
        day: 10,
        title: "Naturaleza y libertad en Kyoto",
        description: [
          "<strong>DÍA 10 · NATURALEZA Y LIBERTAD</strong>",
          "Exploramos Arashiyama y su famoso bosque de bambú. Visitamos el Pabellón Dorado, reflejándose en el agua como una escena irreal.",
          "Por la tarde hay tiempo libre para perderse, descansar o repetir ese rincón que te llamó la atención. Kyoto invita a disfrutar sin agenda rígida.",
        ],
        highlights: ["Arashiyama", "Bosque de bambú", "Pabellón Dorado"],
      },
      {
        day: 11,
        title: "Nara y su energía tranquila",
        description: [
          "<strong>DÍA 11 · NARA Y SU ENERGÍA TRANQUILA</strong>",
          "Nos desplazamos a Nara. Paseamos por su parque entre ciervos que caminan libres y visitamos el imponente templo Todai-ji.",
          "Es un día relajado, verde y muy equilibrado. Ideal para cerrar la parte más espiritual y cultural del viaje.",
        ],
        highlights: ["Nara", "Parque de ciervos", "Todai-ji"],
      },
      {
        day: 12,
        title: "Tokio, despedida con historias - Volvemos diferentes",
        description: [
          "<strong>DÍA 12 · VOLVEMOS DIFERENTES</strong>",
          "Regresamos a Tokio en tren bala. La ciudad es la misma, pero nosotros ya no.",
          "Tarde libre para compras, barrios pendientes o simplemente pasear recordando todo lo vivido.",
          "Cena de despedida, brindis y anécdotas que ya forman parte del viaje.",
        ],
        highlights: ["Tokio", "Tren bala", "Compras", "Cena despedida"],
      },
      {
        day: 13,
        title: "Hasta pronto, Japón",
        description: [
          "<strong>DÍA 13 · HASTA PRONTO, JAPÓN</strong>",
          "Último paseo, último café y momento de hacer balance.",
          "Nos vamos con la mochila llena de recuerdos, fotos y conexiones reales.",
          "Este viaje no termina aquí. Se queda con nosotros.",
        ],
        highlights: ["Tokio", "Despedida", "Recuerdos"],
      },
    ],
    included: [
      "JR Pass 7 dias (valor 250€)",
      "10 noches alojamiento hoteles 3* + 1 ryokan",
      "Desayunos diarios + 2 cenas",
      "Excursion Hakone con telesferico y barco",
      "Ceremonia del te en Kioto",
      "Entradas TeamLab y museos",
      "Coordinador Awayna",
      "Seguro de viaje",
    ],
    notIncluded: [
      "Vuelos internacionales",
      "Comidas no especificadas",
      "Transporte local en Tokio (metro)",
      "Actividades opcionales",
    ],
    practicalInfo: {
      bestTime: "Marzo-Mayo (sakura) y Octubre-Noviembre (momiji)",
      visa: "No necesario para estancias menores a 90 dias",
      vaccines: "Ninguna obligatoria ni recomendada especifica",
      currency: "Yen (JPY). 1€ ≈ 160 JPY. Japon usa mucho efectivo",
      language: "Japones. Ingles limitado pero buena senalizacion",
      timeZone: "UTC+9 (8 horas mas que Espana)",
    },
    faqs: [
      {
        question: "¿Qué tipo de experiencias viviremos en Japón?",
        answer:
          "Aquí no venimos solo a hacer fotos, venimos a entender el lugar.\n\nTemplos al amanecer, barrios tradicionales donde el tiempo va más lento y calles futuristas que parecen otro planeta.\n\nPodrás pasear con kimono por calles históricas, probar comida local en mercados auténticos y dormir en un ryokan tradicional para sentir Japón desde dentro. Siempre con respeto por la cultura y con contexto, porque nos mola saber el “por qué” de lo que estamos viendo.",
      },
      {
        question: "¿Hay que vacunarse para viajar a Japón?",
        answer:
          "No hay vacunas obligatorias para viajar desde España. Japón es un país súper seguro y con estándares sanitarios muy altos.\n\nEso sí, siempre recomendamos tener las vacunas básicas al día y consultar con tu médico si tienes alguna duda. Mejor viajar tranquilo que viajar rayado.",
      },
      {
        question: "¿Puedo alargar el viaje por mi cuenta?",
        answer:
          "Claro que sí. Si te quedas con ganas de más (spoiler: pasa siempre), puedes ampliar antes o después del viaje en grupo.\n\nMás días en Tokio, perderte por zonas rurales, visitar alguna isla… te damos recomendaciones y tips para que lo montes fácil.\n\nLas noches extra y cambios en vuelos no están incluidos, pero te echamos un cable para que lo tengas todo claro.",
      },
      {
        question: "¿Necesito visado para este viaje?",
        answer:
          "Con pasaporte español no necesitas visado para estancias turísticas de hasta 90 días.\n\nSolo asegúrate de que tu pasaporte esté en vigor durante el viaje y listo. Japón te abre la puerta sin papeleo extra.",
      },
      {
        question: "¿Dónde dormimos?",
        answer:
          "Hoteles de 3–4 estrellas bien ubicados para aprovechar el tiempo al máximo.\n\nY sí, también incluimos alguna noche en ryokan tradicional, con futón y ese ambiente japonés que te hace sentir dentro de una peli.\n\nHabitaciones dobles o triples compartidas, con opción individual si está disponible.",
      },
      {
        question: "¿Es un viaje muy físico?",
        answer:
          "No necesitas ser un atleta olímpico. Caminaremos bastante (Japón se vive a pie), haremos visitas culturales y alguna ruta sencilla en la naturaleza.\n\nEl ritmo está pensado para disfrutar, no para sobrevivir.\n\nSi tienes alguna condición médica, cuéntanoslo antes y vemos cómo adaptarlo.",
      },
    ],
    availableDates: [
      {
        id: "jp-abr-25",
        startDate: "2026-04-04",
        endDate: "2026-04-14",
        spots: 8,
        totalSpots: 14,
        price: 1759,
        originalPrice: 1979,
      },
      {
        id: "jp-may-25",
        startDate: "2026-05-09",
        endDate: "2026-05-19",
        spots: 12,
        totalSpots: 14,
        price: 1659,
      },
      {
        id: "jp-nov-25",
        startDate: "2026-11-07",
        endDate: "2026-11-17",
        spots: 14,
        totalSpots: 14,
        price: 1759,
        originalPrice: 1979,
      },
    ],
  },
  {
    slug: "islandia",
    name: "Islandia",
    tagline: "Aurora boreal, cascadas y paisajes de otro planeta",
    heroImage: "/images/iceland/trip-iceland.jpg",
    galleryImages: [
      "/images/iceland/iceland-1.jpg",
      "/images/iceland/trip-iceland.jpg",
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
      "Laguna glaciar de Jokulsarlon",
      "Cascadas espectaculares",
    ],
    components: [
      { name: "Naturaleza", rating: 5 },
      { name: "Aventura", rating: 4.5 },
      { name: "Fotografía", rating: 5 },
      { name: "Relajación", rating: 3.5 },
      { name: "Gastronomía", rating: 3.5 },
      { name: "Playas", rating: 3.5 },
    ],
    description: [
      "Islandia es como visitar otro planeta sin salir de la Tierra. Geiseres, volcanes, glaciares, auroras boreales, cascadas imposibles y paisajes que quitan el aliento. Este viaje recorre la mitica Ring Road sur, donde cada curva esconde una postal. Prepara la camara y el asombro.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Bienvenidos a Islandia",
        description: [
          "Llegada a Keflavik. Traslado a Reikiavik con parada en Blue Lagoon para relajarnos en sus aguas termales azul turquesa. Check-in y cena de bienvenida.",
        ],
        highlights: ["Llegada Keflavik", "Blue Lagoon", "Reikiavik"],
      },
      {
        day: 2,
        title: "Circulo Dorado",
        description: [
          "La ruta mas famosa de Islandia: Thingvellir (donde se separan las placas tectonicas), Geysir (geiseres activos) y Gullfoss (la cascada dorada). Noche de caza de auroras.",
        ],
        highlights: ["Thingvellir", "Geysir", "Gullfoss", "Auroras"],
      },
      {
        day: 3,
        title: "Costa Sur - Cascadas",
        description: [
          "Ruta por la costa sur parando en las cascadas Seljalandsfoss (puedes caminar detras!) y Skogafoss. Llegada a Vik y su famosa playa de arena negra Reynisfjara.",
        ],
        highlights: ["Seljalandsfoss", "Skogafoss", "Playa negra Vik"],
      },
      {
        day: 4,
        title: "Glaciares y icebergs",
        description: [
          "Parque Nacional Vatnajokull con el glaciar mas grande de Europa. Laguna glaciar Jokulsarlon con sus icebergs flotantes. Diamond Beach donde el hielo brilla en la arena negra.",
        ],
        highlights: ["Vatnajokull", "Jokulsarlon", "Diamond Beach"],
      },
      {
        day: 5,
        title: "Trekking en glaciar",
        description: [
          "Experiencia unica: trekking guiado sobre el glaciar con crampones. Cuevas de hielo azul (segun condiciones). Tarde explorando la zona.",
        ],
        highlights: ["Trekking glaciar", "Crampones", "Cuevas de hielo"],
      },
      {
        day: 6,
        title: "Regreso a Reikiavik",
        description: [
          "Regreso pausado parando en lugares que nos quedaron pendientes o nuevos descubrimientos. Llegada a Reikiavik para noche libre en la capital.",
        ],
        highlights: ["Ruta escenica", "Paradas libres", "Noche Reikiavik"],
      },
      {
        day: 7,
        title: "Reikiavik y ballenas",
        description: [
          "Manana de avistamiento de ballenas en la bahia de Reikiavik. Tarde libre para explorar la ciudad: Hallgrimskirkja, puerto viejo, museos. Cena de despedida.",
        ],
        highlights: ["Ballenas", "Hallgrimskirkja", "Cena despedida"],
      },
      {
        day: 8,
        title: "Bless Islandia",
        description: [
          "Traslado al aeropuerto de Keflavik para el vuelo de regreso. Nos llevamos paisajes inolvidables y (con suerte) fotos de auroras.",
        ],
        highlights: ["Traslado aeropuerto", "Vuelo regreso"],
      },
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
      "Seguro de viaje",
    ],
    notIncluded: [
      "Vuelos internacionales",
      "Comidas no especificadas",
      "Actividades opcionales (moto nieve, buceo Silfra)",
      "Propinas",
    ],
    practicalInfo: {
      bestTime:
        "Septiembre a Marzo para auroras. Junio-Agosto sol de medianoche",
      visa: "No necesario (Espacio Schengen)",
      vaccines: "Ninguna requerida",
      currency:
        "Corona islandesa (ISK). 1€ ≈ 150 ISK. Se paga todo con tarjeta",
      language: "Islandes. Ingles practicamente universal",
      timeZone: "UTC+0 (1-2 horas menos que Espana)",
    },
    faqs: [
      {
        question: "Veremos auroras boreales seguro?",
        answer:
          "Las auroras dependen de la actividad solar y el clima. Tenemos 3 noches de caza y apps de prevision. La probabilidad en temporada es alta pero no garantizada.",
      },
      {
        question: "Hace mucho frio?",
        answer:
          "En invierno la media es -1 a 5 grados, con viento. Llevando capas y buen equipamiento se esta bien. Te mandamos lista de equipaje.",
      },
      {
        question: "Necesito experiencia para el glaciar?",
        answer:
          "No. El trekking es para todos los niveles con guia certificado y equipo proporcionado (crampones, piolet, arnes).",
      },
    ],
    availableDates: [
      {
        id: "is-feb-25",
        startDate: "2026-02-14",
        endDate: "2026-02-21",
        spots: 5,
        totalSpots: 12,
        price: 1469,
        originalPrice: 1699,
      },
      {
        id: "is-mar-25",
        startDate: "2026-03-07",
        endDate: "2026-03-14",
        spots: 8,
        totalSpots: 12,
        price: 1469,
        originalPrice: 1699,
      },
      {
        id: "is-sep-25",
        startDate: "2026-09-12",
        endDate: "2026-09-19",
        spots: 12,
        totalSpots: 12,
        price: 1369,
      },
    ],
  },
  {
    slug: "costa-rica",
    name: "Costa Rica",
    tagline: "Volcanes, selva y playas del Caribe",
    heroImage: "/images/costarica/trip-costarica.jpg",
    galleryImages: [
      "/images/costarica/trip-costarica.jpg",
      "/images/filipinas/trip-filipinas.jpg",
      "/images/thailand/trip-thailand.jpg",
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
      "Parque Nacional Manuel Antonio",
    ],
    components: [
      { name: "Naturaleza", rating: 5 },
      { name: "Aventura", rating: 5 },
      { name: "Playas", rating: 4.5 },
      { name: "Fauna", rating: 5 },
      { name: "Relajación", rating: 4 },
      { name: "Gastronomía", rating: 3.5 },
    ],
    description: [
      "Costa Rica es pura vida en estado puro. Este pequeno pais centroamericano concentra una biodiversidad increible: volcanes activos, selvas tropicales, playas caribenas y pacifico, y fauna unica. Desde el imponente Arenal hasta las tranquilas aguas de Puerto Viejo, viviremos la aventura y la naturaleza en su maxima expresion.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Pura Vida!",
        description: [
          "Llegada a San Jose. Recogida y traslado al hotel. Cena de bienvenida para conocer al grupo y briefing del viaje.",
        ],
        highlights: ["Llegada San Jose", "Cena bienvenida", "Conocer grupo"],
      },
      {
        day: 2,
        title: "Volcan Arenal",
        description: [
          "Viaje a La Fortuna, dominada por el majestuoso volcan Arenal. Tarde de puentes colgantes en la selva con vistas al volcan. Noche en aguas termales.",
        ],
        highlights: ["Volcan Arenal", "Puentes colgantes", "Aguas termales"],
      },
      {
        day: 3,
        title: "Aventura en Arenal",
        description: [
          "Dia de actividades: rapel en cascada, tubing por el rio o caminata por senderos de lava. Tarde libre para disfrutar de La Fortuna.",
        ],
        highlights: ["Rapel cascada", "Tubing", "Senderos volcanicos"],
      },
      {
        day: 4,
        title: "Monteverde",
        description: [
          "Viaje escenico a Monteverde, el bosque nuboso mas famoso del mundo. Tour nocturno para ver animales activos: ranas, serpientes, kinkajous.",
        ],
        highlights: ["Bosque nuboso", "Tour nocturno", "Fauna nocturna"],
      },
      {
        day: 5,
        title: "Reserva Monteverde",
        description: [
          "Caminata por la reserva con guia naturalista. Avistamiento de quetzales (con suerte), monos, perezosos y colibries. Tirolinas opcionales sobre el dosel.",
        ],
        highlights: ["Reserva natural", "Quetzal", "Tirolinas"],
      },
      {
        day: 6,
        title: "Hacia el Caribe",
        description: [
          "Cruzamos el pais hacia la costa caribe. Parada en el rio Pacuare para rafting nivel II-III entre selva y cascadas. Llegada a Puerto Viejo.",
        ],
        highlights: ["Rafting Pacuare", "Selva", "Puerto Viejo"],
      },
      {
        day: 7,
        title: "Caribe puro",
        description: [
          "Dia libre en las playas caribenas. Playa Cocles para surf, Punta Uva para snorkel, o simplemente hamaca con coco. Vibra reggae garantizada.",
        ],
        highlights: ["Playas Caribe", "Surf", "Vibra reggae"],
      },
      {
        day: 8,
        title: "Refugio de perezosos",
        description: [
          "Visita al santuario de perezosos de Cahuita. Snorkel en el Parque Nacional Cahuita con arrecifes y peces tropicales. Cena caribena.",
        ],
        highlights: [
          "Santuario perezosos",
          "Snorkel Cahuita",
          "Comida caribena",
        ],
      },
      {
        day: 9,
        title: "Ultimo dia Caribe",
        description: [
          "Manana libre. Viaje de regreso a San Jose. Cena de despedida en restaurante tipico con casado y cerveza Imperial.",
        ],
        highlights: ["Manana playa", "Regreso San Jose", "Cena despedida"],
      },
      {
        day: 10,
        title: "Hasta luego Costa Rica",
        description: [
          "Traslado al aeropuerto de San Jose para el vuelo de regreso. Pura vida para siempre!",
        ],
        highlights: ["Traslado aeropuerto", "Vuelo regreso"],
      },
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
      "Seguro de viaje",
    ],
    notIncluded: [
      "Vuelos internacionales",
      "Comidas no especificadas",
      "Actividades opcionales (tirolinas, buceo)",
      "Propinas",
    ],
    practicalInfo: {
      bestTime:
        "Diciembre a Abril (estacion seca). Septiembre-Octubre para tortugas",
      visa: "No necesario para estancias menores a 90 dias",
      vaccines: "Ninguna obligatoria. Recomendadas: Hepatitis A, Tetanos",
      currency: "Colon (CRC) y dolares americanos aceptados. 1€ ≈ 570 CRC",
      language: "Espanol (perfecto para practicar!)",
      timeZone: "UTC-6 (7-8 horas menos que Espana)",
    },
    faqs: [
      {
        question: "Veremos perezosos seguro?",
        answer:
          "Muy probable! Costa Rica tiene muchos perezosos y nuestros guias saben donde encontrarlos. En el santuario es garantizado.",
      },
      {
        question: "Necesito saber espanol?",
        answer:
          "Costa Rica es hispanohablante, asi que es una gran oportunidad para practicar. Nuestro coordinador traduce si es necesario.",
      },
      {
        question: "El rafting es peligroso?",
        answer:
          "Hacemos nivel II-III, apto para principiantes. Es emocionante pero seguro, con guias certificados y todo el equipo.",
      },
    ],
    availableDates: [
      {
        id: "cr-feb-25",
        startDate: "2026-02-07",
        endDate: "2026-02-16",
        spots: 7,
        totalSpots: 14,
        price: 1549,
      },
      {
        id: "cr-mar-25",
        startDate: "2026-03-14",
        endDate: "2026-03-23",
        spots: 10,
        totalSpots: 14,
        price: 1549,
      },
      {
        id: "cr-dic-25",
        startDate: "2026-12-05",
        endDate: "2026-12-14",
        spots: 14,
        totalSpots: 14,
        price: 1649,
      },
    ],
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getAllDestinationSlugs(): string[] {
  return destinations.map((d) => d.slug);
}
