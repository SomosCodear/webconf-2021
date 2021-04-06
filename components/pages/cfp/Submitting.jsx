import styled from 'styled-components';
import { Loading } from '~/components/common';

const Container = styled.div`
  grid-area: step;
  grid-row-start: logo;
  grid-row-end: step;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${Loading} {
    width: 8rem;
    height: 8rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-row-start: progress;
  }
`;

export const Submitting = () => (
  <Container>
    <Loading />
  </Container>
);
