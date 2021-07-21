import React from 'react';
import { inputChange } from '../../helpers/fieldFunctions'
import { StyledFieldSelectCreateMulti } from './Field.style';

export default function FieldArray({ fields, field, parentField, setFields, setInputInFocus, disabled, setDisabled }) {
  return (
    <StyledFieldSelectCreateMulti
        isClearable
        isMulti
        value={field.value ? field.value.map(option => ({label: option, value: option})) : []}
        options={field.options}
        placeholder={field.placeholder}
        onChange={(value) => inputChange({ target: { value }, field, fields, parentField, setFields, setInputInFocus })}
      />
  );
}