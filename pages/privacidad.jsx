import styled, { createGlobalStyle } from 'styled-components';
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
  }
`;
const META = {
  description: 'Cuidamos tus datos, utilizándolos responsablemente.',
  ogTitle: 'WebConf LATAM | Política de privacidad',
  ogSiteName: 'WebConf LATAM | Política de privacidad',
  ogDescription: 'Cuidamos tus datos, utilizándolos responsablemente.',
  ogUrl: 'https://webconf.tech',
  ogLocale: 'es_AR',
  ogImage: 'https://webconf.tech/images/weblogo.png',
  twitterTitle: 'WebConf LATAM | Política de privacidad',
  twitterDescription: 'Cuidamos tus datos, utilizándolos responsablemente.',
  twitterSite: '@WebConfLATAM',
  twitterCreator: '@WebConfLATAM',
};

const WhitePanel = styled.div`
  background: #fff;
  padding: 2rem;
  width: 100%;
  display: grid;
  box-sizing: border-box;

  h1 {
    font-weight: 900;
    color: #f22588;
  }

  h2 {
    font-family: 500;
    color: #3c467e;
    margin-bottom: 2rem;
  }

  strong {
    font-size: 2rem;
    color: #000;
    text-align: left;
    margin: 5rem 0;
  }

  p {
    color: #333;
    text-align: left;
    font-size: 1.2rem;
    line-height: 2rem;
    margin-bottom: 2rem;
  }

  em {
    font-weight: 500;
    font-style: normal;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 5rem;
    margin: 5rem auto;
    width: 80%;

    strong {
      font-size: 4rem;
    }
  }
`;

const Privacy = () => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;900&display=swap"
        rel="stylesheet"
      />
      <title>WebConf LATAM 2021 | Política de privacidad</title>
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
    <WhitePanel>
      <h1>Nuestra política de privacidad es sencilla.</h1>
      <strong>
        A menos que nos des tu consentimiento, no compartimos tu información con nadie.
      </strong>
      <h2>¿Puedo confiar en ustedes?</h2>
      <p>
        Todo nuestro código es abierto y open source, por lo que puedes corroborar los aspectos
        técnicos de esta política de privacidad en{' '}
        <a href="https://github.com/somoscodear/webconf-2021">nuestro repositorio de GitHub.</a>
      </p>
      <h2>¿Qué información recolecta este sitio?</h2>
      <p>
        El sitio de WebConf LATAM 2021 tiene instalado un código de seguimiento de{' '}
        <em>Google Analytics</em>, que utilizamos para saber qué cantidad de visitas tenemos, así
        como también información básica de tu dispositivo (¿nos lees desde una computadora o desde
        un móvil?).
      </p>
      <p>
        A la hora de inscribirte en WebConf LATAM 2021, utilizamos los servicios de <em>Auth0</em>{' '}
        para conectar tu cuenta de <em>Google</em> con nuestra plataforma virtual, <em>Rombian</em>.
        Esto genera una cookie de sesión en tu navegador, con la cual podremos identificarte.
      </p>
      <p>
        Tu entrada digital <em>no contiene datos sensibles</em>. El código QR, más decorativo que
        funcional, es un link a la transmisión en vivo de WebConf LATAM 2021.
      </p>
      <h2>¿Cómo usan esta información?</h2>
      <p>
        Como lo pusimos al comienzo:{' '}
        <em>a menos que nos des tu consentimiento, no compartimos tu información con nadie</em>.
        Nuestros auspiciantes <em>no tienen ni tendrán acceso</em> a la lista de personas inscritas
        a la conferencia.
      </p>
      <p>
        Para la inscripción a los talleres, pedimos consentimiento explícito para acercarle tu
        dirección de correo electrónico a la organización que imparte el taller. En el caso que
        hayas respondido que no deseas compartir tus datos con la organización (que puede ser un
        auspiciante o no), <em>no compatiremos esa información. Punto.</em>
      </p>
      <p>
        Es posible que utilicemos tu información para contactarte acerca de nuevas ediciones de
        WebConf LATAM 2021, o de nuevas actividades relacionadas a la conferencia, desarrolladas por
        la Comunidad de Desarrolladores de Argentina (CoDeAr). En todo momento podrás solicitar la
        baja de estas comunicaciones, respondiendo a cualquier mensaje que hayas recibido y pidiendo
        la baja efectiva.
      </p>
      <h2>¿Dónde almacenan esta información?</h2>
      <p>
        Almacenamos tus datos en dos repositorios de información:
        <ul>
          <li>
            El primero es Auth0, quien es responsable de manejar el protocolo de inicio de sesión
            con Google. Al pasar por su pasarela de autenticación, una copia de los datos de tu
            cuenta de Google queda almacenada en nuestra cuenta. Esos datos incluyen: tu nombre y
            apellido tal cual los tienes en Google, tu dirección de correo electrónico y, si así lo
            tienes configurado, una foto de perfil.
          </li>
          <li>
            El segundo es una base de datos privada de Rombian, almacenada de forma segura en una
            instancia de Amazon RDS. En esta base sólo almacenamos tu dirección de correo
            electrónico.
          </li>
        </ul>
      </p>
      <h2>¿Puedo pedir que se elimine mi información?</h2>
      <p>
        ¡Por supuesto! Podrás hacerlo en cualquier momento escribiéndonos un mensaje a{' '}
        <a href="mailto:privacidad@codear.org">privacidad@codear.org</a>, indicándonos tu dirección
        de correo electrónico para eliminar la información asociada.
      </p>
    </WhitePanel>
    <Footer />
  </>
);

export default Privacy;
