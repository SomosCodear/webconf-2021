import Head from 'next/head';
import { CFP } from '~/components/pages/cfp';

const CFPPage = () => (
  <>
    <Head>
      <title>WebConf LATAM 2021 | Postulá tu charla</title>
      <style>{`
        font-family: Roboto, sans-serif;
      `}</style>
    </Head>
    <CFP />
  </>
);

export default CFPPage;
