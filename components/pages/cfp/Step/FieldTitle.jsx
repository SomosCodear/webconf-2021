import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const VARIANTS = {
  small: css`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.cfpStepFieldTitleSmall};
  `,
  big: css`
    font-size: 3rem;
    font-weight: 400;
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
