import * as R from 'ramda';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { cfpFieldValidations } from '~/services/cfp';
import { Textarea } from '~/components/common';
import { Step } from './Step';

const MiscFieldContainer = styled(Step.FieldContainer)`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 0;

  ${Step.FieldDescription} {
    display: none;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      display: initial;
    }
  }
`;

const TalkDescriptionField = styled(Step.Field)`
  flex: 1;

  ${Textarea} {
    resize: none;
    flex: 1;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    ${Textarea} {
      &::placeholder {
        color: transparent;
      }
    }
  }
`;

export const Step6 = () => {
  const { register } = useFormContext();

  return (
    <>
      <Step.Title>¡Casi estamos!</Step.Title>
      <MiscFieldContainer>
        <Step.FieldDescription>
          Este es un espacio libre para que nos cuentes cualquier cosa que no hayamos cubierto con
          el resto del formulario pero que consideres importante para que tengamos en cuenta a la
          hora de evaluar tu charla. Por ejemplo, nos podés contar si esta es tu primer experiencia
          como speaker o si ya tuviste otras, explicarnos por qué querés dar esta charla en la
          WebConf, comentarnos si tu charla necesita de algo en particular o si tenés pensada alguna
          dinámica particular o cualquier otra cosa que se te venga a la mente.
        </Step.FieldDescription>
        <TalkDescriptionField>
          <Textarea
            placeholder="Este es un espacio libre para que nos cuentes cualquier cosa que no hayamos cubierto con
              el resto del formulario pero que consideres importante para que tengamos en cuenta a la
              hora de evaluar tu charla. Por ejemplo, nos podés contar si esta es tu primer experiencia
              como speaker o si ya tuviste otras, explicarnos por qué querés dar esta charla en la
              WebConf, comentarnos si tu charla necesita de algo en particular o si tenés pensada alguna
              dinámica particular o cualquier otra cosa que se te venga a la mente."
            {...register('extra')}
            autoFocus
          />
        </TalkDescriptionField>
      </MiscFieldContainer>
    </>
  );
};

Step6.validationSchema = R.pick(['extra'], cfpFieldValidations);
