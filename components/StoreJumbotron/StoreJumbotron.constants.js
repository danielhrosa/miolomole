import axios from 'axios';
import { css } from 'styled-components';

export const StoreJumbotronFieldsState = ({
  state: { value: '' },
})

export const StoreJumbotronFieldsFunction = ({fields, router}) => ({
  state: {
    ...fields.state,
    name: 'state',
    placeholder: 'Cidade...',
    type: 'select',
    isSearchable: true,
    loadEmpty: true,
    loadOptions: (query, callback) => {
      axios.get('/api/parceiros')
        .then((res) => res && callback(res.data.reduce((arr, item) => (
          arr.some(({value}) => value.some((city) => item.city.includes(city)))
            ? arr
            : [...arr, { instanceId: item._id, label: item.city, value: item.city }]
        ), [])))
        .catch((err) => callback([]))
    },
    onChange: ({ target, setFields }) => {
      const { name, value } = target;
      router.push(`/loja?city=${value.value}`)
      setFields((oldFields) => {
        const newFields = {...oldFields};
        newFields[name].value = value;
        return newFields
      })
    },
  },
  submitButton: {
    name: 'submitButton',
    label: 'Buscar',
    type: 'button',
    variation: 'primary'
  }
})


export const gridTemplate = () => css`
  width: 80%;
  grid-template-areas: 
    "state"
    "submitButton"
  ;
  grid-gap: 32px;
  @media screen{
    @media (min-width: 1024px){
      grid-template-areas: 
        "state submitButton"
      ;
    }
  }
`