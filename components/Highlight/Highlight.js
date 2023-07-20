import axios from 'axios';
import { useRouter } from 'next/router';
import * as S from './Highlight.styles';
import Button from '../../Elements/Button';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import mapDataToFields from '../../utils/mapDataToFields';
import mapFieldsToData from '../../utils/mapFieldsToData';
import { highlightFieldsState, highlightFieldsFunction, gridTemplate } from './Highlight.constants.js';
import Container from '../Container/Container';

export default function Highlight(props) {
  const router = useRouter();
  const [fields, setFields] = useState(highlightFieldsState);
  const [highlight, setHighlight] = useState();
  const highlightfields = highlightFieldsFunction({ fields, setFields });

  useEffect(() => {
    if (props.highlight) {
      setHighlight(props.highlight)
      setFields((oldFields) => {
        const newFields = { ...oldFields };
        mapDataToFields({ newFields, constantFields: highlightfields, data: props.highlight })
        return newFields
      })
    }
  }, [props.highlight])

  const onSubmit = async () => {
    let variables = mapFieldsToData(highlightfields);
    let res;
    try {
      if (!highlight) { res = await axios.post('/api/destaques', { ...variables }) }
      else { res = await axios.put('/api/destaques', { ...variables, _id: highlight._id }) }
      if (res.status === 200) { toast.success(`Cadastrado ${highlight ? 'atualizado' : 'realizado'} com sucesso!`) }
      else { toast.error(res?.response?.data) }
    } catch (err) { err?.response?.data ? toast.error(err?.response?.data?.errorMessage) : console.log(err?.response?.data || err) }
  }

  const formProps = {
    fields: highlightfields,
    setFields,
    gridTemplate
  }

  return (
    <S.Highlight>
      <Container>
        <Button variation="primary" onClick={() => router.push('/destaques')}>Voltar</Button>
        <h1>Adicionar destaque</h1>
        <S.Form {...formProps} />
        <Toaster position="bottom-right" reverseOrder={false} />
        <Button variation="primary" label={highlight ? "Atualizar" : "Cadastrar"} onClick={() => onSubmit()} />
      </Container>
    </S.Highlight>
  )
}