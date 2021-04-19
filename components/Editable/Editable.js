import { useState, useEffect, cloneElement, useRef } from 'react';
import * as S from './Editable.styles';
import axios from 'axios';
import Button from '../../Elements/Button';
import EditIcon from '../../images/js/EditIcon';
import ConfirmIcon from '../../images/js/ConfirmIcon';
import CancelIcon from '../../images/js/CancelIcon';
import { useAppProvider } from '../../store/appProvider';

export default function Editable ({ children, page, texts, textKey }) {
  const { isLoggedIn } = useAppProvider()
  const [edit, setEdit] = useState(false);
  const initialText = (!!texts && !!textKey) && !!texts[textKey] ? texts[textKey] : 'Insira um conteúdo';
  const [text, setText] = useState(initialText);
  const [newText, setNewText] = useState(initialText);
  const ref = useRef();

  useEffect(() => edit && ref.current.focus(), [edit])

  const onChange = ({ target }) => setNewText(target.value)
  const onBlur = (e) => {
    if(
      e.relatedTarget?.id !== `${textKey}EditButton` || 
      e.relatedTarget?.id !== `${textKey}ConfirmButton` ||
      e.relatedTarget?.id !== `${textKey}CancelButton`
    ) {
      if (!confirm('Salvar alteração?')) { setNewText(text); setEdit(false) } else { saveText() }
    }
  }
  const saveText = async () => {
    await axios.put(`${process.env.NEXT_PUBLIC_API_URL}textos`, { textKey, page, text: newText, editedBy: 'browser' }).catch((err) => console.log(err))
    setText(newText)
    setEdit(false)
  }

  const inputProps = { value: newText, ref, edit, onChange, onBlur, styles: children.type.componentStyle.rules }

  return (
    <S.Editable isLoggedIn={isLoggedIn}>
      { isLoggedIn && (
        <S.EditableButtons>
          <S.EditButton onClick={() => edit ? saveText() : setEdit(true)}>{ edit ? <Button id={`${textKey}ConfirmButton`} type="confirm" /> : <Button id={`${textKey}EditButton`} type="edit" /> }</S.EditButton>
          { edit && <Button id={`${textKey}CancelButton`} onClick={() => { setNewText(text); setEdit(false)}} type="cancel" /> }
        </S.EditableButtons>
      )}
      { edit ? <S.EditableInput {...children.props} {...inputProps}/> : cloneElement(children, Object.assign({}, {...children.props, children: newText})) }
    </S.Editable>
  )
}

