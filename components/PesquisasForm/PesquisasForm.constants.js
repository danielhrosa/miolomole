import { css } from 'styled-components';

export const pesquisasFieldsState = (props) => ({
  title: { value: '' },
  iframeCode: { value: '' },
  hide: { value: false },
})

export const pesquisasFieldsFunction = ({ fields, setFields }) => ({
  name: {
    ...fields.title,
    name: 'title',
    label: "Título"
  },
  iframeCode: {
    ...fields.iframeCode,
    name: 'iframeCode',
    label: 'Iframe Embedded Code'
  },
  hide: {
    ...fields.hide,
    name: 'hide',
    label: 'Ocultar?',
    type: 'switch'
  },
  
})

export const gridTemplate = () => {
  return css`
    display: flex;
    flex-direction: column;
  `
};