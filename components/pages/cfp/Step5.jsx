import { Controller, useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { Input, Checkbox } from '~/components/common';
import { Step } from './Step';

const AdultFieldContainer = styled(Step.FieldContainer)`
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
`;

export const Step5 = () => {
  const { register, control } = useFormContext();

  return (
    <>
      <Step.Title>¡Queremos conocerte un poco!</Step.Title>
      <Step.FieldContainer>
        <Step.FieldTitle variant="small">¿Cuál es tu nombre?</Step.FieldTitle>
        <Step.Field>
          <Input {...register('speakerName', { required: true })} autoFocus />
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
                >
                  Sí
                </Checkbox>
                <Checkbox
                  id="no-adult-checkbox"
                  type="radio"
                  onChange={() => onChange(false)}
                  checked={value === false}
                >
                  No
                </Checkbox>
              </>
            )}
          />
        </Step.Field>
      </AdultFieldContainer>
      <Step.FieldContainer>
        <Step.FieldTitle variant="small">¿De qué ciudad sos?</Step.FieldTitle>
        <Step.Field>
          <Input placeholder="Ciudad, País" {...register('speakerCity', { required: true })} />
        </Step.Field>
      </Step.FieldContainer>
      <Step.FieldContainer>
        <Step.FieldTitle variant="small">
          ¿Nos dejas una dirección de correo electrónico?
        </Step.FieldTitle>
        <Step.Field>
          <Input type="email" {...register('speakerEmail', { required: true })} />
          <p>
            Prometemos utilizar esta información pura y exclusivamente para comunicarnos contigo
            acerca de la conferencia, como lo indica nuestra política de privacidad.
          </p>
        </Step.Field>
      </Step.FieldContainer>
    </>
  );
};
