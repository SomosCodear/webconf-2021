import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const CONTAINER_TYPES = {
  default: css`
    border-color: ${({ theme }) => theme.colors.buttonDefaultBorder};
    color: ${({ theme }) => theme.colors.buttonDefaultText};
  `,
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
  ${({ type }) => CONTAINER_TYPES[type]}
`;

const displacedStyles = css`
  will-change: transform;
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  transform: translate(6px, 6px);

  ${Container}:hover & {
    transform: translate(4px, 4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  ${Container}:active & {
    transform: translate(2px, 2px);
    transition: transform 35ms;
  }
`;

const CONTENT_TYPES = {
  default: css`
    background-color: ${({ theme }) => theme.colors.buttonDefaultBackground};
  `,
  primary: css`
    background-color: ${({ theme }) => theme.colors.buttonPrimaryBackground};
    ${displacedStyles}
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.buttonSecondaryBackground};
    ${displacedStyles}
  `,
};

const Content = styled.div`
  padding: 0.65rem 2rem;
  border-radius: 2rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  ${({ type }) => CONTENT_TYPES[type]}
`;

export const Button = forwardRef(({ children, type, ...props }, forwardedRef) => (
  <Container ref={forwardedRef} type={type} {...props}>
    <Content type={type}>{children}</Content>
  </Container>
));

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(Object.keys(CONTAINER_TYPES)),
};

Button.defaultProps = {
  children: null,
  type: 'default',
};
