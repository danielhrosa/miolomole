export const catalogFieldsState = () => ({
  file: { value: '' },
})
  
export const catalogFieldsFunction = ({ fields, isLoggedIn }) => ({
  file: {
    ...fields.file,
    name: 'file',
    type: 'asset',
  },
})