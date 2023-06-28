import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Button from '../../Elements/Button';
import { useAppProvider } from '../../store/appProvider';
import * as S from './Comment.styles';

export default function Comment({ comment, deleteComment }) {
  const { isLoggedIn } = useAppProvider();
  const [edit, setEdit] = useState();
  const [newContent, setNewContent] = useState(comment.content);
  const [newUserFullName, setNewUserFullName] = useState(comment.userFullName);

  const saveComment = () => {
    const variables = { ...comment, content: newContent, userFullName: newUserFullName };
    axios.put('/api/comment', { ...variables })
      .then(() => {
        toast.success('Comentário atualizado com sucesso!')
        setEdit(false);
      })
      .catch((err) => console.log(err.response))
  };

  

  const contentEditableProps = {
    value: newContent,
    onChange: ({ target: { value } }) => { setNewContent(value); }
  };

  const userFullNameEditableProps = {
    value: newUserFullName,
    onChange: ({ target: { value } }) => { setNewUserFullName(value); }
  };
  return (
    <S.Comment key={comment._id}>
      {isLoggedIn && (
        <S.EditableButtons>
          <S.EditButton onClick={() => edit ? saveComment() : setEdit(true)}>
            {edit ? <Button id={`${comment?._id}ConfirmButton`} type="confirm" /> : <Button id={`${comment?._id}EditButton`} type="edit" />}
          </S.EditButton>
          {edit && <Button id={`${comment?._id}CancelButton`} onClick={() => { setNewContent(comment?.content); setEdit(false) }} type="cancel" />}
          <Button type="delete" onClick={() => deleteComment(comment)} />
        </S.EditableButtons>
      )}
      {edit ? (
        <S.EditableInputs>
          <h3>Nome:</h3> <S.ContentEditable {...userFullNameEditableProps} />
          <h3>Conteúdo: </h3><S.ContentEditable {...contentEditableProps} />
        </S.EditableInputs>
      ) : (
        <>
          <S.UserFullName>{newUserFullName}</S.UserFullName>
          <S.Content>{newContent}</S.Content>
        </>
      )}
    </S.Comment>
  )
}