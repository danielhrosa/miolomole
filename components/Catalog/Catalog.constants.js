import randomColor from '../../utils/randomColor';
import { css } from 'styled-components';

export const catalogFieldsState = () => ({
  _id: { value: '' },
  link: { value: '' },
  label: { value: '' },
  background: { value: '' },
  color: { value: randomColor() },
})

export const catalogFieldsFunction = ({ fields, setFields, setIsOpen, onSubmit }) => ({
  label: {
    ...fields.label,
    label: 'Nome',
    name: 'label',
    onChange: ({ target: { name, value } }) => {
      setFields((oldFields) => {
        const newFields = { ...oldFields };
        newFields[name].value = value;
        return newFields;
      })
    }
  },
  color: {
    ...fields.color,
    name: 'color',
    label: 'Cor do botão',
    type: 'color',
    onChange: ({ target: { name, value } }) => {
      setFields((oldFields) => {
        const newFields = { ...oldFields };
        newFields[name].value = value;
        return newFields;
      })
    }
  },
  link: {
    ...fields.link,
    name: 'link',
    type: 'asset',
    label: 'Arquivo',
    variation: 'mini',
  },
  background: {
    ...fields.background,
    name: 'background',
    label: 'Fundo do arquivo',
    type: 'asset',
    variation: 'mini',
  },
  cancelar: {
    name: 'cancelar',
    label: 'Cancelar',
    type: 'button',
    variation: 'danger',
    onClick: () => { setIsOpen(false) }
  },
  salvar: {
    name: 'salvar',
    label: 'Salvar',
    type: 'button',
    variation: 'primaryDark',
    onClick: onSubmit
  }
})

export const gridTemplate = () => css`
  grid-template-areas: ${`
    "label"
    "color"
    "link"
    "background"
    "."
    "salvar"
    "cancelar"
  `};

  justify-content: center;
  justify-items: center;
  gap: 16px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  label { font-size: 14px; }
`