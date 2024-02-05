import * as S from './Form.style';
import Field from '../Field';

export default function Form({ striped, subfields, ...props }) {
  const { fields, setFields, gridTemplate, isLoggedIn, className } = props;
  return (
    <S.FormWrapper striped={striped} className={className}>
      <S.Form gridTemplate={gridTemplate}>
        {Object.values(fields).map((field) => <Field key={field.name} className={className} {...field} isLoggedIn={isLoggedIn} setFields={setFields} subfields={subfields} />)}
      </S.Form>
    </S.FormWrapper>
  )
}
