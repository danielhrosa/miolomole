import Player from '../Player';
import Editable from '../Editable';
import * as S from './BookAudiovisual.styles';

export default function BookAudiovisual({ book, ...props }) {
  console.log(book)
  const { visual, description, video, video2, video3, video4, video5, video6 } = book.audio || {};

  return (
    <S.BookAcessivel>
      { visual && (
        <S.Book>
          <S.BookWrapper>
            <Editable {...props} textKey={`bookVisualTitle${book._id}`}><S.Title /></Editable>
            <Player src={visual} poster={book.image} />
          </S.BookWrapper>
        </S.Book>
      )}
      { description && (
        <S.Book>
          <S.BookWrapper>
            <Editable {...props} textKey={`bookDescribleTitle${book._id}`}><S.Title /></Editable>
            <Player src={description} poster={book.image} />
          </S.BookWrapper>
        </S.Book>
      )}
      { video && (
        <S.Book>
          <S.BookWrapper>
            <Editable {...props} textKey={`bookVideo1Title${book._id}`}><S.Title /></Editable>
            <Player src={video} poster={book.image} />
          </S.BookWrapper>
        </S.Book>
      )}
      { video2 && (
        <S.Book>
          <S.BookWrapper>
            <Editable {...props} textKey={`bookVideo2Title${book._id}`}><S.Title /></Editable>
            <Player src={video2} poster={book.image} />
          </S.BookWrapper>
        </S.Book>
      )}
      { video3 && (
        <S.Book>
          <S.BookWrapper>
            <Editable {...props} textKey={`bookVideo3Title${book._id}`}><S.Title /></Editable>
            <Player src={video3} poster={book.image} />
          </S.BookWrapper>
        </S.Book>
      )}
      { video4 && (
        <S.Book>
          <S.BookWrapper>
            <Editable {...props} textKey={`bookVideo4Title${book._id}`}><S.Title /></Editable>
            <Player src={video4} poster={book.image} />
          </S.BookWrapper>
        </S.Book>
      )}
      { video5 && (
        <S.Book>
          <S.BookWrapper>
            <Editable {...props} textKey={`bookVideo5Title${book._id}`}><S.Title /></Editable>
            <Player src={video5} poster={book.image} />
          </S.BookWrapper>
        </S.Book>
      )}
      { video6 && (
        <S.Book>
          <S.BookWrapper>
            <Editable {...props} textKey={`bookVideo6Title${book._id}`}><S.Title /></Editable>
            <Player src={video6} poster={book.image} />
          </S.BookWrapper>
        </S.Book>
      )}
    </S.BookAcessivel>
  )
}