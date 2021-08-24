/* eslint-disable max-len */
import { NATIONALITIES } from './nationality';
import { TALK_TYPES } from './talkTypes';

export const SPEAKERS = [
  {
    id: 'lara-diaz',
    variant: 'D',
    photo: '/speakers/lara-diaz@2x.png',
    nationality: NATIONALITIES.AR,
    firstName: 'Lara',
    lastName: 'Díaz',
    socialMediaHandles: {
      twitter: 'selene_l21',
      linkedin: 'laradíaz',
    },
    bio: '**Lara Díaz** es desarrolladora frontend en Codecons. Fan de los videojuegos y el café. Organizadora de dos comunidades e intento de profe en un curso de frontend.',
    talkType: TALK_TYPES.KEYNOTE,
    talkName: 'Piedra, papel, ¡web!',
    talkDescription:
      'Desde el comienzo de los tiempos el hombre ha ido comunicando su paso a través de la historia. Veremos cómo evolucionaron los medios de comunicación y como afectan a nuestra vida cotidiana haciendo incapié en nuestro rol como creadores de la web.',
    talkSchedule: ['2021-08-23T17:40:00.000-03:00', '2021-08-23T17:50:00.000-03:00'],
  },
  {
    id: 'ivan-olivares',
    variant: 'A',
    photo: '/speakers/ivan-olivares@2x.png',
    nationality: NATIONALITIES.CL,
    firstName: 'Iván',
    lastName: 'Olivares',
    socialMediaHandles: {
      twitter: 'ivolivares',
      linkedin: 'ivanolivaresrojas',
    },
    bio: '**Iván Olivares** es Digital Operations Manager a cargo de productos de Streaming en WarnerMedia, anteriormente Software Architect en Globant.',
    talkType: TALK_TYPES.STANDARD,
    talkName: 'Observability 101: Monitorear tu app no es solo cosa de devops',
    talkDescription:
      'Construyes tu app, llegas a producción y todo dejó de funcionar sin explicación. ¿Qué haces? Además una apología al meme "This is fine", pensar en observabilidad es lo que aprenderás en esta charla.',
    talkSchedule: ['2021-08-23T18:00:00.000-03:00', '2021-08-23T18:30:00.000-03:00'],
  },
  {
    id: 'francisco-daines',
    variant: 'B',
    photo: '/speakers/francisco-daines@2x.png',
    nationality: NATIONALITIES.CL,
    firstName: 'Francisco',
    lastName: 'Daines',
    socialMediaHandles: {
      twitter: 'fdaines',
      linkedin: 'fdaines',
      instagram: 'fdaines',
    },
    bio: '**Francisco Daines** es Ingeniero Civil en Informática (UTFSM-Chile), apasionado por el desarrollo de soluciones tecnológicas, su principal interés es la calidad y la mejora continua.',
    talkType: TALK_TYPES.STANDARD,
    talkName: 'Verificación continua de nuestros lineamientos de arquitectura',
    talkDescription:
      'Para asegurar la calidad de la arquitectura de nuestros productos necesitamos una manera automatizada de verificar si nuestro código adhiere a nuestros lineamientos de arquitectura. En esta charla vamos a analizar la importancia de verificar continuamente nuestros lineamientos de arquitectura, los beneficios que podemos obtener, alternativas de cómo incluir estas pruebas en nuestro flujo de integración continua y finalmente un breve análisis de las diferentes librerías y herramientas disponibles para los lenguajes más utilizados actualmente.',
    talkSchedule: ['2021-08-23T18:40:00.000-03:00', '2021-08-23T19:10:00.000-03:00'],
  },
  {
    id: 'carlos-santiago',
    variant: 'C',
    photo: '/speakers/carlos-santiago-moreno@2x.png',
    nationality: NATIONALITIES.AR,
    firstName: 'Carlos Santiago',
    lastName: 'Moreno',
    socialMediaHandles: {
      linkedin: 'ingcsmoreno',
    },
    bio: '**Carlos Santiago Moreno** Ingeniero en Sistemas, Experto en Containers, Entusiasta Tecnológico, Padre de Familia y Fan de Star Wars.',
    talkType: TALK_TYPES.LIGHTNING,
    talkName: 'Guía ilustrada de Docker para niños',
    talkDescription:
      'Una introducción al mundo de Docker y sus conceptos como si se estuviéramos explicando a un niño, ¡con dibujos!',
    talkSchedule: ['2021-08-23T19:20:00.000-03:00', '2021-08-23T19:30:00.000-03:00'],
  },
  {
    id: 'denny-portillo',
    variant: 'A',
    photo: '/speakers/denny-portillo@2x.png',
    nationality: NATIONALITIES.SV,
    firstName: 'Denny',
    lastName: 'Portillo',
    socialMediaHandles: {
      instagram: 'd3portillo.me',
      twitter: 'd3portillo',
      linkedin: 'd3portillo',
    },
    bio: '**Denny Portillo** es un nerd apasionado por el desarrollo web, el aprendizaje colaborativo y las pupusas revueltas.',
    talkType: TALK_TYPES.LIGHTNING,
    talkName: '¿Qué demonios es un Design System?',
    talkDescription:
      'Luego de hacer muchas interfaces y encontrar que hay un patrón o cosas similares en esas interfaces se me ocurrió que puede crearse una librería y reutilizar esos componentes, distribuirlos y con buena documentación, da la casualidad que luego de investigar las distintas librerías de UI me di cuenta que resultaron de un proceso mucho más complejo y beneficio, los Sistemas de Diseño.',
    talkSchedule: ['2021-08-23T19:40:00.000-03:00', '2021-08-23T19:50:00.000-03:00'],
  },
  {
    id: 'mariano-vazquez',
    variant: 'B',
    photo: '/speakers/mariano-vazquez@2x.png',
    nationality: NATIONALITIES.AR,
    firstName: 'Mariano',
    lastName: 'Vazquez',
    socialMediaHandles: {
      twitter: 'nanovazquez',
      linkedin: 'nanovazquez',
    },
    bio: '**Mariano Vazquez** tiene más de 15 años de experiencia en desarrollo de software full-stack. Speaker internacional, coorganizador de meetups y conferencias en LatAm. Actualmente trabaja como Director de Ingenieria en MODO, ayudando a digitalizar el uso cotidiano del dinero.',
    talkType: TALK_TYPES.STANDARD,
    talkName: 'Cómo desarrollar un ecosistema de APIs para la industria fintech desde cero',
    talkDescription:
      'En esta charla vamos a explicar lo que hicimos para desarrollar desde cero una plataforma para múltiples bancos de Argentina, utilizando OpenAPI/Swagger y un enfoque design-first. Vamos a hablar de lecciones aprendidas al implementar la solución: desde las fallas que encontramos en la arquitectura inicial hasta cómo estamos aprendiendo a enfocar el feedback valioso de múltiples consumidores de manera efectiva.',
    talkSchedule: ['2021-08-23T20:00:00.000-03:00', '2021-08-23T20:30:00.000-03:00'],
  },
  {
    id: 'sofia-paoli',
    variant: 'C',
    photo: '/speakers/sofia-paoli@2x.png',
    nationality: NATIONALITIES.AR,
    firstName: 'Sofía',
    lastName: 'Paoli',
    socialMediaHandles: {
      linkedin: 'sofiapaoli',
    },
    bio: '**Sofía Paoli** es Product Lead de Wiru, un sistema de CI/CD, en el equipo de Naranja X Engineering.',
    talkType: TALK_TYPES.STANDARD,
    talkName: 'Cómo escalar tus prácticas de DevOps',
    talkDescription:
      'En esta charla compartiremos un caso probado de con pipelines reutilizables en equipos de desarrollo que tienen foco en el delivery de productos digitales.',
    talkSchedule: ['2021-08-23T20:40:00.000-03:00', '2021-08-23T21:10:00.000-03:00'],
    cospeaker: 'antonella-de-caro',
  },
  {
    id: 'antonella-de-caro',
    variant: 'A',
    photo: '/speakers/antonella-de-caro@2x.png',
    nationality: NATIONALITIES.AR,
    firstName: 'Antonella',
    lastName: 'De Caro',
    socialMediaHandles: {
      linkedin: 'decaroantonella',
    },
    bio: '**Antonella de Caro** es Ingenieria Electrónica, CloudOps y DevOps en Wiru, en el equipo Naranja X Engineering.',
    talkType: TALK_TYPES.STANDARD,
    talkName: 'Cómo escalar tus prácticas de DevOps',
    talkDescription:
      'En esta charla compartiremos un caso probado de con pipelines reutilizables en equipos de desarrollo que tienen foco en el delivery de productos digitales.',
    talkSchedule: ['2021-08-23T20:40:00.000-03:00', '2021-08-23T21:10:00.000-03:00'],
    hideFromSchedule: true,
  },
  {
    id: 'matias-arabolaza',
    variant: 'C',
    photo: '/speakers/matias-arabolaza@2x.png',
    nationality: NATIONALITIES.AR,
    firstName: 'Matías',
    lastName: 'Arabolaza',
    socialMediaHandles: {
      twitter: 'matias2205',
      instagram: 'matias2205',
      linkedin: 'matiasarabolaza',
    },
    bio: '**Matías Arabolaza** es un desarrollador front-end de Buenos Aires, Argentina. Actualmente trabaja como Head de Frontend en Valtech Argentina. Amante de la comida, padre de dos hijos y el mejor bug fixer de la historia :)',
    talkType: TALK_TYPES.STANDARD,
    talkName: '¡Microfrontends en acción!',
    talkDescription:
      '¿Has oído hablar de Micro Frontends y no sabes qué son? ¿Tenés curiosidad acerca de cómo las micro-aplicaciones de diferentes tecnologías pueden coexistir juntas en el mismo sitio web/aplicación? Vamos a echar un vistazo a cómo realmente funciona esta gran arquitectura y cómo puede ayudarnos a hacer aplicaciones increíbles sin preocuparse por la tecnología que cada equipo está utilizando, porque Micro Frontends se trata de colaboración.',
    talkSchedule: ['2021-08-24T17:40:00.000-03:00', '2021-08-24T18:10:00.000-03:00'],
  },
  {
    id: 'fernando-chavez',
    variant: 'A',
    photo: '/speakers/fernando-chavez@2x.png',
    nationality: NATIONALITIES.VE,
    firstName: 'Fernando',
    lastName: 'Chavez',
    socialMediaHandles: {
      twitter: 'fernetico',
      linkedin: 'fc9chavez',
    },
    bio: '**Fernando Chavez** es un fullstack developer venezolano de 24 años de edad.',
    talkType: TALK_TYPES.LIGHTNING,
    talkName: 'Virtual DOM en 1, 2, 3',
    talkDescription:
      'Repasa rápidamente que hay detrás de tus frameworks favoritos, aprende qué es el Virtual DOM, cómo funciona, qué problemas resuelve y cómo los resuelve en esta charla relámpago sobre el Virtual DOM.',
    talkSchedule: ['2021-08-24T18:20:00.000-03:00', '2021-08-24T18:30:00.000-03:00'],
  },
  {
    id: 'martin-pastore',
    variant: 'B',
    photo: '/speakers/martin-pastore@2x.png',
    nationality: NATIONALITIES.AR,
    firstName: 'Martín',
    lastName: 'Pastore',
    socialMediaHandles: {
      twitter: 'bochap_',
      linkedin: 'martin-pastore',
      instagram: 'bforbocha',
    },
    bio: '**Martín Pastore** es actualmente web engineer en ThriveMarket pero hace aproximadamente 6 años que está en el rubro. Hoy se considero fana de React, pero le encanta laburar con JS en general. Supuestamente es full stack, pero siempre fue mas front que back (aunque puede romper ambos) 🤡',
    talkType: TALK_TYPES.LIGHTNING,
    talkName: 'Lo importante es el detalle',
    talkDescription:
      '¿Cuántas veces te encontraste en la situación de tener que poner un !important a tus estilos porque por "alguna razón" no te los toma? En 10 minutos te cuento por qué y cómo resolverlo 🥳',
    talkSchedule: ['2021-08-24T18:40:00.000-03:00', '2021-08-24T18:50:00.000-03:00'],
  },
  {
    id: 'daiana-szwimer',
    variant: 'C',
    photo: '/speakers/daiana-szwimer@2x.png',
    nationality: NATIONALITIES.AR,
    firstName: 'Daiana',
    lastName: 'Szwimer',
    socialMediaHandles: {
      twitter: 'uhhdai',
      linkedin: 'daiana-szwimer',
    },
    bio: '**Daiana Szwimer** es estudiante de cuarto año de Ingeniería en Sistemas de la Información en la UTN FRBA y Full Stack developer. Además, es mentora en la comunidad de FrontendCafé y voluntaria en Women Who Code Buenos Aires, le gusta mucho participar en las comunidades de sistemas!',
    talkType: TALK_TYPES.STANDARD,
    talkName: 'Debuggeando ando: cómo salir del console.log()',
    talkDescription:
      'El objetivo es dar a conocer las herramientas que provee Google Chrome para debuggear el código. Vamos a mostrar el debugger, breakpoints, como hacer watch de expresiones, etc.',
    talkSchedule: ['2021-08-24T19:00:00.000-03:00', '2021-08-24T19:30:00.000-03:00'],
  },
  {
    id: 'agustin-mulet',
    variant: 'A',
    photo: '/speakers/agustin-mulet@2x.png',
    nationality: NATIONALITIES.AR,
    firstName: 'Agustín',
    lastName: 'Mulet',
    socialMediaHandles: {
      twitter: 'AgustinDMulet',
      linkedin: 'agustin-mulet-71353639',
    },
    bio: '**Agustín Mulet** es Desarrollador Full Stack, trabajando actualmente en SCV Soft. Le gustan los juegos viejos y su música, jugar al fútbol, al básquet y mirar series. Se llama como el jugador de Vélez pero no juega tan bien 😂',
    talkType: TALK_TYPES.STANDARD,
    talkName: 'Pensando en componentes y cómo mejorar nuestra productividad',
    talkDescription:
      'Cómo al dar un paso atrás para intenter ver una solución más abstracta y pensar en componentes puede ayudarnos a resolver mejor ciertos problemas y a diagramar una mejor estructura de nuestro código.',
    talkSchedule: ['2021-08-24T19:40:00.000-03:00', '2021-08-24T20:10:00.000-03:00'],
  },
  {
    id: 'martin-thiessen',
    variant: 'B',
    photo: '/speakers/martin-thiessen@2x.png',
    nationality: NATIONALITIES.AR,
    firstName: 'Martín',
    lastName: 'Thiessen',
    socialMediaHandles: {
      linkedin: 'martinthiessen',
    },
    bio: '**Martín Thiessen** es socio de la cooperativa de software Eryx, donde aporta con conocimientos de UX/UI desde su lugar en los Andes.',
    talkType: TALK_TYPES.STANDARD,
    talkName: 'El UX empieza por los devs',
    talkDescription:
      'Se trata de un conjunto de prácticas y herramientas orientadas a desarrolladores que ayudan no solo a la "experiencia de usuario", si no también al desarrollo de un producto digital. La idea es repasar algunas de las prácticas más básicas y útiles del UX para que los devs puedan aplicarlas fácilmente en sus proyectos. De esta manera podrán mejorar la experiencia de los usuarios y de ellos mismos dentro del proyecto.',
    talkSchedule: ['2021-08-24T20:20:00.000-03:00', '2021-08-24T20:50:00.000-03:00'],
  },
  {
    id: 'nacho-anaya',
    variant: 'C',
    photo: '/speakers/nacho-anaya@2x.png',
    nationality: NATIONALITIES.AR,
    firstName: 'Nacho',
    lastName: 'Anaya',
    socialMediaHandles: {
      twitter: 'ianaya89',
      linkedin: 'ianaya89',
      instagram: 'ianaya89.dev',
    },
    bio: '**Nacho Anaya** es Lead Open Source Engineer en Checkly, Tech Trainer y Speaker. Trabaja principalmente con JavaScript pero le gusta contribuir con cualquier tipo proyecto open source. Cuando no está programando o viajando, lo podés encontrar jugando al hockey en Buenos Aires 💻✈️🏑',
    talkType: TALK_TYPES.STANDARD,
    talkName: 'Viviendo de Open Source',
    talkDescription:
      'El ecosistema open source creció radicalmente en la ultima década, herramientas como GitHub, Patreon y NPM permiten que desarrolladores puedan publicar, monetizar y distribuir software de código abierto de forma simple y rápida. Pero no solo eso, empresas como Vercel, Netlify y Microsoft apuestan cada vez mas a un modelo de negocio basado en open source. En esta charla vamos a repasar un poco el pasado y presente de OSS para entender de dónde venimos, dónde estamos y ver hacia dónde podemos llegar. Pero principalmente para responder la tan ansiada pregunta. Es realmente posible "vivir" del software open source?',
    talkSchedule: ['2021-08-25T17:40:00.000-03:00', '2021-08-25T18:10:00.000-03:00'],
  },
  {
    id: 'kalil-de-lima',
    variant: 'A',
    photo: '/speakers/kalil-de-lima@2x.png',
    nationality: NATIONALITIES.UY,
    firstName: 'Kalil',
    lastName: 'De Lima',
    socialMediaHandles: {
      twitter: 'Kaoz_165',
    },
    bio: '**Kalil de Lima** es Desarrollador Full Stack en Bungalow y estudiante de Ingeniería en Computación en la UdelaR. Vive en Montevideo, Uruguay.',
    talkType: TALK_TYPES.STANDARD,
    talkName: 'Stateful Web',
    talkDescription:
      'SSR, SPA y ahora SSR nuevamente. Durante esta charla estudiaremos la historia del desarrollo web y qué podemos proyectar para el futuro.',
    talkSchedule: ['2021-08-25T18:20:00.000-03:00', '2021-08-25T18:50:00.000-03:00'],
  },
  {
    id: 'matias-hernandez',
    variant: 'B',
    photo: '/speakers/matias-hernandez@2x.png',
    nationality: NATIONALITIES.CL,
    firstName: 'Matías',
    lastName: 'Hernández',
    socialMediaHandles: {
      twitter: 'matiasfha',
      linkedin: 'mhernand',
    },
    bio: '**Matías Hernández** es padre, desarrollador, podcaster, escritor e instructor. Desde siempre ha trabajado de forma remota y por años ha recolectado muchas ideas y conocimientos que intenta compartir para ayudar a otros dev en su carrera.',
    talkType: TALK_TYPES.STANDARD,
    talkName: 'Las naturalezas del estado y cómo domarlas',
    talkDescription:
      'El estado de una App es un concepto que muchas veces se complejiza dada las múltiples posibilidades para enfrentarlo. El problema es que muchas de estas soluciones no toman en cuenta las diferentes naturalezas del estado por lo que terminan siendo complejas de entender y mantener. Comprender los conceptos bases para así crear una arquitectura de estado adecuada es lo que nos permitirá mantener y testear nuestra app en el futuro.',
    talkSchedule: ['2021-08-25T19:00:00.000-03:00', '2021-08-25T19:30:00.000-03:00'],
  },
  {
    id: 'maria-fernanda-magallanes-zubillaga',
    variant: 'C',
    photo: '/speakers/maria-fernanda-magallanes-zubillaga@2x.png',
    nationality: NATIONALITIES.VE,
    firstName: 'María Fernanda',
    lastName: 'Magallanes Zubillaga',
    socialMediaHandles: {
      twitter: 'mafermazu',
      linkedin: 'mafermazu',
    },
    bio: '**María Fernanda Magallanes Zubillaga** apoya a los demás compartiendo sus conocimientos. Estudia ingeniería en computación y ama inmensamente bailar y animar.',
    talkType: TALK_TYPES.STANDARD,
    talkName: '¿Conoces el lenguaje de programación que usas?',
    talkDescription:
      '¿Qué lenguaje de programación usas? ¿Es compilado o interpretado? ¿Es orientado a objetos, lógico o funcional? ¿Cómo maneja el pasaje de parámetros? ¿Cómo es su tipado? 🙊 ¡Vamos a entender esto! 🎉',
    talkSchedule: ['2021-08-25T19:40:00.000-03:00', '2021-08-25T20:10:00.000-03:00'],
  },
  {
    id: 'ramon-huidobro',
    variant: 'B',
    photo: '/speakers/ramon-huidobro@2x.png',
    nationality: NATIONALITIES.AT,
    firstName: 'Ramón',
    lastName: 'Huidobro',
    socialMediaHandles: {
      twitter: 'hola_soy_milk',
    },
    bio: '**Ramón Huidobro** es un developer advocate con Codesee.io viviendo en Austria. Lleva diez años ayudando a otros a realizar sus apps o mantenerlos. Dedica una gran mayoría de su tiempo ayudando a gente en sus carreras, y organizando conferencias y otros eventos con la meta de elevar a otros.',
    talkType: TALK_TYPES.STANDARD,
    talkName: 'Una serie de relatos de mentoring',
    talkDescription:
      'Ser mentor es una gran responsabilidad pero aporta al bienestar de una comunidad tech. En mi charla compartiré como mis experiencias se han convertido en una serie de consejos para mentorear.',
    talkSchedule: ['2021-08-26T17:40:00.000-03:00', '2021-08-26T18:10:00.000-03:00'],
  },
  {
    id: 'pilar-chanampe',
    variant: 'C',
    photo: '/speakers/pilar-chanampe@2x.png',
    nationality: NATIONALITIES.AR,
    firstName: 'Pilar',
    lastName: 'Chanampe',
    socialMediaHandles: {
      twitter: 'pilichanampe',
      instagram: 'pilichanampe',
      linkedin: 'pilichanampe',
    },
    bio: '**Pilar Chanampe** es Lic. en Música, artista plástica y Front End Developer. Empezó a aprender programación a los 30 años y conseguió mi primera experiencia IT a los 31. Le encanta el diseño, la experiencia de usuario y aprender nuevas tecnologías.',
    talkType: TALK_TYPES.STANDARD,
    talkName: 'Ser Junior a los 30: Ingresar al mundo IT viniendo de otra profesión',
    talkDescription:
      'En esta charla deseo contar cómo me incursioné en el universo tech viniendo de una formación artística (música y artes visuales) y qué cosas aprendí como persona en el trayecto.',
    talkSchedule: ['2021-08-26T18:20:00.000-03:00', '2021-08-26T18:50:00.000-03:00'],
  },
  {
    id: 'facundo-giuliani',
    variant: 'A',
    photo: '/speakers/facundo-giuliani@2x.png',
    nationality: NATIONALITIES.AR,
    firstName: 'Facundo',
    lastName: 'Giuliani',
    socialMediaHandles: {
      twitter: 'facundozurdo',
      instagram: 'facundogiuliani',
      linkedin: 'facundozurdo',
    },
    bio: '**Facundo Giuliani** es Developer Relations Engineer en Storyblok. Ingeniero en Sistemas. Full Stack Developer, de Buenos Aires, Argentina.',
    talkType: TALK_TYPES.STANDARD,
    talkName: 'Mirando el vaso medio lleno',
    talkDescription:
      'La pandemia nos empujó a virtualizar actividades que hacíamos de manera presencial. Esto afectó a nuestras interacciones con otras personas, pero también abrió nuevas puertas y expandió fronteras.',
    talkSchedule: ['2021-08-26T19:00:00.000-03:00', '2021-08-26T19:30:00.000-03:00'],
  },
  {
    id: 'erika-la-torre',
    variant: 'B',
    photo: '/speakers/erika-la-torre@2x.png',
    nationality: NATIONALITIES.PE,
    firstName: 'Erika',
    lastName: 'La Torre',
    socialMediaHandles: {
      twitter: 'erikalatorre',
      instagram: 'erilatorre',
      linkedin: 'erikalatorre',
    },
    bio: '**Erika La Torre** es diseñadora gráfica multidisciplinaria especializada en UX, usabilidad, accesibilidad y diseño de servicios. Lidera y gestiona equipos de diseño centrado en mejorar la experiencia de productos y servicios. Oriunda de Arequipa, Perú, vive hace 16 años en Argentina, le gustan los deportes al aire libre y de agua, es entusiasta ceramista, padawan del ukelele y de los idiomas.',
    talkType: TALK_TYPES.STANDARD,
    talkName: 'Liderazgo de adentro y de afuera: Yo, las personas, los procesos y la gestión',
    talkDescription:
      'Esta charla es mi recorrido de auto aprendizaje que fomenta el desarrollo de habilidades humanas necesarias para el trabajo en equipo, atravesado por los procesos de diseño, la gestión y que fui aprendiendo de gestionar personas.',
    talkSchedule: ['2021-08-26T19:40:00.000-03:00', '2021-08-26T20:10:00.000-03:00'],
  },
  {
    id: 'mailen-knoblovits',
    variant: 'C',
    photo: '/speakers/mailen-knoblovits@2x.png',
    nationality: NATIONALITIES.AR,
    firstName: 'Mailén',
    lastName: 'Knoblovits',
    socialMediaHandles: {
      twitter: 'mailenk',
      instagram: 'theartisandesigner',
    },
    bio: '**Mailén Knoblovits** es diseñadora web, comunicadora social y bailarina de tap. Co-fundadora de Artisan Themes y The Artisan Designer. Co-organizadora de la comunidad de WordPress Argentina.',
    talkType: TALK_TYPES.STANDARD,
    talkName: 'Cómo poner precio a mi trabajo',
    talkDescription:
      'Muchas veces sentimos que estamos cobrando poco en relación al tiempo y dedicación que un proyecto está tomando. ¿Cómo podemos cambiar eso? En esta charla vamos a hacer un recorrido por distintos modelos de fijación de precios, para proponer finalmente un modelo que creo yo suele resultar muy beneficioso para ambas partes pero que es sin embargo poco conocido o poco aplicado por la mayoría de los freelancers.',
    talkSchedule: ['2021-08-26T20:20:00.000-03:00', '2021-08-26T20:50:00.000-03:00'],
  },
  {
    id: 'facundo-corradini',
    variant: 'A',
    photo: '/speakers/facundo-corradini@2x.png',
    nationality: NATIONALITIES.AR,
    firstName: 'Facundo',
    lastName: 'Corradini',
    socialMediaHandles: {
      twitter: 'fcorradini',
      linkedin: 'facundo-corradini',
    },
    bio: '**Facundo Corradini** es un desarrollador front-end, mentor, speaker y autor. Nerd del CSS, pesado de la accessibilidad, fanático de la web performance, y fundamentalista del mate amargo.',
    talkType: TALK_TYPES.STANDARD,
    talkName: 'Accesibilidad para los invisibles',
    talkDescription:
      'En esta charla les contaré cómo mi experiencia personal con una discapacidad temporal cambió por completo mi forma de ver la accesibilidad, y con suerte, sirva para inspirarlos a crear webs y apps más inclusivas. Compartiré tips para crear mejores UI que mantienen en mente cada una de estas condiciones, aunque la lección principal es mucho más práctica: la accesibilidad no es cuestión de "nosotros" trabajando un poco más para "ellos", sino que todos formamos parte del "nosotros".',
    talkSchedule: ['2021-08-27T17:40:00.000-03:00', '2021-08-27T18:10:00.000-03:00'],
  },
  {
    id: 'federico-santana',
    variant: 'B',
    photo: '/speakers/federico-santana@2x.png',
    nationality: NATIONALITIES.AR,
    firstName: 'Federico',
    lastName: 'Santana',
    socialMediaHandles: {
      twitter: 'snowflakefede',
      instagram: 'snowflakefede',
    },
    bio: '**Federico Santana** es un programador, artista y entusiasta de la matemática nerd, que ama animar todo.',
    talkType: TALK_TYPES.LIGHTNING,
    talkName: 'Matemática, arte y programación: Un vistazo al creative code',
    talkDescription:
      '¿Cómo pueden mezclarse mundos como el arte, la matemática y la programación? ¡Descubrámoslo! A través de la programación creativa, podemos crear arte estático o en movimiento con el apoyo de la matemática.',
    talkSchedule: ['2021-08-27T18:20:00.000-03:00', '2021-08-27T18:30:00.000-03:00'],
  },
  {
    id: 'agustina-hufschmid',
    variant: 'C',
    photo: '/speakers/agustina-hufschmid@2x.png',
    nationality: NATIONALITIES.AR,
    firstName: 'Agustina',
    lastName: 'Hufschmid',
    socialMediaHandles: {},
    bio: '**Agustina Hufschmid** tiene 18 años y es entusiasta de la tecnología desde hace unos años y fanática de las películas de ciencia ficción de toda la vida. Le encantaría dedicarse a la inteligencia artificial y las ciencias cognitivas, eventualmente combinando IA con la neurociencia y la lingüística.',
    talkType: TALK_TYPES.STANDARD,
    talkName: 'Inteligencia artificial: ¿Cuál es el límite?',
    talkDescription:
      '¿Cuáles son los tipos de inteligencia artificial? ¿Qué podemos crear con ellas? ¿Acaso las películas de ciencia ficción nos mintieron? ¿Qué papel juega la moral?',
    talkSchedule: ['2021-08-27T18:40:00.000-03:00', '2021-08-27T19:10:00.000-03:00'],
  },
  {
    id: 'manuel-puentes',
    variant: 'C',
    photo: '/speakers/manuel-puentes@2x.png',
    nationality: NATIONALITIES.AR,
    firstName: 'Manuel',
    lastName: 'Puentes',
    socialMediaHandles: {
      twitter: 'manuhank',
      linkedin: 'manuhank',
    },
    bio: '**Manuel Puentes** es un desarrollador web con apego patológico por TypeScript. Actualmente se desempeña como contractor en PayPal.',
    talkType: TALK_TYPES.STANDARD,
    talkName: 'Desencriptando a mi bisabuela',
    talkDescription:
      'Esta charla es una historia narrativa en torno al desarrollo de un backtracing para desencriptar una nota, firmada por mi bisabuela y fechada casi 100 años atrás. Es un relato que ilustra algunos conceptos -basicos- de criptografía a la par que nos lleva a pensar nuestras comunidades como las herederas de generaciones, de radioaficionados, criptografos amateur, y mas generalmente todos aquellos que se animaron a jugar con la tecnología.',
    talkSchedule: ['2021-08-27T19:20:00.000-03:00', '2021-08-27T19:50:00.000-03:00'],
  },
  {
    id: 'romina-pontiroli',
    variant: 'A',
    photo: '/speakers/romina-pontiroli@2x.png',
    nationality: NATIONALITIES.AR,
    firstName: 'Romina',
    lastName: 'Pontiroli',
    socialMediaHandles: {
      linkedin: 'rominapontiroli',
    },
    bio: '**Romina Pontiroli** es ingeniera de base, docente de oficio. Le apasionan la tecnología, las historias de ciencia y los debates filosóficos sin fin. Dispuesta a cambiar el mundo de a una clase a la vez.',
    talkType: TALK_TYPES.STANDARD,
    talkName: 'Tras las cejas',
    talkDescription:
      'Una reflexión sobre el poder de la tecnología para eliminar barreras. Cómo es posible enseñar a mujeres privadas de su libertad y que trabajen desde la cárcel. La charla es para dar a conocer la experiencia y contagiar ganas de involucrarse en un futuro mejor. Contar cómo hay barreras que son mentales y no físicas, que se puede transmitir mucho aunque sea a través de una pantalla y que para gente privada de su libertad es un montón.',
    talkSchedule: ['2021-08-27T20:00:00.000-03:00', '2021-08-27T20:30:00.000-03:00'],
  },
];

