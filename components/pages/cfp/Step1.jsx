import * as R from 'ramda';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { cfpFieldValidations } from '~/services/cfp';
import { Checkbox } from '~/components/common';
import { Step } from './Step';

const GuidelinesDescription = styled.p`
  margin-top: 1rem;
  font-size: 1.25rem;
  font-weight: 400;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 2rem;
    font-size: 1.75rem;
  }
`;

const GuidelinesCheckbox = styled(Checkbox)`
  font-weight: 500;
`;

export const Step1 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Step.Title>Antes de continuar...</Step.Title>
      <GuidelinesDescription>
        Te pedimos que te asegures de haber leído todos los lineamientos de selección expuestos en{' '}
        <a href="https://codear.org" target="_blank" rel="noreferrer">
          nuestra web
        </a>
        .
      </GuidelinesDescription>
      <Step.FieldContainer>
        <Step.Field>
          <GuidelinesCheckbox
            id="terms-checkbox"
            {...register('checkGuidelines')}
            hasError={errors.checkGuidelines != null}
            autoFocus
          >
            Declaro que leí los lineamientos de selección.
          </GuidelinesCheckbox>
          {errors.checkGuidelines ? (
            <Step.FieldError>{errors.checkGuidelines.message}</Step.FieldError>
          ) : null}
        </Step.Field>
      </Step.FieldContainer>
    </>
  );
};

Step1.validationSchema = R.pick(['checkGuidelines'], cfpFieldValidations);
