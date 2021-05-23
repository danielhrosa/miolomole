import axios from 'axios';
import { css } from 'styled-components';

export const StoreJumbotronFieldsState = ({
  selectState: { value: '' },
})

export const StoreJumbotronFieldsFunction = ({fields, router}) => ({
  selectState: {
    ...fields.selectState,
    name: 'selectState',
    placeholder: 'Cidade...',
    type: 'select',
    isSearchable: true,
    loadEmpty: true,
    loadOptions: (query, callback) => {
      axios.get('/api/parceiros')
        .then((res) => res && callback(res.data.reduce((arr, item) => (
          arr.some(({value}) => value.some((city) => item.city.includes(city)))
            ? arr
            : [...arr, { label: item.city, value: item.city }]
        ), [])))
        .catch((err) => callback([]))
    },
    // onChange: ({ target, setFields }) => {
    //   router
    // },
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
    "selectState"
    "submitButton"
  ;
  grid-gap: 32px;
  @media screen{
    @media (min-width: 1024px){
      grid-template-areas: 
        "selectState submitButton"
      ;
    }
  }
`