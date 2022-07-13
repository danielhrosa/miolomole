import axios from 'axios';
import { css } from 'styled-components';

export const usuariosFieldsState = (props) => ({
  avatar: { value: '' },
  userName: { value: '' },
  userFullName: { value: '' },
  occupation: { value: [] },
  description: { value: '' },
  password: { value: '' },
  hideFromList: { value: false },
})

export const usuariosFieldsFunction = ({ fields, setFields }) => ({
  avatar: {
    ...fields.avatar,
    name: 'avatar',
    type: 'asset'
  },
  userName: {
    ...fields.userName,
    name: 'userName',
    label: 'Login',
    onChange: ({ target }) => {
      const { value, name } = target;
      setFields((oldFields) => {
        const newFields = { ...oldFields };
        newFields[name].value = value.toLowerCase().replace(" ", "");
        return newFields;
      });
    }
  },
  occupation: {
    ...fields.occupation,
    name: 'occupation',
    label: 'Ocupação',
    type: 'select',
    isMulti: true,
    options: [
      { label: 'Ilustrador', value: 'illustrator' },
      { label: 'Escritor', value: 'writer' },
      { label: 'Administrador', value: 'admin' }
    ]
  },
  userFullName: {
    ...fields.userFullName,
    name: 'userFullName',
    label: 'Nome',
    isCreatable: true,
    isSearchable: true,
    loadEmpty: true,
    type: 'select',
    loadOptions: (query, callback) => {
      axios.get('/api/users').then((res) => {
        res && callback(res.data
          .filter((option) => option?.userFullName?.toLowerCase().includes(query.toLowerCase()) || option.userName.toLowerCase().includes(query.toLowerCase()))
          .map((option) => ({ label: option.userFullName + ' já cadastrado!' }))
        )
      })
    }
  },
  password: {
    ...fields.password,
    name: 'password',
    label: 'Senha',
    type: 'password',
  },
  description: {
    ...fields.description,
    label: 'Descrição',
    name: 'description',
    type: 'textarea',
  },
  hideFromList: {
    ...fields.hideFromList,
    label: 'Ocultar da lista?',
    name: 'hideFromList',
    type: 'switch',
  },
})

export const gridTemplate = () => {
  return css`
    grid-template-areas:
      "avatar"
      "userName"
      "userFullName"
      "occupation"
      "password"
      "description"
      "hideFromList";
    grid-template-columns: 1fr;
    grid-column-gap: 32px;

    @media screen{
      @media (min-width: 1024px){
        grid-template-areas:
          "avatar hideFromList hideFromList"
          "avatar userName occupation"
          "avatar userFullName userFullName"
          "avatar password password"
          "avatar description description"
        ;
        grid-template-columns: 320px 1fr 1fr;
        grid-template-rows: 80px 80px 80px auto auto;
      }
    }
  `
};