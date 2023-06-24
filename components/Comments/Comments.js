import * as S from './Comments.styles';

export default function Comments(comments) {
  return (
    <S.Comments>
      {comments?.map((comment) => <Comment comment={comment} />)}
    </S.Comments>
  )
}