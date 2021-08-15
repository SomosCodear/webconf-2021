import * as R from 'ramda';
import propTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import styled from 'styled-components';
import { cfpFieldValidations } from '~/services/cfp';
import { Checkbox, Input } from '~/components/common';
import { Step } from './Step';

// const TalkLengthField = styled(Step.Field)`
//   flex-direction: column;

//   > * + * {
//     margin-top: 1rem;
//   }

//   @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
//     flex-direction: row;

//     > * + * {
//       margin-top: 0;
//       margin-left: 2rem;
//     }
//   }
// `;

const TalkLengthField = styled(Step.Field)`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
`;

const messages = {
  talks: {
    subject: 'charla',
    id: 'talk',
    titlePlaceholder: 'Fantástico título de charla',
    activityDurationQuestion: '¿Qué tan larga es tu charla?',
    durationOptions: [
      {
        value: 'standard',
        label: '30 min. (charla estándar)',
      },
      {
        value: 'lightning',
        label: '10 min. (charla relámpago)',
      },
    ],
  },
  workshops: {
    subject: 'taller',
    id: 'workshop',
    titlePlaceholder: 'Un taller increíble sobre...',
    activityDurationQuestion: '¿Cuánto dura tu taller?',
    durationOptions: [
      {
        value: 'short-workshop',
        label: '1 hora (corto)',
      },
      {
        value: 'standard-workshop',
        label: '2 horas (estándar)',
      },
      {
        value: 'deepdive-workshop',
        label: '3 horas (intensivo)',
      },
    ],
  },
};

export const Step2 = ({ type = 'talks' }) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Step.Title>Contanos sobre tu {messages[type].subject}.</Step.Title>
      <Step.FieldContainer>
        <Step.FieldTitle>¿Qué título le pondrías?</Step.FieldTitle>
        <Step.FieldDescription>
          No hace falta que sea el título final, pensá en algo interesante, que genere atracción y{' '}
          que llame la atención al público.{' '}
          <a href="/ideas" target="_blank">
            ¿No sabés de qué dar tu {messages[type].subject}? ¡Usá nuestro buscador de ideas!
          </a>
        </Step.FieldDescription>
        <Step.Field>
          <Input
            type="text"
            placeholder={messages[type].titlePlaceholder}
            {...register('talkTitle')}
            hasError={errors.talkTitle != null}
            autoFocus
          />
          {errors.talkTitle ? <Step.FieldError>{errors.talkTitle.message}</Step.FieldError> : null}
        </Step.Field>
      </Step.FieldContainer>
      <Step.FieldContainer>
        <Step.FieldTitle>{messages[type].activityDurationQuestion}</Step.FieldTitle>
        <TalkLengthField>
          <Controller
            control={control}
            name="talkLength"
            render={({ field: { onChange, value } }) =>
              messages[type].durationOptions.map((durationOption) => (
                <Checkbox
                  key={`checkbox_${durationOption.value}`}
                  id={`${durationOption.value}-${messages[type].id}-checkbox`}
                  type="radio"
                  value={durationOption.value}
                  onChange={onChange}
                  checked={value === durationOption.value}
                >
                  {durationOption.label}
                </Checkbox>
              ))
            }
          />
        </TalkLengthField>
      </Step.FieldContainer>
    </>
  );
};

Step2.propTypes = {
  type: propTypes.oneOf(['talks', 'workshops']),
};

Step2.defaultProps = {
  type: 'talks',
};

// Step2.defaultStepValues = { talkLength: 'standard' };
Step2.validationSchema = R.pick(['talkTitle', 'talkLength'], cfpFieldValidations);
