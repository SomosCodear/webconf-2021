/* eslint-disable max-len */

import refactorDevsLogo from '~/public/logos/RefactorDevs.jpg';
import metLogo from '~/public/logos/MeT.jpg';
import misionesITLogo from '~/public/logos/MisionesIT.jpg';
import javaJugBairesLogo from '~/public/logos/JavaJugBaires.jpg';
import beerJSCbaLogo from '~/public/logos/BeerJSCba.png';
import wigArLogo from '~/public/logos/WiGAR.jpg';

const COMMUNITIES = [
  {
    id: 'refactor-devs',
    name: 'Refactor Devs',
    url: 'https://refactordevs.org',
    logo: refactorDevsLogo,
    description:
      'Somos una comunidad hispanohablante enfocada al ambiente IT, ¡pero más nos gusta hablar sarasa, tomar birra y comer chambuchitos!',
    links: [
      {
        provider: 'twitter',
        handle: 'refactordevs',
      },
      {
        provider: 'instagram',
        handle: 'refactordevs',
      },
    ],
  },
  {
    id: 'met',
    name: 'Mujeres en Tecnología',
    description:
      'Somos una comunidad que trabajamos con el propósito de impulsar la participación de las mujeres y personas de género no binario en diversas áreas de tecnología, promoviendo un ecosistema diverso e inclusivo.',
    url: 'https://mujeresentecnologia.org',
    logo: metLogo,
    links: [
      {
        provider: 'twitter',
        handle: 'comunidadmet',
      },
      {
        provider: 'instagram',
        handle: 'comunidadmet',
      },
      {
        provider: 'linkedin',
        handle: 'comunidadmet',
      },
      {
        provider: 'facebook',
        handle: 'comunidadmet',
      },
    ],
  },
  {
    id: 'beerjs-cba',
    name: 'BeerJS Cba',
    description: 'Capítulo cordobés del meetup internacional BeerJS.',
    url: 'https://beerjscba.com',
    logo: beerJSCbaLogo,
    links: [
      {
        provider: 'twitter',
        handle: 'beerjscba',
      },
      {
        provider: 'instagram',
        handle: 'beerjscba',
      },
    ],
  },
  {
    id: 'mit',
    name: 'Misiones IT',
    description: 'Comunidad de desarrolladores y desarrolladoras de Misiones.',
    url: 'https://comit.ar',
    logo: misionesITLogo,
    links: [
      {
        provider: 'twitter',
        handle: 'comunidadmit',
      },
      {
        provider: 'instagram',
        handle: 'comunidadmit',
      },
      {
        provider: 'github',
        handle: 'Comunidad-Misiones-IT',
      },
    ],
    iconFormat: 'jpg',
  },
  {
    id: 'women-in-games-ar',
    name: 'Women In Games Argentina',
    description:
      'Women in Games Argentina es una comunidad de networking de profesionales y aficionadxs de la industria de videojuegos, que nuclea a mujeres y disidencias de Argentina. Nuestra misión principal es trabajar por una industria de videojuegos más inclusiva, a partir de varias acciones concretas: visibilizar, educar y crear oportunidades de acceso y trabajo para grupos y minorías tradicionalmente en desventaja.',
    logo: wigArLogo,
    links: [
      {
        provider: 'instagram',
        handle: 'womeningamesargentina',
      },
      {
        provider: 'facebook',
        handle: 'womeningamesAR',
      },
      {
        provider: 'twitter',
        handle: 'womeningamesar',
      },
      {
        provider: 'linkedin',
        handle: 'women-in-games-arg',
      },
    ],
  },
  {
    id: 'javajug-bsas',
    name: 'Java JUG BsAs Community',
    description:
      'Somos una Comunidad de Desarrolladoras/es e interesad@s en JAVA. Expertos o iniciados, todos son bienvenidos. Nos reunimos para capacitarnos, compartir nuestros conocimientos, experiencias que nos permitan crecer en nuestras profesiones y proyectos, en el cual entre todos, podamos aprender nuevas herramientas, métodos, procedimientos, técnicas y tecnologías.',
    logo: javaJugBairesLogo,
    links: [
      {
        provider: 'twitter',
        handle: 'javabsas',
      },
      {
        provider: 'instagram',
        handle: 'javajugbsas',
      },
      {
        provider: 'linkedin',
        handle: 'java-bsas-meetup',
      },
      {
        provider: 'facebook',
        handle: 'javabsascomunidad',
      },
    ],
  },
];

export default COMMUNITIES;
