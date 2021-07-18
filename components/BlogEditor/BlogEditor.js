import { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { useAppProvider } from '../../store/appProvider';
import * as S from './BlogEditor.style'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function BlogEditor(){
  const [editorState, onEditorStateChange] = useState(EditorState.createEmpty(''));
  const { isLoggedIn } = useAppProvider();
  console.log(isLoggedIn);

  return (
    <S.BlogEditor isLoggedIn={isLoggedIn}>
      <Editor 
        toolbarHidden={!isLoggedIn} 
        readOnly={!isLoggedIn} 
        editorState={editorState} 
        onEditorStateChange={onEditorStateChange}
      />
    </S.BlogEditor>
  )
}








