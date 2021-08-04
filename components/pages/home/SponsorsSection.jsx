import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import animaFiniLogo from '~/public/logos/AnimaFini.png';
import daleGeekLogo from '~/public/logos/DaleGeek.svg';
import jetBrainsLogo from '~/public/logos/JetBrains.svg';
import digitalOceanLogo from '~/public/logos/DigitalOcean.svg';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { Button } from '~/components/common/Button';

const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SponsorsLogos = styled.div`
  margin-top: 4rem;
  margin-bottom: 6.25rem;
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
      margin-left: 3.75rem;
    }
  }
`;

const SponsorLogoContainer = styled.div``;

export function SponsorsSection() {
  return (
    <Container>
      <SectionTitle>SPONSORS</SectionTitle>
      <SponsorsLogos>
        <SponsorLogoContainer>
          <a href="https://digitalocean.com" target="_blank" rel="noopener noreferrer">
            <Image src={digitalOceanLogo} alt="DigitalOcean" width={300} height={100} />
          </a>
        </SponsorLogoContainer>
        <SponsorLogoContainer>
          <a href="https://twitter.com/animafini" target="_blank" rel="noopener noreferrer">
            <Image src={animaFiniLogo} alt="Anima Fini Logo" width="207" height={85} />
          </a>
        </SponsorLogoContainer>
        <SponsorLogoContainer>
          <a href="https://twitter.com/dalegeekdale" target="_blank" rel="noopener noreferrer">
            <Image src={daleGeekLogo} alt="Dale Geek Logo" height={85} />
          </a>
        </SponsorLogoContainer>
        <SponsorLogoContainer>
          <a href="https://jetbrains.com" target="_blank" rel="noopener noreferrer">
            <Image src={jetBrainsLogo} alt="JetBrains" width={150} height={150} />
          </a>
        </SponsorLogoContainer>
      </SponsorsLogos>
      <Link href="/auspicianos" passHref>
        <Button as="a" variant="secondary">
          sumate a auspiciar
        </Button>
      </Link>
    </Container>
  );
}
