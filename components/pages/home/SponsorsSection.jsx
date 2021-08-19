import styled from 'styled-components';
import Image from 'next/image';
import animaFiniLogo from '~/public/logos/AnimaFini.svg';
import daleGeekLogo from '~/public/logos/DaleGeek.svg';
import jetBrainsLogo from '~/public/logos/JetBrains.svg';
import digitalOceanLogo from '~/public/logos/DigitalOcean.svg';
import doctaDevsLogo from '~/public/logos/DoctaDevs.svg';
import artsSecLogo from '~/public/logos/ArtsSec.png';
import coderioLogo from '~/public/logos/Coderio.svg';
import cognizantLogo from '~/public/logos/Cognizant.png';
import pwcLogo from '~/public/logos/PwC.svg';

import { Section } from './Section';
import { SectionTitle } from './SectionTitle';

const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SponsorsLogos = styled.div`
  margin-top: 4rem;
  margin-bottom: 2.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  * + * {
    margin-top: 3.375rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 5.625rem;
    flex-direction: row;

    * + * {
      margin-top: 0;
      margin-left: 5rem;
    }
  }
`;

const WhitePanel = styled.div`
  background: #fff;
  padding: 2rem;
  width: 100vw;
  display: grid;
  place-items: center;
`;

const SponsorLogoContainer = styled.div``;

const SponsorsCategory = styled.p`
  text-align: center;
  font-family: Epilogue, sans-serif;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 1rem;
  text-transform: uppercase;
  color: #888;
  border-bottom: 1px solid #aaa;
  padding-left: 1rem;
  padding-bottom: 1rem;
  margin-top: 4rem;
  width: 80%;
`;

export function SponsorsSection() {
  return (
    <Container>
      <SectionTitle style={{ marginBottom: '2rem' }}>SPONSORS</SectionTitle>
      <WhitePanel>
        <SponsorsCategory>Jakarta</SponsorsCategory>
        <SponsorsLogos>
          <SponsorLogoContainer>
            <a href="https://digitalocean.com" target="_blank" rel="noopener noreferrer">
              <Image src={digitalOceanLogo} alt="DigitalOcean" width={600} height={200} />
            </a>
          </SponsorLogoContainer>
        </SponsorsLogos>
        <SponsorsCategory>Gold</SponsorsCategory>
        <SponsorsLogos>
          <SponsorLogoContainer>
            <a href="https://twitter.com/animafini" target="_blank" rel="noopener noreferrer">
              <Image src={animaFiniLogo} alt="Anima Fini Logo" width="310" height={126} />
            </a>
          </SponsorLogoContainer>
          <SponsorLogoContainer>
            <a href="https://twitter.com/dalegeekdale" target="_blank" rel="noopener noreferrer">
              <Image src={daleGeekLogo} alt="Dale Geek Logo" width={250} height={127} />
            </a>
          </SponsorLogoContainer>
          <SponsorLogoContainer>
            <a href="https://jetbrains.com" target="_blank" rel="noopener noreferrer">
              <Image src={jetBrainsLogo} alt="JetBrains" width={150} height={150} />
            </a>
          </SponsorLogoContainer>
          <SponsorLogoContainer>
            <a href="https://pwc.com.ar" target="_blank" rel="noopener noreferrer">
              <Image src={pwcLogo} alt="PwC" width={150} height={150} />
            </a>
          </SponsorLogoContainer>
        </SponsorsLogos>
        <SponsorsCategory>Silver</SponsorsCategory>
        <SponsorsLogos>
          <SponsorLogoContainer>
            <a href="https://cognizant.com" target="_blank" rel="noopener noreferrer">
              <Image src={cognizantLogo} alt="Cognizant" width={321} height={104} />
            </a>
          </SponsorLogoContainer>
        </SponsorsLogos>
        <SponsorsCategory>Bronze</SponsorsCategory>
        <SponsorsLogos>
          <SponsorLogoContainer>
            <a href="https://doctadevs.com" target="_blank" rel="noopener noreferrer">
              <Image src={doctaDevsLogo} alt="DoctaDevs" width={300} height={75} />
            </a>
          </SponsorLogoContainer>
          <SponsorLogoContainer>
            <a href="https://artssec.com" target="_blank" rel="noopener noreferrer">
              <Image src={artsSecLogo} alt="ArtsSec" width={214} height={44} />
            </a>
          </SponsorLogoContainer>
          <SponsorLogoContainer>
            <a href="https://coderio.com" target="_blank" rel="noopener noreferrer">
              <Image src={coderioLogo} alt="Coderio" width={264} height={44} />
            </a>
          </SponsorLogoContainer>
        </SponsorsLogos>
      </WhitePanel>
    </Container>
  );
}
