import styled from 'styled-components';
import Image from 'next/image';

const Title = styled.h1`
  width: 600px;
  font-style: normal;
  font-weight: 900;
  font-size: 90px;
  line-height: 80%;
  letter-spacing: -0.05em;
  color: #fff;
  z-index: 99;

  &:before {
    content: '';
    display: block;
    background: #fff;
    height: 20px;
    position: relative;
    top: 90px;
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

const Subtitle = styled.h2`
  width: 600px;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 80%;
  letter-spacing: -0.05em;
  color: #5bfafd;
  z-index: 99;
`;
const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 120%;
  letter-spacing: -0.05em;
  color: #ffffff;
`;

const LeftText = styled.p`
  width: 330px;
  height: 777px;
  top: 2126px
  font-style: normal;
  font-weight:300;
  font-size: 24px;
  line-height: 120%;
  text-align: right;
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

const RowButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 45px 0px;
`;

const ColumnLeft = styled.div`
  margin-left: 10%;
  flex: 50%;
`;

const ColumnRight = styled.div`
  flex: 50%;
  margin-right: 13%;
`;

const ProposalButton = styled.button`
  background: #a70050;
  border-radius: 20px;
  padding: 14px 30px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 21px;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  border: 1px solid #a70050;
  z-index: 99;
  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.4));
  cursor: pointer;
`;

export default function Speakers() {
  return (
    <>
      <Title>Disertantes</Title>
      <Row>
        <ColumnLeft>
          <LeftText>
            Apuntamos a ser un espacio inclusivo y accesible, donde el foco es compartir
            conocimientos y experiencias. Todas las personas involucradas en la industria del
            software son bienvenidas a nuestro espacio, bajo los términos establecidos en nuestro
            código de conducta.
          </LeftText>
        </ColumnLeft>
        <Image src="/images/DivisorLateral.svg" alt="Pink rectangle" width="50" height="750" />
        <ColumnRight>
          <RowTitle>
            <Subtitle>Nos enfocamos en conceptos.</Subtitle>
          </RowTitle>
          <RowText>
            <Text>
              Las charlas deben tener un foco en conceptos, no en librerías ni en frameworks
              específicos, de manera que el contenido explorado sea útil para todas las personas
            </Text>
          </RowText>
          <RowTitle>
            <Subtitle>Una charla no es publicidad.</Subtitle>
          </RowTitle>
          <RowText>
            <Text>
              No aceptaremos charlas centradas en la venta de una empresa, producto, o difusión de
              propaganda política o religiosa, ya que creemos que no son contenidos constructivos
              para el espacio.
            </Text>
          </RowText>
          <RowTitle>
            <Subtitle>Hablamos español.</Subtitle>
          </RowTitle>
          <RowText>
            <Text>
              Nos interesa que el contenido que se genere en nuestros eventos sea accesible al
              público hispanohablante en general.
            </Text>
          </RowText>
          <RowTitle>
            <Subtitle>Lo social nos moviliza.</Subtitle>
          </RowTitle>
          <RowText>
            <Text>
              Ninguna solución de software existe aislada de lo social. Nos interesa ver cómo la
              tecnología tiene un impacto en la comunidad, desde ejes como la inclusión, la
              diversidad de género, y más.
            </Text>
          </RowText>
          <RowTitle>
            <Subtitle>Somos un espacio abierto.</Subtitle>
          </RowTitle>
          <RowText>
            <Text>
              Como parte de nuestra misión, buscamos hacer crecer la participación de la comunidad,
              por lo que pretendemos dar espacios y soporte a todas las personas disertantes que
              quieran participar en WebConf, mas allá de si participaron anteriormente o no en otras
              conferencias.
            </Text>
          </RowText>

          <RowButton>
            <ProposalButton
              onClick={() => {
                window.location = '/cfp';
              }}
            >
              PROPONÉ TU CHARLA
            </ProposalButton>
          </RowButton>
        </ColumnRight>
      </Row>
    </>
  );
}
