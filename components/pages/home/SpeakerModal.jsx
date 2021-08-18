import { lazy, Suspense, useCallback, useEffect, useMemo, useRef } from 'react';
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { NATIONALITIES, TALK_TYPES } from '~/data/speakers';
import { SpeakerPhoto } from './SpeakerPhoto';
import { SpeakerNationalityFlag } from './SpeakerNationalityFlag';
import { Button } from '~/components/common/Button';

const ReactMarkdown = lazy(() => import('react-markdown'));

const Overlay = styled(motion.div).attrs({
  variants: {
    initial: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0.5 },
  },
})`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(2px);
  overflow: hidden;
`;

const ScrollingContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  padding: 10rem 0;
  margin: 20rem 2.375rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 10rem;
  }
`;

const Modal = styled(motion.div)`
  position: relative;
  padding: 0 1.75rem;
  border-radius: 1.25rem;
  background: ${({ theme, variant }) => theme.colors[`landingSpeakerVariant${variant}MainColor`]};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    box-sizing: border-box;
    width: 60rem;
    padding: 3.75rem 7.25rem 8.75rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -1.3rem;
  right: -1.3rem;
  padding: 0.875rem;
  border: none;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.landingSpeakerModalCloseBackground};
  font-size: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    top: -1.625rem;
    right: -1.625rem;
    padding: 0.875rem;
    border-radius: 50%;
  }
`;

const CloseImageContainer = styled.div`
  position: relative;
  width: 0.875rem;
  height: 0.875rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const SpeakerContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 2.5rem;
    flex-direction: row;
  }
`;

const Speaker = styled.div`
  margin-top: -3.45rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 0;
    margin-left: -14.9rem;
  }
`;

const PhotoWrapper = styled(SpeakerPhoto)`
  width: 6.5rem;
  height: 6.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 13.875rem;
    height: 13.875rem;
  }
`;

const NationalityFlagWrapper = styled(SpeakerNationalityFlag)`
  width: 0.75rem;
  height: 0.562rem;
  margin-bottom: 0.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 1.75rem;
    height: 1.25rem;
    margin-bottom: 1rem;
  }
`;

const SpeakerInfo = styled.div`
  padding-left: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-left: 0.5rem;
  }
`;

const FirstName = styled(motion.div)`
  padding: 0.25rem 1rem 0;
  margin-left: -1rem;
  border-top-right-radius: 3.125rem;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.landingSpeakerFirstNameColor};
  background: ${({ theme }) => theme.colors.landingSpeakerFirstNameBackground};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0.5rem 1.75rem 0;
    margin-left: -1.75rem;
    border-top-right-radius: 4rem;
    font-size: 2.125rem;
  }
`;

const LastName = styled(motion.div)`
  text-transform: uppercase;
  font-size: 1.625rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.landingSpeakerLastNameColor};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 3.5rem;
  }
`;

const SocialNetworks = styled(motion.div).attrs({
  variants: {
    exit: { opacity: 0, transition: { duration: 0.1 } },
  },
})`
  display: flex;
  flex-direction: row;
  align-items: center;

  * + * {
    margin-left: 0.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 0.75rem;

    * + * {
      margin-left: 1rem;
    }
  }
`;

const SocialNetwork = styled.a`
  width: 0.75rem;
  height: 0.75rem;
  display: flex;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 1.6875rem;
    height: 1.6875rem;
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
  margin-top: 2rem;
  margin-right: -5rem;
  border-radius: 1.25rem;
  color: ${({ theme, variant }) => theme.colors[`landingSpeakerVariant${variant}BioColor`]};
  background: ${({ theme, variant }) =>
    theme.colors[`landingSpeakerVariant${variant}BioBackground`]};
  font-size: 0.875rem;
  line-height: 140%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 0;
    margin-right: -12.375rem;
    margin-left: 2rem;
    font-size: 1.125rem;
    line-height: 160%;
  }
`;

const TalkContainer = styled.div`
  color: ${({ theme, variant }) => theme.colors[`landingSpeakerVariant${variant}TalkColor`]};
`;

const TalkType = styled(motion.div).attrs({
  variants: {
    initial: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  },
})`
  font-size: 1.625rem;
  font-weight: 900;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 0.75rem;
  }
`;

const TalkName = styled(motion.div).attrs({
  variants: {
    initial: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  },
})`
  margin-left: -10rem;
  margin-bottom: 1.25rem;
  padding: 2rem 2rem 1.85rem 10rem;
  border-radius: 1.25rem;
  background: ${({ theme, variant }) =>
    theme.colors[`landingSpeakerVariant${variant}TalkNameBackground`]};
  color: ${({ theme, variant }) => theme.colors[`landingSpeakerVariant${variant}MainColor`]};
  font-size: 1.25rem;
  font-weight: 900;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-left: -14.9rem;
    margin-bottom: 1.75rem;
    padding: 3rem 2.25rem 2.85rem 14.9rem;
    font-size: 3rem;
  }
