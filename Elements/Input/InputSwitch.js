import React from 'react';
import { inputChange } from '../../helpers/fieldFunctions'
import { StyledInputSwitch } from './Input.style';
import { useTheme } from 'styled-components';

export default function InputSwitch({ onChange, setFields, name, value }) {
  const { color: { brand } } = useTheme();
  return (
    <StyledInputSwitch
      id={name}
      name={name}
      checked={value}
      onColor={brand}
      onChange={(value) => onChange
        ? onChange({ target: { name, value }, setFields })
        : inputChange({ target: { name, value }, setFields })
      }
    />
  );
}
