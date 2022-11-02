import React from 'react';
import { inputChange } from '../../helpers/fieldFunctions';
import * as S from './Field.style';

export default function FieldInputRadio({ label, tip, error, errorMessage, ...props }) {
  const { name, type, options, value, onChange, setFields } = props;

  return (
    <S.FieldsRadios name={name}>
      {options.map((option) => (
        <S.FieldRadio
          key={option.value}
          htmlFor={`${name}Input`}
          checked={value === option}
          onClick={() => (onChange
            ? onChange({ target: { name, value: option }, setFields })
            : inputChange({ target: { name, value: option }, setFields })
          )}>
          {option.label}
          <input type='radio' name={`${name}Input`} defaultChecked={value === option.value} />
        </S.FieldRadio>
      ))}
    </S.FieldsRadios>
  );
}
