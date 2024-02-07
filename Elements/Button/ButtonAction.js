import React, { forwardRef } from 'react';
import Spinner from '../../components/Spinner';
import parser from 'html-react-parser'
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
            {parser(label) && <p className="unselectable">{parser(label)}</p>}
            {props.iconRight && <props.iconRight />}
          </>
      }
    </StyledButtonAction>
  );
});

export default ButtonAction;
