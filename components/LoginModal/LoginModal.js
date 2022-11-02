import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Form from '../../Elements/Form'
import { formDisabled } from '../../helpers/fieldFunctions';
import { loginModalFieldsState, loginModalFieldsFunction, gridTemplate } from './LoginModal.constants';
import * as S from './LoginModal.style'
import { useAppProvider } from '../../store/appProvider';
import toast, { Toaster } from 'react-hot-toast';

export default function LoginModal() {
  const { setCurrentUser, setIsLoggedIn } = useAppProvider();
  const [fields, setFields] = useState(loginModalFieldsState);
  const [loading, setLoading] = useState();
  const [formDisabledState, setFormDisabledState] = useState();
  const router = useRouter();

  useEffect(() => {
    setFields((oldFields) => {
      const newFields = { ...oldFields };
      newFields.userName.value = '';
      newFields.password.value = '';
      return newFields;
    })
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const fieldsArray = Object.entries(fields);
    const { userName, password } = fieldsArray.reduce((obj, item) => ({ ...obj, [item[0]]: item[1]?.value }), {});
    if (userName && password) {
      axios.post(`/api/login`, { userName, password })
        .then((res) => {
          if (res.status == 200) {
            const user = res.data.user;
            const token = user.token;
            localStorage.setItem("token", token);
            toast.success('Login realizado com sucesso');
            setCurrentUser(user);
            setIsLoggedIn(false);
            router.push('/');
          }
        })
        .catch((err) => {
          const responseError = err.response && err.response?.data?.errorMessage;
          setLoading(false);
          if (responseError) { toast.error(responseError) }
        })
        .finally(() => setLoading(false))
    }
    setLoading(false);
  }

  useEffect(() => { setFormDisabledState(formDisabled(fields)) }, [fields])

  const loginModalFields = loginModalFieldsFunction({ fields, setFields, onSubmit, loading, formDisabledState })
  
  const formProps = {
    gridTemplate,
    fields: loginModalFields ? loginModalFields : {},
    setFields,
    disabled: formDisabledState,
    onSubmit,
    loading,
  }

  return (
    <S.LoginModalContainer>
      <Toaster position="bottom-right" reverseOrder={false} />
      <S.LoginModalBody>
        <S.Close className="unselectable" onClick={() => router.push('/')}>+</S.Close>
        <S.FormWrapper>
          <S.FormTitleWrapper>
            <S.Title>Login</S.Title>
            <S.SubTitle>*Somente para administradores</S.SubTitle>
          </S.FormTitleWrapper>
          <Form {...formProps} />
        </S.FormWrapper>
      </S.LoginModalBody>
    </S.LoginModalContainer>
  )
}