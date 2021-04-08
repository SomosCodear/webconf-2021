import styled from 'styled-components';

export const FieldError = styled.div`
  top: calc(100% + 0.25rem);
  position: absolute;
  color: ${({ theme }) => theme.colors.error};
  font-weight: 500;
  font-size: 0.75rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    top: calc(100% + 0.5rem);
    font-size: 1.125rem;
  }
`;
