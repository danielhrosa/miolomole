export const highlightFieldsState = () => ({
  image: { value: '' },
  title: { value: '' },
  link: { value: '' },
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
  link: {
    ...fields.link,
    name: 'link',
    label: 'Link (com http:// ou https:// no início)',
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
    display: flex;
    flex-direction: column;
    gap: 16px;
  
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(5, 80px) 1fr;
      grid-column-gap: 16px;
      grid-row-gap: 0px;

      [name = "image"] { grid-area: 1 / 1 / 5 / 2; }
      [name = "title"] { grid-area: 1 / 2 / 2 / 5; }
      [name = "description"] { grid-area: 2 / 2 / 3 / 5; }
      [name = "link"] { grid-area: 3 / 2 / 4 / 5; }
      [name = "page"] { grid-area: 4 / 2 / 5 / 5; }
      [name = "isActive"] { grid-area: 5 / 2 / 6 / 5; }
    }
  `
}