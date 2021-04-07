import styled from 'styled-components';

export const FieldContainer = styled.div`
  margin-top: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 2rem;
  }
`;
