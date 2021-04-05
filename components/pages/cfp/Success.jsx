import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '~/components/common';
import { CheckMark } from '~/components/icons';
import { Step } from './Step';

const Container = styled.div`
  grid-row-start: progress;
  grid-row-end: step;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Step.Title)`
  margin-top: 1rem;
`;

const Note = styled.p`
  margin-top: 1.5rem;
  margin-bottom: 5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.cfpSuccessNote};
`;

export const Success = ({ onReset }) => (
  <Container>
    <CheckMark width="270" height="190" />
    <Title>¡Tu propuesta ha sido enviada!</Title>
    <Note>Nos comunicaremos pronto con más información.</Note>
    <Button variant="primary" onClick={onReset}>
      Enviar otra charla
    </Button>
  </Container>
);

Success.propTypes = {
  onReset: PropTypes.func.isRequired,
};
