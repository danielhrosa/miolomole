import Input from '../Input';
import * as S from './Field.style';

export default function FieldColor({ label, ...props }) {
  return (
    <S.FieldColor>
      <S.NormalLabel>{label}</S.NormalLabel>
      <Input {...props} />
    </S.FieldColor>
  )
}