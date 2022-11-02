import { useRouter } from 'next/router';
import Button from '../../Elements/Button';
import Form from '../../Elements/Form';
import Container from '../../components/Container/Container';
import * as S from './EducatorAreaForm.styles';
import { gridTemplate, educatorFieldsState, educatorFieldsFunction } from './EducatorAreaForm.constants';
import { useState } from 'react';

export default function EducatorAreaForm() {
  const router = useRouter();
  const [fields, setFields] = useState(educatorFieldsState());
  const id = '';
  const onSubmit = () => {
    const value = localStorage.getItem('teste')
    console.log(value)
    if (value) {
      setFields((oldFields) => {
        const newFields = { ...oldFields };
        newFields.content.value = value;
        return newFields;
      })
    }
    console.log('2', fields)
  }
  const educatorFields = educatorFieldsFunction({ fields, setFields, id, onSubmit });
  const formProps = { gridTemplate, fields: educatorFields, setFields }

  return (
    <Container>
      <S.EducatorAreaForm>
        <Button variation="primary" onClick={() => router.push('/educador')}>Voltar</Button>
        <h1>{id ? 'Editar' : 'Criar'} Publicação</h1>
        <Form {...formProps} />
      </S.EducatorAreaForm>
    </Container>
  )
}