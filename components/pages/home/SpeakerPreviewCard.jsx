import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';
import { NATIONALITIES } from '~/data/speakers';
import { SpeakerNationalityFlag } from './SpeakerNationalityFlag';
import { SpeakerPhoto } from './SpeakerPhoto';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SpeakerPhotoWrapper = styled(SpeakerPhoto)`
  width: 8.125rem;
  height: 8.125rem;
`;

const SpeakerNationalityFlagWrapper = styled(SpeakerNationalityFlag)`
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
`;

const FirstName = styled.div`
  padding: 0.25rem 1rem 0;
  border-top-right-radius: 4rem;
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.landingSpeakerFirstNameColor};
  background: ${({ theme }) => theme.colors.landingSpeakerFirstNameBackground};
`;

const LastName = styled.div`
  padding: 0.3rem 1rem 0;
  border-top-right-radius: 4rem;
  border-bottom-right-radius: 4rem;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.landingSpeakerLastNameColor};
  background: ${({ theme, variant }) => theme.colors[`landingSpeakerVariant${variant}`]};
`;

const SocialNetworks = styled.div`
  margin-left: 1.1rem;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;

  * + * {
    margin-left: 0.5rem;
  }
`;

export const SpeakerPreviewCard = ({
  variant,
  photo,
  nationality,
  firstName,
  lastName,
  socialMediaHandles,
}) => (
  <Container>
    <SpeakerPhotoWrapper photo={photo} />
    <Info>
      <SpeakerNationalityFlagWrapper nationality={nationality} />
      <FirstName>{firstName}</FirstName>
      <LastName variant={variant}>{lastName}</LastName>
      <SocialNetworks>
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
};
