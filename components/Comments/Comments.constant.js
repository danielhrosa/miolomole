export const commentFieldsState = () => ({
  content: { value: '' },
  userFullName: { value: '' },
  phone: { value: '' },
  email: { value: '' },
})

export const commentFieldsFunction = ({ fields }) => {
  return ({
    userFullName: {
      ...fields.userFullName,
      name: 'userFullName',
      label: 'Nome *',
    },
    phone: {
      ...fields.phone,
      name: 'phone',
      label: 'Telefone',
    },
    email: {
      ...fields.email,
      name: 'email',
      type: 'email',
      label: 'Email*',
    },
    content: {
      ...fields.content,
      name: 'content',
      type: 'textarea',
      label: 'Conteúdo *',
      placeholder: "Escreva seu comentário aqui...",
    },
  })
}