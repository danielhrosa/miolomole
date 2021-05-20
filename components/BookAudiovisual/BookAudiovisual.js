import Player from '../Player';
import Editable from '../Editable';
import * as S from './BookAudiovisual.styles';

export default function BookAudiovisual(props){
  const visual = props?.book?.audio?.visual ? props.book.audio.visual : '';
  const description = props?.book?.audio?.description ? props.book.audio.description : '';
  const video = props?.book?.audio?.video ? props.book.audio.video : '';
  return(
    <S.BookAcessivel>
      { visual && (
        <S.Book>
          <S.BookWrapper>
            <Editable {...props} textKey="bookVisualTitle"><S.Title /></Editable>
            <Player src={visual} />
          </S.BookWrapper>
        </S.Book>
      )}
      { description && (
        <S.Book>
          <S.BookWrapper>
          <Editable {...props} textKey="bookDescribleTitle"><S.Title /></Editable>
            <Player src={description} />
          </S.BookWrapper>
        </S.Book>
      )}
      { video && (
        <S.Book>
          <S.BookWrapper>
          <Editable {...props} textKey="bookVideoTitle"><S.Title /></Editable>
            <Player src={video} />
          </S.BookWrapper>
        </S.Book>
      )}
    </S.BookAcessivel>
  )
}