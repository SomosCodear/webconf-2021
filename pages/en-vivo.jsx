import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';
import { StructuredData } from '~/components/common';
import { Footer } from '~/components/pages/home';

import eventJsonLD from '~/data/json-ld/event.json';

const PageStyle = createGlobalStyle`
  html, body {
    background:
      ${({ theme }) => theme.colors.landingBackgroundGradientStart}
      linear-gradient(
        135deg,
        ${({ theme }) => theme.colors.landingBackgroundGradientStart} 20%,
        ${({ theme }) => theme.colors.landingBackgroundGradientEnd}
      )
      fixed;
    font-family: Epilogue, sans-serif;
    color: ${({ theme }) => theme.colors.landingText};
    margin: 0;
    padding: 0;
  }
`;
const META = {
  description: '¡Seguí minuto a minuto la transmisión de la conferencia!',
  ogTitle: 'WebConf LATAM 2021 | ¡EN VIVO!',
  ogSiteName: 'WebConf LATAM 2021 | ¡EN VIVO!',
  ogDescription: '¡Seguí minuto a minuto la transmisión de la conferencia!',
  ogUrl: 'https://webconf.tech',
  ogLocale: 'es_AR',
  ogImage: 'https://webconf.tech/images/weblogo.png',
  twitterTitle: 'WebConf LATAM 2021 | ¡EN VIVO!',
  twitterDescription: '¡Seguí minuto a minuto la transmisión de la conferencia!',
  twitterSite: '@WebConfLATAM',
  twitterCreator: '@WebConfLATAM',
};

const Live = () => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;900&display=swap"
        rel="stylesheet"
      />
      <title>WebConf LATAM 2021 | ¡EN VIVO!</title>
      <meta name="description" content={META.description} />
      <meta property="og:title" content={META.ogTitle} />
      <meta property="og:site_name" content={META.ogSiteName} />
      <meta property="og:description" content={META.ogDescription} />
      <meta property="og:url" content={META.ogUrl} />
      <meta property="og:locale" content={META.ogLocale} />
      <meta property="og:image" content={META.ogImage} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={META.twitterTitle} />
      <meta name="twitter:description" content={META.twitterDescription} />
      <meta name="twitter:site" content={META.twitterSite} />
      <meta name="twitter:creator" content={META.twitterCreator} />
      <StructuredData jsonLD={eventJsonLD} />
    </Head>
    <PageStyle />
    <iframe
      width="100%"
      height="100%"
      title="Rombian"
      src="https://rombian-city.experiments.codear.org/"
      frameBorder={0}
      frameSpacing={0}
    />
    <p style={{ textAlign: 'center' }}>
      <strong>Controles:</strong> W = Adelante, A = Izquierda, S = Atrás, D = Derecha, T = Chat |
      ¿No podés ver las charlas? Entrá a{' '}
      <a href="https://youtube.com/codear" target="_blank" rel="noreferrer">
        YouTube
      </a>{' '}
      o{' '}
      <a href="https://twitch.tv/somoscodear" target="_blank" rel="noreferrer">
        Twitch
      </a>
    </p>
    <Footer />
  </>
);

export default Live;
