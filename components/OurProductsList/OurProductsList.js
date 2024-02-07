import axios from 'axios';
import { useEffect, useState } from 'react';
import Editable from '../Editable';
import Container from '../Container';
import Masonry from 'react-masonry-css'
import { useRouter } from 'next/router';
import Button from '../../Elements/Button';
import * as S from './OurProductsList.style';
import { useAppProvider } from '../../store/appProvider';
import urlNameFormatter from '../../utils/urlNameFormatter';

import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import toast from 'react-hot-toast';

export default function OurProductsList(props) {
  const router = useRouter();
  const { isLoggedIn } = useAppProvider();
  const bookOrder = props?.bookOrder ? JSON.parse(props.bookOrder) : [];
  let booksObj = props.books ? JSON.parse(props.books) : [];
  booksObj = booksObj.sort((a, b) => bookOrder.indexOf(a._id) - bookOrder.indexOf(b._id));
  const [books, setBooks] = useState(booksObj);
  const [order, setOrder] = useState(booksObj);
  const [isOrderModeOn, setIsOrderModeOn] = useState(false);

  function arrayMove(array, from, to) {
    array = array.slice();
    array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
    return array;
  }

  const SortableItem = SortableElement(({ book }) => (
    <S.ProductCard key={book._id}>
      <S.ProductCardImage isHidden={book?.isHidden} src={book?.image ? book?.image : 'https://placekitten.com/400/400'} />
      <S.ProductCardTitle>{book.title}</S.ProductCardTitle>
    </S.ProductCard>
  ));

  const SortableList = SortableContainer(({ items }) => {
    return (
      <S.Grid>
        {items.map((book, index) => (
          <SortableItem key={`item-${book._id}`} index={index} book={book} />
        ))}
      </S.Grid>
    );
  });

  const handleDeleteBook = async (book) => {
    const { _id } = book;
    const confirm = window.confirm(`Tem certeza que deseja deletar o livro ${book.title}?`)
    if (!confirm) { return false };
    setBooks((oldBook) => [...oldBook].filter((book) => book._id !== _id))
    setOrder((oldBook) => [...oldBook].filter((book) => book._id !== _id))
    await axios.delete(`/api/livros`, { data: { _id: book._id } })
  }

  const handleHideBook = async (book) => {
    const { _id } = book;
    const confirm = window.confirm(`Tem certeza que deseja ${!!book?.isHidden ? 'desocultar' : 'ocultar'} o livro ${book.title}?`);
    if (!confirm) { return false };
    setBooks((oldBook) => [...oldBook].reduce((books, book) => book._id !== _id ? [...books, book] : [...books, { ...book, isHidden: !book?.isHidden }], []))
    setOrder((oldBook) => [...oldBook].reduce((books, book) => book._id !== _id ? [...books, book] : [...books, { ...book, isHidden: !book?.isHidden }], []))
    await axios.put(`/api/livros`, { ...book, isHidden: !book?.isHidden })
  }

  const handleOrder = async () => {
    if (!isOrderModeOn) {
      setIsOrderModeOn(true)
    } else {
      setIsOrderModeOn(false)
      toast.promise(axios.put('/api/siteSettings', { config: 'bookOrder', value: JSON.stringify(order.map((book) => book._id)) }), {
        loading: 'Salvando ordem..',
        success: 'Ordem dos livros salva com sucesso!',
        error: 'Erro ao salvar ordem dos livros',
      });
    }
  }

  const handleSort = ({ oldIndex, newIndex }) => {
    setOrder((oldFileds) => arrayMove(oldFileds, oldIndex, newIndex))
  }

  const breakpointColumnsObj = { default: 4, 1100: 3, 700: 2, 500: 1 };

  return (
    <S.OurProductsList>
      <Container>
        <S.OurProductsApresentation>
          <Editable {...props} textKey="ourProductsTitle"><S.OurProductsTitle /></Editable>
          <Editable {...props} textKey="ourProductsText"><S.OurProductsText /></Editable>
          {isLoggedIn && <S.AddBookButton onClick={() => router.push('/livros/novo')}>Cadastrar livro<span>+</span></S.AddBookButton>}
        </S.OurProductsApresentation>
        <S.ProductCards>
          {isLoggedIn && <S.ReorderBooks className='unselectable' onClick={handleOrder}>
            <Button type="toggleLock" isLocked={isOrderModeOn} />
            Reordenar livros
          </S.ReorderBooks>}
          {books && isOrderModeOn ? <SortableList axis="xy" items={order} onSortEnd={handleSort} /> :
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
              {order.map((book) => (
                <S.ProductCard key={book._id} onClick={() => router.push(`/livros/${urlNameFormatter(book.name)}`)}>
                  <S.ProductCardImage isHidden={book?.isHidden} src={book?.image ? book?.image : 'https://placekitten.com/400/400'} />
                  <S.ProductCardTitle>{book.title}</S.ProductCardTitle>
                  {isLoggedIn && (
                    <S.ProductCardButtons onClick={(e) => { e.stopPropagation(); }}>
                      <Button className="book-button" onClick={(e) => { e.stopPropagation(); handleDeleteBook(book); }} type="delete" />
                      <Button className="book-button" isHidden={book?.isHidden} onClick={(e) => { e.stopPropagation(); handleHideBook(book); }} type="toggleHide" />
                    </S.ProductCardButtons>
                  )}
                </S.ProductCard>
              ))}
            </Masonry>
          }
        </S.ProductCards>
      </Container>
    </S.OurProductsList>
  )
}