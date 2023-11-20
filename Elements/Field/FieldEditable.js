import React from 'react';
import * as S from './Field.style';
import { inputChange } from '../../helpers/fieldFunctions';

export default function Field({ label, styledLabel, styledItem, tip, error, errorMessage, placeholder, ...props }) {
  const { name, styledComponent, value, setFields, isLoggedIn } = props;
  const onChange = ({ target }) => inputChange({ target, setFields });
  const inputProps = { name, value, onChange, styles: styledComponent.type.componentStyle.rules, placeholder };

  return (
    <S.FieldEditable className="field" styles={styledItem && styledItem.type.componentStyle.rules}>
      {label && <S.NormalLabel styles={styledLabel?.type?.componentStyle?.rules}>{label}</S.NormalLabel>}
      <S.LabelEditable {...styledComponent.props} {...inputProps} readOnly={!isLoggedIn} />
    </S.FieldEditable>
  )
}
