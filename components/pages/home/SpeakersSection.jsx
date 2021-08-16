import styled from 'styled-components';
import { SPEAKERS } from '~/data/speakers';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { SpeakerPreviewCard } from './SpeakerPreviewCard';

const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Speakers = styled.div`
  margin: 5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2.875rem;
`;

export function SpeakersSection() {
  return (
    <Container>
      <SectionTitle>Disertantes</SectionTitle>
      <Speakers>
        {SPEAKERS.map((props) => (
          <SpeakerPreviewCard {...props} />
        ))}
      </Speakers>
    </Container>
  );
}
