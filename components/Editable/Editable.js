import { useState, useEffect, cloneElement, useRef } from 'react';
import * as S from './Editable.styles';
import axios from 'axios';
import Button from '../../Elements/Button';
import { useAppProvider } from '../../store/appProvider';
import parser from 'html-react-parser';

export default function Editable({ children, page, texts, textKey, onClick, model, field, value, _id }) {
  const { isLoggedIn } = useAppProvider();
  const [edit, setEdit] = useState(false);
  let initialText = (!!texts && !!textKey) && !!texts[textKey] ? texts[textKey] : (page !== 'where-to-buy' || isLoggedIn) ? 'Insira um conteúdo' : '';

  if (model && field && _id) {
    initialText = value;
  }

  const [text, setText] = useState(initialText);
  const [newText, setNewText] = useState(initialText);
  const ref = useRef();
  useEffect(() => edit && ref.current.focus(), [edit])

  const onChange = ({ target }) => setNewText(target.value)

  const saveText = async () => {
    if (model && field && _id) {
      await axios.put(`/api/${model}`, { _id, [field]: newText }).catch((err) => console.log(err))
    } else {
      await axios.put(`/api/textos`, { textKey, page, text: newText, editedBy: 'browser' }).catch((err) => console.log(err))
    }
    setText(newText)
    setEdit(false)
  }

  const inputProps = { value: newText, ref, edit, onChange, styles: children.type.componentStyle.rules }

  useEffect(() => { 
    if (model && field && _id) { setNewText(value) }
  }, [model, field, _id, value]);

  return (
    <S.Editable isLoggedIn={isLoggedIn} onClick={onClick}>
      {isLoggedIn && (
        <S.EditableButtons>
          <S.EditButton onClick={() => edit ? saveText() : setEdit(true)}>
            {edit ? <Button id={`${textKey}ConfirmButton`} type="confirm" /> : <Button id={`${textKey}EditButton`} type="edit" />}
          </S.EditButton>
          {edit && <Button id={`${textKey}CancelButton`} onClick={() => { setNewText(text); setEdit(false) }} type="cancel" />}
        </S.EditableButtons>
      )}
      {edit
        ? <S.EditableInput {...children.props} {...inputProps} />
        : cloneElement(children, Object.assign({}, { ...children.props, children: parser(newText) }))
      }
    </S.Editable>
  )
}

