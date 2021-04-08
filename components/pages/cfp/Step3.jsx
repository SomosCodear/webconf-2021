import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import Image from 'next/image';
import { Input, Textarea } from '~/components/common';
import { Step } from './Step';

const ShortDescriptionField = styled(Step.Field)`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;
  }
`;

const ShortDescriptionSpeechBubble = styled.div`
  flex: 1;
  margin-left: 1.5rem;
  align-self: stretch;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 1rem;
    left: -1.25rem;
    width: 0;
    height: 0;
    border: 1.25rem solid transparent;
    border-bottom-color: ${({ theme }) => theme.colors.textareaBorder};
    border-top: 0;
    border-right: 0;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0.95rem;
    left: -1.1rem;
    width: 0;
    height: 0;
    border: 1.25rem solid transparent;
    border-bottom-color: ${({ theme }) => theme.colors.textareaBackground};
    border-top: 0;
    border-right: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-left: 3rem;
    margin-bottom: 1.75rem;

    &:before {
      content: '';
      position: absolute;
      top: auto;
      bottom: -1.65rem;
      left: 1.5rem;
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
      top: auto;
      left: 1.55rem;
      bottom: -1.5rem;
      width: 0;
      height: 0;
      border: 1.75rem solid transparent;
      border-top-color: ${({ theme }) => theme.colors.textareaBackground};
      border-bottom: 0;
      border-left: 0;
    }
  }
`;

const ShortDescriptionImageContainer = styled.div`
  width: 2.5rem;
  padding-top: 2.15rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 4rem;
    padding-top: 0;
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
              {...register('talkTweet', { required: true, maxLength: 200 })}
              autoFocus
            />
          </ShortDescriptionSpeechBubble>
          <ShortDescriptionImageContainer>
            <Image src="/images/cfp-twitter.svg" width="66" height="54" layout="responsive" />
          </ShortDescriptionImageContainer>
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
