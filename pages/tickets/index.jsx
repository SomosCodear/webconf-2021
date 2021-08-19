/* eslint-disable max-len */

import { useUser } from '@auth0/nextjs-auth0';
import html2canvas from 'html2canvas';
import Head from 'next/head';
import { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { Loading, Button } from '~/components/common';
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
    font-size: 5.5rem;
    line-height: 5rem;

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
  margin-bottom: 4rem;
  display: grid;
  grid-auto-flow: row;
  gap: 1rem;
  margin-top: 4rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: absolute;
    right: 5%;
    text-align: right;
    transform: scale(2);
    transform-origin: center right;
    margin-top: 0;
  }
`;

const saveTicket = (ticketRef, user, openWindow = true) =>
  new Promise((resolve) => {
    const rombianUserId = user?.rombianUser.id;
    if (!ticketRef.current) {
      return;
    }

    const ticketAnimation = ticketRef.current.style.animation;
    const ticketTransform = ticketRef.current.style.transform;

    // eslint-disable-next-line no-param-reassign
    ticketRef.current.style.animation = 'unset';
    // eslint-disable-next-line no-param-reassign
    ticketRef.current.style.transform = 'unset';

    html2canvas(ticketRef.current, {
      backgroundColor: null,
      width: ticketRef.current.clientWidth + 40,
      height: ticketRef.current.clientHeight + 40,
      x: 20,
      y: 20,
    }).then((canvas) => {
      const webconfTicketBase64Data = canvas
        .toDataURL('image/png')
        .replace(/data:image\/png;base64,/, '');
      fetch('/api/ticket', {
        method: 'POST',
        body: JSON.stringify({ rombianUserId, webconfTicketBase64Data }),
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((response) => {
          if (openWindow) {
            window.open(response.url, 'ticket');
          }

          // eslint-disable-next-line no-param-reassign
          ticketRef.current.style.animation = ticketAnimation;
          // eslint-disable-next-line no-param-reassign
          ticketRef.current.style.transform = ticketTransform;

          resolve({ ticketUrl: `https://webconf.tech/tickets/${rombianUserId}` });
        });
    });
  });

const shareToTwitter = (url) => {
  const text = `¡Ya tengo mi entrada para #WebConfLATAM2021! 💜 Charlas, workshops y mucho más en @WebConfLATAM, un evento organizado por @SomosCodear 🚀\n\n${url}`;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, 'twitter-share');
};

// transform: rotateY(-32.04deg) rotateX(-23.7deg);
const TicketPage = () => {
  const { user } = useUser();
  const ticketRef = useRef();
  const [originalAnimation, setOriginalAnimation] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

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

  const saveTicketClicked = useCallback(() => {
    if (user) {
      setIsProcessing(true);
      saveTicket(ticketRef, user).then(() => {
        setIsProcessing(false);
      });
    }
  }, [user, ticketRef]);

  const shareInTwitterClicked = useCallback(() => {
    if (user) {
      setIsProcessing(true);
      saveTicket(ticketRef, user, false).then(({ ticketUrl }) => {
        setIsProcessing(false);
        shareToTwitter(ticketUrl);
      });
    }
  }, [user, ticketRef]);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;900&display=swap"
          rel="stylesheet"
        />
        <title>Tu entrada para WebConf LATAM 2021</title>
      </Head>
      <Container onMouseMove={move} onMouseOut={animate}>
        <BeforeTicket>
          Aquí está tu entrada.
          <small>Ahora puedes invitar a todo el mundo a sumarse a WebConf LATAM 2021.</small>
        </BeforeTicket>
        <Ticket user={user} ref={ticketRef} />
        <AfterTicket>
          {isProcessing ? (
            <Loading />
          ) : (
            <>
              <Button variant="secondary" onClick={saveTicketClicked}>
                Descargar mi ticket
              </Button>
              <Button variant="primary" onClick={shareInTwitterClicked}>
                Compartir en Twitter
              </Button>
            </>
          )}
        </AfterTicket>
      </Container>
    </>
  );
};

export default TicketPage;
