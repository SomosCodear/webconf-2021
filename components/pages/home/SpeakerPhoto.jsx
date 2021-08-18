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

export const SpeakerPhoto = ({ photo, ...props }) => (
  <Container {...props}>
    <Image src={photo} layout="fill" />
  </Container>
);

SpeakerPhoto.propTypes = {
  photo: PropTypes.string.isRequired,
};
