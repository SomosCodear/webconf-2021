import styled from 'styled-components';

export const FieldDescription = styled.p`
  margin-top: 1.25rem;
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.cfpStepFieldDescription};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 0.75rem;
    font-size: 1.5rem;
  }
`;
