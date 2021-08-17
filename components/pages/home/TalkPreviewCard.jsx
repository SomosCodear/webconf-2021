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
  max-width: 57rem;
  margin-right: -8rem;
  padding: 1rem 4rem 1rem 0;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${({ theme, variant }) => theme.colors[`landingSpeakerVariant${variant}MainColor`]};
  cursor: pointer;

  & + & {
    margin-top: 6.25rem;
  }
`;

const TalkInfo = styled.div`
  position: absolute;
  top: -1.5rem;
  left: 13.5rem;
  font-size: 1.125rem;
`;

const TalkType = styled(motion.span)``;
const TalkSchedule = styled.span`
  font-weight: 900;
`;

const PhotoWrapper = styled(SpeakerPhoto)`
  flex-shrink: 0;
  width: 13.875rem;
  height: 13.875rem;
  margin: -3rem 0 -3rem -3rem;
`;

const Info = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
`;

const SpeakerName = styled.div`
  text-transform: uppercase;
  font-size: 1.625rem;
  color: ${({ theme, variant }) => theme.colors[`landingSpeakerVariant${variant}TalkColor`]};
  opacity: 75%;
`;

const TalkName = styled(motion.div)`
  margin-top: 0.5rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme, variant }) => theme.colors[`landingSpeakerVariant${variant}TalkColor`]};
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
  const talkStarteDateTime = useMemo(() => DateTime.fromISO(talkSchedule[0]), [talkSchedule]);
  const talkEndDateTime = useMemo(() => DateTime.fromISO(talkSchedule[1]), [talkSchedule]);

  return (
    <Container variant={variant} onClick={onSelect} layoutId={`speaker-${id}`}>
      <TalkInfo>
        <TalkType>CHARLA {talkType === TALK_TYPES.STANDARD ? 'STANDARD' : 'RELÁMPAGO'}</TalkType>
        {' | '}
        <TalkSchedule>
          {talkStarteDateTime.toLocaleString(DateTime.TIME_24_SIMPLE)}
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
