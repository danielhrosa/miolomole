import React from 'react';
import { inputChange } from '../../helpers/fieldFunctions';
import * as S from './Input.style';

export default function InputTextArea({ fields, field, isLoggedIn, setFields, setInputInFocus, disabled, setDisabled, name, value, type, placeholder,...props}) {

  return (
    <S.TextArea
      {...props}
      name={name}
      id={name}
      placeholder={placeholder}
      value={value || ''}
      onChange={({target}) => inputChange({ target, field, fields, setFields, setInputInFocus })}
    />
  );
}
