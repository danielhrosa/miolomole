import * as S from './BookInfo.style';

export const BookInfoFieldsState = () => ({
  title: { value: '' },
  authors: { value: '' },
  illustrators: { value: '' },
  size: { value: '' },
  pages: { value: '' },
  ageIndication: { value: '' },
  genre: { value: '' },
  themes: { value: '' },
  ISBN: { value: '' },
});

export const priceFieldState = () => ({
  price: { value: '' }
});

export const priceFieldFunction = ({ price, users }) => ({
  price: {
    ...price.price,
    name: 'price',
    type: 'editable',
    placeholder: '00,00',
    styledComponent: <S.PriceValue />,
  }
})
  
export const BookInfoFieldsFunction = ({ fields, isLoggedIn, users }) => ({
  title: {
    ...fields.title,
    name: 'title',
    placeholder: 'Titulo..',
    type: 'editable',
    className: 'title',
    styledComponent: <S.BookInfoTitle isLoggedIn={isLoggedIn} />,
  },
  authors: {
    ...fields.authors,
    name: 'authors',
    type: 'simpleSelect',
    label: 'Autoria: ',
    placeholder: 'Autoria...',
    variation: 'simple',
    isMulti: true,
    isSearchable: true,
    isLoggedIn: isLoggedIn,
    styledLabel: <S.BookItemLabel isLoggedIn={isLoggedIn} />,
    styledItem: <S.BookInfoItemSelect isLoggedIn={isLoggedIn} />,
    options: users.sort((a, b) => {
      if(a.userFullName < b.userFullName) { return -1; }
      if(a.userFullName > b.userFullName) { return 1; }
      return 0;
    }).map((option) => ({ _id: option._id, label: option.userFullName || option.userName, value: option._id }))
  },
  illustrators: {
    ...fields.illustrators,
    name: 'illustrators',
    type: 'simpleSelect',
    isMulti: true,
    isSearchable: true,
    label: 'Ilustrações: ',
    placeholder: 'Ilustrações...',
    styledItem: <S.BookInfoItemSelect isLoggedIn={isLoggedIn} />,
    styledLabel: <S.BookItemLabel isLoggedIn={isLoggedIn} />,
    styledComponent: <S.BookItemValue isLoggedIn={isLoggedIn} />,
    options: users.sort((a, b) => {
      if(a.userFullName < b.userFullName) { return -1; }
      if(a.userFullName > b.userFullName) { return 1; }
      return 0;
    }).map((option) => ({ _id: option._id, label: option.userFullName || option.userName, value: option._id }))
  },
  size: {
    ...fields.size,
    name: 'size',
    type: 'editable',
    label: 'Tamanho: ',
    placeholder: 'Tamanho...',
    styledItem: <S.BookInfoItem isLoggedIn={isLoggedIn} />,
    styledLabel: <S.BookItemLabel isLoggedIn={isLoggedIn} />,
    styledComponent: <S.BookItemValue isLoggedIn={isLoggedIn} />,
  },
  pages: {
    ...fields.pages,
    name: 'pages',
    type: 'editable',
    label: 'Páginas: ',
    placeholder: 'Páginas...',
    styledItem: <S.BookInfoItem isLoggedIn={isLoggedIn} />,
    styledLabel: <S.BookItemLabel isLoggedIn={isLoggedIn} />,
    styledComponent: <S.BookItemValue isLoggedIn={isLoggedIn} />,
  },
  ageIndication: {
    ...fields.ageIndication,
    name: 'ageIndication',
    type: 'editable',
    label: 'Indicação etária: ',
    placeholder: 'Indicação etária...',
    styledItem: <S.BookInfoItem isLoggedIn={isLoggedIn} />,
    styledLabel: <S.BookItemLabel isLoggedIn={isLoggedIn} />,
    styledComponent: <S.BookItemValue isLoggedIn={isLoggedIn} />,
  },
  genre: {
    ...fields.genre,
    name: 'genre',
    type: 'editable',
    label: 'Gênero: ',
    placeholder: 'Gênero...',
    styledItem: <S.BookInfoItem isLoggedIn={isLoggedIn} />,
    styledLabel: <S.BookItemLabel isLoggedIn={isLoggedIn} />,
    styledComponent: <S.BookItemValue isLoggedIn={isLoggedIn} />,
  },
  themes: {
    ...fields.themes,
    name: 'themes',
    type: 'editable',
    label: 'Temas: ',
    placeholder: 'Temas...',
    styledItem: <S.BookInfoItem isLoggedIn={isLoggedIn} />,
    styledLabel: <S.BookItemLabel isLoggedIn={isLoggedIn} />,
    styledComponent: <S.BookItemValue isLoggedIn={isLoggedIn} />,
  },
  ISBN: {
    ...fields.ISBN,
    name: 'ISBN',
    type: 'editable',
    label: 'ISBN: ',
    placeholder: 'ISBN...',
    styledItem: <S.BookInfoItem isLoggedIn={isLoggedIn} />,
    styledLabel: <S.BookItemLabel isLoggedIn={isLoggedIn} />,
    styledComponent: <S.BookItemValue isLoggedIn={isLoggedIn} />,
  },
})

export const gridTemplate = () => {
  return `
    grid-template:
      "title"
      "authors"
      "illustrators"
      "size"
      "pages"
      "ageIndication"
      "genre"
      "themes"
      "ISBN"
    ;
  `
}