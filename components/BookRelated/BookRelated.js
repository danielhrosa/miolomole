import Editable from '../Editable';
import Container from '../Container';
import { useRouter } from 'next/router';
import * as S from './BookRelated.style';
import Button from '../../Elements/Button';
import { useEffect, useState } from 'react';

export default function BookRelated(props) {
  const [books, setBooks] = useState();
  const router = useRouter();
  const { name } = router.query
  useEffect(() => props.books && setBooks(props.books), [props])

  return (
    <S.BookRelated>
      <Container>
        <Editable {...props} textKey="bookRelatedTitle"><S.RelatedTitle /></Editable>
        <S.RelatedBooks>
          {books?.sort(() => .5 - Math.random()).filter(((book) => book.name !== name)).slice(0, 4).map((book) => (
            <S.BookRelatedCard key={book._id}>
              <S.BookRelatedCover img={book?.image || 'https://placekitten.com/400/400'} />
              <S.BookRelatedItemTitle>{book.title}</S.BookRelatedItemTitle>
              <Button label='Ver mais' variation="secondary" onClick={() => router.push(`/livros/${book.name}`)} />
            </S.BookRelatedCard>
          ))}
        </S.RelatedBooks>
      </Container>

    </S.BookRelated>
  )
}