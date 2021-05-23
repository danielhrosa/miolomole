import React, { useEffect } from 'react';
import { inputChange } from '../../helpers/fieldFunctions';
import { StyledInputSelect } from './Input.style';
import { components } from 'react-select';
import { SortableElement } from 'react-sortable-hoc';

function arrayMove(array, from, to) {
  array = array.slice();
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
  return array;
}

const SortableMultiValue = SortableElement(props => {
  const onMouseDown = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  const innerProps = { onMouseDown };
  return <components.MultiValue {...props} innerProps={innerProps} />;
});

export default function InputSelect({
  onChange,
  setFields,
  isMulti,
  options,
  loadOptions,
  loadEmpty,
  components,
  isClearable,
  name,
  disabled,
  isCreatable,
  placeholder = 'Selecione',
  isSearchable=false,
  filter,
  filterField,
  isSortable,
  noOptionsMessage,
  ...props
}) {
  const loadOptionsHandler = (inputValue, callback) => {
    if (loadOptions) {
      if (isCreatable || !loadEmpty) {
        if (inputValue.length > 1) { loadOptions(inputValue, callback) }
      } else { loadOptions(inputValue, callback) }
    } else if (options){
       callback(options)
    } else { callback([]) }
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const newValue = arrayMove(props.value, oldIndex, newIndex);
    isSortable && inputChange({ target: { name, value: newValue }, setFields })
  };

  return (
    <StyledInputSelect
      {...props}
      axis="xy"
      onSortEnd={onSortEnd}
      distance={4}
      placeholder={placeholder}
      getHelperDimensions={({ node }) => node.getBoundingClientRect()}
      defaultOptions={options || true}
      id={name}
      name={name}
      key={filter}
      classNamePrefix="inputSelect"
      loadOptions={loadOptionsHandler}
      isClearable={isClearable}
      isMulti={isMulti}
      components={{...components, [isSortable && 'MultiValue']: SortableMultiValue}}
      isSearchable={isSearchable}
      isDisabled={disabled}
      isValidNewOption={(inputValue) => isCreatable && inputValue.length > 2 }
      formatCreateLabel={(inputValue) => inputValue}
      noOptionsMessage={() => noOptionsMessage ? noOptionsMessage : "Sem opções"}
      loadingMessage={() => "Carregando"}
      filterOption={(e) => {
          if(Array.isArray(filter)){
            return filterField ? filter.some((item) => e.data[filterField]?.label === item.label) : true
          } else { return filterField ? filter === e.data[filterField]?.label : true }
        }}
      onChange={(value) => (
        onChange
          ? onChange({ target: { name, value }, setFields })
          : inputChange({ target: { name, value }, setFields })
      )}
    />
  );
};
