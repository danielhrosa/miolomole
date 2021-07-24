export const bookSinopsisFieldsState = () => ({
  synopsis: { value: '' },
  type: { value: '' },
  video: { value: '' },
})
  
export const bookSinopsisFieldsFunction = ({ fields, isLoggedIn }) => ({
  synopsis: {
    ...fields.synopsis,
    name: 'synopsis',
    type: 'textarea',
    readOnly: !isLoggedIn,
  },
  type: {
    ...fields.type,
    name: 'type',
    label: 'Tipo de midia',
    type: 'select',
    loadEmpty: true,
    options: [
      { label: 'Video', value: 'video'},
      { label: 'Imagem', value: 'image' }
    ],
  },
  video: {
    ...fields.video,
    name: 'video',
    type: 'asset',
  },
})