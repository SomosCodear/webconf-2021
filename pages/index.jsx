import Head from 'next/head';
import StructuredData from '~/components/common/StructuredData';
import Header from '~/components/pages/home/Header';
// import MainSection from '../components/pages/home/mainSection';
// import Speakers from '../components/pages/home/speakers';
// import Sponsors from '../components/pages/home/sponsors';

import eventJsonLD from '~/data/json-ld/event.json';

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
      <StructuredData jsonLD={eventJsonLD} />
    </Head>
    <Header />
    {/* <MainSection />
    <Speakers />
    <Sponsors /> */}
  </>
);

export default Home;
