import * as R from 'ramda';
import propTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { cfpFieldValidations } from '~/services/cfp';
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

  ${Textarea} {
    flex: 1;
    resize: none;
  }
`;

const messages = {
  talks: {
    subject: 'charla',
  },
  workshops: {
    subject: 'taller',
  },
};

export const Step4 = ({ type = 'talks' }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Step.Title>Contanos sobre tu {messages[type].subject}.</Step.Title>
      <TalkDescriptionFieldContainer>
        <Step.FieldDescription>
          Ahora sí, contanos en todo el detalle que quieras de qué se trata tu propuesta.
        </Step.FieldDescription>
        <TalkDescriptionField>
          <Textarea {...register('talkSummary')} hasError={errors.talkSummary != null} autoFocus />
          {errors.talkSummary ? (
            <Step.FieldError>{errors.talkSummary.message}</Step.FieldError>
          ) : null}
        </TalkDescriptionField>
      </TalkDescriptionFieldContainer>
    </>
  );
};

Step4.propTypes = {
  type: propTypes.oneOf(['talks', 'workshops']),
};

Step4.defaultProps = {
  type: 'talks',
};

Step4.validationSchema = R.pick(['talkSummary'], cfpFieldValidations);
