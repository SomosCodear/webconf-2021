import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
export const Loading = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;

  &:after {
    transform: rotate(180deg);
    content: ' ';
    display: block;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    border: ${({ tickness }) => tickness}rem solid ${({ theme }) => theme.colors.loadingBackground};
    border-color: ${({ theme }) => theme.colors.loadingBackground}
      ${({ theme }) => theme.colors.loadingBackground} transparent transparent;
    animation: ${rotation} 1.2s linear infinite;
  }
`;

Loading.propTypes = {
  tickness: PropTypes.number,
};

Loading.defaultProps = {
  tickness: 0.5,
};
