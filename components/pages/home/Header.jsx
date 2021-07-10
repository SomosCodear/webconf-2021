import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import selloWebConf from '~/public/images/SelloWebConf.svg';
import { Button } from '~/components/common';
import { Background } from './Background';

const Container = styled.header`
  width: 100%;
  min-height: 100%;
  border-bottom: 0.625rem solid ${({ theme }) => theme.colors.landingHeaderBorder};
  display: grid;
  justify-items: center;
`;

const CoolBackground = styled(Background)`
  grid-row: 1;
  grid-column: 1;
`;

const Content = styled.section`
  grid-row: 1;
  grid-column: 1;
  z-index: 100;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;

const Strut = styled.div`
  flex: 1;
`;

const Glass = styled.div`
  position: absolute;
  top: 40%;
  bottom: 2.5%;
  width: 100%;
  background: ${({ theme }) => theme.colors.landingHeaderGlass};
  opacity: 0.45;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    top: 25%;
    bottom: 25%;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  grid-area: logo;
  width: 24rem;
  height: 24rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 45rem;
    height: 45rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.hiDpi}) {
    width: 60rem;
    height: 60rem;
  }
`;

const TextAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Text = styled.h1`
  z-index: 10;
  font-style: normal;
  font-weight: 900;
  padding-bottom: 2.5rem;
  font-size: 3.375rem;
  text-align: center;
  line-height: 2.625rem;
  letter-spacing: -0.05em;
  align-self: flex-start;

  span {
    color: ${({ theme }) => theme.colors.landingHeaderTitleAccent};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 20% 0 10%;
    align-self: flex-end;
    justify-self: flex-start;
    text-align: left;
    font-size: 6.875rem;
    line-height: 80%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.hiDpi}) {
    font-size: 8.75rem;
    line-height: 90%;
  }
`;

const Buttons = styled.div`
  display: flex;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    place-self: flex-start;
  }
`;

const LearnMore = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: 1.125rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 2rem 0 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.hiDpi}) {
    padding: 0 0 4rem;
  }
`;

const LearnMoreArrow = styled.div`
  width: 0;
  height: 0;
  margin-top: 0.75rem;
  border-left: 1.375rem solid transparent;
  border-right: 1.375rem solid transparent;
  border-top: 1.375rem solid ${({ theme }) => theme.colors.landingHeaderLearnMoreArrow};
`;

export function Header({ onLearnMoreClick, ...props }) {
  return (
    <Container {...props}>
      <CoolBackground />
      <Content>
        <Strut />
        <Title>
          <Glass />
          <LogoContainer>
            <Image
              src={selloWebConf}
              alt="Webconf Logo"
              layout="fill"
              sizes="(max-width: 1024px) 348px, (max-width: 2048px) 720px, 980px"
            />
          </LogoContainer>
          <TextAndButtonsContainer>
            <Text>
              <span>23 AL 27</span>
              <br />
              DE AGOSTO
            </Text>
            <Buttons>
              <Link href="/auspicianos" passHref>
                <Button as="a" variant="primary">
                  sumate como sponsor
                </Button>
              </Link>
            </Buttons>
          </TextAndButtonsContainer>
        </Title>
        <Strut />
        <LearnMore onClick={onLearnMoreClick}>
          Conocé más
          <LearnMoreArrow />
        </LearnMore>
      </Content>
    </Container>
  );
}

Header.propTypes = {
  onLearnMoreClick: PropTypes.func.isRequired,
};
