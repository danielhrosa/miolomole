import React, { useEffect } from 'react';
import * as S from './Field.style';
import Form from '../Form';
import Field from './Field';

export default function FieldMediaUploads(props) {
  const { name, subfields, addButton, isCreatable, isLoggedIn } = props;
  console.log('media, ', isLoggedIn)
  return (
    <S.FieldMediaUploads name={name}>
      {subfields.map((item, i) => <Form key={`${item+i}`} fields={item} name={`${item.name}${i}`} {...props} />)}
      {isCreatable && isLoggedIn && <Field {...addButton} />}
    </S.FieldMediaUploads>
  );
}
