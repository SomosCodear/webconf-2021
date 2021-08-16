import { lazy, Suspense, useCallback, useMemo, useRef } from 'react';
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { NATIONALITIES, TALK_TYPES } from '~/data/speakers';
import { SpeakerPhoto } from './SpeakerPhoto';
import { SpeakerNationalityFlag } from './SpeakerNationalityFlag';
import { Button } from '~/components/common/Button';

const ReactMarkdown = lazy(() => import('react-markdown'));

const Overlay = styled(motion.div).attrs({
  variants: {
    initial: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  },
  initial: 'initial',
  animate: 'visible',
  exit: 'exit',
})`
  z-index: 100;
  position: absolute;
  top: -2rem;
  left: -2rem;
  width: calc(100% + 4rem);
  height: calc(100% + 4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
`;

const Modal = styled(motion.div)`
  position: relative;
  width: 60rem;
  padding: 3.75rem 7.25rem 8.75rem;
  border-radius: 1.25rem;
  box-sizing: border-box;
  background: ${({ theme, variant }) => theme.colors[`landingSpeakerVariant${variant}MainColor`]};
`;

const CloseButton = styled.button`
  position: absolute;
  top: -1.625rem;
  right: -1.625rem;
  padding: 0.875rem;
  border: none;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.landingSpeakerModalCloseBackground};
  font-size: 0;
`;

const Speaker = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: -14.9rem;
  margin-right: -12.375rem;
`;

const PhotoWrapper = styled(SpeakerPhoto)`
  width: 13.875rem;
  height: 13.875rem;
`;

const NationalityFlagWrapper = styled(SpeakerNationalityFlag)`
  width: 1.75rem;
  height: 1.25rem;
  margin-bottom: 1rem;
`;

const SpeakerInfo = styled.div`
  padding-left: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FirstName = styled(motion.div)`
  padding: 0.5rem 1.75rem 0;
  margin-left: -1.75rem;
  border-top-right-radius: 4rem;
  text-transform: uppercase;
  font-size: 2.125rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.landingSpeakerFirstNameColor};
  background: ${({ theme }) => theme.colors.landingSpeakerFirstNameBackground};
`;

const LastName = styled(motion.div)`
  text-transform: uppercase;
  font-size: 3.5rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.landingSpeakerLastNameColor};
`;

const SocialNetworks = styled(motion.div)`
  margin-top: 0.75rem;
  display: flex;
  flex-direction: row;

  * + * {
    margin-left: 1rem;
  }
`;

const Bio = styled(motion.div).attrs({
  variants: {
    initial: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  },
})`
  flex: 1;
  padding: 2rem;
  margin-left: 2rem;
  border-radius: 1.25rem;
  color: ${({ theme, variant }) => theme.colors[`landingSpeakerVariant${variant}BioColor`]};
  background: ${({ theme, variant }) =>
    theme.colors[`landingSpeakerVariant${variant}BioBackground`]};
`;

const Talk = styled.div`
  color: ${({ theme, variant }) => theme.colors[`landingSpeakerVariant${variant}TalkColor`]};
`;

const TalkType = styled(motion.div).attrs({
  variants: {
    initial: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  },
})`
  margin-bottom: 0.75rem;
  font-size: 1.625rem;
  font-weight: 900;
`;

const TalkName = styled(motion.div).attrs({
  variants: {
    initial: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  },
})`
  margin-left: -14.9rem;
  margin-bottom: 1.75rem;
  padding: 3rem 2.25rem 2.85rem 14.9rem;
  border-radius: 1.25rem;
  background: ${({ theme, variant }) =>
    theme.colors[`landingSpeakerVariant${variant}TalkNameBackground`]};
  color: ${({ theme, variant }) => theme.colors[`landingSpeakerVariant${variant}MainColor`]};
  font-size: 3rem;
  font-weight: 900;
`;

const TalkDescription = styled(motion.p).attrs({
  variants: {
    initial: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.4, duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  },
})`
  font-size: 1.875rem;
  font-weight: 400;
`;

const TalkSchedule = styled.div`
  margin-left: -14.9rem;
  margin-right: -10rem;
  margin-bottom: -13.125rem;
  margin-top: 4.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TalkDateTime = styled(motion.div).attrs({
  variants: {
    initial: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  },
})`
  padding: 2.5rem;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.colors.landingSpeakerDateTimeBackground};
  color: ${({ theme }) => theme.colors.landingSpeakerDateTimeColor};

  > * + * {
    margin-left: 2.25rem;
  }
`;

const TalkDateTimeGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const TalkDateTimeLabel = styled.div`
  margin-bottom: 0.25rem;
  font-size: 1.25rem;
  font-weight: 300;
`;

const TalkDateTimeValue = styled.div`
  font-size: 1.875rem;
  font-weight: 900;
