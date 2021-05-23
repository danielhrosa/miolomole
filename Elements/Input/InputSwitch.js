import React from 'react';
import { inputChange } from '../../helpers/fieldFunctions'
import { StyledInputSwitch, switchStyles } from './Input.style';

export default function InputSwitch({ onChange, setFields, name, value }) {
  
  return (
    <StyledInputSwitch
      id={name}
      name={name}
      styles={switchStyles}
      checked={value}
      onColor={'#00A79D'}
      onChange={(value) => (
        onChange 
          ? onChange({ target: { name, value }, setFields }) 
          : inputChange({ target: { name, value }, setFields })
      )}
    />
  );
}
