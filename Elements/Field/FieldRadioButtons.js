import React from 'react';
import { inputChange } from '../../helpers/fieldFunctions';
import * as S from './Field.style';

export default function FieldRadioButtons({ label, tip, error, errorMessage, ...props }) {
  const { name, type, options, value, onChange, setFields } = props;

  return (
    <S.FieldRadioButtons name={name}>
      {options.map((option) => (
        <S.FieldRadioButton
          key={option.value}
          htmlFor={`${name}Input`}
          checked={value.value === option.value}
          onClick={() => (onChange
            ? onChange({ target: { name, value: { label: option.label, value: option.value } }, setFields })
            : inputChange({ target: { name, value: { label: option.label, value: option.value } }, setFields })
          )}>
          {option.label}
          <input type='radio' name={`${name}Input`} defaultChecked={value === option.value} />
        </S.FieldRadioButton>
      ))}
    </S.FieldRadioButtons>
  );
}
