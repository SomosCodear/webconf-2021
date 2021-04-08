import { forwardRef, useCallback, useRef, useImperativeHandle, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { CheckMark as BaseCheckMark } from '~/components/icons';

const childrenPositionStyles = {
  before: css`
    flex-direction: row-reverse;
  `,
  after: css`
    flex-direction: row;
  `,
};
const Label = styled.label.attrs(() => ({
  tabIndex: '0',
}))`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  ${({ labelPosition }) => childrenPositionStyles[labelPosition]}

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    align-items: center;
    font-size: 1.75rem;
  }
`;

const CheckMark = styled(BaseCheckMark)`
  display: none;
`;

const FakeCheckbox = styled.div`
  min-width: 1.375rem;
  min-height: 1.375rem;
  margin-right: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 0.0625rem solid
    ${({ theme, hasError }) => (hasError ? theme.colors.error : theme.colors.checkboxBorder)};
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors.checkboxBackground};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-width: 2.75rem;
    min-height: 2.75rem;
    margin-right: 1.5rem;
    border-radius: 1rem;
  }
`;

const StyledCheckMark = styled(CheckMark)`
  width: 1rem;
  height: 0.75rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 1.5rem;
    height: 1.25rem;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RealCheckbox = styled.input.attrs(() => ({
  tabIndex: '-1',
}))`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked ~ ${FakeCheckbox} {
    background-color: ${({ theme }) => theme.colors.checkboxCheckedBackground};
    ${StyledCheckMark} {
      display: block;
    }
  }

  &:disabled ~ ${FakeCheckbox} {
    background-color: ${({ theme }) => theme.colors.checkboxDisabledBackground};
  }

  &:disabled:checked ~ ${FakeCheckbox} {
    background-color: ${({ theme }) => theme.colors.checkboxDisabledCheckedBackground};
  }

  &:disabled ~ ${Text} {
    color: ${({ theme }) => theme.colors.checkboxDisabledTextBackground};
  }
`;

export const Checkbox = forwardRef(
  (
    {
      id,
      className,
      labelPosition,
      children,
      autoFocus,
      hasError,
      onMouseEnter,
      onMouseLeave,
      onKeyDown,
      ...props
    },
    forwardedRef,
  ) => {
    const labelRef = useRef();
    const inputRef = useRef();
    useImperativeHandle(forwardedRef, () => inputRef.current);

    const handleKeyDown = useCallback(
      (event) => {
        onKeyDown(event);

        if (['Enter', ' '].includes(event.key)) {
          event.preventDefault();
          inputRef.current.click();
        }
      },
      [onKeyDown, inputRef],
    );

    useEffect(() => {
      if (autoFocus) {
        labelRef.current.focus();
      }
    }, [labelRef]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
      <Label
        htmlFor={id}
        className={className}
        childrenPosition={labelPosition}
        onKeyDown={handleKeyDown}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={labelRef}
      >
        <RealCheckbox id={id} type="checkbox" ref={inputRef} {...props} />
        <FakeCheckbox hasError={hasError}>
          <StyledCheckMark />
        </FakeCheckbox>
        <Text>{children}</Text>
      </Label>
    );
  },
);

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  labelPosition: PropTypes.oneOf(Object.keys(childrenPositionStyles)),
  children: PropTypes.node,
  autoFocus: PropTypes.bool,
  hasError: PropTypes.bool,
  onKeyDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

Checkbox.defaultProps = {
  className: null,
  labelPosition: 'after',
  children: null,
  autoFocus: false,
  hasError: false,
  onKeyDown: () => {},
  onMouseEnter: null,
  onMouseLeave: null,
};
