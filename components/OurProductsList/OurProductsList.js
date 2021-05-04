import axios from 'axios';
import { useState } from 'react';
import Editable from '../Editable';
import Container from '../Container';
import { useRouter } from 'next/router';
import Button from '../../Elements/Button';
import * as S from './OurProductsList.style';
import { useAppProvider } from '../../store/appProvider';
import urlNameFormatter from '../../utils/urlNameFormatter';

export default function OurProductsList(props){
  const router = useRouter();
  const { isLoggedIn } = useAppProvider();
  const booksObj = props.books ? JSON.parse(props.books) : [];
  const [books, setBooks] = useState(booksObj);

  const handleDeleteBook = async (book) => {
    const { _id } = book;
    setBooks((oldBook) => [...oldBook].filter((book) => book._id !== _id))
    const confirm = window.confirm(`Tem certeza que deseja deletar o livro ${book.title}?`)
    if(!confirm) { return false };
    await axios.delete(`/api/livros`, { data: { _id: book._id } })
  }
  
  return(
    <S.OurProductsList>
      <Container>
        <S.OurProductsApresentation>
          <Editable {...props} textKey="ourProductsTitle"><S.OurProductsTitle/></Editable>
          <Editable {...props} textKey="ourProductsText"><S.OurProductsText/></Editable>
          {isLoggedIn && <S.AddBookButton onClick={() => router.push('/livros/novo')}>Cadastrar<span>+</span></S.AddBookButton>}
        </S.OurProductsApresentation>
        <S.ProductCards>
          {books && books.map((book) => (
            <S.ProductCard key={book._id} onClick={() => router.push(`/livros/${urlNameFormatter(book.name)}`)}>
              <S.ProductCardImage src={book.images[0] || 'https://placekitten.com/400/400'}/>
              <S.ProductCardTitle>{book.title}</S.ProductCardTitle>
              {isLoggedIn && <Button onClick={() => handleDeleteBook(book)} type="delete"/>}
            </S.ProductCard>
            ))}
        </S.ProductCards>
      </Container>
    </S.OurProductsList>
  )
}