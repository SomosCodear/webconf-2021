import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.cfpStepTitle};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 2.5rem;
  }
`;
