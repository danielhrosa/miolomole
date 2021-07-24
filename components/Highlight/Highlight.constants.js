export const highlightFieldsState = () => ({
  image: { value: '' },
  isActive: { value: ''},
  title: { value: ''},
  description: { value: ''},
})
  
export const highlightFieldsFunction = ({ fields }) => ({
  image: {
    ...fields.image,
    name: 'image',
    type: 'asset'
  },
  title: {
    ...fields.title,
    name: 'title',
    label: 'Título',
  },
  description: {
    ...fields.description,
    name: 'description',
    label: 'Descrição',
  },
  isActive: {
    ...fields.isActive,
    name: 'isActive',
    label: 'Destacar na home?',
    type: 'switch'
  },
})


export const gridTemplate = () => {
  return `
    grid-template: ${`
      "image"
      "title"
      "description"
      "isActive"
    `};
    grid-gap: 15px;
    grid-template-rows: auto;
    grid-template-columns: 100%;
    margin-bottom: 30px;

    @media (min-width: 1024px){
      grid-template: ${`
        "image title"
        "image description"
        "image isActive"
      `};
      width: 100%;
      grid-template-rows: auto;
      grid-template-columns: 320px 1fr;
    }
  `
}