import styled from 'styled-components';
import Image from 'next/image';
import animaFiniLogo from '~/public/logos/AnimaFini.png';
import daleGeekLogo from '~/public/logos/DaleGeek.svg';
import jetBrainsLogo from '~/public/logos/JetBrains.svg';
import digitalOceanLogo from '~/public/logos/DigitalOcean.svg';
import doctaDevsLogo from '~/public/logos/DoctaDevs.svg';
import artsSecLogo from '~/public/logos/ArtsSec.png';

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

const SponsorLogoContainer = styled.div``;

export function SponsorsSection() {
  return (
    <Container>
      <SectionTitle style={{ marginBottom: '2rem' }}>SPONSORS</SectionTitle>
      <SponsorsLogos>
        <SponsorLogoContainer>
          <a href="https://digitalocean.com" target="_blank" rel="noopener noreferrer">
            <Image src={digitalOceanLogo} alt="DigitalOcean" width={600} height={200} />
          </a>
        </SponsorLogoContainer>
      </SponsorsLogos>
      <SponsorsLogos>
        <SponsorLogoContainer>
          <a href="https://twitter.com/animafini" target="_blank" rel="noopener noreferrer">
            <Image src={animaFiniLogo} alt="Anima Fini Logo" width="310" height={126} />
          </a>
        </SponsorLogoContainer>
        <SponsorLogoContainer>
          <a href="https://twitter.com/dalegeekdale" target="_blank" rel="noopener noreferrer">
            <Image src={daleGeekLogo} alt="Dale Geek Logo" height={127} />
          </a>
        </SponsorLogoContainer>
        <SponsorLogoContainer>
          <a href="https://jetbrains.com" target="_blank" rel="noopener noreferrer">
            <Image src={jetBrainsLogo} alt="JetBrains" width={150} height={150} />
          </a>
        </SponsorLogoContainer>
      </SponsorsLogos>
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
      </SponsorsLogos>
    </Container>
  );
}
