import axios from "axios";

export const headerFieldsState = () => ({
  search: { value: '' },
})
  
export const headerFieldsFunction = ({ fields, router, setMenuIsOpen }) => ({
  search: {
    ...fields.search,
    name: 'search',
    type: 'select',
    isSearchable: true,
    loadEmpty: true,
    isClearable: true,
    placeholder: 'Procurar',
    loadOptions: (query, callback) => {
      axios.get('/api/livros')
        .then(({data}) => callback( data
          ?.filter((option) => option.title.toLowerCase().includes(query.toLowerCase()))
          ?.map((option) => ({ ...option, instanceId: option._id ,label: option.title, name: option.name, value: option._id }))))
        .catch((err) => callback([]))
    },
    onChange: ({ target}) => {
      const { value } = target;
      if(value !== ''){
        router.push(`/livros/${value?.name}`)
        setMenuIsOpen(false);
      }
    },
  },
})