`;

const TalkSaveSchedule = styled(Button).attrs({
  forwardedAs: motion.a,
  variant: 'dark',
  variants: {
    initial: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  },
})`
  font-size: 1.875rem;
  border-radius: 5rem;

  & > div {
    padding: 1.5rem;
    border-radius: 5rem;
  }
`;

export const SpeakerModal = ({
  id,
  variant,
  photo,
  nationality,
  firstName,
  lastName,
  socialMediaHandles,
  bio,
  talkType,
  talkName,
  talkDescription,
  talkSchedule,
  onClose,
}) => {
  const overlayRef = useRef(null);
  const overlayClickHandler = useCallback(
    (event) => {
      if (event.target === overlayRef.current) {
        onClose();
      }
    },
    [onClose],
  );

  const talkStarteDateTime = useMemo(() => DateTime.fromISO(talkSchedule[0]), [talkSchedule]);
  const talkEndDateTime = useMemo(() => DateTime.fromISO(talkSchedule[1]), [talkSchedule]);

  return (
    <Overlay
      initial="hidden"
      animate="show"
      exit="hidden"
      ref={overlayRef}
      onClick={overlayClickHandler}
    >
      <Modal variant={variant} layoutId={`speaker-${id}`}>
        <CloseButton onClick={onClose}>
          <Image src="/images/close.svg" width="24" height="24" />
        </CloseButton>
        <Speaker>
          <PhotoWrapper photo={photo} layoutId={`speaker-photo-${id}`} />
          <SpeakerInfo>
            <NationalityFlagWrapper
              nationality={nationality}
              layoutId={`speaker-nationality-flag-${id}`}
            />
            <FirstName layoutId={`speaker-first-name-${id}`}>{firstName}</FirstName>
            <LastName layoutId={`speaker-last-name-${id}`}>{lastName}</LastName>
            <SocialNetworks layoutId={`speaker-social-netwokrs-${id}`}>
              {socialMediaHandles.twitter != null ? (
                <a href={`https://twitter.com/${socialMediaHandles.twitter}`}>
                  <Image src="/logos/twitter-white.svg" width="33" height="27" />
                </a>
              ) : null}
              {socialMediaHandles.linkedin != null ? (
                <a href={`https://www.linkedin.com/in/${socialMediaHandles.linkedin}`}>
                  <Image src="/logos/linkedin-white.svg" width="27" height="27" />
                </a>
              ) : null}
              {socialMediaHandles.instagram != null ? (
                <a href={`https://www.instagram.com/${socialMediaHandles.instagram}`}>
                  <Image src="/logos/instagram-white.svg" width="27" height="27" />
                </a>
              ) : null}
            </SocialNetworks>
          </SpeakerInfo>
          <Bio variant={variant}>
            <Suspense fallback={() => null}>
              <ReactMarkdown>{bio}</ReactMarkdown>
            </Suspense>
          </Bio>
        </Speaker>
        <Talk variant={variant}>
          <TalkType>
            CHARLA
            {talkType === TALK_TYPES.LIGHTENING ? ' RELAMPAGO' : null}
          </TalkType>
          <TalkName variant={variant}>{talkName}</TalkName>
          <TalkDescription>{talkDescription}</TalkDescription>
        </Talk>
        <TalkSchedule>
          <TalkDateTime>
            <TalkDateTimeGroup>
              <TalkDateTimeLabel>DÍA</TalkDateTimeLabel>
              <TalkDateTimeValue>
                {talkStarteDateTime.toLocaleString({ day: 'numeric', month: 'numeric' })}
              </TalkDateTimeValue>
            </TalkDateTimeGroup>
            <TalkDateTimeGroup>
              <TalkDateTimeLabel>HORARIO [{talkStarteDateTime.toFormat('ZZZZ')}]</TalkDateTimeLabel>
              <TalkDateTimeValue>
                {talkStarteDateTime.toLocaleString(DateTime.TIME_24_SIMPLE)}
                {' - '}
                {talkEndDateTime.toLocaleString(DateTime.TIME_24_SIMPLE)} hs.
              </TalkDateTimeValue>
            </TalkDateTimeGroup>
          </TalkDateTime>
          <TalkSaveSchedule href="#">AGENDAR ESTA CHARLA</TalkSaveSchedule>
        </TalkSchedule>
      </Modal>
    </Overlay>
  );
};

SpeakerModal.propTypes = {
  id: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['A', 'B', 'C']).isRequired,
  photo: PropTypes.string.isRequired,
  nationality: PropTypes.oneOf(Object.values(NATIONALITIES)).isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  socialMediaHandles: PropTypes.shape({
    twitter: PropTypes.string,
    linkedin: PropTypes.string,
    instagram: PropTypes.string,
  }).isRequired,
  bio: PropTypes.string.isRequired,
  talkType: PropTypes.oneOf(Object.values(TALK_TYPES)).isRequired,
  talkName: PropTypes.string.isRequired,
  talkDescription: PropTypes.string.isRequired,
  talkSchedule: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
};
