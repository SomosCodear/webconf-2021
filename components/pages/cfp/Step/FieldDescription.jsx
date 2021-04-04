import styled from 'styled-components';

export const FieldDescription = styled.p`
  margin-top: 0.75rem;
  font-size: 1.5rem;
  line-height: 115%;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.cfpStepFieldDescription};
`;
