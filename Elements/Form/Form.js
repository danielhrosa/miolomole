import { StyledForm } from './Form.style';
import Field from '../Field';

export default function Form({ striped, ...props }) {
  const { fields, setFields, gridTemplate, isLoggedIn, className } = props;
  return (
    <StyledForm striped={striped} gridTemplate={gridTemplate}>
      <form>
        {Object.values(fields).map((field) => <Field key={field.name} className={className} {...field} isLoggedIn={isLoggedIn} setFields={setFields} />)}
      </form>
    </StyledForm>
  )
}