export const WORKSHOPS = [
  {
    id: 'pwc',
    variant: 'A',
    photo: '/logos/PwC.svg',
    nationality: NATIONALITIES.AR,
    firstName: 'Full Stack',
    lastName: 'Python ',
    provider: 'PwC Argentina',
    bio: '**PwC** ofrece servicios de Auditoría, Consultoría, Asesoramiento Impositivo y Legal y Outsourcing Services centrados en la industria, para generar confianza pública y crear valor para nuestros clientes y las partes interesadas. Más de 284.000 personas en 155 países trabajan en equipo conectando pensamientos, experiencias y soluciones para desarrollar nuevas perspectivas y brindar asesoramiento práctico.',
    talkType: TALK_TYPES.WORKSHOP,
    talkName: 'Desarrollando una aplicación FullStack con Python',
    talkDescription: (
      <>
        <p>
          En este workshop se hará una práctica Hands-On desde cero sobre el desarrollo de una
          aplicación FullStack con el lenguaje de programación Python. Los temas a cubrir incluyen:
          (1) tipos y opciones para bases de datos, (2) características principales de los
          frameworks Back-end y (3) opciones disponibles para el Front-End.
        </p>
        <p>
          El objetivo del workshop es que al final todos los asistentes tengan una aplicación
          FullStack corriendo localmente. Se pondrá a disposición un repositorio de Github con todo
          el código a utilizar. Se asumen conocimientos mínimos tanto de Python como de Javascript.
        </p>
        <p>
          <strong>Requisitos</strong>
        </p>
        <ul>
          <li>Tener instalado Python (3.6 o superior).</li>
          <li>Tener instalado Node (Versión LTS).</li>
          <li>
            El workshop se realizará en un equipo con Windows pero puede usarse cualquier sistema
            operativo.
          </li>
          <li>
            No se requieren permisos de administrador pero sí asegurarse que los comandos pip y npm
            puedan usarse sin inconvenientes, esto es especialmente relevante si el workshop se
            realiza desde una VPN corporativa.
          </li>
        </ul>
      </>
    ),
    registrationUrl: 'https://forms.gle/V4ivVH1gaCfrSV1Q9',
    talkSchedule: ['2021-08-23T14:00:00.000-03:00', '2021-08-23T17:00:00.000-03:00'],
    closed: true,
  },
  {
    id: 'cognizant',
    variant: 'B',
    photo: '/logos/Cognizant.png',
    nationality: NATIONALITIES.AR,
    firstName: 'Frontend',
    provider: 'Cognizant Softvision',
    lastName: 'Progressive Web Apps',
    bio: '**Cognizant** (Nasdaq-100: CTSH) es una de las compañías líderes en servicios profesionales, transformando negocios de los clientes, modelos y operaciones tecnológicas para la era digital. Su acercamiento único en la consultoría basada en la industria ayuda a sus clientes a proyectar, construir y ejecutar negocios más eficientes e innovadores.',
    talkType: TALK_TYPES.WORKSHOP,
    talkName: 'Introducción a PWA + Implementación con React y Angular',
    registrationUrl: 'https://forms.gle/MqcTNeBKUwRhAyXw8',
    talkDescription: (
      <>
        Cubrimos las bases de qué es una PWA, la implementación en React y Angular, y repasamos
        detalles a tener en cuenta sobre cada una. El workshop va a estar organizado en una
        introducción, 3 o 4 módulos de actividades organizadas en grupo con soporte de referentes
        técnicos y conclusiones finales. Es tanto para principiantes como para desarrolladores web
        de nivel intermedio que estén interesados en el tema.
      </>
    ),
    talkSchedule: ['2021-08-24T14:00:00.000-03:00', '2021-08-24T15:00:00.000-03:00'],
    closed: true,
  },
  {
    id: 'coderio',
    variant: 'C',
    photo: '/logos/Coderio.svg',
    nationality: NATIONALITIES.AR,
    firstName: 'Full Stack',
    lastName: 'Dart & Flutter  ',
    provider: '_coderio',
    bio: '**_coderio** es una compañía de desarrollo de software fundada y basada en los Estados Unidos y Latinoamérica dede 2018, ayudando a sus clientes a alcanzar sus proyectos ideales.',
    talkType: TALK_TYPES.WORKSHOP,
    talkName: 'Aprende cómo crear un Rick And Morty Dashboard con Flutter Web',
    registrationUrl: 'https://forms.gle/6j1v4AZAgiKaNS8e6',
    talkDescription: (
      <>
        <p>
          En este viaje de no más de 120 minutos conocerás: lo bueno, lo malo y lo feo de Flutter
          Web y aprenderás los conceptos básicos del lenguaje Dart y el framework Flutter, creando
          un simple dashboard.
        </p>
        <ul>
          <li>Qué es Dart y Flutter.</li>
          <li>Qué se puede y que no con Flutter Web.</li>
          <li>Ventajas de Flutter.</li>
          <li>Sintaxis básica de Dart.</li>
          <li>Equivalencia entre código HTML/CSS y Flutter/Dart.</li>
          <li>Cómo armar un layout responsivo con Flutter Web.</li>
          <li>Cómo renderiza Flutter para la Web.</li>
          <li>Widgets. ¿Qué son? y ¿Cuales son los más usados?</li>
          <li>Publicando en la Web.</li>
        </ul>
        <p>
          <strong>Requerimientos</strong>
        </p>
        <ul>
          <li>Conocimientos en programación orientada a objetos.</li>
          <li>
            Un IDE (Visual Studio Code, Android Studio o IntelliJ Idea) y su correspondiente Flutter
            Plugin.
          </li>
          <li>Tener instalado Flutter/Dart SDKs.</li>
          <li>Navegador Web Chrome.</li>
        </ul>
        <p>
          <strong>Documentación</strong>
        </p>
        <ul>
          <li>
            <a
              href="https://flutter.dev/docs/get-started/install"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instación de Flutter
            </a>
          </li>
          <li>
            <a
              href="https://flutter.dev/docs/get-started/editor?tab=androidstudio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instación de plugin de Flutter/Dart
            </a>
          </li>
        </ul>
      </>
    ),
    talkSchedule: ['2021-08-24T14:00:00.000-03:00', '2021-08-24T15:00:00.000-03:00'],
    closed: true,
  },
  {
    id: 'artssec',
    variant: 'A',
    photo: '/logos/ArtsSec.png',
    nationality: NATIONALITIES.AR,
    provider: 'ArtsSEC',
    firstName: 'Seguridad',
    lastName: 'Burp Suite',
    bio: '**ArtsSec** fue fundada por un grupo de profesionales IT que se dedican a la seguridad informática. Se enfocan en proveer soluciones creativas y entregar servicios de alto valor a sus clientes. La compañía fue formada en 2012 por un equipo de expertos con décadas colectivas de experiencia trabajando para compañías multinacionales.',
    talkType: TALK_TYPES.WORKSHOP,
    talkName: 'Seguridad en Aplicaciones Web con Burp Suite Community',
    registrationUrl: 'https://forms.gle/4exP5d6rd1TP5gNT7',
    talkDescription: (
      <>
        En este Workshop aprenderemos a usar Burp Suite desde el inicio, cómo configurarlo,
        aprovechar las herramientas y funcionalidades existentes, usaremos las extensiones más
        conocidas mientras repasamos algunos laboratorios del Web Security Academy.
      </>
    ),
    talkSchedule: ['2021-08-25T15:00:00.000-03:00', '2021-08-25T17:00:00.000-03:00'],
  },
  {
    id: 'adcpueda',
    variant: 'B',
    photo: '/logos/ADC.svg',
    nationality: NATIONALITIES.AR,
    provider: 'Asociación por los Derechos Civiles (ADC)',
    firstName: 'Accesibilidad',
    lastName: 'Digital',
    bio: 'La **Asociación por los Derechos Civiles (ADC)** es una organización de la sociedad civil con sede en Argentina que, desde su creación en 1995, trabaja en la defensa y promoción de los derechos civiles y humanos en Argentina y América Latina. La ADC promueve y defiende los derechos fundamentales de las personas, fomenta el fortalecimiento democrático y aboga por una sociedad inclusiva, con especial atención a los grupos en situación de vulnerabilidad, a través de la identificación e investigación de temáticas de vanguardia, el desarrollo de estrategias de incidencia y comunicación, y en particular, el uso del litigio estratégico de interés público.',
    talkType: TALK_TYPES.WORKSHOP,
    talkName:
      'Accesibilidad Digital: ¿cómo construir webs, apps y plataformas digitales para todas las personas?',
    registrationUrl: 'https://forms.gle/ey7iZbDgpBDJ9Yik7',
    talkDescription: (
      <>
        Desde la campaña PUEDA - Por Un Entorno Digital Accesible de la Asociación por los Derechos
        Civiles (ADC) visibilizamos que la accesibilidad digital es un derecho de todas las
        personas, que posibilita el ejercicio de otros derechos fundamentales. Por este motivo, nos
        gustaría reflexionar junto a la comunidad WebConf 2021 sobre la importancia de incorporar
        criterios de accesibilidad en los desarrollos tecnológicos como webs, aplicaciones y
        plataformas digitales. Proponemos dividir el encuentro en tres partes:
        <ul>
          <li>
            Accesibilidad digital, desde una perspectiva de derecho
            <ul>
              <li>Breve historia de la campaña PUEDA</li>
              <li>
                El acceso a los servicios de la información y la comunicación y las personas con
                discapacidad
              </li>
              <li>Primeros pasos para la construcción de entornos accesibles</li>
              <li>
                Procesos iterativos a través de validaciones con experiencia de personas usuarias
              </li>
            </ul>
          </li>
          <li>
            Conceptos técnicos a tener en cuenta en el desarrollo de webs accesibles
            <ul>
              <li>
                Principios de accesibilidad web (WCAG/W3C): Perceptible, operable, comprensible,
                robusto
              </li>
              <li>Metodología estandarizada para validaciones</li>
              <li>Recursos y herramientas</li>
            </ul>
          </li>
          <li>Reflexiones sobre los beneficios de tener entornos digitales accesibles</li>
        </ul>
      </>
    ),
    talkSchedule: ['2021-08-27T15:00:00.000-03:00', '2021-08-27T17:00:00.000-03:00'],
  },
];
