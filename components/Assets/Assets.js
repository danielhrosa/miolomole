import Field from '../../Elements/Field';
import * as S from './Assets.styles';
import { css } from 'styled-components';
import { useMemo, useState } from 'react';

const assetState = () => ({ assetName: { value: '' }, assetUrl: { value: '' } })

const fieldsFunction = ({ fields, setFields, assetType, poster }) => ({
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
      variation: 'primary',
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
})

export default function BookAudiovisual({ book, params: { assetType } }) {
  const parsedBook = useMemo(() => JSON.parse(book), [book]);
  const [fields, setFields] = useState({ assets: { value: [ { ...assetState() }] } })
  const assetFields = fieldsFunction({ fields, setFields, assetType, poster: parsedBook?.image })

  return (
    <S.Assets>
      <S.Title>{parsedBook?.title}</S.Title>
      <S.Cover src={parsedBook?.image} />
      <Field {...assetFields.assets} />
    </S.Assets>
  )
} 