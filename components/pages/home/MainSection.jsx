import styled from 'styled-components';
import Image from 'next/image';
import { forwardRef } from 'react';

const Title = styled.h1`
  width: 600px;
  font-style: normal;
  font-weight: 900;
  font-size: 100px;
  line-height: 80%;
  letter-spacing: -0.05em;
  color: #fff;
  z-index: 99;
  margin-bottom: 1rem;

  &:before {
    content: '';
    display: block;
    background: #fff;
    height: 20px;
    position: relative;
    top: 180px;
    width: 100%;
  }

  &:after {
    content: '';
    display: block;
    background: #f22588;
    height: 10px;
    position: relative;
    top: 22px;
    width: 50%;
  }
`;

const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 120%;
  letter-spacing: -0.05em;
  color: #ffffff;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10rem;
`;

const RowTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: left;
`;

const RowText = styled.div`
  width: 100%;
  margin: 35px 0px;
`;
const ColumnLeft = styled.div`
  margin-left: 13%;
  flex: 50%;
`;

const ColumnRight = styled.div`
  flex: 50%;
  margin-right: 13%;
`;

const Container = styled.section`
  padding-top: 5rem;
`;

export const MainSection = forwardRef((props, forwardedRef) => (
  <Container {...props} ref={forwardedRef}>
    <Row>
      <ColumnLeft>
        <Image src="/images/trama.png" alt="Webconf Logo" width="360" height="493" />
      </ColumnLeft>
      <ColumnRight>
        <RowTitle>
          <Title>Qué es WebConf?</Title>
        </RowTitle>
        <RowText>
          <Text>
            Nacida en 2018, WebConf es una conferencia de desarrollo web, creada con la idea de que
            disertantes de habla hispana puedan exponer acerca de nuevas tecnologías y transmitir su
            experiencia a la comunidad de desarrollo.
          </Text>
          <Text>
            Apuntamos a ser un espacio inclusivo y accesible, donde el foco es compartir
            conocimientos y experiencias. Todas las personas involucradas en la industria del
            software son bienvenidas a nuestro espacio, bajo los términos establecidos en nuestro
            código de conducta.
          </Text>
        </RowText>
      </ColumnRight>
    </Row>
  </Container>
));

MainSection.displayName = 'MainSection';
