import { useRouter } from 'next/router';
import Button from '../../Elements/Button';
import Form from '../../Elements/Form';
import Container from '../../components/Container/Container';
import * as S from './EducatorAreaForm.styles';
import { gridTemplate, educatorFieldsState, educatorFieldsFunction } from './EducatorAreaForm.constants';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import mapFieldsToData from '../../utils/mapFieldsToData';
import axios from 'axios';
import mapDataToFields from '../../utils/mapDataToFields';

export default function EducatorAreaForm({ publication }) {
  const _id = publication && publication._id;
  const router = useRouter();
  const [fields, setFields] = useState(educatorFieldsState());
  const [loading, setLoading] = useState();
  const educatorFields = educatorFieldsFunction({ fields, setFields });
  const formProps = { gridTemplate, fields: educatorFields, setFields }

  const onSubmit = () => {
    setLoading(true);
    const variables = Object.entries(fields).reduce((obj, [key, { value }]) => ({ ...obj, [key]: (value?.value || value?._id) || value }), {});
    const hasEmpty = Object.entries(variables).some(([key, value]) => !['_id', 'hide', 'area'].includes(key) && !value)
    const errorMessage = `Erro ao ${_id ? 'salvar' : 'criar'} publicação`;
    if (hasEmpty) {
      setLoading(false);
      toast.error('Por favor preencha todos os campos')
      return;
    }
    if(publication?._id) { variables._id = publication?._id; }
    axios[_id ? 'put' : 'post']('/api/publication', variables)
      .then((res) => {
        if (res.status === 200) {
          toast.success(`Publicação ${_id ? 'salva' : 'criada'}!`)
          setLoading(false);
          router.push(`/educador/${res.data.name}`);
        } else {
          setLoading(false);
          toast.error(errorMessage)
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error(`Error ${err?.response.data?.errorMessage || ''}`)
      })
    setLoading(false);
  }

  useEffect(() => {
    setFields((oldFields) => {
      const newFields = { ...oldFields };
      mapDataToFields({ newFields, constantFields: educatorFields, data: publication })
      return newFields
    })
  }, [_id, publication])

  return (
    <Container>
      <S.EducatorAreaForm>
        <Button variation="primary" onClick={() => router.push('/educador')}>Voltar</Button>
        <h1>{_id ? 'Editar' : 'Criar'} Publicação</h1>
        <Form {...formProps} />
        <Button onClick={onSubmit} loading={loading} variation="primary">{_id ? 'Editar' : 'Criar'}</Button>
      </S.EducatorAreaForm>
    </Container>
  )
}
