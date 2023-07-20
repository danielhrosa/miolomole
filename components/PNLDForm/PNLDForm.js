import { useRouter } from 'next/router';
import Button from '../../Elements/Button';
import Form from '../../Elements/Form';
import Container from '../Container/Container';
import * as S from './PNLDForm.styles';
import { gridTemplate, PNLDFormFieldsState, PNLDFormFieldsFunction } from './PNLDForm.constants';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import mapDataToFields from '../../utils/mapDataToFields';

export default function PNLDForm({ pnld }) {
  const _id = pnld && pnld._id;
  const router = useRouter();
  const [fields, setFields] = useState(PNLDFormFieldsState());
  const [loading, setLoading] = useState();
  const pnldFormFields = PNLDFormFieldsFunction({ fields, setFields });
  const formProps = { gridTemplate, fields: pnldFormFields, setFields }

  const onSubmit = () => {
    setLoading(true);
    const variables = Object.entries(fields).reduce((obj, [key, { value }]) => ({ ...obj, [key]: (value?.value || value?._id) || value }), {});
    const errorMessage = `Erro ao ${_id ? 'salvar' : 'criar'} PNLD`;
    if (!variables?.title) {
      setLoading(false);
      toast.error('Por favor preencha todos os campos')
      return;
    }
    if(pnld?._id) { variables._id = pnld?._id; }
    axios[_id ? 'put' : 'post']('/api/pnld', variables)
      .then((res) => {
        if (res.status === 200) {
          toast.success(`PNLD ${_id ? 'salva' : 'criada'}!`)
          setLoading(false);
          router.push(`/pnld/${res.data.name}`);
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
      mapDataToFields({ newFields, constantFields: pnldFormFields, data: pnld })
      return newFields
    })
  }, [_id, pnld])

  return (
    <Container>
      <S.PNLDForm>
        <Button variation="primary" onClick={() => router.push('/pnld')}>Voltar</Button>
        <h1>{_id ? 'Editar' : 'Criar'} PNLD</h1>
        <Form {...formProps} />
        <Button onClick={onSubmit} loading={loading} variation="primary">{_id ? 'Editar' : 'Criar'}</Button>
      </S.PNLDForm>
    </Container>
  )
}
