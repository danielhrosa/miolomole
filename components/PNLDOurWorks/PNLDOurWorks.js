import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Button from '../../Elements/Button/Button';
import Field from '../../Elements/Field/Field';
import { useAppProvider } from '../../store/appProvider';
import Editable from '../Editable';
import PNLDBanner from '../PNLDBanner/PNLDBanner';
import * as S from './PNLDOurWorks.styles';
import PNLDOurWorksCard from './PNLDOurWorksCard/PNLDOurWorksCard';

const booksDataToField = (books) => books.map((book) => ({ instanceId: book._id, label: book.title, value: book._id }));

export default function PNLDOurWorks({ pnld, ...props }) {
  const { color } = pnld;
  const { isLoggedIn } = useAppProvider();
  const [colorState, setColorState] = useState(color);
  const [fields, setFields] = useState(() => ({ books: { value: [] } }));
  const [books, setBooks] = useState();

  const fieldProps = ({ fields, setFields }) => ({
    books: {
      ...fields.books,
      name: 'books',
      isMulti: true,
      loadEmpty: true,
      isSearchable: true,
      label: 'Obras selecionadas: ',
      variation: 'simple',
      type: 'simpleSelect',
      isMulti: true,
      isLoggedIn,
      isSortable: true,
      placeholder: 'Obras...',
      setFields,
      loadOptions: (query, callback) => {
        axios.get('/api/livros')
          .then((res) => res && callback(res.data
            .filter((option) => option.title?.toLowerCase().includes(query?.toLowerCase()))
            .map((option) => ({ instanceId: option._id, label: option.title, value: option._id }))
          ))
      }
    }
  })

  const bookFields = fieldProps({ fields, setFields });

  useEffect(() => {
    if (color) { setColorState(color) }
    if (pnld?.books?.length) {
      setBooks(pnld?.books)
      setFields({ books: { value: booksDataToField(pnld?.books) } });
    }
  }, [pnld?.books, pnld?.color])

  const handleRemoveBookPnld = async ({ _id, title }) => {
    const confirm = window.confirm(`Tem certeza que deseja remove "${title}"?`)
    if (!confirm) { return false };
    const filteredbooks = books.filter((book) => book._id !== _id)
    setBooks(filteredbooks)
    setFields({ books: { value: booksDataToField(filteredbooks) } });
    const filteredbooksIds = filteredbooks.map((book) => book._id)
    await axios.put(`/api/pnld`, { ...pnld, books: filteredbooksIds })
      .catch((err) => { toast.error(`Error ${err.response.data.errorMessage || ''}`) })
  }

  const pndlOurWorksCardProps = {
    handleRemoveBookPnld,
    isLoggedIn
  }

  const bannerProps = {
    pnld,
    color: colorState,
    isLoggedIn,
    setField: setColorState,
    props
  }

  const saveBooks = async () => {
    if (bookFields.books?.value?.length) {
      const booksIds = bookFields.books.value.map(({ value }) => value);
      const res = await axios.put(`/api/pnld`, { ...pnld, books: booksIds, });
      if (res.status === 200) {
        toast.success('PNLD atualizado com sucesso!');
        setFields({ books: { value: booksDataToField(res.data.books) } });
        setBooks(res.data.books)
      } else {
        toast.error("Erro ao atualizar PNLD. Chamar o Pedro.")
        console.log(res)
      }
    }
  }

  return (
    <S.PNLDOurWorks>
      <PNLDBanner {...bannerProps} />
      <Editable {...props} textKey={`pnldOurWorksTitle`}><S.PNLDOurWorksTitle /></Editable>
      {isLoggedIn && (
        <S.PNLDOurWorksInput>
          <Field {...bookFields.books} />
          <Button label="Salvar obras" color={colorState} variation="primary" onClick={saveBooks} />
        </S.PNLDOurWorksInput>
      )}
      <S.PNLDOurWorksList>
        {books?.length ?
          books.map((book) => (
            <Link key={book._id} href={`/pnld/${pnld.name}/${book.name}`}>
              <PNLDOurWorksCard book={book} color={color} {...pndlOurWorksCardProps} />
            </Link>
          )) : (
            <p>Sem PNLDs Cadastradas ainda...</p>
          )}
      </S.PNLDOurWorksList>
    </S.PNLDOurWorks>
  )
}
