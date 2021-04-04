import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { Textarea } from '~/components/common';
import { Step } from './Step';

const TalkDescriptionFieldContainer = styled(Step.FieldContainer)`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 0;
`;

const TalkDescriptionField = styled(Step.Field)`
  flex: 1;
`;

export const Step4 = () => {
  const { register } = useFormContext();

  return (
    <>
      <Step.Title>Contanos sobre tu charla.</Step.Title>
      <TalkDescriptionFieldContainer>
        <Step.FieldDescription>
          Ahora sí, contanos en todo el detalle que quieras de qué se trata tu propuesta.
        </Step.FieldDescription>
        <TalkDescriptionField>
          <Textarea
            {...register('talkShortDescription', { required: true, maxLength: 200 })}
            autoFocus
          />
        </TalkDescriptionField>
      </TalkDescriptionFieldContainer>
    </>
  );
};
