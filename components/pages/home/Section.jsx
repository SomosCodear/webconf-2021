import styled from 'styled-components';

export const Section = styled.section`
  padding: 3rem 2.625rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-top: 5rem;
  }
`;
