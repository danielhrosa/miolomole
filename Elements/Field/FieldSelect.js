import React from 'react';
import * as S from './Field.style';
import Input from '../Input';
import { useAppProvider } from '../../store/appProvider';
import arrayToStringFormatter from '../../utils/arrayToStringFormatter';

export default function Field({ label, tip, styledLabel, styledItem, type, error, errorMessage, ...props }) {
  const { name, value } = props;
  const { isLoggedIn } = useAppProvider();
  const arrayValue = !!value.length ? arrayToStringFormatter(value.map((item) => item.label)) : 'Sem valor cadastrado';

  return (
    <S.FieldEditable className="field" styles={styledItem && styledItem.type.componentStyle.rules} name={name}>
      {label && <S.NormalLabel styles={styledLabel?.type?.componentStyle?.rules}>{label}</S.NormalLabel>}
      {isLoggedIn
        ? <Input {...props} type="select" />
        : <S.FieldReadOnly>{arrayValue}</S.FieldReadOnly>
      }
    </S.FieldEditable>
  );
}
