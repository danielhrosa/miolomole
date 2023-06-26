import * as S from './Comment.styles';

export default function Comment(comment) {
  return (
    <S.Comment key={comment._id}>
      <S.UserFullName>{comment?.userFullName}</S.UserFullName>
      <S.Content>{comment?.content}</S.Content>
    </S.Comment>
  )
}