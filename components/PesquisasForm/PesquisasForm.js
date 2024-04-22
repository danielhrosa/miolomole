import axios from 'axios';
import * as S from './PesquisasForm.styles.js';
import Form from '../../Elements/Form';
import { useRouter } from 'next/router';
import Button from '../../Elements/Button';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import mapFieldsToData from '../../utils/mapFieldsToData';
import mapDataToFields from '../../utils/mapDataToFields';
import { pesquisasFieldsState, pesquisasFieldsFunction, gridTemplate } from './PesquisasForm.constants.js';

export default function PesquisaForm(props) {
  const router = useRouter();
  const [pesquisa, setPesquisa] = useState();
  const [fields, setFields] = useState(pesquisasFieldsState);
  const [loading, setLoading] = useState(false);
  const pesquisasFormFields = pesquisasFieldsFunction({ fields, setFields });
  const formProps = { gridTemplate, fields: pesquisasFormFields, setFields };

  useEffect(() => {
    if (props.pesquisa) {
      setPesquisa(JSON.parse(props.pesquisa))
      setFields((oldFields) => {
        const newFields = { ...oldFields };
        mapDataToFields({ newFields, constantFields: pesquisasFormFields, data: JSON.parse(props.pesquisa) })
        return newFields
      })
    }
  }, [props.pesquisa])

  const onSubmit = async () => {
    setLoading(true);
    let variables = mapFieldsToData(pesquisasFormFields);
    let res;
    try {
      if (!pesquisa) { res = await axios.post('/api/pesquisas', { ...variables }); }
      else { res = await axios.put('/api/pesquisas', { ...variables, _id: pesquisa._id }) }
      if (res.status === 200) { 
        toast.success(`Cadastrado ${pesquisa ? 'atualizado' : 'realizado'} com sucesso!`) 
        router.back();
      }
      else { toast.error(res?.response?.data) }
    } catch (err) { toast.error(err.response.data.errorMessage) }
    setLoading(false);
  }

  return (
    <S.UsuariosWrapper>
      <Button variation="primary" onClick={() => router.push('/pesquisas')}>Voltar</Button>
      <h1>Adicionar pesquisa</h1>
      <Form {...formProps} />
      <Toaster position="bottom-right" reverseOrder={false} />
      <Button loading={loading} variation="primary" label={pesquisa ? "Atualizar" : "Cadastrar"} onClick={() => onSubmit()} />
    </S.UsuariosWrapper>
  )
}
