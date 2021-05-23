import Player from '../Player';
import Editable from '../Editable';
import * as S from './BookAudiovisual.styles';
// import posterDefault from '../images/CARAMUJO_MIOLO.svg'

export default function BookAudiovisual({book, ...props}){
  const { visual, description, video } = book.audio;
  console.log(book)

  return(
    <S.BookAcessivel>
      { visual && (
        <S.Book>
          <S.BookWrapper>
            <Editable {...props} textKey="bookVisualTitle"><S.Title /></Editable>
            <Player src={visual} poster={book.image} />
          </S.BookWrapper>
        </S.Book>
      )}
      { description && (
        <S.Book>
          <S.BookWrapper>
          <Editable {...props} textKey="bookDescribleTitle"><S.Title /></Editable>
            <Player src={description} poster={book.image} />
          </S.BookWrapper>
        </S.Book>
      )}
      { video && (
        <S.Book>
          <S.BookWrapper>
          <Editable {...props} textKey="bookVideoTitle"><S.Title /></Editable>
            <Player src={video} poster={book.image}/>
          </S.BookWrapper>
        </S.Book>
      )}
    </S.BookAcessivel>
  )
}