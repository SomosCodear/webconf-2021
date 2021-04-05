import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 3.125rem;
  border: none;
  border-bottom: 0.062rem solid ${({ theme }) => theme.colors.inputBorder};
  font-size: 2rem;
  margin-bottom: 0.124rem;
  transition: all 150ms linear;

  &::placeholder {
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }

  &:focus {
    outline: none;
    border-bottom: 0.186rem solid ${({ theme }) => theme.colors.inputBorderFocused};
    margin-bottom: 0;
  }
`;
