import styled from 'styled-components';

import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import SPONSORS, { SPONSOR_CATEGORIES } from '~/data/sponsors';
import { SocialMediaLink, SponsorLink } from '~/components/common';

const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SponsorsLogos = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  gap: 5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 5.625rem;
    grid-auto-flow: column;
  }
`;

const WhitePanel = styled.div`
  background: #fff;
  padding: 2rem;
  width: 100vw;
  display: grid;
  place-items: center;
  box-sizing: border-box;
`;

const SponsorLogoContainer = styled.div`
  display: grid;
  place-items: center;
`;

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

const Sponsor = styled.div`
  display: grid;
  grid-auto-flow: row;
`;

const SponsorSocialMedia = styled.div`
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  width: fit-content;
  margin: 0 auto;
  margin-top: 1rem;
`;

const SponsorDescription = styled.p`
  text-align: center;
  color: #1f1f1f;
  margin-top: 2rem;
`;

export function SponsorsSection() {
  return (
    <Container>
      <SectionTitle style={{ margin: '4rem 0' }}>Auspiciantes</SectionTitle>
      <WhitePanel>
        {SPONSOR_CATEGORIES.map((sponsorCategory) => (
          <>
            <SponsorsCategory>{sponsorCategory}</SponsorsCategory>
            <SponsorsLogos>
              {SPONSORS[sponsorCategory].map((sponsor) => (
                <SponsorLogoContainer>
                  <Sponsor>
                    <SponsorLink {...sponsor} />
                    {['jakarta', 'gold'].includes(sponsorCategory) && sponsor.description ? (
                      <SponsorDescription>{sponsor.description}</SponsorDescription>
                    ) : (
                      ''
                    )}
                    {sponsor.links && sponsorCategory !== 'bronze' ? (
                      <SponsorSocialMedia>
                        {sponsor.links.map((link) => (
                          <SocialMediaLink {...link} owner={sponsor.name} />
                        ))}
                      </SponsorSocialMedia>
                    ) : (
                      ''
                    )}
                  </Sponsor>
                </SponsorLogoContainer>
              ))}
            </SponsorsLogos>
          </>
        ))}
      </WhitePanel>
    </Container>
  );
}
