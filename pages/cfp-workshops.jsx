import Head from 'next/head';
import { CFP } from '~/components/pages/cfp';

const CFPPage = () => (
  <>
    <Head>
      <title>WebConf LATAM 2021 | Postulá tu taller</title>
      <style>{`
        html, body {
          font-family: Roboto, sans-serif;
        }
      `}</style>
    </Head>
    <CFP type="workshops" />
  </>
);

export default CFPPage;
