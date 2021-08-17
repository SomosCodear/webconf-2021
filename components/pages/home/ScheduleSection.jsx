import * as R from 'ramda';
import { DateTime } from 'luxon';
import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { SPEAKERS } from '~/data/speakers';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { SpeakerModal } from './SpeakerModal';
import { TalkPreviewCard } from './TalkPreviewCard';

const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Schedule = styled.div`
  position: relative;
  margin-top: 4.5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const Days = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const Day = styled.button`
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 1.25rem 0 0 1.25rem;
  font-size: 2.5rem;
  font-weight: 700;
  background: ${({ theme, active }) =>
    active
      ? theme.colors.landingScheduleDayBackgroundActive
      : theme.colors.landingScheduleDayBackground};
  color: ${({ theme, active }) =>
    active ? theme.colors.landingScheduleDayColorActive : theme.colors.landingScheduleDayColor};
  cursor: pointer;

  & + & {
    margin-top: 1rem;
  }
`;

const Talks = styled.div`
  margin-left: 0.625rem;
  padding: 4rem;
  border-radius: 1.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.landingScheduleTalksBackground};
`;

const getTalkDay = R.compose(
  (datetime) => DateTime.fromISO(datetime).startOf('day').toMillis(),
  R.path(['talkSchedule', 0]),
);
const availableDays = R.compose(R.uniq, R.map(getTalkDay))(SPEAKERS);

export function ScheduleSection() {
  const [selectedSpeaker, setSelecetdSpeaker] = useState(null);

  const [selectedDay, setSelectedDay] = useState(availableDays[0]);
  const talks = useMemo(
    () =>
      R.compose(
        R.sortBy(
          R.compose(
            (datetime) => DateTime.fromISO(datetime).toMillis(),
            R.path(['talkSchedule', 0]),
          ),
        ),
        R.filter(R.compose(R.equals(selectedDay), getTalkDay)),
      )(SPEAKERS),
    [selectedDay],
  );

  return (
    <Container>
      <SectionTitle>Cronograma</SectionTitle>
      <Schedule>
        <AnimateSharedLayout type="crossfade">
          <Days>
            {availableDays.map((day) => (
              <Day key={day} active={day === selectedDay} onClick={() => setSelectedDay(day)}>
                {DateTime.fromMillis(day).toLocaleString({ day: 'numeric', month: 'numeric' })}
              </Day>
            ))}
          </Days>
          <Talks>
            {talks.map(({ id, ...speaker }) => (
              <TalkPreviewCard
                key={id}
                id={id}
                {...speaker}
                onSelect={() => setSelecetdSpeaker({ id, ...speaker })}
              />
            ))}
          </Talks>
          <AnimatePresence>
            {selectedSpeaker != null ? (
              <SpeakerModal
                {...selectedSpeaker}
                onClose={() => setSelecetdSpeaker(null)}
                disableTalkNameAnimation
              />
            ) : null}
          </AnimatePresence>
        </AnimateSharedLayout>
      </Schedule>
    </Container>
  );
}
