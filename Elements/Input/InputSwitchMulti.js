import React, { useState, useEffect } from 'react';
import { switchMultiOnChange } from '../../helpers/fieldFunctions'
import { StyledInputSwitch, StyledInputSwitchs, StyledInputSwitchOption, StyledInputSwitchLabel, switchStyles } from './Input.style';

export default function InputSwitchMulti({ onChange, setFields, loadOptions, name, value }) {
  const [ options, setOptions ] = useState([]);

  useEffect(() => {
    loadOptions().then((items) => setOptions(items))
  }, [loadOptions])

  return (
    <StyledInputSwitchs>
      { options?.map((option) => (
        <StyledInputSwitchOption key={option._id} >
          <StyledInputSwitch
            id={uuidv4()}
            name={option.name}
            styles={switchStyles}
            checked={value.includes(option._id)}
            onColor={'#0677d5'}
            onChange={(checked) => (
              onChange
                ? onChange({ target: { name, checked, option }, setFields })
                : switchMultiOnChange({ target: { name, checked, option }, setFields })
            )}
          />
          <StyledInputSwitchLabel>{option.label}</StyledInputSwitchLabel>
        </StyledInputSwitchOption>
      ))}
    </StyledInputSwitchs>
  );
}
