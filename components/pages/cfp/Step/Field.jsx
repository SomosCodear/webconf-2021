import styled from 'styled-components';

export const Field = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 1.5rem;
  }
`;
