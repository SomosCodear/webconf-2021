import { forwardRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import pattern from '~/public/images/trama.png';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';

const Container = styled(Section)`
  display: grid;
  grid-template:
    'title'
    'text'
    'pattern';
  grid-row-gap: 2.25rem;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template:
      'pattern title'
      'pattern text';
    grid-template-columns: 22.5rem minmax(min-content, 44.25rem);
    grid-column-gap: 4.375rem;
    grid-row-gap: 3.75rem;
  }
`;

const Title = styled(SectionTitle)`
  grid-area: title;
`;

const TextContainer = styled.div`
  grid-area: text;
  font-style: normal;
  font-weight: normal;
  line-height: 120%;
  letter-spacing: -0.05em;

  p + p {
    margin-top: 1.25rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.75rem;

    p + p {
      margin-top: 2.5rem;
    }
  }
`;

const PatternContainer = styled.div`
  grid-area: pattern;
  align-self: flex-end;
`;

export const MainSection = forwardRef((props, forwardedRef) => (
  <Container {...props} ref={forwardedRef}>
    <PatternContainer>
      <Image src={pattern} alt="Webconf Logo" width="360" height="493" />
    </PatternContainer>
    <Title>Qué es WebConf?</Title>
    <TextContainer>
      <p>
        Nacida en 2018, WebConf es una conferencia de desarrollo web, creada con la idea de que
        disertantes de habla hispana puedan exponer acerca de nuevas tecnologías y transmitir su
        experiencia a la comunidad de desarrollo.
      </p>
      <p>
        Apuntamos a ser un espacio inclusivo y accesible, donde el foco es compartir conocimientos y
        experiencias. Todas las personas involucradas en la industria del software son bienvenidas a
        nuestro espacio, bajo los términos establecidos en nuestro código de conducta.
      </p>
    </TextContainer>
  </Container>
));

MainSection.displayName = 'MainSection';
