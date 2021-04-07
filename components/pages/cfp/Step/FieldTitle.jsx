import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const VARIANTS = {
  small: css`
    font-weight: 700;
    color: ${({ theme }) => theme.colors.cfpStepFieldTitleSmall};

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 1.5rem;
    }
  `,
  big: css`
    font-size: 1.75rem;
    font-weight: 400;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 3rem;
    }
  `,
};
export const FieldTitle = styled.h3`
  ${({ variant }) => VARIANTS[variant]};
`;

FieldTitle.propTypes = {
  variant: PropTypes.oneOf(Object.keys(VARIANTS)),
};

FieldTitle.defaultProps = {
  variant: 'big',
};
