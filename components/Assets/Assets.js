import Field from '../../Elements/Field';
import * as S from './Assets.styles';
import { css } from 'styled-components';
import { useMemo, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const assetState = () => ({ assetName: { value: '' }, assetUrl: { value: '' } })

const assetsState = (parsedBook, assetType) => parsedBook.assets.length 
    ? { assets: { value: parsedBook.assets
      .filter((item) => item.assetType === assetType)
      .map((item) => ({ assetName: { value: item.assetName }, assetUrl: { value: item.assetUrl } })) 
    }}
    : { assets: { value: [assetState()] }};


const fieldsFunction = ({ fields, setFields, assetType, poster, name }) => ({
  assets: {
    name: 'assets',
    label: 'Medias',
    type: 'mediaUploads',
    gridTemplate: () => css`
      grid-template: ${`
        "assetName"
        "assetUrl"
        "deleteButton"
      `};
    `,
    setFields,
    addButton: {
      name: 'addButton',
      type: 'button',
      label: '+ Adicionar',
      variation: 'secondary',
      onClick: () => setFields((oldFields) => {
        const newFields = { ...oldFields };
        newFields.assets.value.push(assetState());
        return newFields;
      })
    },
    subfields: fields.assets.value.map((subfield, i) => ({
      assetName: {
        ...subfield.assetName,
        parentName: 'assets',
        name: 'assetName',
        i,
        label: `Coloque o nome de ${assetType}`,
      },
      assetUrl: {
        ...subfield.assetUrl,
        parentName: 'assets',
        name: 'assetUrl',
        i,
        type: 'asset',
        poster, 
      },
      deleteButton: {
        name: 'deleteButton',
        i,
        type: 'button',
        variation: 'remove',
        label: '- Remover',
        onClick: () => setFields((oldFields) => {
          const newFields = { ...oldFields };
          newFields.assets.value.splice(i, 1);
          return newFields;
        })
      },
    })),
  },
  submitButton: {
    name: 'addButton',
    type: 'button',
    label: 'Salvar',
    variation: 'primary',
    onClick: async () => {
      const data = {
        name,
        assetType,
        assets: fields.assets.value.map((item) => ({
          assetType,
          assetName: item.assetName.value,
          assetUrl: item.assetUrl.value
        }))
      }
      const res = await axios.post('/api/assets', data)
      if(res.status === 200){
        toast.success('Cadastro realizado com sucesso!');
      } else { console.log(res); }
    }
  },
})

export default function BookAudiovisual({ book, params: { assetType, name } }) {
  const parsedBook = useMemo(() => JSON.parse(book), [book]);
  console.log(parsedBook)
  const [fields, setFields] = useState(assetsState(parsedBook, assetType));
  const assetFields = fieldsFunction({ fields, setFields, assetType, poster: parsedBook?.image, name });

  return (
    <S.Assets>
      <S.Title>{parsedBook?.title}</S.Title>
      <S.Cover src={parsedBook?.image} />
      <Field {...assetFields.assets} />
      <Field {...assetFields.submitButton} />
    </S.Assets>
  )
} 