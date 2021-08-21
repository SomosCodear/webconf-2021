import styled from 'styled-components';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Anchor = styled.a`
  display: block;
  text-align: center;
`;

export const SponsorLink = ({
  logo,
  name,
  width,
  height,
  url,
  resizeOnMobile = false,
  scaleFactor = 1,
  rounded = false,
}) => {
  const [logoWidth, setLogoWidth] = useState(width);
  const [logoHeight, setLogoHeight] = useState(height);

  useEffect(() => {
    const isMobile = global.innerWidth < 640;
    if (isMobile) {
      setLogoWidth(width * scaleFactor);
      setLogoHeight(height * scaleFactor);
    } else {
      setLogoWidth(width);
      setLogoHeight(height);
    }
  }, [resizeOnMobile, scaleFactor, width, height]);
  return (
    <Anchor
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={rounded ? { borderRadius: '50%' } : {}}
    >
      <Image src={logo} alt={name} width={logoWidth} height={logoHeight} />
    </Anchor>
  );
};

SponsorLink.propTypes = {
  logo: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  resizeOnMobile: PropTypes.bool,
  scaleFactor: PropTypes.number,
  rounded: PropTypes.bool,
};

SponsorLink.defaultProps = {
  resizeOnMobile: false,
  scaleFactor: 1,
  rounded: false,
};
