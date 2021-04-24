import styled from 'styled-components';
import Image from 'next/image';

const Title = styled.h1`
  width: 600px;
  font-style: normal;
  font-weight: 600;
  font-size: 85px;
  line-height: 80%;
  letter-spacing: -0.05em;
  color: #fff;

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

const SponsorButton = styled.button`
  background: #3c467e;
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
  border: 1px solid #3c467e;
  margin-right: 45px;
  z-index: 99;
  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.4));
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RowTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-left: 6%;
`;

const RowButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 35px 0px;
`;
const ColumnLeft = styled.div`
  margin-left: 28%;
  flex: 50%;
`;

const ColumnRight = styled.div`
  flex: 50%;
  margin-right: 15%;
`;

export default function Sponsors() {
  return (
    <>
      <RowTitle>
        <Title>SPONSORS</Title>
      </RowTitle>
      <Row>
        <ColumnLeft>
          <Image src="/logos/AnimaFini.svg" alt="Anima Fini Logo" width="200" height="200" />
        </ColumnLeft>
        <ColumnRight>
          <Image src="/logos/DaleGeek.svg" alt="Dale Geek Logo" width="200" height="200" />
        </ColumnRight>
      </Row>
      <RowButton>
        <SponsorButton>SUMATE COMO SPONSOR</SponsorButton>
      </RowButton>
    </>
  );
}
