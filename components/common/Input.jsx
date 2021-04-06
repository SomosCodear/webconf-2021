import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  margin-bottom: 0.062rem;
  height: 1.375rem;
  border: none;
  border-bottom: 0.062rem solid ${({ theme }) => theme.colors.inputBorder};
  font-size: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }

  &:focus {
    margin-bottom: 0;
    border-bottom: 0.125rem solid ${({ theme }) => theme.colors.inputBorderFocused};
    outline: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 3.125rem;
    font-size: 2rem;
  }
`;
