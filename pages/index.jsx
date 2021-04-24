import Head from 'next/head';

import Header from '../components/pages/home/Header';
/*
import MainSection from '../components/pages/home/mainSection';
import Speakers from '../components/pages/home/speakers';
import Sponsors from '../components/pages/home/sponsors';
*/

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
    </Head>
    <Header />
    {/* <MainSection />
  <Speakers />
  <Sponsors/> */}
  </>
);

export default Home;
