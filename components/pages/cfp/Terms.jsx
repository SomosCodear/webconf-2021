import styled from 'styled-components';
import { Step } from './Step';

const TermsDescription = styled.p`
  margin-top: 2rem;
  font-size: 1.75rem;
  font-weight: 400;
`;

export const Terms = () => (
  <Step>
    <Step.Title>
      Antes de continuar...
    </Step.Title>
    <TermsDescription>
      Te pedimos que te asegures de haber leído todos los lineamientos de selección expuestos en
      {' '}
      <a href="https://codear.org" target="_blank" rel="noreferrer">
        nuestra web
      </a>
      .
    </TermsDescription>
  </Step>
);
