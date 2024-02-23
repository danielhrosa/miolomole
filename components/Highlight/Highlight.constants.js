export const highlightFieldsState = () => ({
  image: { value: '' },
  title: { value: '' },
  description: { value: '' },
  page: { value: '' },
  isActive: { value: false },
})

export const highlightFieldsFunction = ({ fields, pages }) => ({
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
  page: {
    ...fields.page,
    name: 'page',
    label: 'Page',
    type: 'select',
    options: [{ id: '1', label: 'Home', value: 'home' }, ...pages.map((page) => ({ label: page.label, value: page.path?.replace("/pnld/", "") }))]
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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 80px) 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    [name = "image"] { grid-area: 1 / 1 / 5 / 2; }
    [name = "title"] { grid-area: 1 / 2 / 2 / 5; }
    [name = "description"] { grid-area: 2 / 2 / 3 / 5; }
    [name = "page"] { grid-area: 3 / 2 / 4 / 5; }
    [name = "isActive"] { grid-area: 4 / 2 / 5 / 5; }
  `
}