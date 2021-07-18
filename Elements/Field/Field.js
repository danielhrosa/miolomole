import dynamic from 'next/dynamic';
import React from 'react';
import Button from '../Button';
import FieldFile from './FieldFile';
import FieldInput from './FieldInput';
import FieldRange from './FieldRange';
import FieldSwitch from './FieldSwitch';
import FieldSelect from './FieldSelect';
import FieldPassword from './FieldPassword';
import FieldEditable from './FieldEditable';
import FieldSeparator from './FieldSeparator';
import FieldOuterLabel from './FieldOuterLabel';
import FieldInputRadio from './FieldInputRadio';
import FieldRadioButtons from './FieldRadioButtons';

const Editor = dynamic(
  () => import('../../components/Editor'),
  { ssr: false }
);


export default function Field(props) {
  switch (props.type) {
    case 'button': 
    case 'submit': 
    case 'confirm':
      return <Button {...props} />
    case 'outerLabel': return <FieldOuterLabel {...props} />
    case 'radioButtons': return <FieldRadioButtons {...props} />
    case 'radio': return <FieldInputRadio {...props} />
    case 'separator': return <FieldSeparator {...props} />
    case 'range': return <FieldRange {...props} />
    case 'password': return <FieldPassword {...props} />
    case 'editable': return <FieldEditable {...props} />
    case 'switch': return <FieldSwitch {...props} />
    case 'simpleSelect': return <FieldSelect {...props} />
    case 'image':
    case 'video':
    case 'audio': return <FieldFile {...props} />
    case 'editor': return <Editor {...props} />
    default: return <FieldInput {...props} />;
  }
}