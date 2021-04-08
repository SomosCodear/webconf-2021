import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  margin-bottom: 0.062rem;
  height: 1.375rem;
  border: none;
  border-bottom: 0.062rem solid
    ${({ theme, hasError }) => (hasError ? theme.colors.error : theme.colors.inputBorder)};
  font-size: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }

  &:focus {
    margin-bottom: 0;
    border-bottom: 0.125rem solid
      ${({ theme, hasError }) => (hasError ? theme.colors.error : theme.colors.inputBorderFocused)};
    outline: none;
  }

  &:invalid {
    background: red;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 3.125rem;
    margin-bottom: 0.125rem;
    font-size: 2rem;

    &:focus {
      border-bottom-width: 0.187rem;
    }
  }
`;

Input.propTypes = {
  hasError: PropTypes.bool,
};

Input.defaultProps = {
  hasError: false,
};
