import styled from 'styled-components';
import Image from 'next/image';
import codearLogo from '~/public/logos/CoDeAr.svg';
import webConfLogo from '~/public/logos/WebConf.svg';
import gitHubLogo from '~/public/logos/GitHub.svg';
import twitterLogo from '~/public/logos/Twitter.svg';
import linkedInLogo from '~/public/logos/LinkedIn.svg';
import instagramLogo from '~/public/logos/Instagram.svg';
import facebookLogo from '~/public/logos/Facebook.svg';

const Container = styled.footer`
  margin-top: 3rem;
  padding: 2.875rem 4.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.landingFooterBackground};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 5rem;
    padding: 2.625rem 0;
  }
`;

const Logos = styled.div`
  display: flex;
  flex-direction: column;

  a + a {
    margin-top: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;

    a + a {
      margin-top: 0;
      margin-left: 3.75rem;
    }
  }
`;

const Social = styled.div`
  margin-top: 3.375rem;
  display: flex;
  flex-direction: row;

  a + a {
    margin-left: 1.375rem;
  }
`;

const Legal = styled.div`
  margin-top: 3.375rem;

  a {
    color: #aaa;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const Footer = () => (
  <Container>
    <Logos>
      <a href="https://codear.org" target="_blank" rel="noreferrer">
        <Image src={codearLogo} alt="CoDeAr Logo" width={200} height={67} />
      </a>
      <a href="/">
        <Image src={webConfLogo} alt="WebConf Logo" width={226} height={61} />
      </a>
    </Logos>
    <Social>
      <a href="https://github.com/SomosCodear/" target="_blank" rel="noreferrer">
        <Image src={gitHubLogo} alt="GitHub Logo" width={32} height={32} />
      </a>
      <a href="https://twitter.com/somoscodear" target="_blank" rel="noreferrer">
        <Image src={twitterLogo} alt="Twitter Logo" width={39} height={32} />
      </a>
      <a href="https://www.linkedin.com/company/codear/" target="_blank" rel="noreferrer">
        <Image src={linkedInLogo} alt="LinkedIn Logo" width={32} height={32} />
      </a>
      <a href="https://www.instagram.com/somoscodear" target="_blank" rel="noreferrer">
        <Image src={instagramLogo} alt="Instagram Logo" width={32} height={32} />
      </a>
      <a href="https://www.facebook.com/SomosCodear" target="_blank" rel="noreferrer">
        <Image src={facebookLogo} alt="Facebook Logo" width={17} height={32} />
      </a>
    </Social>
    <Legal>
      <a href="https://codear.org/coc" target="_blank" rel="noopener noreferrer">
        Código de conducta
      </a>
      {' | '}
      <a href="/privacidad" target="_blank" rel="noopener noreferrer">
        Política de privacidad
      </a>
    </Legal>
  </Container>
);
