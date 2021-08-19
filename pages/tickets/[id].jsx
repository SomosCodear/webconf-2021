/* eslint-disable max-len */
import propTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { User } from '~/data/rombian';
import { Button } from '~/components/common/Button';
import { Ticket } from '~/components/pages/tickets';

const Container = styled.main`
  display: grid;
  padding: 2rem 0;
  place-items: center;
  background: #000;
  font-size: 150%;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 95%;
    height: fit-content;
  }
`;

const BeforeTicket = styled.section`
  color: #fff;
  font-family: Epilogue;
  font-weight: 900;
  font-size: 2rem;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.landingSpeakerPrincipleSubtitle};

  small {
    display: block;
    color: white;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: absolute;
    width: 30%;
    left: 5%;
    font-size: 6rem;
    line-height: 4rem;

    small {
      margin-top: 5rem;
      font-size: 2rem;
      line-height: 2rem;
    }
  }
`;

const AfterTicket = styled.section`
  color: #fff;
  font-family: Epilogue;
  font-weight: 900;
  font-size: 4rem;
  margin-top: 5rem;
  margin-bottom: 4rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: absolute;
    width: 30%;
    right: 5%;
    text-align: right;
    transform: scale(2);
    transform-origin: center right;
    margin-top: 0;
  }
`;

const GetTicketButton = styled(Button).attrs({
  forwardedAs: 'a',
  variant: 'secondary',
})`
  display: inline-block;
`;

// transform: rotateY(-32.04deg) rotateX(-23.7deg);
const TicketPage = ({ id, alias }) => {
  const ticketRef = useRef();
  const [originalAnimation, setOriginalAnimation] = useState('');
  const move = useCallback((e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    const brightnessFactor = Math.max(1, Math.abs(xAxis) / 15);
    window.requestAnimationFrame(() => {
      if (ticketRef.current.style.animation !== 'unset') {
        setOriginalAnimation(ticketRef.current.style.animation);
        ticketRef.current.style.animation = 'unset';
      }
      ticketRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      ticketRef.current.style.filter = `brightness(${brightnessFactor}) hue-rotate(${
        xAxis + yAxis
      }deg) drop-shadow(0px 0px 200px #657cbd)`;
    });
  }, []);

  const animate = useCallback(() => {
    ticketRef.current.style.animation = originalAnimation;
  }, [originalAnimation]);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;900&display=swap"
          rel="stylesheet"
        />
        <title>Tu entrada para WebConf LATAM 2021</title>
        <meta property="og:title" content="¡Ya tengo mi entrada para WebConf LATAM 2021!" />
        <meta property="og:site_name" content="WebConf LATAM 2021" />
        <meta property="og:url" content={`https://webconf.tech/tickets/${id}`} />
        <meta
          property="og:description"
          content="¡Entrá a webconf.tech y obtené tu entrada ahora!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`https://webconf-tickets.s3.sa-east-1.amazonaws.com/ticket-${id}.png`}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@WebConfLATAM" />
        <meta
          name="twitter:description"
          content="¡Entrá a webconf.tech y obtené tu entrada ahora!"
        />
        <meta name="twitter:title" content="¡Ya tengo mi entrada para WebConf LATAM 2021!" />
        <meta
          name="twitter:image"
          content={`https://webconf-tickets.s3.sa-east-1.amazonaws.com/ticket-${id}.png`}
        />
      </Head>
      <Container onMouseMove={move} onMouseOut={animate}>
        <BeforeTicket>
          Ya falta poco.
          <small>¡Únete a @{alias} en WebConf LATAM 2021!</small>
        </BeforeTicket>
        <Ticket user={{ rombianUser: { id, alias } }} ref={ticketRef} />
        <AfterTicket>
          <Link href="/api/auth/login?returnTo=/tickets" passHref>
            <GetTicketButton>Quiero mi entrada</GetTicketButton>
          </Link>
        </AfterTicket>
      </Container>
    </>
  );
};

TicketPage.propTypes = {
  id: propTypes.string.isRequired,
  alias: propTypes.string.isRequired,
};

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;

  const { alias } = await User.findByPk(id);

  return {
    props: {
      id,
      alias,
    },
  };
};

export default TicketPage;
