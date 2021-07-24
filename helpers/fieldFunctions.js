
export const inputChange = ({ target, setFields }) => {
  const { name, value, i, parentName } = target;
  setFields((oldFields) => {
    const newFields = { ...oldFields };
    if(parentName){
      newFields[parentName].value[i][name].error = false;
      newFields[parentName].value[i][name].value = value;
      newFields[parentName].value[i][name].errorMessage = '';
    } else {
      newFields[name].value = value;
    }
    return ({ ...newFields });
  });
};

export const formDisabled = (fields) => {
  Object.values(fields).some((field) => {
    if(field.validate) {
      const validation = field.type === 'select' ? field.validate(field.value?.value) : field.validate(field.value)
      return (validation.empty || (field.value && validation.invalid))
    }
  })
}

export function inputValidate({ target, setFields, validate, onBlur }) {
  if (onBlur) { return (onBlur({target, setFields, validate})) }
  if (validate) {
    const { name, value } = target;
    const validation = validate(value);
    if(validation.empty) {
      setFields((oldFields) => {
        oldFields[name].error = true;
        oldFields[name].errorMessage = validation.emptyMessage || 'Este campo é obrigatório';
        return ({ ...oldFields });
      });
    } else if(value && validation.invalid) {
      setFields((oldFields) => {
        oldFields[name].error = true;
        oldFields[name].errorMessage = validation.invalidMessage || 'Valor do campo inválido';
        return ({ ...oldFields });
      });
    }
  }
};

export const switchMultiOnChange = ({ target, setFields }) => {
  const { name, checked, option } = target;
  const { _id } = option
  setFields((oldFields) => {
    oldFields[name].value = checked
      ? [ ...oldFields[name].value, _id ]
      : oldFields[name].value.filter((option) => option !== _id);
    return ({ ...oldFields });
  });
};
