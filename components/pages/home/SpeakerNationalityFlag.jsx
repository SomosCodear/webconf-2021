import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { NATIONALITIES } from '~/data/speakers';

const Container = styled(motion.div)`
  position: relative;
`;

export const SpeakerNationalityFlag = ({ nationality, ...props }) => (
  <Container {...props}>
    <Image src={`/flags/${nationality}.svg`} layout="fill" />
  </Container>
);

SpeakerNationalityFlag.propTypes = {
  nationality: PropTypes.oneOf(Object.values(NATIONALITIES)).isRequired,
};
