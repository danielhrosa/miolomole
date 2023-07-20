import React, { forwardRef } from 'react';
import Spinner from '../../components/Spinner';
import { StyledButtonAction } from './Button.styles';

export const ButtonAction = forwardRef((props, ref) => {
  const { children, icon, iconRight, loading, disabled, label, variation, className, ...restProps } = props;

  return (
    <StyledButtonAction type="button" {...restProps} className={variation + ' ' + className} ref={ref} disabled={disabled || loading}>
      {loading
        ? <Spinner color="#fff" />
        : children
          ? children
          : <>
            {props.icon && <props.icon />}
            {label && <p className="unselectable">{label}</p>}
            {props.iconRight && <props.iconRight />}
          </>
      }
    </StyledButtonAction>
  );
});

export default ButtonAction;
