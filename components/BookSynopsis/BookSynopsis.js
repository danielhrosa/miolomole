import axios from 'axios';
import Container from '../Container';
import { useRouter } from 'next/router';
import Input from '../../Elements/Input';
import * as S from './BookSynopsis.styles';
import { useState, useEffect } from 'react';
import { useAppProvider } from '../../store/appProvider';
import { bookSinopsisFieldsState, bookSinopsisFieldsFunction } from './BookSynopsis.constants';
import Button from '../../Elements/Button';
import mapFieldsToData from '../../utils/mapFieldsToData';
import mapDataToFields from '../../utils/mapDataToFields';
import toast, { Toaster } from 'react-hot-toast';

export default function BookSynopsis({ book, ...props }){
  const router = useRouter();
  const { name } = router.query;
  const { isLoggedIn } = useAppProvider();
  const [fields, setFields] = useState(bookSinopsisFieldsState);
  const synopsisInput = bookSinopsisFieldsFunction({ fields, isLoggedIn })
  
  useEffect(() => {
    book && setFields((oldFields) => {
      const newFields = {...oldFields};
      mapDataToFields({newFields, constantFields: synopsisInput, data: book})
      return newFields
    })
  }, [book])

  const saveInfos = async () => {
    const variables = mapFieldsToData(synopsisInput)
    if(!name) {
      const res = await axios.post('/api/livros', { ...variables, name })
      if(res.status === 200){ toast.success('Cadastro realizado com sucesso!')} 
      else { alert(res?.data?.response) }
    } else {
      const res = await axios.put('/api/livros', { ...variables, name })
      if(res.status === 200){ toast.success('Cadastro atualizado com sucesso!')} 
      else { alert(res?.data?.response) }
    }
  }

  const inputProps = {
    isLoggedIn,
    setFields
  }

  return(
    <S.BookSynopsis>
      <Container>
        <S.SynopsisInfo>
          <S.SynopsisWrapper>
            <S.SynopsisTitle>Sinopse</S.SynopsisTitle>
            <S.SynopsisText isLoggedIn={isLoggedIn}><Input {...synopsisInput.synopsis} {...inputProps} /></S.SynopsisText>
          </S.SynopsisWrapper>
        </S.SynopsisInfo>
        <S.SynopsisVideo><Input {...synopsisInput.video} {...inputProps} /></S.SynopsisVideo>
        <Toaster position="bottom-right" reverseOrder={false}/>      
        { isLoggedIn && name && <Button id="save" variation="primary" onClick={() => saveInfos()} label="Salvar Sinopse" />}
      </Container>
    </S.BookSynopsis>
  )
}