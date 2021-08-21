import styled, { createGlobalStyle } from 'styled-components';
import Image from 'next/image';
import { DateTime } from 'luxon';
import { useState, useEffect } from 'react';
import { Background } from '~/components/pages/home/Background';
import webConfLogo from '~/public/logos/WebConf.svg';

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

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

const Countdown = styled.h1`
  font-family: monospace;
  z-index: 10;
  font-size: 2rem;
  background: #0008;
  padding: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 10rem;
  }
`;

const CoolBackground = styled(Background)`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  zoom: 3;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    transform: none;
    zoom: unset;
  }
`;

const zeroed = (num, digits = 2) => num.toString().padStart(digits, '0');
const ThreeTwoOne = () => {
  const launch = DateTime.fromRFC2822('23 Aug 2021 17:00:00 -0300');
  const [remaining, setRemaining] = useState('...');

  useEffect(() => {
    setInterval(() => {
      const { days, hours, minutes, seconds, milliseconds } = launch.diff(DateTime.now(), [
        'days',
        'hours',
        'minutes',
        'seconds',
        'milliseconds',
      ]);

      window.requestAnimationFrame(() => {
        setRemaining(
          `${zeroed(days)}:${zeroed(hours)}:${zeroed(minutes)}:${zeroed(seconds)}.${zeroed(
            milliseconds,
            3,
          )}`,
        );
      });
    }, 10);
  }, [launch]);

  return (
    <>
      <PageStyle />
      <Container>
        <CoolBackground hideBlur alwaysInfinite />
        <Countdown>{remaining}</Countdown>
        <Image src={webConfLogo} alt="WebConf Logo" width={226} height={61} />
      </Container>
    </>
  );
};

export default ThreeTwoOne;
