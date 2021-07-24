import React, { useEffect } from 'react';
import * as S from './Field.style';
import Form from '../Form';
import Field from './Field';
import Button from '../Button';
import Editable from '../../components/Editable';

export default function FieldMediaUploads(props) {
  const { name, subfields, addButton } = props;
  return (
    <S.FieldMediaUploads name={name}>
      {subfields.map((item, i) => <Form fields={item} name={`${item.name}${i}`} {...props} />)}
      <Field {...addButton} />
    </S.FieldMediaUploads>
  );
}
