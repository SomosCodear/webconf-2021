import styled from 'styled-components';
import Image from 'next/image';
import animaFiniLogo from '~/public/logos/AnimaFini.svg';
import daleGeekLogo from '~/public/logos/DaleGeek.svg';
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
          <Image src={animaFiniLogo} alt="Anima Fini Logo" width={240} height={103} />
        </SponsorLogoContainer>
        <SponsorLogoContainer>
          <Image src={daleGeekLogo} alt="Dale Geek Logo" width={209} height={87} />
        </SponsorLogoContainer>
      </SponsorsLogos>
      <Button variant="secondary">sumate a auspiciar</Button>
    </Container>
  );
}
