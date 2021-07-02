import v from 'voca';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const CONTAINER_VARIANTS = {
  default: css``,
  primary: css`
    border-color: ${({ theme }) => theme.colors.buttonPrimaryBorder};
    color: ${({ theme }) => theme.colors.buttonPrimaryText};
  `,
  secondary: css`
    border-color: ${({ theme }) => theme.colors.buttonSecondaryBorder};
    color: ${({ theme }) => theme.colors.buttonSecondaryText};
  `,
};

const Container = styled.button`
  padding: 0;
  border-width: 0.062rem;
  border-style: solid;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.buttonBaseBackground};
  outline-offset: 0.125rem;
  cursor: pointer;
  border-color: ${({ variant, theme }) => theme.colors[`button${v.capitalize(variant)}Border`]};
  color: ${({ variant, theme }) => theme.colors[`button${v.capitalize(variant)}Text`]};

  &:disabled {
    border-color: ${({ theme }) => theme.colors.buttonDisabledBorder};
    cursor: not-allowed;
  }
`;

const DefaultContent = styled.div`
  padding: 1rem;
  border-radius: 2rem;
  text-align: center;
  font-size: 1.125rem;
  font-family: ${({ theme }) => theme.fonts.default};
  font-weight: 700;
  text-transform: uppercase;
  background-color: ${({ variant, theme }) =>
    theme.colors[`button${v.capitalize(variant)}Background`]};

  ${Container}:disabled & {
    background-color: ${({ theme }) => theme.colors.buttonDisabledBackground};
  }
`;

const PopOutContent = styled(DefaultContent)`
  will-change: transform;
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  transform: translate(6px, 6px);

  ${Container}:hover:not([disabled]) & {
    transform: translate(4px, 4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  ${Container}:active:not([disabled]) & {
    transform: translate(2px, 2px);
    transition: transform 35ms;
  }
`;

export const Button = forwardRef(({ children, variant, ...props }, forwardedRef) => {
  const Content = variant === 'default' ? DefaultContent : PopOutContent;

  return (
    <Container ref={forwardedRef} variant={variant} {...props}>
      <Content variant={variant}>{children}</Content>
    </Container>
  );
});

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(Object.keys(CONTAINER_VARIANTS)),
};

Button.defaultProps = {
  children: null,
  variant: 'default',
};
