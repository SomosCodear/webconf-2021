import { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { SPEAKERS } from '~/data/speakers';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { SpeakerModal } from './SpeakerModal';
import { SpeakerPreviewCard } from './SpeakerPreviewCard';

const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Speakers = styled.div`
  position: relative;
  margin: 5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2.875rem;
`;

export function SpeakersSection() {
  const [selectedSpeaker, setSelecetdSpeaker] = useState(null);

  return (
    <Container>
      <SectionTitle>Disertantes</SectionTitle>
      <Speakers>
        <AnimateSharedLayout type="crossfade">
          {SPEAKERS.map(({ id, ...speaker }) => (
            <SpeakerPreviewCard
              key={id}
              id={id}
              {...speaker}
              onSelect={() => setSelecetdSpeaker({ id, ...speaker })}
            />
          ))}
          <AnimatePresence>
            {selectedSpeaker != null ? (
              <SpeakerModal {...selectedSpeaker} onClose={() => setSelecetdSpeaker(null)} />
            ) : null}
          </AnimatePresence>
        </AnimateSharedLayout>
      </Speakers>
    </Container>
  );
}
