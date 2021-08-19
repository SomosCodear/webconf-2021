import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';
import { motion } from '~/components/motion';
import { NATIONALITIES } from '~/data/speakers';
import { SpeakerNationalityFlag } from './SpeakerNationalityFlag';
import { SpeakerPhoto } from './SpeakerPhoto';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PhotoWrapper = styled(SpeakerPhoto)`
  width: 8.125rem;
  height: 8.125rem;
  cursor: pointer;
`;

const NationalityFlagWrapper = styled(SpeakerNationalityFlag)`
  width: 1rem;
  height: 0.75rem;
  margin-left: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: -0.85rem;
  cursor: pointer;
`;

const FirstName = styled(motion.div)`
  padding: 0.25rem 1rem 0;
  padding-left: 1.5rem;
  border-top-right-radius: 4rem;
  text-transform: uppercase;
  font-size: 1rem;
  max-width: 10rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.landingSpeakerFirstNameColor};
  background: ${({ theme }) => theme.colors.landingSpeakerFirstNameBackground};
`;

const LastName = styled(motion.div)`
  padding: 0.3rem 1rem 0;
  padding-left: 1.5rem;
  border-top-right-radius: 4rem;
  border-bottom-right-radius: 4rem;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 900;
  width: 11rem;
  color: ${({ theme }) => theme.colors.landingSpeakerLastNameColor};
  background: ${({ theme, variant }) => theme.colors[`landingSpeakerVariant${variant}MainColor`]};
`;

const SocialNetworks = styled(motion.div)`
  margin-left: 1.5rem;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;

  * + * {
    margin-left: 0.5rem;
  }
`;

const calculateTextStyle = (text) => {
  const baseStyles = {
    display: 'grid',
    alignItems: 'center',
    fontSize: '2.25rem',
    height: '2.5rem',
    letterSpacing: '4px',
  };

  let specificStyles = {};

  if (text === 'Paoli') {
    specificStyles = { letterSpacing: '17px' };
  } else if (text.length < 6) {
    specificStyles = { letterSpacing: '13px' };
  } else if (text === 'De Caro') {
    specificStyles = { letterSpacing: '2.5px' };
  } else if (text === 'De Lima') {
    specificStyles = { letterSpacing: '4.1px' };
  } else if (text === 'Moreno') {
    specificStyles = { letterSpacing: '2px' };
  } else if (text === 'Chavez') {
    specificStyles = { letterSpacing: '6px' };
  } else if (text.length === 6) {
    specificStyles = { letterSpacing: '8px' };
  } else if (text === 'Thiessen') {
    specificStyles = { letterSpacing: '0px' };
  } else if (text === 'Huidobro') {
    specificStyles = { fontSize: '2.1rem', letterSpacing: '0px' };
  } else if (text === 'Chanampe') {
    specificStyles = { fontSize: '1.9rem', letterSpacing: '0px' };
  } else if (text === 'Giuliani') {
    specificStyles = { letterSpacing: '2.5px' };
  } else if (text === 'La Torre') {
    specificStyles = { letterSpacing: '0px' };
  } else if (text.length <= 8) {
    specificStyles = { letterSpacing: '1px' };
  } else if (text === 'Corradini') {
    specificStyles = { fontSize: '1.9rem', letterSpacing: '1px' };
  } else if (text === 'Pontiroli') {
    specificStyles = { fontSize: '1.95rem', letterSpacing: '1px' };
  } else if (text.length <= 9) {
    specificStyles = { fontSize: '1.75rem', letterSpacing: '1px' };
  } else if (text.length <= 10) {
    specificStyles = { fontSize: '1.7rem', letterSpacing: '0px' };
  } else if (text.length > 15) {
    specificStyles = { fontSize: '1rem', letterSpacing: '7px' };
  }

  return { ...baseStyles, ...specificStyles };
};

export const SpeakerPreviewCard = ({
  id,
  variant,
  photo,
  nationality,
  firstName,
  lastName,
  socialMediaHandles,
  onSelect,
  selected = false,
}) => (
  <Container layoutId={`speaker-${id}`} style={!selected ? { filter: 'blur(20px)' } : {}}>
    <PhotoWrapper photo={photo} onClick={onSelect} layoutId={`speaker-photo-${id}`} />
    <Info>
      <NationalityFlagWrapper
        nationality={nationality}
        layoutId={`speaker-nationality-flag-${id}`}
        onClick={onSelect}
      />
      <FirstName layoutId={`speaker-first-name-${id}`} onClick={onSelect}>
        {firstName}
      </FirstName>
      <LastName
        variant={variant}
        layoutId={`speaker-last-name-${id}`}
        style={calculateTextStyle(lastName)}
        onClick={onSelect}
      >
        {lastName}
      </LastName>
      <SocialNetworks layoutId={`speaker-social-netwokrs-${id}`}>
        {socialMediaHandles.twitter != null ? (
          <a
            href={`https://twitter.com/${socialMediaHandles.twitter}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/logos/twitter-white.svg" width="19.58" height="16" />
          </a>
        ) : null}
        {socialMediaHandles.linkedin != null ? (
          <a
            href={`https://www.linkedin.com/in/${socialMediaHandles.linkedin}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/logos/linkedin-white.svg" width="16" height="16" />
          </a>
        ) : null}
        {socialMediaHandles.instagram != null ? (
          <a
            href={`https://www.instagram.com/${socialMediaHandles.instagram}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/logos/instagram-white.svg" width="16" height="16" />
          </a>
        ) : null}
      </SocialNetworks>
    </Info>
  </Container>
);

SpeakerPreviewCard.propTypes = {
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
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};

SpeakerPreviewCard.defaultProps = {
  selected: false,
};
