import { useEffect, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import topicsJson from '../public/topics.json';
import { Button } from '~/components/common/Button';

const Container = styled.main`
  display: grid;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  place-items: center;
  color: #fff;
  gap: 1rem;
  padding: 0 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0;
    height: 100%;
    grid-template-rows: 1.5fr 1fr;
  }
`;

const Subtitle = styled.h1`
  font-size: 1rem;
  text-align: center;
  font-weight: 500;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.25rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #5bfafd;
  margin-top: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 0;
    font-size: 3rem;
  }
`;

const Topics = styled.ol`
  list-style: none;
  padding: 0;
  display: grid;
  gap: 3rem;
  text-align: center;
  grid-template-rows: auto auto auto;
  padding: 0 2rem 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    align-items: flex-start;
    align-self: flex-start;
    grid-template-rows: 10rem;
    padding: 0;
  }
`;

const Topic = styled.li`
  line-height: 150%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    &:nth-child(1) {
      text-align: left;
    }

    &:nth-child(3) {
      text-align: right;
    }
  }
`;

const TopicName = styled.a`
  font-size: 2rem;
  font-weight: 900;
  display: block;
  margin-bottom: 1rem;
  color: #f22588;

  &:hover {
    text-decoration: underline;
  }
`;

const CenteredBlock = styled.div`
  display: grid;
  place-items: center;
`;

const Section = styled.section``;

const TopicDescription = styled.p``;

const SearchButton = styled(Button)`
  transition: 150ms all linear;
  width: 350px;

  &.searching {
    animation: 1s blink infinite linear;
    width: 200px;
  }

  @keyframes blink {
    0% {
      color: #a7005000;
    }

    50% {
      color: #a70050ff;
    }

    100% {
      color: #a7005000;
    }
  }
`;

const Ideas = () => {
  const [isShuffling, setIsShuffling] = useState(false);
  const [topics, setTopics] = useState([]);
  const [shufflerInterval, setShufflerInterval] = useState(undefined);

  useEffect(() => {
    if (isShuffling) {
      setShufflerInterval(
        setInterval(() => {
          setTopics(
            topicsJson
              .sort(() => {
                const leftRandom = Math.random();
                const rightRandom = Math.random();

                if (leftRandom < rightRandom) {
                  return -1;
                }

                if (leftRandom > rightRandom) {
                  return 1;
                }

                return 0;
              })
              .slice(0, 3),
          );
        }, 10),
      );
      setTimeout(() => {
        setIsShuffling(false);
      }, 3000);
    } else {
      clearInterval(shufflerInterval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShuffling]);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;900&display=swap"
          rel="stylesheet"
        />
        <style>{`
          * { box-sizing: border-box; }

          html, body {
            background: #272D5B linear-gradient(135deg, #272D5B 20%, #4E0528) fixed;
            font-family: Epilogue;
          }
        `}</style>
        <title>WebConf LATAM 2021 | ¡Buscá ideas para tu charla!</title>
        <meta property="og:title" content="WebConf LATAM 2021 | ¡Buscá ideas para tu charla!" />
        <meta property="og:site_name" content="WebConf LATAM 2021" />
        <meta property="og:url" content="https://webconf.tech/ideas" />
        <meta
          property="og:description"
          content={
            '¿No sabés de qué hablar en tu propuesta de charla ' +
            'para WebConf 2021? Aquí te sugerimos algunas ideas.'
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://webconf.tech/images/weblogo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@WebConfLATAM" />
        <meta
          name="twitter:description"
          content={
            '¿No sabés de qué hablar en tu propuesta de charla ' +
            'para WebConf 2021? Aquí te sugerimos algunas ideas.'
          }
        />
        <meta name="twitter:title" content="WebConf LATAM 2021 | ¡Buscá ideas para tu charla!" />
        <meta name="twitter:image" content="https://webconf.tech/images/weblogo.png" />
      </Head>
      <Container>
        <Section>
          <CenteredBlock>
            <img src="/images/weblogo.png" width="350" height="350" alt="" />
          </CenteredBlock>
          <Subtitle>¿No sabés de qué hablar en tu propuesta de charla para WebConf 2021?</Subtitle>
          <Title>Aquí te sugerimos algunas ideas...</Title>

          <CenteredBlock style={{ marginTop: '2rem' }}>
            <SearchButton
              className={isShuffling ? 'searching' : ''}
              onClick={() => setIsShuffling(true)}
            >
              {isShuffling ? 'Buscando' : 'Buscar'}
            </SearchButton>
          </CenteredBlock>
        </Section>
        <Topics style={isShuffling ? { filter: 'blur(5px)' } : {}}>
          {topics.map((topic) => (
            <Topic key={topic.topic}>
              <TopicName
                target="_blank"
                rel="noopener noreferrer"
                href={topic.url || `https://github.com/topics/${topic.topic}`}
              >
                {topic.display_name}
              </TopicName>
              <TopicDescription>
                {(topic.description_spanish || '').length > 500
                  ? `${topic.description_spanish.substr(0, 500)}...`
                  : topic.description_spanish}
              </TopicDescription>
            </Topic>
          ))}
        </Topics>
      </Container>
    </>
  );
};

export default Ideas;
