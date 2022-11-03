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

export default function EducatorAreaForm({ publication }) {
  const { _id } = publication;
  const router = useRouter();
  const [fields, setFields] = useState(educatorFieldsState());
  const [loading, setLoading] = useState();
  const educatorFields = educatorFieldsFunction({ fields, setFields });
  const formProps = { gridTemplate, fields: educatorFields, setFields }

  const onSubmit = () => {
    setLoading(true);
    const variables = Object.entries(fields).reduce((obj, [key, { value }]) => ({ ...obj, [key]: value }), {});
    const hasEmpty = Object.entries(variables).some(([key, value]) => !['_id', 'hide'].includes(key) && !value)
    const errorMessage = `Erro ao ${_id ? 'salvar' : 'criar'} publicação`;
    if (hasEmpty) {
      setLoading(false);
      toast.error('Por favor preencha todos os campos')
      return;
    }
    axios[_id ? 'put' : 'post']('/api/publication', variables)
      .then((res) => {
        if (res.status === 200) {
          toast.success(`Publicação ${_id ? 'salva' : 'criada'}!`)
          setLoading(false);
          router.back();
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
      newFields.name.value = publication?.name;
      newFields.image.value = publication?.image;
      newFields.title.value = publication?.title;
      newFields.description.value = publication?.description;
      newFields.content.value = publication?.content;
      newFields.area.value = publication?.area;
      newFields.hide.value = publication?.hide;
      return newFields;
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
