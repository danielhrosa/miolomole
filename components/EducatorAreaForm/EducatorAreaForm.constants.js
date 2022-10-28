import { css } from 'styled-components';
import { inputChange } from '../../helpers/fieldFunctions';

export const educatorFieldsState = (props) => ({
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
    onChange: ({ target }) => {
      const { value, name } = target;
      setFields((oldFields) => {
        const newFields = { ...oldFields };
        newFields[name].value = value.toLowerCase().replace(" ", "");
        return newFields;
      });
    }
  },
  description: {
    ...fields.description,
    name: 'description',
    label: 'Descrição',
    onChange: ({ target }) => { inputChange({ target, setFields }) }
  },
  image: {
    ...fields.image,
    name: 'image',
    label: 'Foto',
    type: 'asset',
  },
  area: {
    ...fields.area,
    name: 'area',
    label: 'Area:',
    type: 'select',
    options: [
      { label: 'a', value: 'a' },
      { label: 'b', value: 'b' },
      { label: 'c', value: 'c' },
    ]
  },
  hide: {
    ...fields.hide,
    label: 'Ocultar?',
    name: 'hideFromList',
    type: 'switch',
  },
  content: {
    ...fields.content,
    name: 'content',
    label: 'Senha',
    type: 'editor',
  },
})

export const gridTemplate = () => {
  return css`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 1024px){
      /* grid-template-areas:
        "avatar hideFromList hideFromList"
        "avatar userName occupation"
        "avatar userFullName userFullName"
        "avatar password password"
        "avatar description description"
      ;
      grid-template-columns: 320px 1fr 1fr;
      grid-template-rows: 80px 80px 80px auto auto; */
    }
  `
};