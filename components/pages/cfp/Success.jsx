import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '~/components/common';
import { CheckMark } from '~/components/icons';
import { Step } from './Step';

const Container = styled.div`
  grid-area: step;
  grid-row-start: logo;
  grid-row-end: step;
  margin: -2.5rem 0;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.cfpSuccessMobileBackground};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-row-start: progress;
    background-color: unset;
  }
`;

const Title = styled(Step.Title)`
  margin-top: 1rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    color: ${({ theme }) => theme.colors.cfpSuccessMobileTitle};
  }
`;

const Note = styled.p`
  margin-top: 1.5rem;
  margin-bottom: 5rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.cfpSuccessMobileNote};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.cfpSuccessNote};
  }
`;

const SendAnotherButton = styled(Button)`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    color: white;
    border-color: white;
  }
`;

export const Success = ({ onReset }) => (
  <Container>
    <CheckMark width="270" height="190" />
    <Title>¡Tu propuesta ha sido enviada!</Title>
    <Note>Nos comunicaremos pronto con más información.</Note>
    <SendAnotherButton onClick={onReset}>Enviar otra</SendAnotherButton>
  </Container>
);

Success.propTypes = {
  onReset: PropTypes.func.isRequired,
};
