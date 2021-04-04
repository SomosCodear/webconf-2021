import styled from 'styled-components';

export const Field = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;

  > * + * {
    margin-left: 2rem;
  }
`;
