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
    availableDates: [
      {
        id: "fil-nov-26",
        startDate: "2026-11-30",
        endDate: "2026-12-13",
        spots: 16,
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
    availableDates: [
      {
        id: "vn-oct-26-1",
        startDate: "2026-10-01",
        endDate: "2026-10-13",
        spots: 16,
        totalSpots: 16,
        price: 1339,
      },
      {
        id: "vn-oct-26-2",
        startDate: "2026-10-14",
        endDate: "2026-10-27",
        spots: 16,
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

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getAllDestinationSlugs(): string[] {
  return destinations.map((d) => d.slug);
}
