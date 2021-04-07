import styled from 'styled-components';

export const Field = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  p {
    margin-top: 0.5rem;
    font-size: 0.625rem;
    color: ${({ theme }) => theme.colors.cfpStepFieldHelp};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 1.5rem;

    p {
      margin-top: 0.75rem;
    }
  }
`;
