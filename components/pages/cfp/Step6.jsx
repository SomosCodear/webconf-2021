import * as R from 'ramda';
import propTypes from 'prop-types';
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

const messages = {
  talks: {
    subject: 'charla',
    this: 'esta charla',
    role: 'speaker',
  },
  workshops: {
    subject: 'taller',
    this: 'este taller',
    role: 'persona facilitadora',
  },
};

export const Step6 = ({ type = 'talks' }) => {
  const { register } = useFormContext();

  const fieldText = `Este es un espacio libre para que nos cuentes cualquier cosa que no hayamos cubierto con
  el resto del formulario pero que consideres importante para que tengamos en cuenta a la
  hora de evaluar tu ${messages[type].subject}. Por ejemplo, nos podés contar si esta es tu
  primer experiencia como ${messages[type].role} o si ya tuviste otras, explicarnos por qué
  querés dar esta ${messages[type].subject} en la WebConf, comentarnos si tu{' '}
  ${messages[type].subject} necesita de algo en particular o si tenés pensada alguna dinámica
  particular o cualquier otra cosa que se te venga a la mente.`;

  return (
    <>
      <Step.Title>¡Casi estamos!</Step.Title>
      <MiscFieldContainer>
        <Step.FieldDescription>{fieldText}</Step.FieldDescription>
        <TalkDescriptionField>
          <Textarea placeholder={fieldText} {...register('extra')} autoFocus />
        </TalkDescriptionField>
      </MiscFieldContainer>
    </>
  );
};

Step6.propTypes = {
  type: propTypes.oneOf(['talks', 'workshops']),
};

Step6.defaultProps = {
  type: 'talks',
};

Step6.validationSchema = R.pick(['extra'], cfpFieldValidations);
