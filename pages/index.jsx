import { useRef, useCallback } from 'react';
import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';
import { StructuredData } from '~/components/common';
import { Header, MainSection } from '~/components/pages/home';
import Speakers from '../components/pages/home/speakers';
import Sponsors from '../components/pages/home/sponsors';

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
    font-family: Epilogue;
  }
`;
const META = {
  description:
    'La conferencia sobre desarrollo Web de alcance latinoamericano, organizada por CoDeAr. ' +
    '23 al 27 de Agosto de 2021.',
  ogTitle: 'WebConf LATAM',
  ogSiteName: 'WebConf LATAM',
  ogDescription:
    'La conferencia sobre desarrollo Web de alcance latinoamericano, organizada por CoDeAr. ' +
    '23 al 27 de Agosto de 2021.',
  ogUrl: 'https://webconf.tech',
  ogLocale: 'es_AR',
  ogImage: 'https://webconf.tech/images/weblogo.png',
  twitterTitle: 'WebConf LATAM',
  twitterDescription:
    'La conferencia sobre desarrollo Web de alcance latinoamericano, organizada por CoDeAr. ' +
    '23 al 27 de Agosto de 2021.',
  twitterSite: '@WebConfLATAM',
  twitterCreator: '@WebConfLATAM',
};

const Home = () => {
  const mainSectionRef = useRef(null);
  const goToMainsection = useCallback(
    () => mainSectionRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' }),
    [],
  );

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;900&display=swap"
          rel="stylesheet"
        />
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
      <Header onLearnMoreClick={goToMainsection} />
      <MainSection ref={mainSectionRef} />
      <Speakers />
      <Sponsors />
    </>
  );
};

export default Home;
