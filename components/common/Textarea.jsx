import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.textareaBackground};
  border: 0.0625rem solid
    ${({ theme, hasError }) => (hasError ? theme.colors.error : theme.colors.textareaBorder)};
  border-radius: 1rem;
  font-size: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textareaPlaceholder};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0.75rem;
    font-size: 1.375rem;
  }
`;

Textarea.propTypes = {
  hasError: PropTypes.bool,
};

Textarea.defaultProps = {
  hasError: false,
};