`;

const TalkDescription = styled(motion.p).attrs({
  variants: {
    initial: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.4, duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  },
})`
  font-size: 1.125rem;
  font-weight: 400;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.875rem;
  }
`;

const TalkSchedule = styled.div`
  margin-top: 1.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 4.5rem;
    margin-bottom: -13.125rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TalkDateTime = styled(motion.div).attrs({
  variants: {
    initial: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  },
})`
  margin: 0 -5.5rem;
  padding: 1rem;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.colors.landingSpeakerDateTimeBackground};
  color: ${({ theme }) => theme.colors.landingSpeakerDateTimeColor};

  > * + * {
    margin-left: 2.25rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 0;
    padding: 2rem;
    margin-left: -14.9rem;
    margin-right: 0;
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
  font-size: 1.5rem;
  font-weight: 900;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.875rem;
  }
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
  margin-top: 1.5rem;
  margin-bottom: -1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: -10rem;
    font-size: 1.875rem;
    border-radius: 5rem;

    & > div {
      padding: 1.5rem;
      border-radius: 5rem;
    }
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
  disableTalkNameAnimation,
  onClose,
}) => {
  const scrollingContainerRef = useRef(null);
  const overlayClickHandler = useCallback(
    (event) => {
      if (event.target === scrollingContainerRef.current) {
        onClose();
      }
    },
    [onClose],
  );
  useEffect(() => {
    disableBodyScroll(scrollingContainerRef.current);
    return () => clearAllBodyScrollLocks();
  }, []);

  const shouldReduceMotion = useReducedMotion();

  const talkStarteDateTime = useMemo(() => DateTime.fromISO(talkSchedule[0]), [talkSchedule]);
  const talkEndDateTime = useMemo(() => DateTime.fromISO(talkSchedule[1]), [talkSchedule]);

  return (
    <Overlay
      initial={shouldReduceMotion ? 'visible' : 'initial'}
      animate="visible"
      exit="exit"
      onClick={overlayClickHandler}
    >
      <ScrollingContainer ref={scrollingContainerRef}>
        <ModalContainer>
          <Modal variant={variant} layoutId={`speaker-${id}`}>
            <CloseButton onClick={onClose}>
              <CloseImageContainer>
                <Image src="/images/close.svg" layout="fill" />
              </CloseImageContainer>
            </CloseButton>
            <SpeakerContainer>
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
                      <SocialNetwork href={`https://twitter.com/${socialMediaHandles.twitter}`}>
                        <Image src="/logos/twitter-white.svg" width="33" height="27" />
                      </SocialNetwork>
                    ) : null}
                    {socialMediaHandles.linkedin != null ? (
                      <SocialNetwork
                        href={`https://www.linkedin.com/in/${socialMediaHandles.linkedin}`}
                      >
                        <Image src="/logos/linkedin-white.svg" width="27" height="27" />
                      </SocialNetwork>
                    ) : null}
                    {socialMediaHandles.instagram != null ? (
                      <SocialNetwork
                        href={`https://www.instagram.com/${socialMediaHandles.instagram}`}
                      >
                        <Image src="/logos/instagram-white.svg" width="27" height="27" />
                      </SocialNetwork>
                    ) : null}
                  </SocialNetworks>
                </SpeakerInfo>
              </Speaker>
              <Bio variant={variant}>
                <Suspense fallback={null}>
                  <ReactMarkdown>{bio}</ReactMarkdown>
                </Suspense>
              </Bio>
            </SpeakerContainer>
            <TalkContainer variant={variant}>
              <TalkType>
                CHARLA
                {talkType === TALK_TYPES.LIGHTNING ? ' RELAMPAGO' : null}
              </TalkType>
              <TalkName
                initial={disableTalkNameAnimation ? 'visible' : 'initial'}
                animate="visible"
                exit={disableTalkNameAnimation ? 'visible' : 'exit'}
                variant={variant}
                layoutId={`speaker-talk-name-${id}`}
              >
                {talkName}
              </TalkName>
              <TalkDescription>{talkDescription}</TalkDescription>
            </TalkContainer>
            <TalkSchedule>
              <TalkDateTime>
                <TalkDateTimeGroup>
                  <TalkDateTimeLabel>DÍA</TalkDateTimeLabel>
                  <TalkDateTimeValue>
                    {talkStarteDateTime.toLocaleString({ day: 'numeric', month: 'numeric' })}
                  </TalkDateTimeValue>
                </TalkDateTimeGroup>
                <TalkDateTimeGroup>
                  <TalkDateTimeLabel>
                    HORARIO [{talkStarteDateTime.toFormat('ZZZZ')}]
                  </TalkDateTimeLabel>
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
        </ModalContainer>
      </ScrollingContainer>
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
  disableTalkNameAnimation: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

SpeakerModal.defaultProps = {
  disableTalkNameAnimation: false,
};
