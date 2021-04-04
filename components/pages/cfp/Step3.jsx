import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import Image from 'next/image';
import { Input, Textarea } from '~/components/common';
import { Step } from './Step';

const ShortDescriptionField = styled(Step.Field)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ShortDescriptionSpeechBubble = styled.div`
  align-self: stretch;
  position: relative;
  padding-left: 3rem;
  margin-bottom: 1.75rem;

  &:before {
    content: '';
    position: absolute;
    bottom: -1.65rem;
    left: 4.5rem;
    width: 0;
    height: 0;
    border: 1.75rem solid transparent;
    border-top-color: ${({ theme }) => theme.colors.textareaBorder};
    border-bottom: 0;
    border-left: 0;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: -1.5rem;
    left: 4.55rem;
    width: 0;
    height: 0;
    border: 1.75rem solid transparent;
    border-top-color: ${({ theme }) => theme.colors.textareaBackground};
    border-bottom: 0;
    border-left: 0;
  }
`;

export const Step3 = () => {
  const { register } = useFormContext();

  return (
    <>
      <Step.Title>Contanos sobre tu charla.</Step.Title>
      <Step.FieldContainer>
        <Step.FieldTitle>Describí brevemente tu charla.</Step.FieldTitle>
        <Step.FieldDescription>
          Imaginate que tenemos que dar a conocer tu charla en un tweet.
          <br />
          <b>¿Cómo la describirías en menos de 200 caracteres?</b>
        </Step.FieldDescription>
        <ShortDescriptionField>
          <ShortDescriptionSpeechBubble>
            <Textarea
              placeholder="Mi charla es..."
              rows="4"
              {...register('talkShortDescription', { required: true, maxLength: 200 })}
              autoFocus
            />
          </ShortDescriptionSpeechBubble>
          <Image src="/images/cfp-twitter.svg" width="66" height="54" />
        </ShortDescriptionField>
      </Step.FieldContainer>
      <Step.FieldContainer>
        <Step.FieldDescription>
          <b>Pensá en 4 o 5 palabras claves que puedan dar contexto a tu charla.</b>
          <br />
          Podés pensarlo como si fueran hashtags, por ejemplo: #ui, #ux, #diseño, #css, #grillas.
        </Step.FieldDescription>
        <Step.Field>
          <Input
            type="text"
            placeholder="#charla #fantástica"
            {...register('talkHashtags', { required: true })}
          />
        </Step.Field>
      </Step.FieldContainer>
    </>
  );
};
