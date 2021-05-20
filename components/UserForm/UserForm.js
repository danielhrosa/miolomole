import axios from 'axios';
import * as S from './UserForm.styles';
import Form from '../../Elements/Form';
import { useRouter } from 'next/router';
import Button from '../../Elements/Button';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import mapFieldsToData from '../../utils/mapFieldsToData';
import mapDataToFields from '../../utils/mapDataToFields';
import { usuariosFieldsState, usuariosFieldsFunction, gridTemplate } from './UserForm.constants.js';

export default function UserForm(props){
  const router = useRouter();
  const [user, setUser] = useState();
  const [fields, setFields] = useState(usuariosFieldsState);
  const userFormfields = usuariosFieldsFunction({ fields });
  const formProps = { gridTemplate, fields: userFormfields, setFields };

  useEffect(() => {
    if(props.user) {
      setUser(props.user)
      setFields((oldFields) => {
        const newFields = {...oldFields};
        mapDataToFields({ newFields, constantFields: userFormfields, data: props.user })
        return newFields
      })
    }
  }, [props.user])

  if(
    userFormfields?.occupation?.value.length === 0 ||
    userFormfields?.occupation?.value.length && !userFormfields?.occupation?.value.some((occupation) => occupation?.value === 'admin') ||
    !!userFormfields?.occupation?.value?.value && !userFormfields?.occupation?.value?.value.some((occupation) => occupation === 'admin')
  ) {
    delete formProps.fields.password
  }

  const onSubmit = async () => {
    let variables = mapFieldsToData(userFormfields);
    if(variables.password === ''){ delete variables.password }
    let res;
    try{
      if(!user) {res = await axios.post('/api/users', { ...variables })}
      else {res = await axios.put('/api/users', { ...variables, _id: user._id })}
      if(res.status === 200) { toast.success(`Cadastrado ${user ? 'atualizado' : 'realizado'} com sucesso!`) }
      else { toast.error(res?.response?.data) }
    } catch (err) { toast.error(err.response.data.errorMessage) }
  }

  return(
    <S.UsuariosWrapper>
      <Button variation="primary" onClick={() => router.push('/autores')}>Voltar</Button>
      <h1>Adicionar usuário</h1>
      <Form {...formProps} />
      <Toaster position="bottom-right" reverseOrder={false}/>
      <Button variation="primary" label={user ? "Atualizar" : "Cadastrar"} onClick={() => onSubmit()}/>
    </S.UsuariosWrapper>
  )
}
