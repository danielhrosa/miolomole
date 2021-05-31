import { useState } from 'react';
import * as S from './HomeLatestArticles.style'
import Container from '../Container'
import Input from '../../Elements/Input'
import Button from '../../Elements/Button'
import { HomeLatestArticlesFieldsState, HomeLatestArticlesFunction } from './HomeLastestArticles.constants';
import axios from 'axios';

export default function HomeLatestArticles(){
  const [ fields, setFields ] = useState(HomeLatestArticlesFieldsState);
  const homeLastestFields = HomeLatestArticlesFunction({ fields, setFields });
  const { email} = homeLastestFields;

  const submitMessage = async () => {
    await axios.post('/api/contato', { email, newsletter: true })
      .then((res) => {
        setFields((oldFields) => {
          const newFields = {...oldFields}
          newFields.email.value = '';
          return newFields
        });
        // refetch()
      }
    )
  }

  const submitButton = {
    label: 'Enviar menssagem',
    onClick: submitMessage,
    variation: 'rounded',
    label: 'Cadastrar'
  }

  return(
    <S.HomeLatestArticles>
    <Container>
        <S.HomeLatestArticlesCard>
          <h1>Receba nossas novidades</h1>
          <S.LastestRegister>
            <Input {...email} setFields={setFields}/>
            <Button {...submitButton} />
          </S.LastestRegister>
          <S.DotsBackGround/>
          <S.LastestArticlesImage/>
        </S.HomeLatestArticlesCard>
      </Container>
    </S.HomeLatestArticles>
  )
}