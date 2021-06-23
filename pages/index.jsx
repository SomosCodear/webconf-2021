import Head from 'next/head';
import StructuredData from '~/components/common/StructuredData';
import Header from '~/components/pages/home/Header';
// import MainSection from '../components/pages/home/mainSection';
// import Speakers from '../components/pages/home/speakers';
// import Sponsors from '../components/pages/home/sponsors';

import eventJsonLD from '~/data/json-ld/event.json';

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

const Home = () => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;900&display=swap"
        rel="stylesheet"
      />
      <style>{`
      html, body {
        background: #272D5B linear-gradient(135deg, #272D5B 20%, #4E0528) fixed;
        font-family: Epilogue;
      }
    `}</style>
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
    <Header />
    {/* <MainSection />
    <Speakers />
    <Sponsors /> */}
  </>
);

export default Home;
