import React from 'react';
import * as S from './Field.style';
import Input from '../Input';

export default function Field({ label, tip, error, errorMessage, ...props }) {
  const { name, value, type, labelvariation, isLoggedIn } = props;
  return (
    <S.Field
      name={name}
      labelvariation={labelvariation}
      hasValue={
        props.type === 'select' ||
        props.type === 'selectMulti' ||
        props.type === 'simple' ||
        !!value
      }
    >
      {labelvariation == 'simple' 
        ? <S.NormalLabel>{label}</S.NormalLabel>
        : type !== 'labelOcutable' ? label && <S.Label>{label}</S.Label> : isLoggedIn && label && <S.Label>{label}</S.Label>
      }
      <Input {...props} />
    </S.Field>
  );
}
