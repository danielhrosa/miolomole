import React from 'react';
import * as S from './Field.style';
import Input from '../Input';

export default function Field({label, tip, error, errorMessage, ...props}) {
  const { name, value } = props;
  console.log('value', value)
  return (
    <S.Field 
      name={name} 
      hasValue={ 
        props.type === 'select' || 
        props.type === 'selectMulti' || 
        props.type === 'textarea' || 
        !!value 
      }
    >
      { label && <S.Label>{label}</S.Label> }
      <Input {...props} />
    </S.Field>
  );
}
