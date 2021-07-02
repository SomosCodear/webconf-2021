import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import logo from '~/public/images/weblogo.png';
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

const Glass = styled.div`
  grid-row: 1;
  grid-column: 1;
  width: 100%;
  height: 20rem;
  margin-top: 14rem;
  background: ${({ theme }) => theme.colors.landingHeaderGlass};
  opacity: 0.45;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 20.875rem;
    margin-top: 15rem;
  }
`;

const Grid = styled.section`
  grid-row: 1;
  grid-column: 1;
  display: grid;
  width: 100%;
  height: 100%;
  max-width: 100rem;
  padding-bottom: 1rem;
  box-sizing: border-box;
  place-items: center;
  grid-template-areas:
    'logo'
    'title'
    'buttons'
    'learn-more';
  grid-template-rows: auto auto auto 1fr;
  z-index: 10;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-areas:
      'logo         title   '
      'logo        buttons  '
      'learn-more learn-more';
    grid-template-rows: 66% 24% 10%;
    grid-template-columns: auto auto;
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
    width: 61.25rem;
    height: 61.25rem;
  }
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.landingHeaderTitle};
  grid-area: title;
  padding-bottom: 2.5rem;
  font-size: 3.375rem;
  text-align: center;
  line-height: 2.625rem;
  letter-spacing: -0.05em;
  align-self: flex-start;

  span {
    color: ${({ theme }) => theme.colors.landingHeaderMonth};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-bottom: 2.75rem;
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
  grid-area: buttons;
  display: flex;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    place-self: flex-start;
  }
`;

const LearnMore = styled.button`
  grid-area: learn-more;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.landingHeaderLearnMore};
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: 1.125rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 2rem 0 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.hiDpi}) {
    padding: 0;
  }
`;

const LearnMoreArrow = styled.div`
  width: 0;
  height: 0;
  margin-top: 0.75rem;
  border-left: 1.375rem solid transparent;
  border-right: 1.375rem solid transparent;
  border-top: 1.375rem solid ${({ theme }) => theme.colors.landingHeaderLearnMore};
`;

export function Header({ onLearnMoreClick, ...props }) {
  return (
    <Container {...props}>
      <CoolBackground />
      <Glass />
      <Grid>
        <LogoContainer>
          <Image
            src={logo}
            alt="Webconf Logo"
            layout="fill"
            sizes="(max-width: 1024px) 348px, (max-width: 2048px) 720px, 980px"
            placeholder="blur"
          />
        </LogoContainer>
        <Title>
          23 AL 27
          <br />
          <span>DE AGOSTO</span>
        </Title>
        <Buttons>
          <Link href="/auspicianos" passHref>
            <Button as="a" variant="primary">
              sumate como sponsor
            </Button>
          </Link>
        </Buttons>
        <LearnMore onClick={onLearnMoreClick}>
          Conocé más
          <LearnMoreArrow />
        </LearnMore>
      </Grid>
    </Container>
  );
}

Header.propTypes = {
  onLearnMoreClick: PropTypes.func.isRequired,
};
