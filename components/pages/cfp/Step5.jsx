import * as R from 'ramda';
import { Controller, useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { cfpFieldValidations } from '~/services/cfp';
import { Input, Checkbox } from '~/components/common';
import { Step } from './Step';

const AdultFieldContainer = styled(Step.FieldContainer)`
  ${Step.Field} {
    flex-direction: row;

    > * + * {
      margin-left: 2rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    ${Step.Field} {
      margin: 0;
      margin-left: 2.5rem;
      flex-direction: row;

      > * + * {
        margin-left: 2rem;
      }
    }
  }
`;

export const Step5 = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Step.Title>¡Queremos conocerte un poco!</Step.Title>
      <Step.FieldContainer>
        <Step.FieldTitle variant="small">¿Cuál es tu nombre?</Step.FieldTitle>
        <Step.Field>
          <Input {...register('speakerName')} hasError={errors.speakerName != null} autoFocus />
          {errors.speakerName ? (
            <Step.FieldError>{errors.speakerName.message}</Step.FieldError>
          ) : null}
        </Step.Field>
      </Step.FieldContainer>
      <AdultFieldContainer>
        <Step.FieldTitle variant="small">¿Sos mayor de edad?</Step.FieldTitle>
        <Step.Field>
          <Controller
            control={control}
            name="speakerIsAdult"
            render={({ field: { onChange, value } }) => (
              <>
                <Checkbox
                  id="yes-adult-checkbox"
                  type="radio"
                  onChange={() => onChange(true)}
                  checked={value === true}
                  hasError={errors.speakerIsAdult != null}
                >
                  Sí
                </Checkbox>
                <Checkbox
                  id="no-adult-checkbox"
                  type="radio"
                  onChange={() => onChange(false)}
                  checked={value === false}
                  hasError={errors.speakerIsAdult != null}
                >
                  No
                </Checkbox>
              </>
            )}
          />
          {errors.speakerIsAdult ? (
            <Step.FieldError>{errors.speakerIsAdult.message}</Step.FieldError>
          ) : null}
        </Step.Field>
      </AdultFieldContainer>
      <Step.FieldContainer>
        <Step.FieldTitle variant="small">¿De qué ciudad sos?</Step.FieldTitle>
        <Step.Field>
          <Input
            placeholder="Ciudad, País"
            {...register('speakerCity')}
            hasError={errors.speakerCity != null}
          />
          {errors.speakerCity ? (
            <Step.FieldError>{errors.speakerCity.message}</Step.FieldError>
          ) : null}
        </Step.Field>
      </Step.FieldContainer>
      <Step.FieldContainer>
        <Step.FieldTitle variant="small">
          ¿Nos dejas una dirección de correo electrónico?
        </Step.FieldTitle>
        <Step.Field>
          <Input {...register('speakerEmail')} hasError={errors.speakerEmail != null} />
          {errors.speakerEmail ? (
            <Step.FieldError>{errors.speakerEmail.message}</Step.FieldError>
          ) : (
            <Step.FieldNote>
              Prometemos utilizar esta información pura y exclusivamente para comunicarnos contigo
              acerca de la conferencia, como lo indica nuestra política de privacidad.
            </Step.FieldNote>
          )}
        </Step.Field>
      </Step.FieldContainer>
    </>
  );
};

Step5.validationSchema = R.pick(
  ['speakerName', 'speakerIsAdult', 'speakerCity', 'speakerEmail'],
  cfpFieldValidations,
);
