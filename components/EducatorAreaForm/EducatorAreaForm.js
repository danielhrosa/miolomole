import { useRouter } from 'next/router';
import Button from '../../Elements/Button';
import Form from '../../Elements/Form';
import * as S from './EducatorAreaForm.styles';
import { gridTemplate, educatorFieldsState, educatorFieldsFunction } from './EducatorAreaForm.constants';
import { useState } from 'react';

export default function EducatorAreaForm() {
  const router = useRouter();
  const [fields, setFields] = useState(educatorFieldsState());
  const educatorFields = educatorFieldsFunction({ fields, setFields });
  const id = '';
  const formProps = { gridTemplate, fields: educatorFields, setFields }

  return (
    <S.EducatorAreaForm>
      <Button variation="primary" onClick={() => router.push('/autores')}>Voltar</Button>
      <h1>{id ? 'Editar' : 'Criar'} Publicação</h1>
      <Form {...formProps} />
    </S.EducatorAreaForm>
  )
}