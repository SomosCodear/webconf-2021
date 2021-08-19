import styled from 'styled-components';
import Image from 'next/image';
import PropTypes from 'prop-types';

import facebook from '~/public/logos/Facebook.svg';
import twitter from '~/public/logos/Twitter.svg';
import instagram from '~/public/logos/Instagram.svg';
import linkedin from '~/public/logos/LinkedIn.svg';
import github from '~/public/logos/GitHub.svg';

const providerToUrl = {
  facebook: (handle) => `https://facebook.com/${handle}`,
  twitter: (handle) => `https://twitter.com/${handle}`,
  instagram: (handle) => `https://instagram.com/${handle}`,
  linkedin: (handle) => `https://linkedin.com/company/${handle}`,
  github: (handle) => `https://github.com/${handle}`,
};

const providerToName = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  instagram: 'Instagram',
  github: 'GitHub',
  linkedin: 'LinkedIn',
};

const providerToLogo = { facebook, twitter, instagram, linkedin, github };

const Anchor = styled.a`
  padding: 1rem;
  filter: grayscale(1) brightness(3);
  transition: 150ms linear;

  &:hover {
    filter: grayscale(1) brightness(1);
  }
`;

export const SocialMediaLink = ({ provider, handle, owner }) => (
  <Anchor href={providerToUrl[provider](handle)} target="_blank" rel="noopener noreferrer">
    <Image
      src={providerToLogo[provider]}
      width={16}
      height={16}
      title={`Seguí a ${owner} en ${providerToName[provider]}`}
    />
  </Anchor>
);

SocialMediaLink.propTypes = {
  provider: PropTypes.oneOf(['facebook', 'twitter', 'instagram', 'linkedin', 'github']).isRequired,
  handle: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};
