import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormProvider, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import joi from 'joi';
import { Button } from '~/components/common';

const Container = styled.form`
  grid-area: step;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0;
  }
`;

const Content = styled.div`
  flex: 1;
  padding-bottom: 1rem;
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

const ForwardButton = styled(Button)`
  flex: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex: unset;
  }
`;

const BackButton = styled(Button)`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: initial;
  }
`;

export const Step = ({
  onNext,
  onPrevious,
  isFirst,
  isLast,
  defaultValues,
  validationSchema,
  children,
}) => {
  const form = useForm({
    mode: 'onTouched',
    defaultValues,
    resolver: joiResolver(joi.object(validationSchema)),
  });

  return (
    <FormProvider {...form}>
      <Container onSubmit={form.handleSubmit(onNext)}>
        <Content>{children}</Content>
        <Actions>
          <ForwardButton type="submit" variant={isLast ? 'primary' : 'secondary'}>
            {isLast ? 'Enviar charla' : 'Continuar'}
          </ForwardButton>
          {!isFirst ? (
            <BackButton onClick={form.handleSubmit(onPrevious, () => onPrevious())}>
              Atrás
            </BackButton>
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
  defaultValues: PropTypes.shape({}),
  validationSchema: PropTypes.shape({}),
};

Step.defaultProps = {
  isFirst: false,
  isLast: false,
  defaultValues: {},
  validationSchema: {},
};
