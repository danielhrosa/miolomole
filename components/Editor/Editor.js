import { Editor as Draft } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { inputChange } from '../../helpers/fieldFunctions';

export default function Editor({ value, name, setFields, placeholder, onChange, readOnly }) {
  return (
    <Draft 
      readOnly={readOnly}
      toolbarHidden={readOnly}
      editorState={value} 
      onEditorStateChange={(newValue) => (
        onChange
          ? onChange({ target: { value: newValue, name }, setFields })
          : inputChange({ target: { value: newValue, name }, setFields })
      )}
      placeholder={placeholder}
    /> 
  )
}
