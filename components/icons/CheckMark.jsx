import PropTypes from 'prop-types';
import styled from 'styled-components';

const SVG = styled.svg`
  path {
    stroke: ${({ theme }) => theme.colors.checkmarkPath};
    stroke-width: 4;
  }
`;

export const CheckMark = (props) => (
  <SVG viewBox="0 0 24 20" fill="none" {...props}>
    <path d="M2 10.2949L7.87156 16.1935L22 2" />
  </SVG>
);

CheckMark.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

CheckMark.defaultProps = {
  width: '24',
  height: '20',
};
