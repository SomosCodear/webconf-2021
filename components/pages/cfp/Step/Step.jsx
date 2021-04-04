import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '~/components/common';

const Container = styled.form`
  grid-area: step;
  display: flex;
  flex-direction: column;
`;

const Fields = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Actions = styled.div`
  flex: 0;
  margin-top: 2rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

export const Step = ({
  onNext,
  onPrevious,
  isFirst,
  isLast,
  children,
}) => {
  const form = useForm({ mode: 'onChange' });
  return (
    <FormProvider {...form}>
      <Container
        onSubmit={form.handleSubmit(onNext)}
      >
        <Fields>
          {children}
        </Fields>
        <Actions>
          {!isLast ? (
            <Button
              type="submit"
              variant={isLast ? 'primary' : 'secondary'}
              disabled={!form.formState.isValid}
            >
              {isLast ? 'Enviar charla' : 'Continuar'}
            </Button>
          ) : null}
          {!isFirst ? (
            <Button
              onClick={form.handleSubmit(onPrevious, onPrevious)}
            >
              Atrás
            </Button>
          ) : null}
        </Actions>
      </Container>
    </FormProvider>
  );
};

Step.propTypes = {
  children: PropTypes.node.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
};

Step.defaultProps = {
  isFirst: false,
  isLast: false,
};
