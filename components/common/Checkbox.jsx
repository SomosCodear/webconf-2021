import { forwardRef, useCallback, useRef, useImperativeHandle, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

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
  align-items: center;
  cursor: pointer;
  font-size: 1.75rem;
  ${({ labelPosition }) => childrenPositionStyles[labelPosition]}
`;

const BaseCheckMark = (props) => (
  <svg width="24" height="20" viewBox="0 0 24 20" fill="none" {...props}>
    <path d="M2 10.2949L7.87156 16.1935L22 2" />
  </svg>
);
const CheckMark = styled(BaseCheckMark)`
  display: none;

  path {
    stroke: ${({ theme }) => theme.colors.checkboxCheckmark};
    stroke-width: 4;
  }
`;

const FakeCheckbox = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  margin-right: 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 0.0625rem solid ${({ theme }) => theme.colors.checkboxBorder};
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.checkboxBackground};
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
    ${CheckMark} {
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
        <FakeCheckbox>
          <CheckMark />
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
  onKeyDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

Checkbox.defaultProps = {
  className: null,
  labelPosition: 'after',
  children: null,
  autoFocus: false,
  onKeyDown: () => {},
  onMouseEnter: null,
  onMouseLeave: null,
};
