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
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 4.5rem;
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Days = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 1.5rem;
    flex-direction: column;
  }
`;

const Day = styled.button`
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 0.5rem 0.5rem 0 0;
  font-size: 0.875rem;
  font-weight: 700;
  background: ${({ theme, active }) =>
    active
      ? theme.colors.landingScheduleDayBackgroundActive
      : theme.colors.landingScheduleDayBackground};
  color: ${({ theme, active }) =>
    active ? theme.colors.landingScheduleDayColorActive : theme.colors.landingScheduleDayColor};
  cursor: pointer;

  & + & {
    margin-left: 0.25rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0.5rem 1.5rem;
    border-radius: 1.25rem 0 0 1.25rem;
    font-size: 2.5rem;

    & + & {
      margin-left: 0;
      margin-top: 1rem;
    }
  }
`;

const Talks = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.landingScheduleTalksBackground};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-left: 0.625rem;
    padding: 4rem;
    border-radius: 1.25rem;
  }
`;

const getTalkDay = R.compose(
  (datetime) => DateTime.fromISO(datetime).startOf('day').toMillis(),
  R.path(['talkSchedule', 0]),
);
const availableDays = R.compose(R.uniq, R.map(getTalkDay))(SPEAKERS);

export function ScheduleSection() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const [selectedDay, setSelectedDay] = useState(availableDays[0]);
  const talks = useMemo(
    () =>
      R.compose(
        R.sortBy(
          R.compose(
            (datetime) => DateTime.fromISO(datetime, { locale: 'es-AR' }).toMillis(),
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
                {DateTime.fromMillis(day, { locale: 'es-AR' }).toLocaleString({
                  day: 'numeric',
                  month: 'numeric',
                })}
              </Day>
            ))}
          </Days>
          <Talks>
            {talks.map(({ id, ...speaker }) => (
              <TalkPreviewCard
                key={id}
                id={id}
                {...speaker}
                onSelect={() => setSelectedSpeaker({ id, ...speaker })}
              />
            ))}
          </Talks>
          <AnimatePresence>
            {selectedSpeaker != null ? (
              <SpeakerModal
                {...selectedSpeaker}
                onClose={() => setSelectedSpeaker(null)}
                disableTalkNameAnimation
              />
            ) : null}
          </AnimatePresence>
        </AnimateSharedLayout>
      </Schedule>
    </Container>
  );
}
