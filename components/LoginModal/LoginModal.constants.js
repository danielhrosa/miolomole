export const loginModalFieldsState = () => ({
  userName: { value: '' },
  password: { value: '' }
})


export const loginModalFieldsFunction = ({ fields, onSubmit, loading, formDisabledState }) => ({
  userName: {
    ...fields.userName,
    name: 'userName',
    label: 'Nome de usuário',
  },
  password: {
    ...fields.password,
    name: 'password',
    label: 'Senha',
    type: 'password'
  },
  submitButton: {
    name: 'submitButton',
    type: 'submit',
    label: 'Entrar',
    variation: 'primary',
    loading: loading,
    disbled: formDisabledState || loading,
    onClick: (e) => onSubmit(e)
  }
})

export const gridTemplate = (theme) => {
  return `
    grid-template: ${`
      "userName userName userName" 
      "password password password"
      ". submitButton ."
    `}
  `
}