import { useEffect, useRef, useState } from 'react';
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

const ArticleContainer = styled.article`
  display: grid;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  place-items: center;
  color: #1f1f1f;
  gap: 1rem;
  padding: 0 1rem;
  background: #fff;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 3rem;
    border-radius: 6px;
  }
`;

const Subtitle = styled.h2`
  font-size: 1rem;
  text-align: center;
  font-weight: 500;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.25rem;
  }
`;

const LeftSubtitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  margin-top: 3rem;
  color: #f22588;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.25rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #5bfafd;
  margin-top: 1rem;

  article & {
    color: #1f1f1f;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 0;
    font-size: 3rem;
  }
`;

const Topics = styled.ol`
  list-style: none;
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

const ButtonContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-auto-flow: column;
  }
`;

const SearchButton = styled(Button)`
  transition: 150ms all linear;
  width: 350px;

  &.searching {
    animation: 1s blink infinite linear;
    width: 200px;
  }

  @keyframes blink {
    0% {
      color: #ffffff00;
    }

    50% {
      color: #ffffffff;
    }

    100% {
      color: #ffffff00;
    }
  }
`;

const Paragraph = styled.p`
  line-height: 175%;
  margin-top: 2rem;
  text-align: justify;
`;

const Ideas = () => {
  const [isShuffling, setIsShuffling] = useState(false);
  const [topics, setTopics] = useState([]);
  const [shufflerInterval, setShufflerInterval] = useState(undefined);

  const articleRef = useRef();
  const topicsRef = useRef();

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
        topicsRef.current.scrollIntoView({ behavior: 'smooth' });
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
        {!isShuffling ? (
          <Section>
            <CenteredBlock>
              <img src="/images/weblogo.png" width="350" height="350" alt="" />
            </CenteredBlock>
            <Subtitle>
              ¿No sabés de qué hablar en tu propuesta de charla para WebConf 2021?
            </Subtitle>
            <Title>
              Aquí te sugerimos algunas ideas, usando tópicos de GitHub y Stack Overflow en español.
            </Title>

            <CenteredBlock style={{ marginTop: '2rem' }}>
              <ButtonContainer>
                <SearchButton
                  variant="secondary"
                  className={isShuffling ? 'searching' : ''}
                  onClick={() => setIsShuffling(true)}
                >
                  {isShuffling ? '...' : 'Buscar'}
                </SearchButton>
                <Button
                  variant="primary"
                  onClick={() => articleRef.current.scrollIntoView({ behavior: 'smooth' })}
                >
                  Leé nuestra guía
                </Button>
              </ButtonContainer>
            </CenteredBlock>
          </Section>
        ) : (
          ''
        )}
        <Topics ref={topicsRef} style={isShuffling ? { filter: 'blur(5px)' } : {}}>
          {topics.map((topic) => (
            <Topic key={topic.topic}>
              <TopicName
                target="_blank"
                rel="noopener noreferrer"
                href={topic.url || `https://github.com/topics/${topic.topic}`}
              >
                {topic.display_name || topic.topic}
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
      {!isShuffling ? (
        <ArticleContainer ref={articleRef}>
          <Section>
            <Title>¿Cómo encontrar ideas para tu charla?</Title>

            <Paragraph>
              Si estás leyendo esto probablemente tengas ganas de hablar en la conferencia, pero no
              sepas muy bien de qué. No te preocupes, es algo super común. A veces cuesta encontrar
              un tema particular entre tantas cosas que tenemos dando vueltas en la cabeza, como
              cuando entras a una heladería nueva y ves que tiene 80 sabores distintos. Otras
              realmente no se nos ocurre nada. Aquí te dejamos algunas técnicas que te pueden ayudar
              a encontrar el tema ideal para tu charla:
            </Paragraph>
            <LeftSubtitle>Hablanos de lo que sabés</LeftSubtitle>
            <Paragraph>
              Y bueno, había que empezar por lo obvio. Pero aun así a veces cuesta encontrarle el
              enfoque o convencernos de que somos la persona indicada para esto. Seguro a casi todos
              nos pasa que pensamos “hay tantos devs en el mundo mejor capacitados para dar esta
              charla, ¿por qué la voy a dar yo?”
            </Paragraph>
            <Paragraph>
              La respuesta es super simple: tu enfoque es único. Salvo que seas un clon directo o
              una simulación de computadora, la personalidad hace que dos charlas de lo mismo dadas
              por diferentes personas terminen siendo esencialmente distintas. Hay cosas que he
              visto explicadas por diez personas distintas, y recién el onceavo lo hizo de un modo
              que impactó en mí y me llevó a entenderlo al fin.
            </Paragraph>
            <Paragraph>
              Recordá que esta conferencia no se basa en tecnologías particulares (no busca charlas
              sobre X framework o Y producto), pero quizás puedas hablarnos sobre un concepto que te
              apasiona, ya sea algo super popular o por el contrario algo que crees que debería
              tener mucha más atención de la que tiene.
            </Paragraph>
            <LeftSubtitle>
              Contanos de algún concepto nuevo que te entusiasma, o de alguno que extrañás de los
              viejos tiempos
            </LeftSubtitle>
            <Paragraph>
              Los stacks van y vienen, pero las tecnologías núcleo quedan. Y siguen progresando
              enormemente, muchas veces incorporando conceptos de los frameworks y libraries al
              lenguaje mismo.
            </Paragraph>
            <Paragraph>
              Si alguno de estos conceptos nuevos te entusiasman, quizás puedas contarnos alguno en
              profundidad, o demostrar cómo se usaría en el mundo real. Una buena explicación de las
              cosas más recientes, o incluso de lo que apenas está asomando por el horizonte,
              siempre es un ejercicio interesante.
            </Paragraph>
            <Paragraph>
              O yendo al otro extremo, si ves que algún concepto que abandonamos hace tiempo podría
              estar por volver, o incluso si crees que nunca debimos abandonarlo, sin dudas sería
              interesante que compartas esa postura.
            </Paragraph>
            <LeftSubtitle>Contanos de los desafíos que notás en la industria</LeftSubtitle>
            <Paragraph>
              Ya sea en la carrera o en el trabajo, seguro has notado cosas en las que podríamos
              mejorar. Quizás tengas alguna idea de cómo podríamos ser más inclusivos, mas
              eficientes, o más equitativos. O simplemente más felices, que no es poco.
            </Paragraph>
            <Paragraph>
              Por ahí ves algún rol que está haciendo falta crear, o alguno que está poco valorado y
              merece mucho más apoyo, o se te ocurrió alguna vuelta para que las empresas no se
              saquen los ojos por el talento local, y/o que permita mejorar los salarios o la
              equidad en el equipo.
            </Paragraph>
            <Paragraph>
              Aunque no tengas la solución específica, simplemente exponer el problema para generar
              conciencia puede ser un buen punto de partida.
            </Paragraph>
            <LeftSubtitle>
              Hablanos de alguna experiencia que te haya cambiado la forma de ver las cosas
            </LeftSubtitle>
            <Paragraph>
              A veces venimos a 120 con una forma de pensar muy arraigada y de golpe nos chocamos la
              pared.
            </Paragraph>
            <Paragraph>
              Desde esa vez que te diste cuenta que no sabías realmente algo que creías tener super
              claro, a cuando una metodología alternativa nos ayudó a destrabarnos en un proyecto
              que se estaba volviendo una papa caliente, o cuando nos topamos con una limitación de
              esa library que siempre usamos y al solucionarlo con vanilla JS nos preguntamos por
              qué la estábamos usando realmente. O incluso yendo a un terreno más personal, quizás
              hayas notado que el esfuerzo que estabas haciendo por mejorar la comunicación del
              equipo estaba generando el efecto contrario, o que te estaban percibiendo de una forma
              completamente opuesta a la que creías mostrar.
            </Paragraph>
            <Paragraph>
              Por ejemplo, en una de mis propuestas hablo de cómo una discapacidad temporal me hizo
              dar cuenta que estaba encarando la accesibilidad desde un ángulo completamente
              erroneo, a pesar de haber sido siempre “el denso que habla de accesibilidad”.
            </Paragraph>
            <LeftSubtitle>Hablanos de tus fracasos</LeftSubtitle>
            <Paragraph>
              Como dijo Yoda, “el mejor maestro, el fracaso es”. Así que si diste algún paso en
              falso últimamente (¿quién no?) y aprendiste algo de ello, quizás sea una lección que
              se pueda compartir. Por ahí procrastinabas demasiado, o te ibas al otro extremo y
              trabajaste sin parar hasta llegar al burn out. Quizás fuiste de los que se quedan
              eternamente en el infierno de los tutoriales o de los que se duermen en los laureles
              creyendo que ya saben todo, hasta que te das cuenta que nadie sabe todo. Por ahí eras
              de quienes no pueden decir que no, o en la otra punta, de quienes tiraban buenas ideas
              con malos modos, y cualquiera de las dos cosas estaba matando el progreso en tu
              carrera.
            </Paragraph>
            <Paragraph>
              Sería super interesante escuchar las técnicas que fuiste implementando para mejorar en
              lo personal y en lo profesional. Nuestra industria es particularmente jodida con las
              cuestiones de salud mental (y también la física, que no estamos hechos para estar
              sentados todo el día tecleando), así que si tenes algo que aportar en estos temas
              ¡queremos escucharlo!
            </Paragraph>
            <Paragraph>
              No solo es algo interesante, puede ser clave para cambiarle la vida a otras personas
              de la industria.
            </Paragraph>
            <LeftSubtitle>¡Escribí la charla que te gustaría escuchar!</LeftSubtitle>
            <Paragraph>
              Suena poco ortodoxo, pero una gran forma de encontrar temas de los que hablar es
              precisamente pensar en qué charla te gustaría escuchar. Claro está, probablemente no
              seas la mayor autoridad del mundo en el tema y por eso quizás te parezca raro este
              consejo, pero a veces las mejores charlas no vienen de autoridades establecidas sino
              de quienes más entusiasmo tienen.
            </Paragraph>
            <Paragraph>
              ¿Te va a llevar más trabajo? Por supuesto. Pero es una excelente forma de aprender y
              compartir ese conocimiento con la comunidad.
            </Paragraph>
            <LeftSubtitle>¡Usá nuestro generador de ideas!</LeftSubtitle>
            <Paragraph>
              A algunas personas les funciona bien la exploración libre, y para eso puede venirles
              muy bien el generador de ideas de WebConf. Sencillamente dandole click al botón de
              búsqueda arriba te van a ir apareciendo ideas de a tres en tres, basados en temas
              populares de StackOverflow y GitHub. Tomate unos segundos en cada resultado y revisa
              los párrafos, por ahí el título es de una librería en particular (que de nuevo, no es
              la idea de la WebConf) pero la descripción te sirve como disparador para elegir un
              concepto. Y sino, ¡a darle de nuevo al botón hasta que aparezca algo!
            </Paragraph>
            <LeftSubtitle>
              Aunque no tengas la idea completa, ¡animate y envia la propuesta!
            </LeftSubtitle>
            <Paragraph>
              El equipo de WebConf te va a ayudar a desarrollar la idea y darle forma a la charla si
              es necesario. Queremos escuchar voces diversas, y compartir no solo grandes
              conocimientos técnicos sino también experiencias personales. Así que aunque no estés
              completamente seguro, ¡animate! ¡Esperamos tu propuesta!
            </Paragraph>
            <Paragraph>
              (¡Gracias a{' '}
              <a href="https://twitter.com/fcorradini" target="_blank" rel="noopener noreferrer">
                <strong>Facundo Corradini</strong>
              </a>{' '}
              por esta guía!)
            </Paragraph>
          </Section>
        </ArticleContainer>
      ) : (
        ''
      )}
    </>
  );
};

export default Ideas;
