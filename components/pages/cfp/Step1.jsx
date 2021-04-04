import PropTypes from 'prop-types';
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

export const Step1 = ({ defaults }) => {
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
        defaultChecked={defaults.acceptTerms}
        {...register('acceptTerms', { required: true })}
      >
        Declaro que leí los lineamientos de selección.
      </TermsCheckbox>
    </>
  );
};

Step1.propTypes = {
  defaults: PropTypes.shape({
    acceptTerms: PropTypes.bool.isRequired,
  }).isRequired,
};
