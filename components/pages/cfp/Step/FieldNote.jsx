import styled from 'styled-components';

export const FieldNote = styled.p`
  top: calc(100% + 0.25rem);
  position: absolute;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.cfpStepFieldHelp};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    top: calc(100% + 0.5rem);
    font-size: 1rem;
  }
`;
