import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
  margin-left: 1.1rem;
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
  border-top-right-radius: 4rem;
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.landingSpeakerFirstNameColor};
  background: ${({ theme }) => theme.colors.landingSpeakerFirstNameBackground};
`;

const LastName = styled(motion.div)`
  padding: 0.3rem 1rem 0;
  border-top-right-radius: 4rem;
  border-bottom-right-radius: 4rem;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.landingSpeakerLastNameColor};
  background: ${({ theme, variant }) => theme.colors[`landingSpeakerVariant${variant}MainColor`]};
`;

const SocialNetworks = styled(motion.div)`
  margin-left: 1.1rem;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;

  * + * {
    margin-left: 0.5rem;
  }
`;

export const SpeakerPreviewCard = ({
  id,
  variant,
  photo,
  nationality,
  firstName,
  lastName,
  socialMediaHandles,
  onSelect,
}) => (
  <Container layoutId={`speaker-${id}`}>
    <PhotoWrapper photo={photo} onClick={onSelect} layoutId={`speaker-photo-${id}`} />
    <Info onClick={onSelect}>
      <NationalityFlagWrapper
        nationality={nationality}
        layoutId={`speaker-nationality-flag-${id}`}
      />
      <FirstName layoutId={`speaker-first-name-${id}`}>{firstName}</FirstName>
      <LastName variant={variant} layoutId={`speaker-last-name-${id}`}>
        {lastName}
      </LastName>
      <SocialNetworks layoutId={`speaker-social-netwokrs-${id}`}>
        {socialMediaHandles.twitter != null ? (
          <a href={`https://twitter.com/${socialMediaHandles.twitter}`}>
            <Image src="/logos/twitter-white.svg" width="19.58" height="16" />
          </a>
        ) : null}
        {socialMediaHandles.linkedin != null ? (
          <a href={`https://www.linkedin.com/in/${socialMediaHandles.linkedin}`}>
            <Image src="/logos/linkedin-white.svg" width="16" height="16" />
          </a>
        ) : null}
        {socialMediaHandles.instagram != null ? (
          <a href={`https://www.instagram.com/${socialMediaHandles.instagram}`}>
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
};
