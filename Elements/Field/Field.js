import dynamic from 'next/dynamic';
import React from 'react';
import Button from '../Button';
import FieldColor from './FieldColor';
import FieldEditable from './FieldEditable';
import FieldFile from './FieldFile';
import FieldInput from './FieldInput';
import FieldInputRadio from './FieldInputRadio';
import FieldMediaUploads from './FieldMediaUploads';
import FieldOuterLabel from './FieldOuterLabel';
import FieldPassword from './FieldPassword';
import FieldRadioButtons from './FieldRadioButtons';
import FieldRange from './FieldRange';
import FieldSelect from './FieldSelect';
import FieldSeparator from './FieldSeparator';
import FieldSwitch from './FieldSwitch';

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
    case 'mediaUploads': return <FieldMediaUploads {...props} />
    case 'simpleSelect': return <FieldSelect {...props} />
    case 'asset': return <FieldFile {...props} />
    case 'editor': return <Editor {...props} />
    case 'color': return <FieldColor {...props} />
    default: return <FieldInput {...props} />;
  }
}