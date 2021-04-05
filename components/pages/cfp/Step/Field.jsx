import styled from 'styled-components';

export const Field = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  p {
    margin-top: 0.75rem;
    color: ${({ theme }) => theme.colors.cfpStepFieldHelp};
  }
`;
