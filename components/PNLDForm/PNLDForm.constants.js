import { css } from 'styled-components';
import randomColor from '../../utils/randomColor';
import urlNameFormatter from '../../utils/urlNameFormatter';

export const PNLDFormFieldsState = (props) => ({
  _id: { value: '' },
  name: { value: '' },
  title: { value: '' },
  color: { value: randomColor() },
  hide: { value: false }
})

export const PNLDFormFieldsFunction = ({ fields, setFields }) => ({
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
  parentPnld: {
    ...fields.parentPnld,
    name: 'parentPnld',
    label: 'PNLD Pai:',
    type: 'select',
    loadEmpty: true,
    isSearchable: true,
    isCreatable: true,
    loadOptions: (query, callback) => {
      axios.get('/api/pnld')
        .then((res) => res && callback(res.data
          .filter((option) => option.title
            ?.toLowerCase()
            ?.normalize("NFD")
            ?.includes(query?.toLowerCase()))
          .map((option) => ({ ...option, instanceId: option._id, label: option.title }))
        ))
    },
  },
  hide: {
    ...fields.hide,
    label: 'Ocultar?',
    name: 'hide',
    type: 'switch',
  },
})

export const gridTemplate = () => {
  return css`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `
};