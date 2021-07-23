import React, { useEffect } from 'react';
import * as S from './Field.style';
import Field from './Field';
import Button from '../Button';
import Editable from '../../components/Editable';

export default function FieldMediaUploads(props) {
  const { name, items, defaultItem, MediaTitle } = props;
  let arr = [];

  useEffect(() => arr = items, [items])

  return (
    <S.FieldMediaUploads name={name}>
      {arr.map((item, i) => (
          <>
            <Editable {...item} textKey={`${item.textKey}${i}`}><p/></Editable>
            <Field {...item} name={`${item.name}${i}`} />
          </>
        ))
      }
      <Button label="+♫" variation="addMedia" onClick={() => {arr.unshift(defaultItem); console.log(items)}}/>
    </S.FieldMediaUploads>
  );
}
