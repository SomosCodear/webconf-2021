import styled from 'styled-components';
import { Loading } from '~/components/common';

const Container = styled.div`
  grid-area: step;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${Loading} {
    width: 8rem;
    height: 8rem;
  }
`;

export const Submitting = () => (
  <Container>
    <Loading />
  </Container>
);
