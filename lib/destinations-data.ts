export interface Itinerary {
  day: number | number[];
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
  heroName: string;
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
  // faqs: { question: string; answer: string }[];
  faqsIntro?: string;
  availableDates: TripDate[];
  comingSoon?: boolean;
  en?: DestinationLocale;
}

export interface DestinationLocale {
  tagline?: string;
  duration?: string;
  highlights?: string[];
  components?: TripComponent[];
  description?: string[];
  itinerary?: Itinerary[];
  included?: string[];
  notIncluded?: string[];
  practicalInfo?: {
    bestTime?: string;
    visa?: string;
    vaccines?: string;
    currency?: string;
    language?: string;
    timeZone?: string;
  };
}

export const destinations: Destination[] = [
  {
    slug: "filipinas",
    name: "Filipinas",
    heroName: "Filipinas inmersiva",
    tagline:
      "Sumergiéndonos en Cebu, recorriendo Palawan y navegando por Coron",
    heroImage: "/images/filipinas/hero.jpg",
    galleryImages: [
      "/images/filipinas/filipinas-1.jpg",
      "/images/filipinas/filipinas-2.jpg",
      "/images/filipinas/filipinas-3.jpg",
      "/images/filipinas/filipinas-4.jpg",
      "/images/filipinas/filipinas-5.jpg",
      "/images/filipinas/filipinas-6.jpg",
      "/images/filipinas/filipinas-7.jpg",
      "/images/filipinas/filipinas-8.jpg",
      "/images/filipinas/filipinas-9.jpg",
      "/images/filipinas/filipinas-10.jpg",
      "/images/filipinas/filipinas-11.jpg",
      "/images/filipinas/filipinas-12.jpg",
      "/images/filipinas/filipinas-13.jpg",
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
      { name: "Relax", rating: 4 },
      { name: "Actividad física", rating: 3 },
      { name: "Naturaleza", rating: 4 },
      { name: "Cultural", rating: 2 },
      { name: "Gastronómico", rating: 3 },
      { name: "Nightlife", rating: 3 },
    ],
    description: [
      "¡Hola! Si buscas algo más que un simple tour, esta expedición a Filipinas es tu oportunidad para conectar de verdad con la raíz del archipiélago. Durante 14 días, nos olvidaremos de las rutas masificadas para apoyar al pequeño comercio local y vivir aventuras auténticas de la mano de un coordinador que será uno más del grupo",
      "Empezaremos fuerte con un bautismo de buceo en las aguas cristalinas de Moalboal y conquistando las vistas del Pico Osmeña, para luego vivir la magia de nadar con tiburones ballena en Bohol.",
      "Continuamos con Palawan, de las islas mas espectaculares de todo Filipinas, donde exploraremos El Nido y sus alrededores en barquitas típicas Filipinas.",
      "Pero el verdadero plato fuerte es nuestra expedición de 3 días en barco entre El Nido y Coron: una travesía épica donde dormiremos en islas remotas bajo las estrellas, fluyendo totalmente con el destino.",
      "Es el viaje perfecto para bajar pulsaciones, descubrir paraísos vírgenes y volver con la mochila llena de historias y amigos nuevos. ¡El paraíso real te está esperando!",
    ],
    itinerary: [
      {
        day: 1,
        title: "La vibrante capital",
        description: [
          "Tu aventura comienza aterrizando en la vibrante capital, donde te recibiremos en el aeropuerto para trasladarte a tu alojamiento. <strong>Manila es el choque cultural perfecto</strong> para empezar a entender la energía del archipiélago antes de nuestra primera noche en grupo.",
        ],
        highlights: [
          "Recogida en aeropuerto",
          "Primera noche en grupo",
          "Manila",
        ],
        image: "/images/filipinas/itinerary/1.jpg",
      },
      {
        day: 2,
        title: "Del bullicio al relax de Moalboal",
        description: [
          'Volamos temprano hacia <strong>Cebú</strong> y nos trasladamos a <strong>Moalboal</strong>, un rincón donde el tiempo parece detenerse. Es el lugar ideal para "bajar pulsaciones" y conectar con tus compañeros en nuestra <strong>cena grupal Filipina</strong>, perfecta para romper el hielo y empezar a conocernos más como grupo.',
        ],
        highlights: ["Vuelo a Cebú", "Moalboal", "Cena grupal filipina"],
        image: "/images/filipinas/itinerary/2.jpg",
      },
      {
        day: 3,
        title: "Inmersión en el azul y conquista del Pico Osmeña",
        description: [
          "Hoy descubrirás por qué Filipinas es un paraíso submarino. Disfrutaremos de un bautizo de buceo en el mejor lugar posible; si cuentas con cursos de buceo, serán dos <strong>Fun dives</strong> los que realicemos en este paraíso acuático. Tras un festín de comida local en la playa, cambiaremos las aletas por las zapatillas para subir al <strong>Pico Osmeña</strong>; sus colinas escarpadas ofrecen una de las <strong>vistas más irreales y fotogénicas de toda la isla</strong>.",
        ],
        highlights: [
          "Bautizo de buceo",
          "Fun dives",
          "Pico Osmeña",
          "Comida local en la playa",
        ],
        image: "/images/filipinas/itinerary/3.jpg",
      },
      {
        day: 4,
        title: "Encuentros sobrecogedores en Bohol",
        description: [
          "Cruzamos a la vecina <strong>Bohol</strong> para vivir una de las experiencias más emocionantes del planeta: nadar cerca de los majestuosos <strong>tiburones ballena</strong>. El día se completa explorando cascadas escondidas en un entorno de naturaleza exuberante, regresando a Cebú con la sensación de haber presenciado un <strong>espectáculo natural único</strong>.",
        ],
        highlights: [
          "Bohol",
          "Tiburones ballena",
          "Cascadas",
          "Naturaleza exuberante",
        ],
        image: "/images/filipinas/itinerary/4.jpg",
      },
      {
        day: 5,
        title: "Palawan, la última frontera",
        description: [
          "Volamos a <strong>Palawan</strong> y recorremos por carretera el camino hacia el norte desde Puerto Princesa. Buscaremos que el trayecto se haga menos pesado presenciando cascadas y pueblos tradicionales filipinos durante todo el viaje hacia <strong>El Nido</strong>, donde cenaremos y conoceremos la vibra nocturna que tiene este pequeño pueblo costero.",
        ],
        highlights: [
          "Vuelo a Palawan",
          "Puerto Princesa",
          "Cascadas",
          "El Nido",
        ],
        image: "/images/filipinas/itinerary/5.jpg",
      },
      {
        day: 6,
        title: 'El Nido a tu aire: adrenalina o "chill"',
        description: [
          "Amanecemos en un escenario de película donde tú eliges el ritmo: relajarte haciendo snorkel y jugando volleyball, o desafiar tus límites en una <strong>vía ferrata sobre acantilados de piedra caliza</strong>. Cerramos el día con una <strong>barbacoa en la playa y cervezas bajo las estrellas</strong>, la definición pura de la vida isleña.",
        ],
        highlights: [
          "Snorkel",
          "Volleyball",
          "Vía ferrata",
          "Barbacoa en la playa",
        ],
        image: "/images/filipinas/itinerary/6.jpg",
      },
      {
        day: 7,
        title: "Island Hopping y el espíritu filipino",
        description: [
          "Nos embarcamos en una ruta de <strong>Island Hopping</strong> que te dejará sin palabras, explorando lagunas de color turquesa imposible y playas de arena blanca. Para celebrar la belleza del entorno, terminaremos la jornada con una noche de <strong>karaoke</strong>, la actividad nacional por excelencia para reír y compartir con el grupo.",
        ],
        highlights: [
          "Island Hopping",
          "Lagunas turquesa",
          "Playas blancas",
          "Karaoke",
        ],
        image: "/images/filipinas/itinerary/7.jpg",
      },
      {
        day: [8, 9, 10],
        title: "La gran travesía hacia Corón",
        description: [
          'Iniciamos un <strong>crucero de 3 días</strong>, el verdadero corazón de la expedición, navegando desde El Nido hacia Corón. Dormiremos en <strong>islas remotas lejos de las rutas turísticas</strong>, viviendo la máxima expresión de libertad y "fluir con el destino" mientras descubrimos archipiélagos vírgenes donde muy pocos llegan.',
        ],
        highlights: [
          "Crucero 3 días",
          "El Nido → Corón",
          "Islas remotas",
          "Archipiélagos vírgenes",
        ],
        image: "/images/filipinas/itinerary/8.jpg",
      },
      {
        day: 11,
        title: "Los secretos sumergidos de Corón",
        description: [
          "Ya en <strong>Corón</strong>, dedicaremos el día a sus lagos interiores rodeados de murallas de caliza o a explorar barcos hundidos de la II Guerra Mundial en inmersiones opcionales. Este destino ofrece un <strong>paisaje dramático y submarino que no tiene rival en el mundo</strong>.",
        ],
        highlights: [
          "Corón",
          "Lagos interiores",
          "Naufragios WWII",
          "Inmersiones opcionales",
        ],
        image: "/images/filipinas/itinerary/11.jpg",
      },
      {
        day: 12,
        title: "Calma y raíces isleñas",
        description: [
          'Es el momento de bajar el ritmo con una tarde de "turisteo" pausado, ideal para apoyar al comercio local comprando artesanías y asimilar las experiencias vividas. Una jornada de <strong>conexión final con la paz de la isla</strong> antes de emprender el regreso.',
        ],
        highlights: ["Turismo local", "Artesanías", "Relax", "Comercio local"],
        image: "/images/filipinas/itinerary/12.jpeg",
      },
      {
        day: 13,
        title: "Regreso al punto de partida",
        description: [
          "Iniciamos el camino de vuelta desde Corón hacia <strong>Manila</strong>, donde pasaremos nuestra última noche juntos. Es el momento perfecto para una última cena grupal y recordar los mejores momentos de estos 14 días.",
        ],
        highlights: [
          "Corón → Manila",
          "Última cena grupal",
          "Mejores momentos",
        ],
        image: "/images/filipinas/itinerary/13.jpg",
      },
      {
        day: 14,
        title: "¡Hasta pronto, paraíso!",
        description: [
          "Traslado al aeropuerto para tu vuelo de regreso a España. Te vas con la mochila llena de historias, el alma renovada y un nuevo grupo de amigos con los que ya estarás planeando la próxima aventura Awayna.",
        ],
        highlights: [
          "Traslado al aeropuerto",
          "Vuelo a España",
          "Hasta pronto",
        ],
        image: "/images/filipinas/itinerary/14.jpg",
      },
    ],
    included: [
      "Recogida en el aeropuerto de Manila el día de la llegada",
      "Asistencia del coordinador Awayna durante todo el viaje",
      "Alojamiento en habitaciones compartidas (hoteles, guesthouses y noches en islas remotas)",
      "Cena grupal filipina en Moalboal",
      "Vuelo interno Manila–Cebú",
      "Vuelo interno Cebú–Puerto Princesa (Palawan)",
      "Vuelo interno Puerto Princesa–Manila",
      "Traslados terrestres durante todo el recorrido",
      "Bautizo de buceo en Moalboal (o dos fun dives con certificación)",
      "Trekking al Pico Osmeña",
      "Excursión a Bohol con snorkel junto a tiburones ballena y cascadas",
      "Tour completo de Island Hopping en El Nido",
      "Crucero de 3 días y 2 noches de El Nido a Corón",
      "Excursión en Corón por lagos interiores y acantilados de caliza",
      "Mochila Awayna",
      "Seguro médico durante todo el viaje",
      "Álbum videográfico del viaje",
    ],
    notIncluded: [
      "Vuelos de ida y vuelta desde España",
      "Comidas y bebidas no especificadas en el apartado anterior",
      "Inmersiones adicionales en Corón para buceadores certificados",
      "Cualquier otro servicio no especificado en el apartado anterior",
      "Actividades opcionales fuera del itinerario",
      "Fondo común.",
    ],
    practicalInfo: {
      bestTime: "Noviembre a Mayo (estacion seca)",
      visa: "No necesario para estancias menores a 30 dias",
      vaccines: "Ninguna obligatoria. Recomendadas: Hepatitis A/B, Tetanos",
      currency: "Peso Filipino (PHP). 1€ ≈ 60 PHP",
      language: "Filipino e Ingles (ampliamente hablado)",
      timeZone: "UTC+8 (7 horas mas que Espana)",
    },
    // faqs: [
    //   {
    //     question: "¿Qué tipo de experiencias viviremos en Filipinas?",
    //     answer:
    //       "Aquí el plan es claro: naturaleza en modo wow.\n\nIsland hopping entre islas de agua cristalina, snorkel sobre arrecifes llenos de vida, playas que parecen irreales y atardeceres que bajan el volumen del mundo. También descubriremos pueblos locales, mercados y la parte más auténtica del país, más allá de la postal.\n\nNo es solo tumbarse al sol. Es explorar, saltar al agua, navegar y sentir que estás en un rincón del planeta donde todo vibra diferente.",
    //   },
    //   {
    //     question: "¿Hay que vacunarse para viajar a Filipinas?",
    //     answer:
    //       "No hay vacunas obligatorias para viajeros desde España.\n\nSe suelen recomendar Hepatitis A y tétanos, y dependiendo de la duración o zonas que se visiten, pueden aconsejar otras. Lo mejor es consultar con un centro de vacunación internacional unas semanas antes del viaje para valorar tu caso concreto.",
    //   },
    //   {
    //     question: "¿Puedo alargar el viaje por mi cuenta?",
    //     answer:
    //       "Sí, y en Filipinas siempre apetece quedarse más.\n\nPuedes añadir días en otra isla, hacer un curso de buceo, quedarte más tiempo en El Nido o descubrir zonas menos conocidas. Te ayudamos con recomendaciones y logística, pero las noches extra y cambios en vuelos no están incluidos en el precio del viaje.",
    //   },
    //   {
    //     question: "¿Necesito visado para este viaje?",
    //     answer:
    //       "Con pasaporte español no necesitas visado para estancias turísticas de hasta 30 días.\n\nSolo necesitas pasaporte en vigor con al menos 6 meses de validez y billete de salida del país. Aun así, recomendamos revisar la normativa oficial antes de viajar por si hubiera cambios.",
    //   },
    //   {
    //     question: "¿Qué tipo de alojamientos utilizamos?",
    //     answer:
    //       "Hoteles y resorts boutique bien ubicados, priorizando comodidad, limpieza y ambiente viajero.\n\nEn algunas islas los alojamientos son más sencillos, pero siempre seleccionados para que estés cómodo y cerca de lo importante: el mar.\n\nHabitaciones dobles o triples compartidas, con opción de suplemento individual si está disponible.",
    //   },
    //   {
    //     question: "¿Es un viaje muy físico?",
    //     answer:
    //       "No necesitas ser deportista, pero sí tener ganas de moverte.\n\nHabrá días activos con excursiones en barco, snorkel, caminatas suaves y traslados entre islas. El ritmo está pensado para disfrutar, no para agotarte.\n\nSi tienes alguna condición médica o limitación, coméntanoslo antes de reservar para valorar cómo adaptarlo.",
    //   },
    // ],
    faqsIntro:
      "Nos vamos a Filipinas versión AWAYNA: agua turquesa, selva salvaje, barcas que parecen sacadas de un sueño y ese grupo que empieza siendo desconocido y acaba brindando descalzo en la arena.",
    en: {
      tagline: "Diving into Cebu, exploring Palawan and sailing through Coron",
      duration: "14 days",
      highlights: [
        "Kayaking through the secret lagoons of El Nido",
        "Island hopping among the most beautiful islands",
        "Snorkeling on pristine coral reefs",
        "Night in an overwater bungalow",
        "Trekking to hidden waterfalls",
        "Sunsets from traditional boats",
      ],
      components: [
        { name: "Relaxation", rating: 4 },
        { name: "Physical activity", rating: 3 },
        { name: "Nature", rating: 4 },
        { name: "Culture", rating: 2 },
        { name: "Food & drinks", rating: 3 },
        { name: "Nightlife", rating: 3 },
      ],
      description: [
        "Hey! If you're looking for more than just a standard tour, this Philippines expedition is your chance to truly connect with the soul of the archipelago. Over 14 days, we'll skip the overcrowded routes, support local businesses and live authentic adventures guided by a coordinator who's just one of the gang.",
        "We kick things off strong with a scuba diving baptism in the crystal-clear waters of Moalboal and conquering the views from Osmena Peak, before experiencing the magic of swimming with whale sharks in Bohol.",
        "Next up is Palawan, one of the most spectacular islands in all of the Philippines, where we'll explore El Nido and its surroundings on traditional Filipino bangka boats.",
        "But the real showstopper is our 3-day boat expedition between El Nido and Coron: an epic crossing where we'll sleep on remote islands under the stars, completely going with the flow.",
        "It's the perfect trip to unwind, discover untouched paradises and come back with a backpack full of stories and new friends. Real paradise is waiting for you!",
      ],
      itinerary: [
        {
          day: 1,
          title: "The Vibrant Capital",
          description: [
            "Your adventure begins as you land in the vibrant capital, where we'll greet you at the airport and transfer you to your accommodation. <strong>Manila is the perfect cultural shock</strong> to start feeling the energy of the archipelago before our first night together as a group.",
          ],
          highlights: ["Airport pickup", "First group night", "Manila"],
        },
        {
          day: 2,
          title: "From the City Buzz to Moalboal's Relaxed Vibes",
          description: [
            'We fly early to <strong>Cebu</strong> and head to <strong>Moalboal</strong>, a corner where time seems to stand still. It\'s the perfect place to unwind and connect with your travel companions over a <strong>Filipino group dinner</strong>, great for breaking the ice and getting to know each other.',
          ],
          highlights: ["Flight to Cebu", "Moalboal", "Filipino group dinner"],
        },
        {
          day: 3,
          title: "Diving Deep and Conquering Osmena Peak",
          description: [
            "Today you'll discover why the Philippines is an underwater paradise. We'll enjoy a scuba diving baptism in the best possible setting; if you're already certified, we'll do two <strong>Fun Dives</strong> in this aquatic paradise. After a feast of local beach food, we swap fins for sneakers to climb <strong>Osmena Peak</strong>; its rugged hills offer some of the <strong>most surreal and photogenic views on the entire island</strong>.",
          ],
          highlights: ["Scuba baptism", "Fun dives", "Osmena Peak", "Local beach lunch"],
        },
        {
          day: 4,
          title: "Breathtaking Encounters in Bohol",
          description: [
            "We cross over to neighboring <strong>Bohol</strong> for one of the most thrilling experiences on the planet: swimming near the majestic <strong>whale sharks</strong>. The day wraps up exploring hidden waterfalls in a lush natural setting, returning to Cebu with the feeling of having witnessed a <strong>one-of-a-kind natural spectacle</strong>.",
          ],
          highlights: ["Bohol", "Whale sharks", "Waterfalls", "Lush nature"],
        },
        {
          day: 5,
          title: "Palawan, the Last Frontier",
          description: [
            "We fly to <strong>Palawan</strong> and drive northward from Puerto Princesa. We make the journey more enjoyable with stops at waterfalls and traditional Filipino villages on the way to <strong>El Nido</strong>, where we'll have dinner and soak up the nighttime vibes of this charming coastal town.",
          ],
          highlights: ["Flight to Palawan", "Puerto Princesa", "Waterfalls", "El Nido"],
        },
        {
          day: 6,
          title: "El Nido Your Way: Adrenaline or Chill",
          description: [
            "We wake up to a movie-set backdrop where you choose the pace: relax with snorkeling and beach volleyball, or push your limits on a <strong>via ferrata over limestone cliffs</strong>. We close the day with a <strong>beach barbecue and beers under the stars</strong>, the purest definition of island life.",
          ],
          highlights: ["Snorkeling", "Beach volleyball", "Via ferrata", "Beach barbecue"],
        },
        {
          day: 7,
          title: "Island Hopping and the Filipino Spirit",
          description: [
            "We set out on an <strong>Island Hopping</strong> route that will leave you speechless, exploring turquoise lagoons and white sandy beaches. To celebrate the beauty of our surroundings, we end the day with a <strong>karaoke</strong> night, the national activity par excellence for laughing and bonding with the group.",
          ],
          highlights: ["Island Hopping", "Turquoise lagoons", "White beaches", "Karaoke"],
        },
        {
          day: [8, 9, 10],
          title: "The Great Crossing to Coron",
          description: [
            "We set off on a <strong>3-day cruise</strong>, the true heart of the expedition, sailing from El Nido to Coron. We'll sleep on <strong>remote islands far from tourist routes</strong>, living the ultimate expression of freedom and going with the flow as we discover virgin archipelagos that very few people ever reach.",
          ],
          highlights: ["3-day cruise", "El Nido → Coron", "Remote islands", "Virgin archipelagos"],
        },
        {
          day: 11,
          title: "The Submerged Secrets of Coron",
          description: [
            "Now in <strong>Coron</strong>, we dedicate the day to its inland lakes surrounded by limestone walls, or exploring WWII shipwrecks with optional dives. This destination offers a <strong>dramatic landscape above and below the water that is unrivaled anywhere in the world</strong>.",
          ],
          highlights: ["Coron", "Inland lakes", "WWII wrecks", "Optional dives"],
        },
        {
          day: 12,
          title: "Island Calm and Roots",
          description: [
            "Time to slow down with a relaxed afternoon of exploring, perfect for supporting local shops, picking up handcrafts and absorbing all the experiences we've had. A day of <strong>final connection with the peace of the island</strong> before heading home.",
          ],
          highlights: ["Local tourism", "Handicrafts", "Relaxation", "Local shops"],
        },
        {
          day: 13,
          title: "Return to the Starting Point",
          description: [
            "We begin the journey back from Coron to <strong>Manila</strong>, where we'll spend our last night together. The perfect moment for a final group dinner and reliving the best moments of these 14 days.",
          ],
          highlights: ["Coron → Manila", "Final group dinner", "Best memories"],
        },
        {
          day: 14,
          title: "So Long, Paradise!",
          description: [
            "Transfer to the airport for your return flight home. You leave with a backpack full of stories, a renewed soul and a new group of friends you'll already be planning the next Awayna adventure with.",
          ],
          highlights: ["Airport transfer", "Flight home", "So long"],
        },
      ],
      included: [
        "Airport pickup in Manila on arrival day",
        "Awayna coordinator support throughout the entire trip",
        "Accommodation in shared rooms (hotels, guesthouses and nights on remote islands)",
        "Filipino group dinner in Moalboal",
        "Domestic flight Manila–Cebu",
        "Domestic flight Cebu–Puerto Princesa (Palawan)",
        "Domestic flight Puerto Princesa–Manila",
        "Ground transfers throughout the journey",
        "Scuba diving baptism in Moalboal (or two fun dives with certification)",
        "Osmena Peak trekking",
        "Bohol excursion with whale shark snorkeling and waterfalls",
        "Complete Island Hopping tour in El Nido",
        "3-day/2-night cruise from El Nido to Coron",
        "Coron excursion to inland lakes and limestone cliffs",
        "Awayna backpack",
        "Medical insurance for the entire trip",
        "Trip video album",
      ],
      notIncluded: [
        "Return flights from Spain",
        "Meals and drinks not specified above",
        "Additional dives in Coron for certified divers",
        "Any other service not specified above",
        "Optional activities outside the itinerary",
        "Common fund.",
      ],
      practicalInfo: {
        bestTime: "November to May (dry season)",
        visa: "Not required for stays under 30 days",
        vaccines: "None required. Recommended: Hepatitis A/B, Tetanus",
        currency: "Philippine Peso (PHP). €1 ≈ 60 PHP",
        language: "Filipino and English (widely spoken)",
        timeZone: "UTC+8 (7 hours ahead of Spain)",
      },
    },
    availableDates: [
      {
        id: "fil-nov-26",
        startDate: "2026-11-30",
        endDate: "2026-12-13",
        spots: 12,
        totalSpots: 16,
        price: 1735,
      },
    ],
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    heroName: "Vietnam must",
    tagline:
      "Desde Hanoi, recorriendo Ninh Binh, la provincia de la costura y Ha giang loop. ",
    heroImage: "/images/vietnam/hero.jpg",
    galleryImages: [
      "/images/vietnam/vietnam-1.jpg",
      "/images/vietnam/vietnam-3.jpg",
      "/images/vietnam/vietnam-4.jpg",
      "/images/vietnam/vietnam-5.jpg",
      "/images/vietnam/vietnam-6.jpg",
      "/images/vietnam/vietnam-7.jpg",
      "/images/vietnam/vietnam-8.jpg",
      "/images/vietnam/vietnam-9.jpg",
      "/images/vietnam/vietnam-10.jpg",
      "/images/vietnam/vietnam-11.jpg",
      "/images/vietnam/vietnam-12.jpg",
      "/images/vietnam/vietnam-14.jpg",
      "/images/vietnam/vietnam-15.jpg",
      "/images/vietnam/vietnam-16.jpg",
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
          "Aterrizamos en Hanoi y, desde el primer momento, empezamos a sentir que estamos lejos de casa. El equipo de Awayna nos espera en el aeropuerto para organizarnos, conocernos y poner rumbo al alojamiento. Tras instalarnos y dejar las mochilas, salimos a dar nuestro primer paseo por la ciudad. Calles llenas de vida, motos que parecen bailar entre el tráfico, aromas intensos de comida callejera y una energía que no se parece a nada que hayas vivido antes. Cerramos el día con nuestra primera cena en grupo, rompiendo el hielo y empezando a construir lo que será una experiencia compartida muy potente.",
        ],
        highlights: ["Llegada a Hanoi", "Cena en grupo", "Paseo por la ciudad"],
        image: "/images/vietnam/itinerary/1.jpg",
      },
      {
        day: 2,
        title: "Hanoi sin filtros, con Hung",
        description: [
          "Hoy nos adentramos en la Hanoi más auténtica de la mano de Hung, nuestro guía local y cómplice en esta aventura. Caminamos por mercados tradicionales, templos escondidos y barrios donde la vida sigue su propio ritmo, lejos del turismo masivo. Hung nos contará historias reales del país, anécdotas personales y detalles que ayudan a entender Vietnam desde dentro, no desde un libro. Por la noche, Awayna invita a cenar en un restaurante reconocido por la Guía Michelin, donde brindamos por el grupo y disfrutamos de una gastronomía que sorprende en cada plato.",
        ],
        highlights: [
          "Guía local Hung",
          "Mercados tradicionales",
          "Cena Michelin",
        ],
        image: "/images/vietnam/itinerary/2.jpg",
      },
      {
        day: 3,
        title: "Ninh Binh: el dragón despierta",
        description: [
          "Dejamos la ciudad y ponemos rumbo a Ninh Binh. Nuestro objetivo es el famoso mirador del Dragón, un lugar que exige esfuerzo, pero recompensa con creces. Subimos escalón a escalón, sintiendo el primer reto físico del viaje, hasta alcanzar una panorámica que deja sin palabras: montañas de piedra caliza, ríos serpenteantes y un paisaje que parece irreal. Por la tarde, cambiamos el ritmo con un trekking suave entre templos antiguos y senderos tranquilos, conectando con la historia del lugar y con una Vietnam mucho más serena.",
        ],
        highlights: ["Mirador del Dragón", "Trekking", "Templos antiguos"],
        image: "/images/vietnam/itinerary/3.jpg",
      },
      {
        day: 4,
        title: "Barcas, calma y vida local",
        description: [
          "Nos levantamos temprano para disfrutar de un paseo en barca tradicional por uno de los escenarios naturales más impresionantes del viaje. Navegamos entre formaciones rocosas y arrozales, en un entorno que parece sacado de una película (y sí, aquí se rodó <em>King Kong</em>). Visitamos pequeños pueblos locales y aprendemos sobre la mezcla cultural que define esta región. Es un día para bajar revoluciones, observar y dejarse llevar. Por la tarde, nos acercamos a la zona más moderna de Hoa Lu, perfecta para seguir explorando la cocina callejera vietnamita.",
        ],
        highlights: ["Barca tradicional", "Pueblos locales", "Hoa Lu"],
        image: "/images/vietnam/itinerary/4.jpg",
      },
      {
        day: 5,
        title: "Hacia el norte más salvaje",
        description: [
          "Hoy toca carretera. Dejamos atrás los paisajes tranquilos para avanzar hacia el norte más remoto del país. Durante el trayecto, el entorno cambia poco a poco y sentimos que nos estamos adentrando en una Vietnam menos conocida y más auténtica. Llegamos por la noche a la zona de Ha Giang, donde descansamos y nos preparamos mentalmente para la experiencia que viene. Mañana empieza algo grande.",
        ],
        highlights: ["Viaje a Ha Giang", "Norte remoto", "Cambio de paisajes"],
        image: "/images/vietnam/itinerary/5.jpg",
      },
      {
        day: [6, 7, 8],
        title: "Ha Giang Loop: el corazón del viaje",
        description: [
          "Arranca la legendaria Ha Giang Loop, una de las rutas más espectaculares del sudeste asiático y el verdadero corazón de esta expedición. Durante tres días recorremos puertos de montaña imposibles, valles escondidos y aldeas de minorías étnicas donde el tiempo parece haberse detenido. Cada curva regala paisajes brutales y cada parada es una lección de humildad. Dormimos en alojamientos sencillos, auténticos y llenos de alma, apoyando directamente a las comunidades locales y compartiendo momentos que se quedan grabados para siempre.",
        ],
        highlights: [
          "Ha Giang Loop",
          "Montañas",
          "Aldeas étnicas",
          "Alojamientos locales",
        ],
        image: "/images/vietnam/itinerary/6.jpg",
      },
      {
        day: 9,
        title: "Sapa y el abrazo de Mama Sumi",
        description: [
          "Tras completar la última etapa de la loop, ponemos rumbo a Sapa. Allí nos espera Mama Sumi, una mujer que representa como pocas la hospitalidad del norte de Vietnam. Nos instalamos en su homestay tradicional, rodeados de montañas y silencio. Por la noche compartimos una cena casera, preparada con ingredientes locales y mucho cariño. No es solo una cena, es una experiencia humana profunda que conecta al grupo de una forma especial.",
        ],
        highlights: ["Sapa", "Mama Sumi", "Homestay", "Cena casera"],
        image: "/images/vietnam/itinerary/9.jpg",
      },
      {
        day: 10,
        title: "Caminando entre arrozales infinitos",
        description: [
          "Acompañados por Mama Sumi, realizamos un trekking a través de valles, terrazas de arroz y pueblos tradicionales cercanos a Sapa. Caminamos por senderos que usan los locales en su día a día, lejos de rutas turísticas masificadas. Cada paso nos acerca más a la tierra, a la forma de vida de las etnias del norte y a una manera distinta de entender el mundo.",
        ],
        highlights: [
          "Trekking arrozales",
          "Pueblos tradicionales",
          "Vida local",
        ],
        image: "/images/vietnam/itinerary/10.jpg",
      },
      {
        day: 11,
        title: "Del techo de Indochina a la noche de Hanoi",
        description: [
          "Nos despedimos de la preciosa SaPa, pero no antes visitar el famoso Fansipan, el pico más alto de Indochina, su increíble teleférico nos subirá hasta el mismísimo pico. Tras esta experiencia, regresamos a Hanoi. Por la noche celebramos todo lo vivido en Beer Street, el lugar perfecto para brindar, reír y compartir historias alrededor de cerveza fría y comida callejera vietnamita.",
        ],
        highlights: [
          "Fansipan",
          "Teleférico",
          "Beer Street",
          "Regreso a Hanoi",
        ],
        image: "/images/vietnam/itinerary/11.jpg",
      },
      {
        day: 12,
        title: "Ha Long Bay: un paisaje que se queda contigo",
        description: [
          "Hoy visitamos uno de los lugares más icónicos del planeta, una de las siete maravillas naturales del mundo. Navegamos por la Bahía de Ha Long, rodeados de miles de formaciones kársticas que emergen del agua color esmeralda. Es un día para mirar, respirar y dejarse impresionar. El paisaje habla por sí solo, tras un precioso atardecer comenzamos nuestra vuelta a Hanoi.",
        ],
        highlights: ["Ha Long Bay", "Formaciones kársticas", "Atardecer"],
        image: "/images/vietnam/itinerary/12.jpg",
      },
      {
        day: 13,
        title: "Últimos pasos por Hanoi",
        description: [
          "Nuestro último día lo dedicamos a perdernos una vez más por Hanoi. Visitamos mercados, tiendas locales y rincones que se nos quedaron pendientes. Vamos a conocer la famosa Train Street, donde nos tomaremos un respiro directamente a metros de la via del tren. Es el momento ideal para comprar recuerdos con sentido, apoyar a los artesanos locales y sentarnos a asimilar todo lo vivido. Cerramos el viaje con una última cena en grupo, mochilas listas y muchas sonrisas cómplices.",
        ],
        highlights: [
          "Train Street",
          "Mercados",
          "Cena final",
          "Compras locales",
        ],
        image: "/images/vietnam/itinerary/13.jpg",
      },
      {
        day: 14,
        title: "Nos despedimos de Vietnam",
        description: [
          "Traslado al aeropuerto y vuelo de regreso a España. Nos vamos con la mochila llena de historias, aprendizajes y momentos compartidos. Vietnam queda atrás, pero el vínculo creado con el grupo y la esencia de este viaje nos acompañarán mucho tiempo. Y, como siempre pasa con Awayna, el próximo destino ya empieza a llamar.",
        ],
        highlights: ["Vuelo de regreso", "Despedida", "Historias compartidas"],
        image: "/images/vietnam/itinerary/14.jpg",
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
      "Seguro médico durante todo el viaje",
      "Álbum videográfico del viaje",
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
    // faqs: [
    //   {
    //     question: "¿Qué tipo de experiencias viviremos en Vietnam?",
    //     answer:
    //       "Vietnam es contraste puro. Caos bonito en Hanoi, arrozales infinitos en el norte, bahías de película y ciudades con historia en cada esquina.\n\nDormiremos en barco en la Bahía de Ha Long, recorreremos pueblos entre montañas, probaremos street food que te vuela la cabeza y entenderemos la historia del país desde dentro.\n\nNo es solo ver Vietnam. Es sentirlo. Con contexto, con guía local y con respeto por la cultura que nos abre la puerta.",
    //   },
    //   {
    //     question: "¿Hay que vacunarse para viajar a Vietnam?",
    //     answer:
    //       "No hay vacunas obligatorias para viajeros desde España.\n\nSe suelen recomendar Hepatitis A y tétanos, y dependiendo del tipo de viaje, duración o zonas rurales, podrían sugerirse otras. Lo mejor es consultar en un centro de vacunación internacional unas semanas antes de salir para viajar tranquilo.",
    //   },
    //   {
    //     question: "¿Puedo alargar el viaje por mi cuenta?",
    //     answer:
    //       "Sí, y es muy buena idea.\n\nPuedes quedarte más días en el norte explorando más trekkings, bajar al sur para descubrir el Delta del Mekong o terminar en alguna isla como Phu Quoc.\n\nTe damos recomendaciones y tips para que lo organices fácil, pero las noches extra y cambios en vuelos no están incluidos en el precio del viaje.",
    //   },
    //   {
    //     question: "¿Necesito visado para este viaje?",
    //     answer:
    //       "Actualmente, para pasaporte español, Vietnam permite la entrada sin visado para estancias cortas (según normativa vigente en el momento del viaje).\n\nLas condiciones pueden cambiar, así que siempre recomendamos revisar la información oficial antes de salir.\n\nNecesitarás pasaporte con al menos 6 meses de validez desde la fecha de entrada.",
    //   },
    //   {
    //     question: "¿Qué tipo de alojamientos utilizamos?",
    //     answer:
    //       "Hoteles de 3–4 estrellas bien ubicados y seleccionados por comodidad, limpieza y buen ambiente.\n\nTambién incluimos experiencias especiales, como noche en barco en Ha Long o alojamientos con encanto en zonas rurales.\n\nHabitaciones dobles o triples compartidas, con opción de suplemento individual si está disponible.",
    //   },
    //   {
    //     question: "¿Es un viaje muy físico?",
    //     answer:
    //       "No necesitas estar en modo ultramaratón.\n\nIncluye caminatas suaves, algún trekking sencillo entre arrozales, paseos en barco y días activos, pero está pensado para personas sanas con condición física normal.\n\nSi tienes alguna condición médica específica, avísanos antes de reservar para adaptarlo en lo posible.",
    //   },
    // ],
    en: {
      tagline: "From Hanoi, through Ninh Binh, the embroidery province and the Ha Giang Loop",
      duration: "13 days",
      highlights: [
        "Overnight cruise on Ha Long Bay",
        "Motorbike through the rice paddies of Ninh Binh",
        "Vietnamese cooking class in Hoi An",
        "Cu Chi Tunnels",
        "Mekong floating markets",
        "Street food tour in Hanoi",
      ],
      components: [
        { name: "Relaxation", rating: 2 },
        { name: "Physical activity", rating: 4 },
        { name: "Nature", rating: 5 },
        { name: "Culture", rating: 5 },
        { name: "Food & drinks", rating: 4 },
        { name: "Nightlife", rating: 3 },
      ],
      description: [
        "Vietnam always delivers with its mix of vibes — the contrast between Hanoi's wild traffic and the unexpected peace of Ninh Binh, where time slows down and a traditional boat glides silently between limestone mountains and endless rice paddies.",
        "Vietnam means getting lost for three days on the Ha Giang Loop, crossing impossible mountain passes and villages where life beats to a different rhythm. It means waking up in Sapa surrounded by mist and green terraces, sharing a home-cooked dinner at a homestay and understanding that travel is also about connecting.",
        "This trip is designed for those who want more than pretty landscapes. Here we hike, sail, live alongside local communities and let ourselves be moved by an intense, resilient and deeply human culture.",
        "Over 14 days we'll explore northern Vietnam combining adventure, stunning nature and moments of calm that nourish the soul. You're not just coming to discover Vietnam. You're coming to feel it.",
      ],
      itinerary: [
        {
          day: 1,
          title: "First Contact with Vietnam: Welcome to Hanoi",
          description: [
            "We land in Hanoi and from the very first moment, we start feeling how far from home we are. The Awayna team is waiting at the airport to get us organized, introduce ourselves and head to the accommodation. Once settled and freshened up, we head out for our first stroll through the city. Lively streets, motorbikes weaving through traffic, intense street food aromas and energy like nothing you've experienced before. We end the day with our first group dinner, breaking the ice and starting to build what will be a powerful shared experience.",
          ],
          highlights: ["Arrival in Hanoi", "Group dinner", "City stroll"],
        },
        {
          day: 2,
          title: "Hanoi Unfiltered, with Hung",
          description: [
            "Today we dive into the most authentic side of Hanoi alongside Hung, our local guide and partner in adventure. We walk through traditional markets, hidden temples and neighborhoods where life follows its own rhythm, far from mass tourism. Hung shares real stories of the country, personal anecdotes and details that help us understand Vietnam from the inside, not from a guidebook. That evening, Awayna treats us to dinner at a Michelin-recognized restaurant, where we toast to the group and enjoy cuisine that surprises with every dish.",
          ],
          highlights: ["Local guide Hung", "Traditional markets", "Michelin dinner"],
        },
        {
          day: 3,
          title: "Ninh Binh: The Dragon Awakens",
          description: [
            "We leave the city and head to Ninh Binh. Our goal is the famous Dragon viewpoint, a place that demands effort but rewards generously. We climb step by step, feeling the first physical challenge of the trip, until we reach a panorama that leaves us speechless: limestone mountains, winding rivers and a landscape that looks unreal. In the afternoon we shift gears with a gentle trek through ancient temples and quiet trails, connecting with the history of the place and a much more serene side of Vietnam.",
          ],
          highlights: ["Dragon Viewpoint", "Trekking", "Ancient temples"],
        },
        {
          day: 4,
          title: "Boats, Calm and Local Life",
          description: [
            "We wake up early to enjoy a traditional boat ride through one of the most impressive natural settings of the trip. We navigate between rock formations and rice paddies, in a landscape that feels like it was taken from a movie set (yes, King Kong was filmed here). We visit small local villages and learn about the cultural mix that defines this region. It's a day to slow down, observe and go with the flow. In the afternoon we head to the more modern area of Hoa Lu, perfect for more exploration of Vietnamese street food.",
          ],
          highlights: ["Traditional boat ride", "Local villages", "Hoa Lu"],
        },
        {
          day: 5,
          title: "Heading to the Wild North",
          description: [
            "Today is road day. We leave the tranquil landscapes behind and push north to the more remote parts of the country. Along the way, the scenery gradually shifts and we feel like we're entering a less-known, more authentic Vietnam. We arrive at night in the Ha Giang area, where we rest and mentally prepare for what's to come. Tomorrow something big starts.",
          ],
          highlights: ["Drive to Ha Giang", "Remote north", "Changing landscapes"],
        },
        {
          day: [6, 7, 8],
          title: "Ha Giang Loop: The Heart of the Trip",
          description: [
            "The legendary Ha Giang Loop begins, one of the most spectacular routes in Southeast Asia and the true heart of this expedition. Over three days we ride over impossible mountain passes, hidden valleys and ethnic minority villages where time seems to have stopped. Every bend gifts brutal landscapes and every stop is a lesson in humility. We sleep in simple, authentic, soul-filled accommodation, directly supporting local communities and sharing moments that stay with you forever.",
          ],
          highlights: ["Ha Giang Loop", "Mountains", "Ethnic villages", "Local accommodation"],
        },
        {
          day: 9,
          title: "Sapa and the Embrace of Mama Sumi",
          description: [
            "After completing the last leg of the loop, we head to Sapa. There Mama Sumi is waiting for us, a woman who embodies northern Vietnamese hospitality like few others. We settle into her traditional homestay, surrounded by mountains and silence. That night we share a home-cooked dinner, made with local ingredients and lots of love. It's not just a dinner — it's a deep human experience that connects the group in a very special way.",
          ],
          highlights: ["Sapa", "Mama Sumi", "Homestay", "Home-cooked dinner"],
        },
        {
          day: 10,
          title: "Walking Through Endless Rice Fields",
          description: [
            "Accompanied by Mama Sumi, we trek through valleys, rice terraces and traditional villages near Sapa. We walk the paths that locals use every day, far from crowded tourist trails. Every step brings us closer to the land, to the way of life of the northern ethnic groups and to a different way of understanding the world.",
          ],
          highlights: ["Rice field trekking", "Traditional villages", "Local life"],
        },
        {
          day: 11,
          title: "From the Roof of Indochina to Hanoi at Night",
          description: [
            "We say goodbye to beautiful Sapa, but not before visiting the famous Fansipan, the highest peak in Indochina — its incredible cable car takes us all the way to the summit. After this experience, we return to Hanoi. That night we celebrate everything we've lived at Beer Street, the perfect spot to toast, laugh and share stories over cold beer and Vietnamese street food.",
          ],
          highlights: ["Fansipan", "Cable car", "Beer Street", "Return to Hanoi"],
        },
        {
          day: 12,
          title: "Ha Long Bay: A Landscape That Stays With You",
          description: [
            "Today we visit one of the most iconic places on the planet, one of the seven natural wonders of the world. We sail through Ha Long Bay, surrounded by thousands of karst formations rising from emerald water. It's a day to gaze, breathe and be amazed. The landscape speaks for itself — after a beautiful sunset, we begin our return to Hanoi.",
          ],
          highlights: ["Ha Long Bay", "Karst formations", "Sunset"],
        },
        {
          day: 13,
          title: "Last Steps Through Hanoi",
          description: [
            "Our last day is spent getting lost in Hanoi one more time. We visit markets, local shops and spots we missed earlier. We'll discover the famous Train Street, where we'll take a breather just meters from the train tracks. It's the perfect time to buy meaningful souvenirs, support local artisans and sit down to absorb everything we've experienced. We close the trip with a final group dinner, bags packed and lots of knowing smiles.",
          ],
          highlights: ["Train Street", "Markets", "Final dinner", "Local shopping"],
        },
        {
          day: 14,
          title: "Goodbye, Vietnam",
          description: [
            "Transfer to the airport and flight back home. We leave with a backpack full of stories, lessons and shared moments. Vietnam is behind us, but the bond forged with the group and the essence of this trip will stay with us for a long time. And as always happens with Awayna, the next destination is already calling.",
          ],
          highlights: ["Return flight", "Farewell", "Shared memories"],
        },
      ],
      included: [
        "Airport pickup in Hanoi on arrival day (international flights not included)",
        "Coordinator support throughout the entire trip",
        "Accommodation in shared rooms throughout the trip (hotels and traditional homestay)",
        "Breakfasts included throughout the itinerary",
        "Welcome dinner at a Michelin-recognized restaurant in Hanoi",
        "Local guide in Hanoi to discover the city from the inside",
        "Private transport throughout the route: Hanoi–Ninh Binh–Ha Giang–Sapa–Hanoi–Ha Long–Hanoi",
        "Complete Ha Giang Loop experience over 3 days with local riders, accommodation, transport, dinners, etc.",
        "Traditional boat ride in Ninh Binh through rice paddies and karst formations",
        "Trekking through temples and nature trails in Ninh Binh",
        "Traditional homestay in Sapa",
        "Home-cooked traditional dinner in Sapa with local produce for two nights",
        "Trekking through rice paddies and ethnic villages in Sapa with local guide",
        "Ha Long Bay excursion with boat ride included",
        "Awayna backpack",
        "Medical insurance for the entire trip",
        "Trip video album",
      ],
      notIncluded: [
        "Return flights from Spain.",
        "Meals and drinks not specified above.",
        "Any other service not specified above.",
        "Cable car to Fansipan (a high-altitude activity we leave for the bravest).",
        "Common fund.",
      ],
      practicalInfo: {
        bestTime: "March to May and September to November",
        visa: "E-visa required. Easy online process (approx. €25)",
        vaccines: "None required. Recommended: Hepatitis A/B, Tetanus, Typhoid",
        currency: "Vietnamese Dong (VND). €1 ≈ 26,000 VND",
        language: "Vietnamese. English in tourist areas",
        timeZone: "UTC+7 (6 hours ahead of Spain)",
      },
    },
    availableDates: [
      {
        id: "vn-oct-26-1",
        startDate: "2026-10-01",
        endDate: "2026-10-13",
        spots: 12,
        totalSpots: 16,
        price: 1339,
      },
      {
        id: "vn-oct-26-2",
        startDate: "2026-10-14",
        endDate: "2026-10-27",
        spots: 12,
        totalSpots: 16,
        price: 1339,
      },
    ],
  },
  {
    slug: "tailandia",
    name: "Tailandia",
    heroName: "Tailandia esencial",
    tagline: "Bangkok, islas paradisiacas y el Norte del Pais.",
    heroImage: "/images/thailand/hero.jpg",
    galleryImages: [
      "/images/thailand/thailand-1.jpg",
      "/images/thailand/thailand-2.jpg",
      "/images/thailand/thailand-7.jpg",
      "/images/thailand/thailand-4.jpg",
      "/images/thailand/thailand-5.jpg",
      "/images/thailand/thailand-6.jpg",
      "/images/thailand/thailand-8.jpeg",
      "/images/thailand/thailand-9.jpg",
      "/images/thailand/thailand-10.jpg",
      "/images/thailand/thailand-11.jpg",
      "/images/thailand/thailand-12.jpg",
      "/images/thailand/thailand-13.jpg",
      "/images/thailand/thailand-14.jpg",
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
      { name: "Relax", rating: 3 },
      { name: "Actividad física", rating: 3 },
      { name: "Gastronómico", rating: 4 },
      { name: "Cultural", rating: 5 },
      { name: "Naturaleza", rating: 5 },
      { name: "Nightlife", rating: 4 },
    ],
    description: [
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
      "Recogida en el aeropuerto de Bangkok el día de la llegada (los vuelos desde tu ciudad de origen no están incluidos, ¡pero nosotros estaremos esperándote en Bangkok a cualquier hora del día!).",
      "Asistencia del coordinador durante todo el viaje.",
      "Alojamiento en habitaciones compartidas durante todo el viaje.",
      "Comida de bienvenida en un restaurante galardonado por la Guía Michelin.",
      "Entrada y tasa turística para la visita del Gran Palace de Bangkok.",
      "Vuelos internos: Bangkok–Krabi, Krabi–Chiang Mai, Chiang Rai–Bangkok.",
      "Tour en barca tradicional tailandesa por las islas alrededor de Krabi.",
      "Ferry ida y vuelta hacia las islas Phi Phi.",
      "Bautizo de buceo en uno de los mejores lugares de Tailandia.",
      "Barco privado alrededor de todas las playas de Phi Phi.",
      "Transporte interno ida y vuelta desde Krabi al Parque Nacional de Khao Sok.",
      "Tour alrededor del lago Cheow Lan.",
      "Descenso en flotadores en medio de la jungla.",
      "Cena temática tailandesa en Chiang Mai.",
      "Transporte hacia Chiang Rai desde Chiang Mai.",
      "Entrada y tasas turísticas al Templo Blanco de Chiang Rai.",
      "Mochila Awayna.",
    ],
    notIncluded: [
      "Vuelos ida y vuelta desde España.",
      "Comidas y bebidas no especificadas.",
      "Cualquier otro servicio no especificado en el apartado anterior.",
      "Cualquier actividad que le apetezca a todo el grupo.",
      "Fondo común.",
    ],
    practicalInfo: {
      bestTime: "Noviembre a Marzo (temporada seca)",
      visa: "No necesario para estancias menores a 30 dias",
      vaccines: "Ninguna obligatoria. Recomendadas: Hepatitis A/B, Tetanos",
      currency: "Baht (THB). 1€ ≈ 38 THB",
      language: "Thai. Ingles turistico ampliamente hablado",
      timeZone: "UTC+7 (6 horas mas que Espana)",
    },
    // faqs: [
    //   {
    //     question: "¿Cómo es el santuario de elefantes?",
    //     answer:
    //       "Visitamos un santuario ético donde no se permite montar a los elefantes ni espectáculos con ellos. Pasarás el día observándolos, ayudando a preparar su comida y, si las condiciones lo permiten, acompañándolos mientras se bañan, siempre guiados por el equipo local y respetando su espacio.",
    //   },
    //   {
    //     question: "¿Hay que vacunarse para viajar a Tailandia?",
    //     answer:
    //       "No hay vacunas obligatorias para la mayoría de viajeros que lleguen desde España, pero se recomiendan Hepatitis A y tétanos; otras como Hepatitis B o fiebre tifoidea dependen de la duración y el tipo de viaje. Lo ideal es pedir cita en un centro de vacunación internacional al menos 4–6 semanas antes de la salida para que valoren tu caso concreto.",
    //   },
    //   {
    //     question: "¿Puedo extender el viaje en las islas al terminar la ruta?",
    //     answer:
    //       "Sí, puedes alargar tu estancia por tu cuenta antes o después del viaje en grupo, por ejemplo quedándote más días en las islas del sur. Te ayudaremos con recomendaciones de zonas, alojamientos y traslados internos, pero las noches extra y cambios en los vuelos internacionales no están incluidos en el precio del viaje.",
    //   },
    //   {
    //     question: "¿Necesito visado para este viaje de 13 días?",
    //     answer:
    //       "Para personas con pasaporte español no se necesita visado para este viaje, ya que la estancia es inferior al periodo de exención, que actualmente permite entrar sin visado hasta 60 días. Solo necesitas tu pasaporte con al menos 6 meses de validez desde la fecha de regreso y el billete de salida del país.",
    //   },
    //   {
    //     question: "¿Qué tipo de alojamientos utilizamos?",
    //     answer:
    //       "Dormirás en hoteles de 3–4 estrellas y algún resort seleccionado por ubicación, limpieza y buen ambiente para viajeros jóvenes. Siempre priorizamos alojamientos bien situados para aprovechar el tiempo y con habitaciones compartidas en régimen doble o triple, salvo que elijas suplemento de habitación individual si está disponible.",
    //   },
    //   {
    //     question: "¿Es un viaje muy físico? ¿Hace falta estar en gran forma?",
    //     answer:
    //       "No es necesario estar en una forma física excelente; el viaje incluye caminatas suaves, alguna excursión en barco y actividades como snorkel o bautizo de buceo aptas para personas sanas sin experiencia previa. Si tienes alguna condición médica específica, es importante que nos lo indiques antes de reservar para adaptar en lo posible tu experiencia.",
    //   },
    // ],
    en: {
      tagline: "Bangkok, paradise islands and the north of the country",
      duration: "13 days",
      highlights: [
        "Golden temples of Bangkok",
        "Damnoen Saduak floating market",
        "Ethical elephant sanctuary",
        "Thai cooking class",
        "Phi Phi Islands by boat",
        "Full moon party (optional)",
      ],
      components: [
        { name: "Relaxation", rating: 3 },
        { name: "Physical activity", rating: 3 },
        { name: "Food & drinks", rating: 4 },
        { name: "Culture", rating: 5 },
        { name: "Nature", rating: 5 },
        { name: "Nightlife", rating: 4 },
      ],
      description: [
        "Thailand is considered one of our top destinations because of its incredible versatility. If you've never been, this trip is perfect for discovering a little bit of every part of the country — making the most of 13 days and reaching places the typical tourist never gets to.",
        "This paradise has incredible food, a warm and welcoming culture that makes you feel at home, and a mix of surreal landscapes ranging from tropical jungle to movie-set beaches.",
        "You'll discover all of this with us and your new group of friends, with great energy and a genuine desire to go deep into how people live here — discovering the culture from the inside as we travel from north to south through the country's most breathtaking settings.",
        "Are you ready?",
      ],
      itinerary: [
        {
          day: 1,
          title: "Welcome to Paradise: Gastronomic Tour Through Chinatown and Khao San Road",
          description: [
            "Welcome to Thailand! 🇹🇭 When you land in Bangkok, we'll be waiting for you at the airport, so from the very first moment you can relax and go with the flow. Once the whole group is together, we head into the big city. After checking in and a refreshing shower, we head straight to the heart of Bangkok to kick off the trip properly: sampling Thai street food. We visit Chinatown, one of the most vibrant and authentic neighborhoods of the capital, famous for its street stalls, intense aromas and traditional Chinese and Thai recipes. After enjoying all kinds of Asian flavors, we hop in a tuk tuk toward Khao San Road, Bangkok's most lively street and meeting point for travelers from all over the world. The night continues… as long as the body holds up.",
          ],
          highlights: ["Bangkok arrival", "Chinatown", "Khao San Road", "Street food"],
        },
        {
          day: 2,
          title: "Bangkok Express",
          description: [
            "We wake up with energy to discover the most iconic temples and monuments of the Thai capital. We visit the impressive Grand Royal Palace, the former residence of the Siamese kings; the Reclining Buddha (Wat Pho), one of the largest in the country; and the quirky amulet markets, where we get lost among stalls full of history and symbolism. At midday, we enjoy local cuisine at a Michelin Guide-recognized restaurant, an experience that shows why Bangkok is one of the world's culinary capitals. We close with a bubble coffee and head to the airport to fly south to Krabi, the gateway to the Andaman Sea.",
          ],
          highlights: ["Grand Royal Palace", "Wat Pho", "Amulet markets", "Michelin restaurant"],
        },
        {
          day: 3,
          title: "First Day of Paradise Beaches in Railay",
          description: [
            "First day in the south and it's time to enjoy the heat, the sea and the nature. We board a traditional Thai boat with our trusted captain to explore the spectacular Andaman Sea coastline. Crystal-clear waters, snorkeling, limestone cliffs and movie-set beaches await us. After an unforgettable sunset, we return to Ao Nang, one of the liveliest areas in Southeast Asia. Clean and rested, it's the perfect time for a traditional Thai massage, a relaxed dinner and local desserts to recharge.",
          ],
          highlights: ["Railay Beach", "Snorkeling", "Andaman Sea", "Traditional massage"],
        },
        {
          day: 4,
          title: "Scuba Baptism Amid Colorful Coral",
          description: [
            "Good morning! Today we head to the famous Phi Phi Islands, one of Thailand's iconic landmarks. A very special experience awaits: a scuba diving baptism in some of the clearest waters in the country. No experience needed — our professional team will be with you every step of the way so you can safely enjoy the coral reefs and marine life. After the dive, we attend a Muay Thai fight, the Thai national sport. And for those with energy to spare, the night continues in what many call the 'Thai Ibiza'.",
          ],
          highlights: ["Phi Phi Islands", "Scuba baptism", "Muay Thai", "Nightlife"],
        },
        {
          day: 5,
          title: "Movie-Set Beaches on Koh Phi Phi",
          description: [
            "If yesterday left you wanting more, today we go further. We tour all the hidden corners of Koh Phi Phi on a private boat: beaches roamed by monkeys, natural turquoise lagoons and unreal landscapes. World-famous movies have been filmed here, and you'll understand why. After a perfect day, we return to Krabi to rest. We know it's hard to say goodbye to places like this… but the adventure goes on.",
          ],
          highlights: ["Koh Phi Phi", "Turquoise lagoons", "Maya Bay", "Private boat"],
        },
        {
          day: 6,
          title: "Journey Into the Jungle",
          description: [
            "We head to one of the most special places of the trip: Khao Sok National Park, one of the oldest and most extensive tropical forests in Southeast Asia. Pure jungle, wild nature and the possibility of crossing paths with monkeys, snakes or even elephants. Here everything is in the hands of destiny. Get ready to discover one of those places that stays with you forever.",
          ],
          highlights: ["Khao Sok", "Jungle", "Wildlife", "Adventure"],
        },
        {
          day: 7,
          title: "Khao Sok National Park and Cheow Lan Lake",
          description: [
            "We swap saltwater for the freshwater of the spectacular Cheow Lan Lake, surrounded by karst mountains draped in jungle. We explore the area like true adventurers, visiting hidden jungle temples with respect and curiosity, learning about the lives of Buddhist monks. Afterwards, we sail the lake with our local guide Peeranut, soaking in one of the most relaxing landscapes of the trip.",
          ],
          highlights: ["Cheow Lan Lake", "Jungle temples", "Buddhist monks", "Boat tour"],
        },
        {
          day: 8,
          title: "Farewell to Southern Thailand",
          description: [
            "Before saying goodbye to the south, we do some gentle rafting — a relaxed and fun experience drifting down a river surrounded by lush vegetation. A perfect activity for unwinding and soaking in the surroundings at leisure. After lunch and a refreshing shower, we head to Krabi airport to fly north.",
          ],
          highlights: ["Rafting", "Lush vegetation", "Flight north"],
        },
        {
          day: 9,
          title: "Good Morning, Chiang Mai!",
          description: [
            "We wake up in Chiang Mai, our favorite place of the trip. Culture, tradition, food and hospitality are multiplied here a hundredfold. We visit an ethical elephant sanctuary, learning how these animals are protected and cared for responsibly (optional activity). Those who prefer a different experience have equally special alternatives available. Back in the city, we explore some of the north's most impressive temples, very different from those in the south. That evening, dinner is included to try the famous Khao Soi, the north's signature dish… fair warning: you'll fall in love.",
          ],
          highlights: ["Chiang Mai", "Elephant sanctuary", "Northern temples", "Khao Soi"],
        },
        {
          day: 10,
          title: "Natural Hot Springs and the Road to Chiang Rai",
          description: [
            "We continue exploring Chiang Mai and visit one of its most iconic temples, with panoramic views over the whole city. After the visit, we head to Chiang Rai, but first stop to relax at natural hot springs — the perfect plan to decompress. In the afternoon, arrival and overnight in magical Chiang Rai.",
          ],
          highlights: ["Panoramic temple", "Natural hot springs", "Chiang Rai"],
        },
        {
          day: 11,
          title: "Chiang Rai's Famous Temples",
          description: [
            "Chiang Rai is small but culturally fascinating. We visit its most iconic temples: the Blue Temple (Wat Rong Suea Ten), a stunning blue building housing a Buddha over six meters tall inside. Then we head to the famous White Temple (Wat Rong Khun), the city's symbol, where we step inside to marvel at its decoration. Afterwards we visit the Great Buddha of Chiang Rai, a representation of Guanyin, the goddess of compassion in Buddhism. The seated statue stands 40 meters tall, is built on a lotus flower and can be seen from several kilometers away. We close the day with a traditional Thai massage and a good dinner.",
          ],
          highlights: ["Blue Temple", "White Temple", "Great Buddha", "Traditional massage"],
        },
        {
          day: 12,
          title: "Meeting the Buddhist Monks",
          description: [
            "Last day in the north and one of the most special. We get up early to make an offering to the monks, a simple but deeply meaningful gesture. We share time with them at a remote temple and then continue the day with a local family, enjoying simple, authentic food cooked with love. An experience that confirms this trip is unlike any other.",
          ],
          highlights: ["Monk offering", "Remote temple", "Local family", "Authentic food"],
        },
        {
          day: 13,
          title: "So Long, Thailand!",
          description: [
            "We return to Bangkok to connect with our international flights. Saying goodbye is never easy, but we leave with memories, friendships and the certainty that this won't be our last time in Thailand. For those with a later flight or flying the next day, there's the option of spending one last night in Bangkok with the group.",
          ],
          highlights: ["Return to Bangkok", "Farewell", "International flights"],
        },
      ],
      included: [
        "Airport pickup in Bangkok on arrival day (flights from your home city not included, but we'll be waiting in Bangkok at any time of day!).",
        "Coordinator support throughout the entire trip.",
        "Accommodation in shared rooms throughout the trip.",
        "Welcome meal at a Michelin Guide-awarded restaurant.",
        "Entry and tourist fees for the Grand Palace Bangkok.",
        "Domestic flights: Bangkok–Krabi, Krabi–Chiang Mai, Chiang Rai–Bangkok.",
        "Traditional Thai boat tour around the islands near Krabi.",
        "Round-trip ferry to the Phi Phi Islands.",
        "Scuba diving baptism in one of Thailand's best spots.",
        "Private boat around all of Phi Phi's beaches.",
        "Round-trip transport from Krabi to Khao Sok National Park.",
        "Tour around Cheow Lan Lake.",
        "Float tubing descent in the middle of the jungle.",
        "Thai themed dinner in Chiang Mai.",
        "Transport to Chiang Rai from Chiang Mai.",
        "Entry and tourist fees to the White Temple in Chiang Rai.",
        "Awayna backpack.",
      ],
      notIncluded: [
        "Return flights from Spain.",
        "Meals and drinks not specified above.",
        "Any other service not specified above.",
        "Any activity the whole group decides to add.",
        "Common fund.",
      ],
      practicalInfo: {
        bestTime: "November to March (dry season)",
        visa: "Not required for stays under 30 days",
        vaccines: "None required. Recommended: Hepatitis A/B, Tetanus",
        currency: "Thai Baht (THB). €1 ≈ 38 THB",
        language: "Thai. Tourist English widely spoken",
        timeZone: "UTC+7 (6 hours ahead of Spain)",
      },
    },
    availableDates: [
      {
        id: "th-oct-26",
        startDate: "2026-10-31",
        endDate: "2026-11-13",
        spots: 14,
        totalSpots: 14,
        price: 1498,
      },
      {
        id: "th-nov-26",
        startDate: "2026-11-15",
        endDate: "2026-11-27",
        spots: 14,
        totalSpots: 14,
        price: 1498,
      },
    ],
  },
  {
    slug: "japon",
    name: "Japón",
    heroName: "Japón de contrastes",
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
      "Tokio: tradición y futuro",
      "Kioto y sus geishas",
      "Monte Fuji (según temporada)",
      "Hiroshima y Miyajima",
      "Ceremonia del té",
      "Noche en ryokan tradicional",
    ],
    components: [
      { name: "Relax", rating: 2 },
      { name: "Actividad física", rating: 3 },
      { name: "Naturaleza", rating: 3 },
      { name: "Cultural", rating: 5 },
      { name: "Gastronómico", rating: 5 },
      { name: "Nightlife", rating: 2 },
    ],
    description: [
      "Si lo tuyo es viajar de verdad y no solo visitar sitios, este viaje a Japón es para ti.",
      "Durante 13 noches nos sumergimos en un país de contrastes brutales, donde la tradición y el futuro conviven en la misma calle. Aquí no venimos a correr ni a tachar lugares: venimos a vivir Japón desde dentro, en grupo, con calma y con mucha curiosidad.",
      "Empezamos en Tokio, dejándonos llevar por su energía infinita, sus barrios imposibles y su caos perfectamente ordenado. De ahí damos un giro total hacia la naturaleza: costa salvaje en la península de Izu, onsen, silencio y paisajes volcánicos, antes de encontrarnos cara a cara con el mítico Fuji.",
      "Seguimos rumbo a Kansai, donde Osaka nos recibe con su espíritu callejero y su amor por la buena comida, Kyoto nos regala templos, rituales y paseos que parecen detenidos en el tiempo, y Nara nos baja aún más el ritmo entre naturaleza y espiritualidad.",
      "Este es un viaje para explorar sin prisas, para compartir momentos cotidianos que se vuelven especiales, para perderse por calles secundarias y entender por qué Japón se siente tanto como se recuerda.",
      "Japón no se explica.",
      "Japón se vive.",
      "Y mejor, juntos.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Aterrizamos juntos",
        description: [
          "Llegamos a Tokio y empieza oficialmente la aventura. Entre mochilas, primeras miradas y esa mezcla de cansancio y emoción, sentimos que algo grande está arrancando.",
          "Dejamos las cosas en el alojamiento y salimos a caminar sin rumbo fijo, simplemente para empezar a entender dónde estamos. Luces, orden, sonidos distintos, carteles que no entendemos y, aun así, todo fluye.",
          "Cena sencilla para romper el hielo, primeras conversaciones largas y esa sensación de ‘ya estamos aquí’. Hoy no se trata de hacer mucho, sino de empezar a vivirlo juntos.",
        ],
        highlights: ["Llegada Tokio", "Hotel Shinjuku", "Shibuya crossing"],
        image: "/images/japan/itinerary/1.jpg",
      },
      {
        day: 2,
        title: "Del Japón tradicional al Tokio que vibra de la mano de Matsu",
        description: [
          "Amanecemos en Tokio, y ponemos rumbo a Asakusa, uno de los barrios más tradicionales de la ciudad. Caminamos hacia el templo Senso-ji entre incienso, farolillos y pequeños puestos en la calle Nakamise. Probamos dulces típicos y dejamos que el ambiente nos envuelva.",
          "Por la tarde conoceremos a nuestro amigo Matsu, autóctono de Tokio, que sera quien nos acompañe en nuestra ruta por la Japón que viven los locales. Cuando cae la noche, Tokio cambia de piel. Pantallas gigantes, luces de neón, barrios que laten con fuerza. Nos dejamos llevar por ese caos perfectamente organizado que solo existe aquí.",
          "Un día de contrastes brutales que nos recuerda por qué Japón es tan especial.",
        ],
        highlights: ["Senso-ji", "Nakamise", "Matsu", "Tokio nocturno"],
        image: "/images/japan/itinerary/2.jpg",
      },
      {
        day: 3,
        title: "Tokio sin filtros",
        description: [
          "Hoy exploramos el lado más creativo de la ciudad. Harajuku nos muestra su estética libre, diferente, sin reglas.",
          "Después cruzamos al santuario Meiji, donde el ruido desaparece y todo se vuelve verde y silencioso. Ese contraste constante es parte del encanto. En los alrededores, disfrutaremos de uno de los mejores ramen de la ciudad, perfecto para coger fuerzas y seguir con el día.",
          "Por la tarde Shibuya, su cruce mítico y sus miradores. Nos mezclamos con la gente local, paseamos sin prisa y cerramos la noche deleitando sushi y sake, celebrando que el grupo ya empieza a sentirse como equipo.",
        ],
        highlights: [
          "Harajuku",
          "Santuario Meiji",
          "Ramen",
          "Shibuya",
          "Sushi y sake",
        ],
        image: "/images/japan/itinerary/3.jpg",
      },
      {
        day: 4,
        title: "Japón natural en la península de Izu",
        description: [
          "Dejamos atrás la gran ciudad y nos movemos hacia la península de Izu. El paisaje cambia por completo: costa volcánica, acantilados, aire más limpio y menos turistas.",
          "Caminamos junto al océano, paramos en miradores y disfrutamos de un Japón más tranquilo y auténtico.",
          "Por la tarde nos alojamos en un ryokan tradicional. Tatamis, puertas correderas y onsen para relajar cuerpo y mente. Cena japonesa elaborada y conversación pausada. Este día nos invita a bajar revoluciones. Verás que con solo una sonrisa es posible entender perfectamente lo que la otra persona te quiere decir.",
        ],
        highlights: ["Península de Izu", "Costa volcánica", "Ryokan", "Onsen"],
        image: "/images/japan/itinerary/4.jpg",
      },
      {
        day: 5,
        title: "El encuentro con el Fuji",
        description: [
          "Seguimos hacia la zona de Kawaguchiko. El plan del día gira en torno al paisaje: lago Ashi, paseos tranquilos y la posibilidad de ver el Monte Fuji asomando imponente si el cielo nos regala la vista.",
          "Es un día contemplativo, muy visual, perfecto para seguir conectando con el entorno, observando como funciona la vida en Japón fuera de la ciudad.",
          "Por la noche, más onsen y descanso. Japón también se vive en silencio.",
        ],
        highlights: ["Kawaguchiko", "Lago Ashi", "Monte Fuji", "Onsen"],
        image: "/images/japan/itinerary/5.jpeg",
      },
      {
        day: 6,
        title: "Osaka en modo calle: sabores y neón",
        description: [
          "Llegamos a Osaka y se nota el cambio de energía. Aquí todo es más directo, más callejero, más espontáneo.",
          "Salimos hacia Dotonbori y nos dejamos guiar por el olor a comida y los carteles gigantes iluminando el canal. En este barrio donde no falta gente, buscaremos una pastelería donde puedas abrir estómago probando las deliciosas tartas de queso que preparan aquí, para seguir deleitándonos con los típicos takoyaki, okonomiyaki y todo lo que se cruce en el camino. Spoiler: no has probado cosa así en tu vida.",
          "Osaka se disfruta compartiendo platos y riendo sin mirar el reloj.",
        ],
        highlights: [
          "Osaka",
          "Dotonbori",
          "Tartas de queso",
          "Takoyaki",
          "Okonomiyaki",
        ],
        image: "/images/japan/itinerary/6.jpg",
      },
      {
        day: 7,
        title: "Osaka auténtica",
        description: [
          "Empezamos el día en el Castillo de Osaka y paseamos por sus jardines, donde podemos encontrar jóvenes universitarios que tocan instrumentos para pagar sus estudios, locales paseando y disfrutando de esos estanques llenos de truchas coloridas. Después nos vamos al mercado Kuromon para seguir descubriendo sabores locales.",
          "Alrededor de estos mercados visitamos algo que caracteriza mucho a Japón: sus pequeñas pero eficientes cuchillerías, donde podremos aprender más sobre cómo fabrican, afilan y decoran los que son considerados los mejores cuchillos del mundo.",
          "Por la tarde exploramos Shinsekai, un barrio con carácter propio, menos pulido y más real, donde descubriréis lo que es un Izakaya: bar tradicional japonés donde las apariencias no importan, de lo que trata es de comer y beber alrededor de una barra, donde el dueño del local sonríe y elige a su gusto el menú de la noche.",
        ],
        highlights: [
          "Castillo de Osaka",
          "Mercado Kuromon",
          "Cuchillerías",
          "Shinsekai",
          "Izakaya",
        ],
        image: "/images/japan/itinerary/7.jpeg",
      },
      {
        day: 8,
        title: "El Japón que imaginabas",
        description: [
          "Llegamos a Kyoto y el ritmo baja automáticamente. Paseamos por Gion, entre casas tradicionales y calles que parecen detenidas en el tiempo. Si eres de los que les gusta meterse en el papel, te dejamos que alquiles un kimono tradicional y pasees por aquí con él, nosotros nos encargamos de inmortalizar este momento.",
          "Aquí no hay prisas. Solo caminar, observar y dejar que la ciudad se revele poco a poco, estamos en la zona más auténtica de Japón, por lo que prepárate para quedarte boquiabierto en varias ocasiones.",
        ],
        highlights: ["Kyoto", "Gion", "Kimono", "Casas tradicionales"],
        image: "/images/japan/itinerary/8.jpg",
      },
      {
        day: 9,
        title: "Templos y postales reales",
        description: [
          "¡Buenos días Kyoto! Amanecemos con las deportivas puestas, es día de subir hacia Fushimi Inari, donde nos perderemos bajo sus miles de torii rojos. Tras salir prácticamente locos por las vistas desde lo alto de Kyoto e inmortalizar pedazo de maravilla, seguimos hacia Higashiyama, zona inmensa que abarca varios templos Patrimonio Mundial de la UNESCO y los paisajes urbanos más impecables de Kioto.",
          "Es uno de esos días que sabes que recordarás durante años.",
          "¿Qué os parece acabar el día cenando en uno de los restaurantes con más prestigio de Kyoto? Pues sí, a nosotros nos encanta comer, y si has venido a Japón con Awayna, esperamos que a ti también, por lo que creemos que no hay mejor opción para acabar un día perfecto que con buena comida.",
        ],
        highlights: [
          "Fushimi Inari",
          "Torii rojos",
          "Higashiyama",
          "UNESCO",
          "Cena en Kyoto",
        ],
        image: "/images/japan/itinerary/9.jpg",
      },
      {
        day: 10,
        title: "Naturaleza y libertad",
        description: [
          "Exploramos Arashiyama y su famoso bosque de bambú. Visitamos el Pabellón Dorado, reflejándose en el agua como una escena irreal, intentaremos grabar vuestra cara al verlo por primera vez, porque va a ser un espectáculo.",
          "Por la tarde hay tiempo libre para perderse, descansar o repetir ese rincón que te llamó la atención. Kyoto invita a disfrutar sin agenda rígida.",
        ],
        highlights: ["Arashiyama", "Bosque de bambú", "Pabellón Dorado"],
        image: "/images/japan/itinerary/10.jpg",
      },
      {
        day: 11,
        title: "Nara y su energía tranquila",
        description: [
          "Nos desplazamos a Nara. Paseamos por su parque entre ciervos que caminan libres y a sus anchas por toda la zona. Aprovechando el transporte hacia Nara, visitaremos el imponente templo Todai-ji, con su increíble Buda gigante en el interior, para añadirle más valor cultural aún a ese gigante templo.",
          "Es un día relajado, verde y muy equilibrado. Ideal para cerrar la parte más espiritual y cultural del viaje.",
        ],
        highlights: ["Nara", "Parque de ciervos", "Todai-ji", "Buda gigante"],
        image: "/images/japan/itinerary/11.jpg",
      },
      {
        day: 12,
        title: "Volvemos diferentes",
        description: [
          "Regresamos a Tokio en tren bala. La ciudad es la misma, pero nosotros ya no.",
          "Tarde libre para compras, barrios pendientes o simplemente pasear recordando todo lo vivido.",
          "Cena de despedida, brindis y anécdotas que ya forman parte del viaje.",
        ],
        highlights: ["Tren bala", "Tokio", "Compras", "Cena de despedida"],
        image: "/images/japan/itinerary/12.jpg",
      },
      {
        day: 13,
        title: "Hasta pronto, Japón",
        description: [
          "Último paseo, último café y momento de hacer balance.",
          "Nos vamos con la mochila llena de recuerdos, fotos y conexiones reales. Este viaje no termina aquí. Se queda con nosotros.",
          "Nuestro coordinador se queda durante todo este día en Tokio, por lo que tenéis la opción de coger el vuelo de vuelta durante este día, o si te apetece exprimir aún más los rincones de la inmensa Tokio, puedes quedarte hasta el día siguiente.",
        ],
        highlights: ["Tokio", "Despedida", "Recuerdos"],
        image: "/images/japan/itinerary/13.jpg",
      },
    ],
    included: [
      "Recogida en el aeropuerto de Tokio el día de la llegada",
      "Asistencia del coordinador Awayna durante todo el viaje",
      "Álbum videográfico del viaje",
      "Alojamiento en habitaciones compartidas (hoteles, ryokan y guesthouses)",
      "Cena grupal de bienvenida en Tokio",
      "Guía local para adentrarnos en lo más auténtico de la capital",
      "Japan Trail Pass 7 días para recorrer Japón en tren bala",
      "Resto de billetes de tren necesarios para llegar a los destinos",
      "Visitas guiadas a barrios y templos en todos los destinos",
      "Excursión a la península de Izu con caminatas por costa volcánica",
      "Paseos con vistas del Monte Fuji y alrededores",
      "Visita al Castillo de Osaka y mercado Kuromon",
      "Tour guiado de Kyoto: Gion, Arashiyama, Bosque de Bambú y Pabellón Dorado",
      "Excursión a Nara con parque de ciervos y entradas al templo Todai-ji",
      "Cena de despedida en Tokio",
      "Seguro médico durante todo el viaje",
      "Mochila Awayna",
    ],
    notIncluded: [
      "Vuelos de ida y vuelta desde España",
      "Comidas y bebidas no especificadas en el apartado anterior",
      "Entradas adicionales o actividades opcionales fuera del itinerario",
      'Todo lo que no se menciona en la sección "Qué está incluido"',
      "Fondo común.",
    ],
    practicalInfo: {
      bestTime: "Marzo-Mayo (sakura) y Octubre-Noviembre (momiji)",
      visa: "No necesario para estancias menores a 90 días",
      vaccines: "Ninguna obligatoria ni recomendada específica",
      currency: "Yen (JPY). 1€ ≈ 160 JPY. Japón usa mucho efectivo",
      language: "Japonés. Inglés limitado pero buena señalización",
      timeZone: "UTC+9 (8 horas más que España)",
    },
    // faqs: [
    //   {
    //     question: "¿Qué tipo de experiencias viviremos en Japón?",
    //     answer:
    //       "Aquí no venimos solo a hacer fotos, venimos a entender el lugar.\n\nTemplos al amanecer, barrios tradicionales donde el tiempo va más lento y calles futuristas que parecen otro planeta.\n\nPodrás pasear con kimono por calles históricas, probar comida local en mercados auténticos y dormir en un ryokan tradicional para sentir Japón desde dentro. Siempre con respeto por la cultura y con contexto, porque nos mola saber el “por qué” de lo que estamos viendo.",
    //   },
    //   {
    //     question: "¿Hay que vacunarse para viajar a Japón?",
    //     answer:
    //       "No hay vacunas obligatorias para viajar desde España. Japón es un país súper seguro y con estándares sanitarios muy altos.\n\nEso sí, siempre recomendamos tener las vacunas básicas al día y consultar con tu médico si tienes alguna duda. Mejor viajar tranquilo que viajar rayado.",
    //   },
    //   {
    //     question: "¿Puedo alargar el viaje por mi cuenta?",
    //     answer:
    //       "Claro que sí. Si te quedas con ganas de más (spoiler: pasa siempre), puedes ampliar antes o después del viaje en grupo.\n\nMás días en Tokio, perderte por zonas rurales, visitar alguna isla… te damos recomendaciones y tips para que lo montes fácil.\n\nLas noches extra y cambios en vuelos no están incluidos, pero te echamos un cable para que lo tengas todo claro.",
    //   },
    //   {
    //     question: "¿Necesito visado para este viaje?",
    //     answer:
    //       "Con pasaporte español no necesitas visado para estancias turísticas de hasta 90 días.\n\nSolo asegúrate de que tu pasaporte esté en vigor durante el viaje y listo. Japón te abre la puerta sin papeleo extra.",
    //   },
    //   {
    //     question: "¿Dónde dormimos?",
    //     answer:
    //       "Hoteles de 3–4 estrellas bien ubicados para aprovechar el tiempo al máximo.\n\nY sí, también incluimos alguna noche en ryokan tradicional, con futón y ese ambiente japonés que te hace sentir dentro de una peli.\n\nHabitaciones dobles o triples compartidas, con opción individual si está disponible.",
    //   },
    //   {
    //     question: "¿Es un viaje muy físico?",
    //     answer:
    //       "No necesitas ser un atleta olímpico. Caminaremos bastante (Japón se vive a pie), haremos visitas culturales y alguna ruta sencilla en la naturaleza.\n\nEl ritmo está pensado para disfrutar, no para sobrevivir.\n\nSi tienes alguna condición médica, cuéntanoslo antes y vemos cómo adaptarlo.",
    //   },
    // ],
    faqsIntro:
      "Nos vamos a Japón versión AWAYNA: templos al amanecer, ramen en callejones sin nombre, tren bala, ryokans y ese grupo que acaba brindando con sake en algún izakaya que no aparece en ninguna guía.",
    en: {
      tagline: "From the perfect chaos of Tokyo to the calm of Nara, crossing western Japan",
      duration: "11 days",
      highlights: [
        "Tokyo: tradition and future",
        "Kyoto and its geishas",
        "Mount Fuji (depending on season)",
        "Hiroshima and Miyajima",
        "Tea ceremony",
        "Night in a traditional ryokan",
      ],
      components: [
        { name: "Relaxation", rating: 2 },
        { name: "Physical activity", rating: 3 },
        { name: "Nature", rating: 3 },
        { name: "Culture", rating: 5 },
        { name: "Food & drinks", rating: 5 },
        { name: "Nightlife", rating: 2 },
      ],
      description: [
        "If real travel is your thing — not just visiting places — this Japan trip is for you.",
        "Over 13 nights we immerse ourselves in a country of brutal contrasts, where tradition and the future share the same street. We're not here to rush or tick off a checklist: we're here to live Japan from the inside, as a group, at our own pace and with a lot of curiosity.",
        "We start in Tokyo, letting ourselves be swept up by its infinite energy, its impossible neighborhoods and its perfectly organized chaos. From there we make a complete turn toward nature: wild coastlines on the Izu Peninsula, onsen, silence and volcanic landscapes, before coming face to face with the legendary Fuji.",
        "We then head to Kansai, where Osaka welcomes us with its street spirit and love of good food, Kyoto gifts us temples, rituals and strolls that feel frozen in time, and Nara slows us down even further with nature and spirituality.",
        "This is a trip to explore without rushing, to share everyday moments that become special, to get lost on side streets and understand why Japan is felt as much as it is remembered.",
        "Japan can't be explained.",
        "Japan is lived.",
        "And better, together.",
      ],
      itinerary: [
        {
          day: 1,
          title: "We Land Together",
          description: [
            "We arrive in Tokyo and the adventure officially begins. Among backpacks, first glances and that mix of tiredness and excitement, we sense something big is starting.",
            "We drop our things at the accommodation and head out for an aimless walk, simply to start understanding where we are. Lights, order, different sounds, signs we can't read — and yet everything flows.",
            "Simple dinner to break the ice, first long conversations and that feeling of 'we're actually here'. Today isn't about doing much — it's about starting to live it together.",
          ],
          highlights: ["Tokyo arrival", "Hotel Shinjuku", "Shibuya crossing"],
        },
        {
          day: 2,
          title: "Traditional Japan to Vibrant Tokyo, with Matsu",
          description: [
            "We wake up in Tokyo and head to Asakusa, one of the most traditional neighborhoods in the city. We walk toward Senso-ji temple through incense, lanterns and small stalls on Nakamise street. We try local sweets and let the atmosphere wash over us.",
            "In the afternoon we meet our friend Matsu, a Tokyo local, who will take us on a tour of the Japan that locals actually experience. When night falls, Tokyo changes its skin. Giant screens, neon lights, neighborhoods that pulse with energy. We let ourselves be carried along by that perfectly organized chaos that only exists here.",
            "A day of brutal contrasts that reminds us why Japan is so special.",
          ],
          highlights: ["Senso-ji", "Nakamise", "Matsu", "Tokyo by night"],
        },
        {
          day: 3,
          title: "Tokyo Unfiltered",
          description: [
            "Today we explore the most creative side of the city. Harajuku shows us its free, different, ruleless aesthetic.",
            "Afterwards we cross into the Meiji Shrine, where the noise disappears and everything turns green and silent. That constant contrast is part of the charm. Nearby, we enjoy some of the best ramen in the city — perfect fuel to keep the day going.",
            "In the afternoon, Shibuya, its iconic crossing and its viewpoints. We blend in with locals, stroll at our own pace and close the night over sushi and sake, celebrating that the group is already starting to feel like a team.",
          ],
          highlights: ["Harajuku", "Meiji Shrine", "Ramen", "Shibuya", "Sushi and sake"],
        },
        {
          day: 4,
          title: "Natural Japan on the Izu Peninsula",
          description: [
            "We leave the big city behind and move to the Izu Peninsula. The landscape changes completely: volcanic coastline, cliffs, cleaner air and fewer tourists.",
            "We walk along the ocean, stop at viewpoints and enjoy a quieter, more authentic Japan.",
            "In the afternoon we check into a traditional ryokan. Tatami mats, sliding doors and onsen to relax body and mind. Elaborate Japanese dinner and unhurried conversation. This day invites us to slow down. You'll find that with just a smile, it's perfectly possible to understand what the person across from you wants to say.",
          ],
          highlights: ["Izu Peninsula", "Volcanic coastline", "Ryokan", "Onsen"],
        },
        {
          day: 5,
          title: "Encounter with Fuji",
          description: [
            "We continue toward the Kawaguchiko area. The day revolves around the landscape: Lake Ashi, gentle strolls and the possibility of seeing Mount Fuji looming majestically if the sky cooperates.",
            "It's a contemplative, very visual day — perfect for connecting with the surroundings and observing how life works in Japan outside the city.",
            "That evening, more onsen and rest. Japan is also lived in silence.",
          ],
          highlights: ["Kawaguchiko", "Lake Ashi", "Mount Fuji", "Onsen"],
        },
        {
          day: 6,
          title: "Osaka Street Mode: Flavors and Neon",
          description: [
            "We arrive in Osaka and the shift in energy is immediate. Everything here is more direct, more street-level, more spontaneous.",
            "We head out to Dotonbori and let the smell of food and the giant illuminated signs guide us along the canal. In this always-buzzing neighborhood, we'll seek out a bakery to warm up your appetite with delicious cheesecakes, then keep going with the classic takoyaki, okonomiyaki and anything else that crosses our path. Spoiler: you've never tasted anything like it.",
            "Osaka is best enjoyed sharing dishes and laughing without watching the clock.",
          ],
          highlights: ["Osaka", "Dotonbori", "Cheesecake", "Takoyaki", "Okonomiyaki"],
        },
        {
          day: 7,
          title: "Authentic Osaka",
          description: [
            "We start the day at Osaka Castle and stroll through its gardens, where we might find university students playing instruments to pay their tuition, locals out for a walk and those ponds full of colorful koi. Then we head to Kuromon Market to keep discovering local flavors.",
            "Around these markets we visit something very characteristic of Japan: small but efficient cutlery shops, where we learn about how they make, sharpen and decorate what are considered the world's finest knives.",
            "In the afternoon we explore Shinsekai, a neighborhood with its own personality — less polished and more real — where you'll discover what an Izakaya is: a traditional Japanese bar where appearances don't matter, it's all about eating and drinking around a counter, where the owner smiles and picks the night's menu at their own discretion.",
          ],
          highlights: ["Osaka Castle", "Kuromon Market", "Cutlery shops", "Shinsekai", "Izakaya"],
        },
        {
          day: 8,
          title: "The Japan You Imagined",
          description: [
            "We arrive in Kyoto and the pace drops automatically. We stroll through Gion, between traditional machiya houses and streets that feel frozen in time. If you're the type who likes getting into character, you can rent a traditional kimono and walk around here wearing it — we'll make sure to immortalize that moment.",
            "There's no rush here. Just walking, observing and letting the city reveal itself little by little. We're in the most authentic area of Japan, so get ready to be left speechless on more than one occasion.",
          ],
          highlights: ["Kyoto", "Gion", "Kimono", "Traditional houses"],
        },
        {
          day: 9,
          title: "Temples and Real Postcards",
          description: [
            "Good morning Kyoto! We wake up with our sneakers on — it's the day to head up to Fushimi Inari, where we'll get lost beneath thousands of red torii gates. After emerging nearly overwhelmed by the views over Kyoto and capturing those incredible shots, we continue to Higashiyama, a vast area encompassing several UNESCO World Heritage temples and Kyoto's most pristine urban landscapes.",
            "It's one of those days you know you'll remember for years.",
            "How about ending the day dining at one of Kyoto's most prestigious restaurants? Yes, we love food — and if you came to Japan with Awayna, we hope you do too. We think there's no better way to end a perfect day than with great food.",
          ],
          highlights: ["Fushimi Inari", "Red torii", "Higashiyama", "UNESCO", "Dinner in Kyoto"],
        },
        {
          day: 10,
          title: "Nature and Freedom",
          description: [
            "We explore Arashiyama and its famous bamboo grove. We visit the Golden Pavilion, reflected in the water like an unreal scene — we'll try to capture your face when you first see it, because it's going to be quite a moment.",
            "In the afternoon there's free time to get lost, rest or revisit that corner that caught your eye. Kyoto invites you to enjoy it without a rigid schedule.",
          ],
          highlights: ["Arashiyama", "Bamboo grove", "Golden Pavilion"],
        },
        {
          day: 11,
          title: "Nara and Its Tranquil Energy",
          description: [
            "We move to Nara. We stroll through its park among deer that roam freely throughout the whole area. On the way we visit the imposing Todai-ji temple, home to an incredible giant Buddha, adding even more cultural depth to this remarkable place.",
            "It's a relaxed, green and very balanced day. The ideal way to close the most spiritual and cultural leg of the trip.",
          ],
          highlights: ["Nara", "Deer park", "Todai-ji", "Giant Buddha"],
        },
        {
          day: 12,
          title: "We Return Different",
          description: [
            "We return to Tokyo on the bullet train. The city is the same, but we are not.",
            "Free afternoon for shopping, neighborhoods we still have pending, or simply strolling and remembering everything we've lived.",
            "Farewell dinner, toasts and stories that are now part of the journey.",
          ],
          highlights: ["Bullet train", "Tokyo", "Shopping", "Farewell dinner"],
        },
        {
          day: 13,
          title: "See You Soon, Japan",
          description: [
            "Last stroll, last coffee and time to take stock.",
            "We leave with a backpack full of memories, photos and real connections. This trip doesn't end here. It stays with us.",
            "Our coordinator stays in Tokyo all day, so you have the option of catching your return flight during the day, or if you want to squeeze even more out of the vast city of Tokyo, you can stay until the following day.",
          ],
          highlights: ["Tokyo", "Farewell", "Memories"],
        },
      ],
      included: [
        "Airport pickup in Tokyo on arrival day",
        "Awayna coordinator support throughout the entire trip",
        "Trip video album",
        "Accommodation in shared rooms (hotels, ryokan and guesthouses)",
        "Group welcome dinner in Tokyo",
        "Local guide to take us into the most authentic side of the capital",
        "7-day Japan Rail Pass to travel Japan by bullet train",
        "Remaining train tickets needed to reach all destinations",
        "Guided visits to neighborhoods and temples at all destinations",
        "Excursion to the Izu Peninsula with walks along the volcanic coastline",
        "Strolls with views of Mount Fuji and surroundings",
        "Visit to Osaka Castle and Kuromon Market",
        "Guided Kyoto tour: Gion, Arashiyama, Bamboo Grove and Golden Pavilion",
        "Nara excursion with deer park and Todai-ji temple entry",
        "Farewell dinner in Tokyo",
        "Medical insurance for the entire trip",
        "Awayna backpack",
      ],
      notIncluded: [
        "Return flights from Spain",
        "Meals and drinks not specified above",
        "Additional entry fees or optional activities outside the itinerary",
        'Everything not mentioned in the "What\'s included" section',
        "Common fund.",
      ],
      practicalInfo: {
        bestTime: "March–May (cherry blossoms) and October–November (autumn leaves)",
        visa: "Not required for stays under 90 days",
        vaccines: "None required or specifically recommended",
        currency: "Yen (JPY). €1 ≈ 160 JPY. Japan uses a lot of cash",
        language: "Japanese. Limited English but good signage",
        timeZone: "UTC+9 (8 hours ahead of Spain)",
      },
    },
    availableDates: [
      {
        id: "jp-dic-26",
        startDate: "2026-12-10",
        endDate: "2026-12-23",
        spots: 14,
        totalSpots: 14,
        price: 2149,
      },
    ],
  },
  {
    slug: "islandia",
    name: "Islandia",
    heroName: "Islandia",
    comingSoon: true,
    tagline: "Aurora boreal, cascadas y paisajes de otro planeta",
    heroImage: "/images/iceland/hero.jpg",
    galleryImages: [
      "/images/iceland/1.jpg",
      "/images/iceland/2.jpg",
      "/images/iceland/3.jpg",
      "/images/iceland/4.jpg",
      "/images/iceland/5.jpg",
      "/images/iceland/6.jpg",
      "/images/iceland/7.jpg",
      "/images/iceland/8.jpg",
      "/images/iceland/9.jpg",
      "/images/iceland/10.jpg",
      "/images/iceland/11.jpg",
      "/images/iceland/12.jpg",
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
      "Seguro médico durante todo el viaje",
      "Álbum videográfico del viaje",
    ],
    notIncluded: [
      "Vuelos internacionales",
      "Comidas no especificadas",
      "Actividades opcionales (moto nieve, buceo Silfra)",
      "Propinas",
      "Fondo común.",
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
    // faqs: [
    //   {
    //     question: "Veremos auroras boreales seguro?",
    //     answer:
    //       "Las auroras dependen de la actividad solar y el clima. Tenemos 3 noches de caza y apps de prevision. La probabilidad en temporada es alta pero no garantizada.",
    //   },
    //   {
    //     question: "Hace mucho frio?",
    //     answer:
    //       "En invierno la media es -1 a 5 grados, con viento. Llevando capas y buen equipamiento se esta bien. Te mandamos lista de equipaje.",
    //   },
    //   {
    //     question: "Necesito experiencia para el glaciar?",
    //     answer:
    //       "No. El trekking es para todos los niveles con guia certificado y equipo proporcionado (crampones, piolet, arnes).",
    //   },
    // ],
    en: {
      tagline: "Northern lights, waterfalls and landscapes from another planet",
      description: [
        "Iceland is like visiting another planet without leaving Earth. Geysers, volcanoes, glaciers, northern lights, impossible waterfalls and breathtaking landscapes. This trip follows the iconic southern Ring Road, where every bend hides a postcard. Bring your camera and your sense of wonder.",
      ],
      highlights: [
        "Northern lights hunting",
        "Complete Golden Circle",
        "Vatnajökull Glacier",
        "Black sand beach at Vík",
        "Jökulsárlón glacial lagoon",
        "Spectacular waterfalls",
      ],
      components: [
        { name: "Nature", rating: 5 },
        { name: "Adventure", rating: 4.5 },
        { name: "Photography", rating: 5 },
        { name: "Relaxation", rating: 3.5 },
        { name: "Food & drinks", rating: 3.5 },
        { name: "Beaches", rating: 3.5 },
      ],
      itinerary: [
        {
          day: 1,
          title: "Welcome to Iceland",
          description: [
            "Arrival at Keflavík. Transfer to Reykjavík with a stop at the Blue Lagoon to relax in its turquoise thermal waters. Check-in and welcome dinner.",
          ],
          highlights: ["Keflavík arrival", "Blue Lagoon", "Reykjavík"],
        },
        {
          day: 2,
          title: "Golden Circle",
          description: [
            "Iceland's most famous route: Þingvellir (where the tectonic plates separate), Geysir (active geysers) and Gullfoss (the golden waterfall). Northern lights hunt at night.",
          ],
          highlights: ["Þingvellir", "Geysir", "Gullfoss", "Northern lights"],
        },
        {
          day: 3,
          title: "South Coast – Waterfalls",
          description: [
            "Route along the south coast stopping at the Seljalandsfoss (you can walk behind it!) and Skógafoss waterfalls. Arrival in Vík and its famous black sand beach at Reynisfjara.",
          ],
          highlights: ["Seljalandsfoss", "Skógafoss", "Black sand beach Vík"],
        },
        {
          day: 4,
          title: "Glaciers and Icebergs",
          description: [
            "Vatnajökull National Park with Europe's largest glacier. Jökulsárlón glacial lagoon with its floating icebergs. Diamond Beach where ice glitters on the black sand.",
          ],
          highlights: ["Vatnajökull", "Jökulsárlón", "Diamond Beach"],
        },
        {
          day: 5,
          title: "Glacier Trekking",
          description: [
            "A unique experience: guided glacier trekking with crampons. Blue ice caves (subject to conditions). Afternoon exploring the area.",
          ],
          highlights: ["Glacier trek", "Crampons", "Ice caves"],
        },
        {
          day: 6,
          title: "Return to Reykjavík",
          description: [
            "Leisurely return, stopping at places we missed or new discoveries along the way. Arrival in Reykjavík for a free night in the capital.",
          ],
          highlights: ["Scenic drive", "Free stops", "Reykjavík night"],
        },
        {
          day: 7,
          title: "Reykjavík and Whales",
          description: [
            "Morning whale-watching in Reykjavík bay. Free afternoon to explore the city: Hallgrímskirkja, the old harbor, museums. Farewell dinner.",
          ],
          highlights: ["Whale watching", "Hallgrímskirkja", "Farewell dinner"],
        },
        {
          day: 8,
          title: "Bless Iceland",
          description: [
            "Transfer to Keflavík airport for the return flight. We leave with unforgettable landscapes and (hopefully) aurora photos.",
          ],
          highlights: ["Airport transfer", "Return flight"],
        },
      ],
      included: [
        "7 nights accommodation in hotels/guesthouses",
        "Daily breakfasts + 2 dinners",
        "4x4 minibus transport",
        "Blue Lagoon entry with face mask",
        "Glacier trekking with equipment",
        "Whale watching tour",
        "Northern lights hunting (3 nights)",
        "Awayna coordinator",
        "Travel insurance",
        "Medical insurance for the entire trip",
        "Trip video album",
      ],
      notIncluded: [
        "International flights",
        "Meals not specified",
        "Optional activities (snowmobile, Silfra diving)",
        "Tips",
        "Common fund.",
      ],
      practicalInfo: {
        bestTime: "September to March for northern lights. June–August midnight sun",
        visa: "Not required (Schengen Area)",
        vaccines: "None required",
        currency: "Icelandic Króna (ISK). €1 ≈ 150 ISK. Card payments everywhere",
        language: "Icelandic. English is practically universal",
        timeZone: "UTC+0 (1–2 hours behind Spain)",
      },
    },
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
    slug: "honduras",
    name: "Honduras",
    heroName: "Honduras",
    comingSoon: true,
    tagline: "Arrecifes de coral, selva virgen y cultura maya",
    heroImage: "/images/honduras/portada.jpeg",
    galleryImages: [
      "/images/honduras/01.jpeg",
      "/images/honduras/02.jpeg",
      "/images/honduras/03.jpeg",
      "/images/honduras/04.jpeg",
      "/images/honduras/05.jpeg",
      "/images/honduras/06.jpeg",
      "/images/honduras/07.jpeg",
      "/images/honduras/08.jpeg",
      "/images/honduras/09.jpeg",
    ],
    duration: "Próximamente",
    rating: 0,
    reviewCount: 0,
    price: 0,
    continent: "América",
    highlights: [],
    components: [],
    description: [],
    itinerary: [],
    included: [],
    notIncluded: [],
    practicalInfo: {
      bestTime: "",
      visa: "",
      vaccines: "",
      currency: "",
      language: "",
      timeZone: "",
    },
    // faqs: [],
    availableDates: [],
  },
];

export function getLocalizedDestination(dest: Destination, locale: string): Destination {
  if (locale === "en" && dest.en) {
    const { en, ...base } = dest;
    return {
      ...base,
      en,
      tagline: en.tagline ?? base.tagline,
      duration: en.duration ?? base.duration,
      highlights: en.highlights ?? base.highlights,
      components: en.components ?? base.components,
      description: en.description ?? base.description,
      itinerary: en.itinerary
        ? en.itinerary.map((enDay, i) => ({
            ...base.itinerary[i],
            ...enDay,
          }))
        : base.itinerary,
      included: en.included ?? base.included,
      notIncluded: en.notIncluded ?? base.notIncluded,
      practicalInfo: en.practicalInfo
        ? { ...base.practicalInfo, ...en.practicalInfo }
        : base.practicalInfo,
    };
  }
  return dest;
}

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getAllDestinationSlugs(): string[] {
  return destinations.map((d) => d.slug);
}
