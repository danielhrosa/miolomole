import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Button from '../../Elements/Button';
import { useAppProvider } from '../../store/appProvider';
import * as S from './Comment.styles';
import { useRouter } from 'next/router';

export default function Comment({ comment, setComments }) {
  const { isLoggedIn } = useAppProvider();
  const [edit, setEdit] = useState();
  const [newContent, setNewContent] = useState(comment.content);
  const [newUserFullName, setNewUserFullName] = useState(comment.userFullName);
  const router = useRouter();

  const saveComment = () => {
    const variables = { ...comment, content: newContent, userFullName: newUserFullName };
    axios.put('/api/comment', { ...variables })
      .then(() => {
        toast.success('Comentário atualizado com sucesso!')
        setEdit(false);
      })
      .catch((err) => console.log(err.response))
  };

  const deleteComment = () => {
    const confirm = window.confirm('Tem certeza que deseja deletar este comentário?')
    if (!confirm) { return false };
    axios.delete('/api/comment', { data: { _id: comment._id } })
      .then(() => {
        // eu sei que isso não é o ideal, caso queira saber o porq deixei assim é só me mandar um email
        router.replace(router.asPath);
        toast.success('Comentário excluído com sucesso!')
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
          <Button type="delete" onClick={deleteComment} />
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