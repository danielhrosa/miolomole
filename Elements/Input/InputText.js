import React from 'react';
import { inputChange } from '../../helpers/fieldFunctions';
import * as S from './Input.style';

export default function InputText({ name, i, parentName, placeholder, onChange, setFields, isLoggedIn, ...props }) {
  return (
    <S.InputText
      {...props}
      onChange={({ target }) => onChange
        ? onChange({ target: { name, value: target.value, i, parentName }, setFields })
        : inputChange({ target: { name, value: target.value, i, parentName }, setFields })
      }
      maskChar=""
      placeholder={placeholder}
    />
  );
}
