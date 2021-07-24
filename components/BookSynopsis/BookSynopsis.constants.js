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
  video: {
    ...fields.video,
    name: 'video',
    type: 'asset',
  },
})