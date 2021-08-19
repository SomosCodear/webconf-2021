import { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { WORKSHOPS } from '~/data/speakers';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { SpeakerModal } from './SpeakerModal';
import { SpeakerPreviewCard } from './SpeakerPreviewCard';

const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Workshops = styled.div`
  position: relative;
  margin: 2.375rem 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.875rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 5rem 0;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export function WorkshopsSection() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  return (
    <Container>
      <SectionTitle>Talleres</SectionTitle>
      <Workshops>
        <AnimateSharedLayout type="crossfade">
          {WORKSHOPS.map(({ id, ...speaker }) => (
            <SpeakerPreviewCard
              key={id}
              id={id}
              {...speaker}
              selected={!selectedSpeaker}
              onSelect={() => setSelectedSpeaker({ id, ...speaker })}
              inset
            />
          ))}
          <AnimatePresence>
            {selectedSpeaker != null ? (
              <SpeakerModal {...selectedSpeaker} onClose={() => setSelectedSpeaker(null)} />
            ) : null}
          </AnimatePresence>
        </AnimateSharedLayout>
      </Workshops>
    </Container>
  );
}
