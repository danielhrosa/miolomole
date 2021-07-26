import React from 'react';
import InputText from './InputText';
import InputSelect from './InputSelect';
import InputSwitch from './InputSwitch';
import InputTextArea from './InputTextArea';
import InputRadio from './InputRadio';
import InputDate from './InputDate';
import InputRange from './InputRange';
import InputSearch from './InputSearch';
import InputFile from './InputFile';

export default function Input(props) {
  const { type } = props;
  switch (type) {
    case 'select': return <InputSelect {...props} />;
    case 'switch': return <InputSwitch {...props} />;
    case 'radio': return <InputRadio {...props} />;
    case 'date': return <InputDate {...props} />;
    case 'textarea': return <InputTextArea {...props} />;
    case 'range': return <InputRange {...props} />;
    case 'search': return <InputSearch {...props} />;
    case 'asset': return <InputFile {...props} />;
    default: return <InputText {...props} />
  }
};
