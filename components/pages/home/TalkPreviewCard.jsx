import { DateTime } from 'luxon';
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { TALK_TYPES } from '~/data/speakers';
import { SpeakerPhoto } from './SpeakerPhoto';

const Container = styled(motion.div)`
  position: relative;
  box-sizing: border-box;
  margin-right: -4rem;
  padding: 0.375rem 2rem 0.375rem 0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${({ theme, variant }) => theme.colors[`landingSpeakerVariant${variant}MainColor`]};
  cursor: pointer;

  & + & {
    margin-top: 3rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 57rem;
    margin-right: -8rem;
    padding: 1rem 4rem 1rem 0;
    border-radius: 1.25rem;

    & + & {
      margin-top: 6.25rem;
    }
  }
`;

const TalkInfo = styled.div`
  position: absolute;
  top: -1rem;
  left: 4.5rem;
  font-size: 0.562rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    top: -1.5rem;
    left: 13.5rem;
    font-size: 1.125rem;
  }
`;

const TalkType = styled(motion.span)``;
const TalkSchedule = styled.span`
  font-weight: 900;
`;

const PhotoWrapper = styled(SpeakerPhoto)`
  flex-shrink: 0;
  width: 5.25rem;
  height: 5.25rem;
  margin: -2rem 0 -2rem -2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 13.875rem;
    height: 13.875rem;
    margin: -3rem 0 -3rem -3rem;
  }
`;

const Info = styled.div`
  margin-left: 0.75rem;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-left: 2rem;
  }
`;

const SpeakerName = styled.div`
  text-transform: uppercase;
  font-size: 0.625rem;
  color: ${({ theme, variant }) => theme.colors[`landingSpeakerVariant${variant}TalkColor`]};
  opacity: 75%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.625rem;
  }
`;

const TalkName = styled(motion.div)`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme, variant }) => theme.colors[`landingSpeakerVariant${variant}TalkColor`]};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 2.5rem;
  }
`;

export const TalkPreviewCard = ({
  id,
  variant,
  photo,
  firstName,
  lastName,
  talkType,
  talkName,
  talkSchedule,
  onSelect,
}) => {
  const talkStartDateTime = useMemo(
    () => DateTime.fromISO(talkSchedule[0], { locale: 'es-AR' }),
    [talkSchedule],
  );
  const talkEndDateTime = useMemo(
    () => DateTime.fromISO(talkSchedule[1], { locale: 'es-AR' }),
    [talkSchedule],
  );

  return (
    <Container variant={variant} onClick={onSelect} layoutId={`speaker-${id}`}>
      <TalkInfo>
        <TalkType>
          CHARLA{' '}
          {talkType === TALK_TYPES.STANDARD ? '' : <span style={{ color: 'gold' }}>RELÁMPAGO</span>}
        </TalkType>
        {' | '}
        <TalkSchedule>
          {talkStartDateTime.toLocaleString(DateTime.TIME_24_SIMPLE)}
          {' - '}
          {talkEndDateTime.toLocaleString(DateTime.TIME_24_SIMPLE)} HS.
        </TalkSchedule>
      </TalkInfo>
      <PhotoWrapper photo={photo} layoutId={`speaker-photo-${id}`} />
      <Info>
        <SpeakerName variant={variant}>
          <motion.span layoutId={`speaker-first-name-${id}`}>{firstName}</motion.span>{' '}
          <motion.span layoutId={`speaker-last-name-${id}`}>{lastName}</motion.span>
        </SpeakerName>
        <TalkName variant={variant} layoutId={`speaker-talk-name-${id}`}>
          {talkName}
        </TalkName>
      </Info>
    </Container>
  );
};

TalkPreviewCard.propTypes = {
  id: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['A', 'B', 'C']).isRequired,
  photo: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  talkType: PropTypes.oneOf(Object.values(TALK_TYPES)).isRequired,
  talkName: PropTypes.string.isRequired,
  talkSchedule: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};
