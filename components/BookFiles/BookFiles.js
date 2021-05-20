import axios from 'axios';
import Form from '../../Elements/Form';
import * as S from './BookFiles.styles';
import Button from '../../Elements/Button';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import mapFieldsToData from '../../utils/mapFieldsToData';
import mapDataToFields from '../../utils/mapDataToFields';
import { bookFilesFieldsState, bookFilesFieldsFunction, gridTemplate } from './BookFiles.constants.js';
import { useRouter } from 'next/router';
import { useAppProvider } from '../../store/appProvider';

export default function BookFiles(props){
  const router = useRouter();
  const { name } = router.query;
  const { isLoggedIn } = useAppProvider();
  const [book, setBook] = useState(); 
  const [fields, setFields] = useState(bookFilesFieldsState);
  const bookFilesFields = bookFilesFieldsFunction({ fields, setFields });
  
  useEffect(() => {
    if(props.book){ 
      setBook(props.book)
      setFields((oldFields) => {
        const newFields = {...oldFields};
        mapDataToFields({newFields, constantFields: bookFilesFields, data: props.book.audio})
        return newFields
      })
    }
  }, [props])


  const saveFunction = async () => {
    const variables = mapFieldsToData(bookFilesFields);
    let res;
    try{
      if(!book) { res = await axios.post('/api/livros', { audio: { ...variables } }) }
      else { res = await axios.put('/api/livros', { _id: props.book._id, audio: { ...variables } } ) }
      if(res.status === 200) { toast.success(`Cadastrado ${book ? 'atualizado' : 'realizado'} com sucesso!`) }
      else { console.log(res); toast.error(res?.response?.data) }
    } catch (err) { console.log(err.response.data.errorMessage); toast.error(err.response.data.errorMessage) }
  }

  const formProps = {
    fields: bookFilesFields,
    setFields,
    gridTemplate
  }

  const saveButon = {
    variation: "primary",
    label: book ? "Atualizar" : "Salvar",
    onClick: () => saveFunction()
  }

  return(
    <S.BookFiles>
      <h1>Acessibilidade</h1>
      <Form {...formProps} />
      { isLoggedIn && name && <Button {...saveButon} />}
      <Toaster position="bottom-right" reverseOrder={false} />
    </S.BookFiles>
  )
}