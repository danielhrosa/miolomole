import React from 'react';
import { inputChange } from '../../helpers/fieldFunctions'
import { StyledInputSwitch, switchStyles } from './Input.style';
import { v4 as uuidv4 } from 'uuid';

export default function InputSwitch({ onChange, setFields, name, value }) {
  
  return (
    <StyledInputSwitch
      id={uuidv4()}
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
