import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  position: relative;
  border-radius: 50%;
  border: 0.25rem solid ${({ theme }) => theme.colors.landingSpeakerPhotoBorder};
  background: ${({ theme }) => theme.colors.landingSpeakerPhotoBackground};
  z-index: 10;
`;

const Inset = styled(motion.div)`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
`;

export const SpeakerPhoto = ({ photo, inset = false, insetWidth = '100%', ...props }) => (
  <Container {...props}>
    {inset ? (
      <Inset>
        <img src={photo} width={insetWidth} alt="" />
      </Inset>
    ) : (
      <Image src={photo} layout="fill" />
    )}
  </Container>
);

SpeakerPhoto.propTypes = {
  photo: PropTypes.string.isRequired,
  inset: PropTypes.bool,
  insetWidth: PropTypes.string,
};

SpeakerPhoto.defaultProps = {
  inset: false,
  insetWidth: '100%',
};
