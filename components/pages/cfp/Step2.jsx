import * as R from 'ramda';
import { useFormContext, Controller } from 'react-hook-form';
import styled from 'styled-components';
import { cfpFieldValidations } from '~/services/cfp';
import { Checkbox, Input } from '~/components/common';
import { Step } from './Step';

const TalkLengthField = styled(Step.Field)`
  flex-direction: column;

  > * + * {
    margin-top: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;

    > * + * {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`;

export const Step2 = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Step.Title>Contanos sobre tu charla.</Step.Title>
      <Step.FieldContainer>
        <Step.FieldTitle>¿Qué título le pondrías?</Step.FieldTitle>
        <Step.FieldDescription>
          No hace falta que sea el título final, pensá en algo interesante, que genere atracción y{' '}
          que llame la atención al público.
        </Step.FieldDescription>
        <Step.Field>
          <Input
            type="text"
            placeholder="Fantástico título de charla"
            {...register('talkTitle')}
            hasError={errors.talkTitle != null}
            autoFocus
          />
          {errors.talkTitle ? <Step.FieldError>{errors.talkTitle.message}</Step.FieldError> : null}
        </Step.Field>
      </Step.FieldContainer>
      <Step.FieldContainer>
        <Step.FieldTitle>¿Qué tan larga es tu charla?</Step.FieldTitle>
        <TalkLengthField>
          <Controller
            control={control}
            name="talkLength"
            render={({ field: { onChange, value } }) => (
              <>
                <Checkbox
                  id="standard-talk-checkbox"
                  type="radio"
                  value="standard"
                  onChange={onChange}
                  checked={value === 'standard'}
                >
                  30 min. (charla estándar)
                </Checkbox>
                <Checkbox
                  id="lightning-talk-checkbox"
                  type="radio"
                  value="lightning"
                  onChange={onChange}
                  checked={value === 'lightning'}
                >
                  10 min. (charla relámpago)
                </Checkbox>
              </>
            )}
          />
        </TalkLengthField>
      </Step.FieldContainer>
    </>
  );
};

Step2.defaultStepValues = { talkLength: 'standard' };
Step2.validationSchema = R.pick(['talkTitle', 'talkLength'], cfpFieldValidations);
