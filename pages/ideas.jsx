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
            font-family: Epilogue, sans-serif;
          }
        `}</style>
        <title>WebConf LATAM 2021 | ??Busc?? ideas para tu charla!</title>
        <meta property="og:title" content="WebConf LATAM 2021 | ??Busc?? ideas para tu charla!" />
        <meta property="og:site_name" content="WebConf LATAM 2021" />
        <meta property="og:url" content="https://webconf.tech/ideas" />
        <meta
          property="og:description"
          content={
            '??No sab??s de qu?? hablar en tu propuesta de charla ' +
            'para WebConf 2021? Aqu?? te sugerimos algunas ideas.'
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://webconf.tech/images/weblogo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@WebConfLATAM" />
        <meta
          name="twitter:description"
          content={
            '??No sab??s de qu?? hablar en tu propuesta de charla ' +
            'para WebConf 2021? Aqu?? te sugerimos algunas ideas.'
          }
        />
        <meta name="twitter:title" content="WebConf LATAM 2021 | ??Busc?? ideas para tu charla!" />
        <meta name="twitter:image" content="https://webconf.tech/images/weblogo.png" />
      </Head>
      <Container>
        <Section>
          <CenteredBlock>
            <img src="/images/weblogo.png" width="350" height="350" alt="" />
          </CenteredBlock>
          <Subtitle>??No sab??s de qu?? hablar en tu propuesta de charla para WebConf 2021?</Subtitle>
          <Title>
            Aqu?? te sugerimos algunas ideas, usando t??picos de GitHub y Stack Overflow en espa??ol.
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
                Le?? nuestra gu??a
              </Button>
            </ButtonContainer>
          </CenteredBlock>
        </Section>
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
            <Title>??C??mo encontrar ideas para tu charla?</Title>

            <Paragraph>
              Si est??s leyendo esto probablemente tengas ganas de hablar en la conferencia, pero no
              sepas muy bien de qu??. No te preocupes, es algo super com??n. A veces cuesta encontrar
              un tema particular entre tantas cosas que tenemos dando vueltas en la cabeza, como
              cuando entras a una helader??a nueva y ves que tiene 80 sabores distintos. Otras
              realmente no se nos ocurre nada. Aqu?? te dejamos algunas t??cnicas que te pueden ayudar
              a encontrar el tema ideal para tu charla:
            </Paragraph>
            <LeftSubtitle>Hablanos de lo que sab??s</LeftSubtitle>
            <Paragraph>
              Y bueno, hab??a que empezar por lo obvio. Pero aun as?? a veces cuesta encontrarle el
              enfoque o convencernos de que somos la persona indicada para esto. Seguro a casi todos
              nos pasa que pensamos ???hay tantos devs en el mundo mejor capacitados para dar esta
              charla, ??por qu?? la voy a dar yo????
            </Paragraph>
            <Paragraph>
              La respuesta es super simple: tu enfoque es ??nico. Salvo que seas un clon directo o
              una simulaci??n de computadora, la personalidad hace que dos charlas de lo mismo dadas
              por diferentes personas terminen siendo esencialmente distintas. Hay cosas que he
              visto explicadas por diez personas distintas, y reci??n el onceavo lo hizo de un modo
              que impact?? en m?? y me llev?? a entenderlo al fin.
            </Paragraph>
            <Paragraph>
              Record?? que esta conferencia no se basa en tecnolog??as particulares (no busca charlas
              sobre X framework o Y producto), pero quiz??s puedas hablarnos sobre un concepto que te
              apasiona, ya sea algo super popular o por el contrario algo que crees que deber??a
              tener mucha m??s atenci??n de la que tiene.
            </Paragraph>
            <LeftSubtitle>
              Contanos de alg??n concepto nuevo que te entusiasma, o de alguno que extra????s de los
              viejos tiempos
            </LeftSubtitle>
            <Paragraph>
              Los stacks van y vienen, pero las tecnolog??as n??cleo quedan. Y siguen progresando
              enormemente, muchas veces incorporando conceptos de los frameworks y libraries al
              lenguaje mismo.
            </Paragraph>
            <Paragraph>
              Si alguno de estos conceptos nuevos te entusiasman, quiz??s puedas contarnos alguno en
              profundidad, o demostrar c??mo se usar??a en el mundo real. Una buena explicaci??n de las
              cosas m??s recientes, o incluso de lo que apenas est?? asomando por el horizonte,
              siempre es un ejercicio interesante.
            </Paragraph>
            <Paragraph>
              O yendo al otro extremo, si ves que alg??n concepto que abandonamos hace tiempo podr??a
              estar por volver, o incluso si crees que nunca debimos abandonarlo, sin dudas ser??a
              interesante que compartas esa postura.
            </Paragraph>
            <LeftSubtitle>Contanos de los desaf??os que not??s en la industria</LeftSubtitle>
            <Paragraph>
              Ya sea en la carrera o en el trabajo, seguro has notado cosas en las que podr??amos
              mejorar. Quiz??s tengas alguna idea de c??mo podr??amos ser m??s inclusivos, mas
              eficientes, o m??s equitativos. O simplemente m??s felices, que no es poco.
            </Paragraph>
            <Paragraph>
              Por ah?? ves alg??n rol que est?? haciendo falta crear, o alguno que est?? poco valorado y
              merece mucho m??s apoyo, o se te ocurri?? alguna vuelta para que las empresas no se
              saquen los ojos por el talento local, y/o que permita mejorar los salarios o la
              equidad en el equipo.
            </Paragraph>
            <Paragraph>
              Aunque no tengas la soluci??n espec??fica, simplemente exponer el problema para generar
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
              Desde esa vez que te diste cuenta que no sab??as realmente algo que cre??as tener super
              claro, a cuando una metodolog??a alternativa nos ayud?? a destrabarnos en un proyecto
              que se estaba volviendo una papa caliente, o cuando nos topamos con una limitaci??n de
              esa library que siempre usamos y al solucionarlo con vanilla JS nos preguntamos por
              qu?? la est??bamos usando realmente. O incluso yendo a un terreno m??s personal, quiz??s
              hayas notado que el esfuerzo que estabas haciendo por mejorar la comunicaci??n del
              equipo estaba generando el efecto contrario, o que te estaban percibiendo de una forma
              completamente opuesta a la que cre??as mostrar.
            </Paragraph>
            <Paragraph>
              Por ejemplo, en una de mis propuestas hablo de c??mo una discapacidad temporal me hizo
              dar cuenta que estaba encarando la accesibilidad desde un ??ngulo completamente
              erroneo, a pesar de haber sido siempre ???el denso que habla de accesibilidad???.
            </Paragraph>
            <LeftSubtitle>Hablanos de tus fracasos</LeftSubtitle>
            <Paragraph>
              Como dijo Yoda, ???el mejor maestro, el fracaso es???. As?? que si diste alg??n paso en
              falso ??ltimamente (??qui??n no?) y aprendiste algo de ello, quiz??s sea una lecci??n que
              se pueda compartir. Por ah?? procrastinabas demasiado, o te ibas al otro extremo y
              trabajaste sin parar hasta llegar al burn out. Quiz??s fuiste de los que se quedan
              eternamente en el infierno de los tutoriales o de los que se duermen en los laureles
              creyendo que ya saben todo, hasta que te das cuenta que nadie sabe todo. Por ah?? eras
              de quienes no pueden decir que no, o en la otra punta, de quienes tiraban buenas ideas
              con malos modos, y cualquiera de las dos cosas estaba matando el progreso en tu
              carrera.
            </Paragraph>
            <Paragraph>
              Ser??a super interesante escuchar las t??cnicas que fuiste implementando para mejorar en
              lo personal y en lo profesional. Nuestra industria es particularmente jodida con las
              cuestiones de salud mental (y tambi??n la f??sica, que no estamos hechos para estar
              sentados todo el d??a tecleando), as?? que si tenes algo que aportar en estos temas
              ??queremos escucharlo!
            </Paragraph>
            <Paragraph>
              No solo es algo interesante, puede ser clave para cambiarle la vida a otras personas
              de la industria.
            </Paragraph>
            <LeftSubtitle>??Escrib?? la charla que te gustar??a escuchar!</LeftSubtitle>
            <Paragraph>
              Suena poco ortodoxo, pero una gran forma de encontrar temas de los que hablar es
              precisamente pensar en qu?? charla te gustar??a escuchar. Claro est??, probablemente no
              seas la mayor autoridad del mundo en el tema y por eso quiz??s te parezca raro este
              consejo, pero a veces las mejores charlas no vienen de autoridades establecidas sino
              de quienes m??s entusiasmo tienen.
            </Paragraph>
            <Paragraph>
              ??Te va a llevar m??s trabajo? Por supuesto. Pero es una excelente forma de aprender y
              compartir ese conocimiento con la comunidad.
            </Paragraph>
            <LeftSubtitle>??Us?? nuestro generador de ideas!</LeftSubtitle>
            <Paragraph>
              A algunas personas les funciona bien la exploraci??n libre, y para eso puede venirles
              muy bien el generador de ideas de WebConf. Sencillamente dandole click al bot??n de
              b??squeda arriba te van a ir apareciendo ideas de a tres en tres, basados en temas
              populares de StackOverflow y GitHub. Tomate unos segundos en cada resultado y revisa
              los p??rrafos, por ah?? el t??tulo es de una librer??a en particular (que de nuevo, no es
              la idea de la WebConf) pero la descripci??n te sirve como disparador para elegir un
              concepto. Y sino, ??a darle de nuevo al bot??n hasta que aparezca algo!
            </Paragraph>
            <LeftSubtitle>
              Aunque no tengas la idea completa, ??animate y envia la propuesta!
            </LeftSubtitle>
            <Paragraph>
              El equipo de WebConf te va a ayudar a desarrollar la idea y darle forma a la charla si
              es necesario. Queremos escuchar voces diversas, y compartir no solo grandes
              conocimientos t??cnicos sino tambi??n experiencias personales. As?? que aunque no est??s
              completamente seguro, ??animate! ??Esperamos tu propuesta!
            </Paragraph>
            <Paragraph>
              (??Gracias a{' '}
              <a href="https://twitter.com/fcorradini" target="_blank" rel="noopener noreferrer">
                <strong>Facundo Corradini</strong>
              </a>{' '}
              por esta gu??a!)
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
