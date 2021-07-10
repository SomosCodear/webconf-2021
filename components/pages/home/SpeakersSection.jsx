import styled from 'styled-components';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';

const Container = styled(Section)`
  display: grid;
  grid-template:
    'title'
    'description'
    'separator'
    'principles';
  grid-template-rows: auto auto 0.5rem auto auto;
  grid-row-gap: 2rem;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template:
      '    .          .        title   '
      'description separator principles'
      '    .          .      principles';
    grid-template-rows: auto auto auto;
    grid-template-columns: 20rem 0.5rem minmax(min-content, 44.25rem);
    grid-column-gap: 2rem;
    grid-row-gap: 3.75rem;
  }
`;

const TitleContainer = styled.div`
  grid-area: title;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    align-items: flex-start;
  }
`;

const Description = styled.p`
  grid-area: description;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.05em;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    text-align: right;
    font-weight: 300;
    font-size: 1.5rem;
  }
`;

const Separator = styled.div`
  grid-area: separator;
  background-color: ${({ theme }) => theme.colors.landingSpeakerSeparator};
`;

const Principles = styled.div`
  grid-area: principles;
`;

const PrincipleTitle = styled.h2`
  font-weight: 900;
  font-size: 2.25rem;
  line-height: 80%;
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.colors.landingSpeakerPrincipleSubtitle};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 2.5rem;
    font-weight: 700;
  }
`;

const PrincipleDescription = styled.p`
  margin-top: 1.25rem;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.05em;

  ${PrincipleTitle} + & {
    margin-bottom: 2.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 0.875rem;
    font-size: 1.625rem;

    ${PrincipleTitle} + & {
      margin-bottom: 2rem;
    }
  }
`;

export function SpeakersSection() {
  return (
    <Container>
      <TitleContainer>
        <SectionTitle>Disertantes</SectionTitle>
      </TitleContainer>
      <Description>
        Buscamos charlas cuya temática toque de alguna forma al desarrollo de la Web, desde la
        arquitectura de un producto, pasando por aspectos técnicos de desarrollo, hasta al diseño
        visual y funcional del mismo, teniendo en cuenta otros temas transversales que en la
        actualidad de son de suma importancia como lo son la accesibilidad y localización.
      </Description>
      <Separator />
      <Principles>
        <PrincipleTitle>Nos enfocamos en conceptos.</PrincipleTitle>
        <PrincipleDescription>
          Las charlas deben tener un foco en conceptos, no en librerías ni en frameworks
          específicos, de manera que el contenido explorado sea útil para todas las personas
        </PrincipleDescription>
        <PrincipleTitle>Una charla no es publicidad.</PrincipleTitle>
        <PrincipleDescription>
          No aceptaremos charlas centradas en la venta de una empresa, producto, o difusión de
          propaganda política o religiosa, ya que creemos que no son contenidos constructivos para
          el espacio.
        </PrincipleDescription>
        <PrincipleTitle>Hablamos español.</PrincipleTitle>
        <PrincipleDescription>
          Nos interesa que el contenido que se genere en nuestros eventos sea accesible al público
          hispanohablante en general.
        </PrincipleDescription>
        <PrincipleTitle>Lo social nos moviliza.</PrincipleTitle>
        <PrincipleDescription>
          Ninguna solución de software existe aislada de lo social. Nos interesa ver cómo la
          tecnología tiene un impacto en la comunidad, desde ejes como la inclusión, la diversidad
          de género, y más.
        </PrincipleDescription>
        <PrincipleTitle>Somos un espacio abierto.</PrincipleTitle>
        <PrincipleDescription>
          Como parte de nuestra misión, buscamos hacer crecer la participación de la comunidad, por
          lo que pretendemos dar espacios y soporte a todas las personas disertantes que quieran
          participar en WebConf, mas allá de si participaron anteriormente o no en otras
          conferencias.
        </PrincipleDescription>
      </Principles>
    </Container>
  );
}
