import * as S from './Comment.styles';
import { useAppProvider } from '../../store/appProvider';

export default function Comment(comment) {
  const { isLoggedIn } = useAppProvider()
  return (
    <S.Comment key={comment._id}>
      {isLoggedIn && (
        <S.EditableButtons>
          <S.EditButton onClick={() => edit ? saveText() : setEdit(true)}>
            {edit ? <Button id={`${textKey}ConfirmButton`} type="confirm" /> : <Button id={`${textKey}EditButton`} type="edit" />}
          </S.EditButton>
          {edit && <Button id={`${textKey}CancelButton`} onClick={() => { setNewText(text); setEdit(false) }} type="cancel" />}
        </S.EditableButtons>
      )}
      <S.UserFullName>{comment?.userFullName}</S.UserFullName>
      <S.Content>{comment?.content}</S.Content>
    </S.Comment>
  )
}