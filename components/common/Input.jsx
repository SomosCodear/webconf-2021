import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 3.125rem;
  border: none;
  border-bottom: 0.062rem solid ${({ theme }) => theme.colors.inputBorder};
  font-size: 2rem;
  outline-offset: 0.25rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }
`;
