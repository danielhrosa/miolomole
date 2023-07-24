import axios from 'axios';
import * as S from './BookInfo.style';
import Form from '../../Elements/Form';
import { useRouter } from 'next/router';
import Button from '../../Elements/Button';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useAppProvider } from '../../store/appProvider';
import mapFieldsToData from '../../utils/mapFieldsToData';
import mapDataToFields from '../../utils/mapDataToFields';
import FieldEditable from '../../Elements/Field/FieldEditable';
import { bookInfoFieldsFunction, bookInfoFieldsState, priceFieldState, priceFieldFunction, gridTemplate } from './BookInfo.constants';

/*
  to do: 
    refact the fields state manipulation removing redundant states and unifying
*/

export default function BookInfo({ book }) {
  const router = useRouter();
  const { name } = router.query;
  const { isLoggedIn } = useAppProvider();
  const [fields, setFields] = useState(bookInfoFieldsState);
  const [price, setPrice] = useState(priceFieldState);
  const [users, setUsers] = useState([]);
  const priceField = priceFieldFunction({ price, isLoggedIn })
  const bookFields = bookInfoFieldsFunction({ fields, setFields });
  const formProps = { fields: bookFields, setFields, gridTemplate, isLoggedIn, striped: true }

  useEffect(() => {
    axios.get('/api/users', { params: { filterOccupation: true } })
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    if (book) {
      setFields((oldFields) => {
        const newFields = { ...oldFields };
        mapDataToFields({ newFields, constantFields: bookFields, data: book })
        return newFields;
      })
      setPrice((oldFields) => {
        const newFields = { ...oldFields };
        newFields.price.value = book.price;
        newFields.digitalExperiencePrice.value = book.digitalExperiencePrice;
        return newFields;
      })
    }
  }, [book])

  const saveInfos = async () => {
    const variables = mapFieldsToData({ ...bookFields, ...priceField });
    if (!name) {
      try {
        if (variables.title === '') {
          toast.error('Por favor preencha o titulo')
        } else {
          const res = await axios.post('/api/livros', { ...variables })
          if (res.status === 200) {
            router.push(`/livros/${res.data.bookCreated.name}`)
            toast.success('Cadastro realizado com sucesso!');
          } else { toast.error(res.data.errorMessage); }
        }
      } catch (err) { console.log(err.response.data.errorMessage); toast.error(err.response.data.errorMessage) }
    } else {
      try {
        const res = await axios.put('/api/livros', { ...variables, name })
        if (res.status === 200) {
          toast.success('Cadastro atualizado com sucesso!');
          router.push(`/livros/${res.data.name}`)
        } else { console.log(res) }
      } catch (err) { console.log(err.response) }
    }
  }

  const handlerOnClick = () => {
    name === 'tres-contos-machado-de-assis' ? router.push('https://www.livrariadagente.com.br/MLB-2041123775-livro-trs-contos-de-machado-de-assis-_JM#position=4&search_layout=stack&type=item&tracking_id=c5d84bc5-e331-4065-88f4-7787f54615c5') : router.push('/onde-comprar')
  }

  const saveButton = {
    variation: "primary",
    onClick: async () => isLoggedIn ? await saveInfos() : handlerOnClick(),
    label: isLoggedIn ? "Salvar Descrição" : "Onde comprar"
  }

  const dynamicText = (price) => price && !(/\D/gim).test(price?.replace(',', '')) && 'R$';

  return (
    <S.BookInfo>
      <Form {...formProps} />
      <S.BottomWrapper>
        <S.Price>
          <S.Label>Capa comum</S.Label>
          <S.PriceText><S.PriceLabel>{dynamicText(price.price?.value)}</S.PriceLabel><FieldEditable {...priceField.price} isLoggedIn={isLoggedIn} setFields={setPrice} /></S.PriceText>
          <S.Label>Com experiência digital</S.Label>
          <S.PriceText><S.PriceLabel>{dynamicText(price.digitalExperiencePrice?.value)}</S.PriceLabel><FieldEditable {...priceField.digitalExperiencePrice} isLoggedIn={isLoggedIn} setFields={setPrice} /></S.PriceText>
        </S.Price>
        <Button id="save" {...saveButton} />
      </S.BottomWrapper>
      <Toaster position="bottom-right" reverseOrder={false} />
    </S.BookInfo>
  )
}