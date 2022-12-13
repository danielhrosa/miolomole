import axios from 'axios';
import { css } from 'styled-components';
import { inputChange } from '../../helpers/fieldFunctions';
import urlNameFormatter from '../../utils/urlNameFormatter'

export const educatorFieldsState = (props) => ({
  _id: { value: '' },
  name: { value: '' },
  title: { value: '' },
  description: { value: '' },
  image: { value: '' },
  content: { value: '' },
  area: { value: '' },
  hide: { value: false },
})

export const educatorFieldsFunction = ({ fields, setFields }) => ({
  title: {
    ...fields.title,
    name: 'title',
    label: 'Titulo',
    type: 'simple',
    onChange: ({ target }) => {
      const { value } = target;
      setFields((oldFields) => {
        const newFields = { ...oldFields };
        newFields.title.value = value;
        newFields.name.value = urlNameFormatter(value);
        return newFields;
      });
    }
  },
  area: {
    ...fields.area,
    name: 'area',
    label: 'Area:',
    type: 'select',
    loadEmpty: true,
    isSearchable: true,
    isCreatable: true,
    loadOptions: (query, callback) => {
      axios.get('/api/publicationArea')
      .then((res) => res && callback(res.data
        .filter((option) => option.title
          ?.toLowerCase()
          ?.normalize("NFD")
          ?.includes(query?.toLowerCase()))
        .map((option) => ({ ...option, instanceId: option._id, label: option.title }))
      ))
    }
  },
  image: {
    ...fields.image,
    name: 'image',
    label: 'Foto',
    type: 'asset',
  },
  description: {
    ...fields.description,
    name: 'description',
    label: 'Descrição',
    type: 'textarea',
    maxRows: 10,
    onChange: ({ target }) => { inputChange({ target, setFields }) }
  },
  hide: {
    ...fields.hide,
    label: 'Ocultar?',
    name: 'hide',
    type: 'switch',
  },
  content: {
    ...fields.content,
    name: 'content',
    label: 'Senha',
    type: 'editor',
    onChange: (content) => {
      setFields((oldFields) => {
        const newFields = { ...oldFields };
        newFields.content.value = content;
        return newFields;
      })
    }
  }
})

export const gridTemplate = () => {
  return css`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 1024px) {
      display: grid;
      grid-template-areas:
        "foto title title"
        "foto area area"
        "foto hide ."
        "foto description description"
        "content content content"
        ". . submitButton"
      ;
      grid-template-rows: 60px 60px 50px 250px 1fr 50px;
      grid-template-columns: 300px 1fr 2fr;
      .primary {
        justify-self: right;
      }
    }
  `
};