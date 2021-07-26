import axios from 'axios';
import { useEffect, useState } from 'react';
import Form from '../../Elements/Form';
import Button from '../../Elements/Button';
import { useRouter } from 'next/router';
import * as S from './PartnerForm.styles';
import { PartnerFormInitialState, PartnerFormFieldsFunction, gridTemplate } from './PartnerForm.constants.js';
import mapFieldsToData from '../../utils/mapFieldsToData';
import mapDataToFields from '../../utils/mapDataToFields';
import toast, { Toaster } from 'react-hot-toast';

export default function PartnerForm(props){
  const { partner, books } = props;
  const router = useRouter();
  const booksArray = books ? JSON.parse(books) : {};
  const [fields, setFields] = useState(PartnerFormInitialState);
  const partnerFormfields = PartnerFormFieldsFunction({ fields, setFields, router, partner, books: booksArray });

  useEffect(() => {
    if(partner) {
      setFields((oldFields) => {
        const newFields = {...oldFields};
        mapDataToFields(({newFields, constantFields: partnerFormfields, data: partner}))
        return newFields
      })
    }
  }, [])

  const onSubmit = async () => {
    const fieldsValue = mapFieldsToData(partnerFormfields);
    if(!partner){
      const emptyField = Object.values(partnerFormfields)?.find((field) => field.value == '')
      if(emptyField) { toast.error(`Por favor preencha o campo ${emptyField.label}`) }
      else {
        const res = await axios.post(`/api/parceiros`, { ...fieldsValue })
        if(res.status === 200) { toast.success('Cadastrado realizado com sucesso!'); setFields(PartnerFormInitialState) }
        else { toast.error(res.response.data) }
      }
    } else {
      const res = await axios.put(`/api/parceiros`, { ...fieldsValue, _id: partner._id })
      if(res.status === 200) { toast.success('Cadastro atualizado com sucesso!') } 
      else { toast.error(res?.response?.data) }
    }
  }

  const formProps = { gridTemplate, fields: partnerFormfields, setFields };

  return(
    <S.PartnerForm>
      <Button variation='primary' label='Voltar' onClick={() => router.push('/loja')} />
      <h1>{!!partner ? 'Editar' : 'Adicionar'} parceiro</h1>
      <Form {...formProps} />
      <Toaster position="bottom-right" reverseOrder={false}/>      
      <Button label={partner ? 'Salvar' : 'Cadastrar'} variation='primary' onClick={() => onSubmit()} />
    </S.PartnerForm>
  )
}