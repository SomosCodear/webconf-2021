import * as R from 'ramda';
import propTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { cfpFieldValidations } from '~/services/cfp';
import { Input, Checkbox } from '~/components/common';
import { Step } from './Step';

const CheckFieldContainer = styled(Step.FieldContainer)`
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

const EmailFieldContainer = styled(Step.FieldContainer)`
  margin-bottom: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 1.5rem;
  }
`;

export const Step5 = ({ type = 'talks' }) => {
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
      <CheckFieldContainer>
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
      </CheckFieldContainer>
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
      {type === 'workshops' ? (
        <CheckFieldContainer>
          <Step.FieldTitle variant="small">¿A qué organización representas?</Step.FieldTitle>
          <Step.Field>
            <Controller
              control={control}
              name="representingOrganization"
              render={({ field: { onChange, value } }) => (
                <>
                  <Checkbox
                    id="community-checkbox"
                    type="radio"
                    value="community"
                    onChange={() => onChange('community')}
                    checked={value === 'community'}
                    hasError={errors.representingOrganization != null}
                  >
                    A una comunidad, meetup u ONG
                  </Checkbox>
                  <Checkbox
                    id="company-checkbox"
                    type="radio"
                    value="company-checkbox"
                    onChange={() => onChange('company')}
                    checked={value === 'company'}
                    hasError={errors.representingOrganization != null}
                  >
                    A una empresa
                  </Checkbox>
                </>
              )}
            />
            {errors.representingOrganization ? (
              <Step.FieldError>{errors.representingOrganization.message}</Step.FieldError>
            ) : null}
          </Step.Field>
        </CheckFieldContainer>
      ) : (
        ''
      )}
      {type === 'workshops' ? (
        <Step.FieldContainer>
          <Step.FieldTitle variant="small">¿Cómo se llama la organización?</Step.FieldTitle>
          <Step.Field>
            <Input {...register('organizationName')} hasError={errors.organizationName != null} />
            {errors.organizationName ? (
              <Step.FieldError>{errors.organizationName.message}</Step.FieldError>
            ) : null}
          </Step.Field>
        </Step.FieldContainer>
      ) : (
        ''
      )}
      <EmailFieldContainer>
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
      </EmailFieldContainer>
    </>
  );
};

Step5.propTypes = {
  type: propTypes.oneOf(['talks', 'workshops']),
};

Step5.defaultProps = {
  type: 'talks',
};

Step5.validationSchema = R.pick(
  [
    'speakerName',
    'speakerIsAdult',
    'speakerCity',
    'speakerEmail',
    'representingOrganization',
    'organizationName',
  ],
  cfpFieldValidations,
);
