import React from 'react';
import * as S from './Field.style';
import Input from '../Input';

export default function Field({label, tip, error, errorMessage, ...props}) {
  const { name } = props;
  return (
    <S.SwitchField name={name}>
      { label && <S.NormalLabel>{label}</S.NormalLabel> }
      <Input {...props} />
    </S.SwitchField>
  );
}
