import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { Checkbox } from '~/components/common';
import { Step } from './Step';

const TermsDescription = styled.p`
  margin-top: 2rem;
  font-size: 1.75rem;
  font-weight: 400;
`;

const TermsCheckbox = styled(Checkbox)`
  margin-top: 3rem;
`;

export const Step1 = () => {
  const { register } = useFormContext();

  return (
    <>
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
      <TermsCheckbox
        id="terms-checkbox"
        {...register('acceptTerms', { required: true })}
      >
        Declaro que leí los lineamientos de selección.
      </TermsCheckbox>
    </>
  );
};
