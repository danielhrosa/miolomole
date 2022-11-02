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

export const educatorFieldsFunction = ({ fields, setFields, onSubmit, id }) => ({
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
        newFields.name.value = value.toLowerCase().replace(" ", "");
        return newFields;
      });
    }
  },
  area: {
    ...fields.area,
    name: 'area',
    label: 'Area:',
    type: 'select',
    handleCreate: () => {},
    options: [
      { instanceId: 'material-de-apoio', value: 'material-de-apoio', label: 'Material de apoio', color: '#157EFA' },
      { instanceId: 'noticias', value: 'noticias', label: 'Notícias', color: '#3DC55D' },
      { instanceId: 'nossas-recomendacoes', value: 'nossas-recomendacoes', label: 'Nossas Recomendações', color: '#FD9426' },
      { instanceId: 'politica', value: 'politica', label: 'Politica', color: '#9700FF' },
      { instanceId: 'religiao', value: 'religiao', label: 'Religião', color: '#FFCC22' },
      { instanceId: 'futebo', value: 'futebol', label: 'Futebol', color: '#FF00CF' },
    ]
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
  },
  submitButton: {
    name: 'submitButton',
    label: id ? 'Editar' : 'Criar',
    type: 'button',
    variation: 'primary',
    onClick: onSubmit
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