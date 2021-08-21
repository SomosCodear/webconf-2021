import styled from 'styled-components';

import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import Communities from '~/data/communities';
import { SocialMediaLink, SponsorLink as CommunityLink } from '~/components/common';

const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CommunitiesLogos = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  gap: 5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 5.625rem;
    padding: 10rem;
    grid-auto-flow: column;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
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

const CommunityLogoContainer = styled.div`
  display: grid;
  place-items: center;
`;

const Community = styled.div`
  display: grid;
  grid-auto-flow: row;
`;

const CommunitiesSocialMedia = styled.div`
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  width: fit-content;
  margin: 0 auto;
  margin-top: 1rem;
`;

const CommunityDescription = styled.p`
  text-align: center;
  color: #1f1f1f;
  margin-top: 2rem;
`;

export function CommunitiesSection() {
  return (
    <Container>
      <SectionTitle style={{ margin: '4rem 0' }}>Comunidades</SectionTitle>
      <WhitePanel>
        <CommunitiesLogos>
          {Communities.map((community) => (
            <CommunityLogoContainer>
              <Community>
                <CommunityLink {...community} width={250} height={250} />
                <CommunityDescription>{community.description}</CommunityDescription>
                {community.links ? (
                  <CommunitiesSocialMedia>
                    {community.links.map((link) => (
                      <SocialMediaLink {...link} owner={Community.name} />
                    ))}
                  </CommunitiesSocialMedia>
                ) : (
                  ''
                )}
              </Community>
            </CommunityLogoContainer>
          ))}
        </CommunitiesLogos>
      </WhitePanel>
    </Container>
  );
}
