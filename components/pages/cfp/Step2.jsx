import { useFormContext, Controller } from 'react-hook-form';
import { Checkbox, Input } from '~/components/common';
import { Step } from './Step';

export const Step2 = () => {
  const { register, control } = useFormContext();

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
            {...register('talkTitle', { required: true })}
            autoFocus
          />
        </Step.Field>
      </Step.FieldContainer>
      <Step.FieldContainer>
        <Step.FieldTitle>¿Qué tan larga es tu charla?</Step.FieldTitle>
        <Step.Field>
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
        </Step.Field>
      </Step.FieldContainer>
    </>
  );
};
