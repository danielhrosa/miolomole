import Player from '../Player';
import Field from '../../Elements/Field';
import Editable from '../Editable';
import EditableImage from '../EditableImage';
import * as S from './Assets.styles';
import { useMemo, useState } from 'react';

// const fieldProps = {
//   defaultItem,
//   items: parsedBook?.accessibleAssets,
//   MediaTitle: <S.MediaTitle/>,
// }

const assetState = () => ({ assetName: { value: '' }, assetUrl: { value: '' } })

const fieldsFunction = ({ fields, setFields, assetType }) => ({
  assets: {
    addButton: {
      type: 'button',
      label: '+',
      onClick: () => setFields((oldFields) => {
        const newFields = { ...oldFields };
        newFields.assets.value.push(assetState());
        return newFields;
      })
    },
    subfields: fields.assets.subfields.value.map((subfield, i) => ({
      assetName: {
        ...subfield.assetName,
        name: 'assetName',
        placeholder: `Coloque o nome de ${assetType}`,
        label: `Nome de ${assetType}`
      },
      assetUrl: {
        ...subfield.assetUrl,
        name: 'assetUrl',
        type: 'asset',
      },
      deleteButton: {
        type: 'button',
        label: '-',
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
  const parsedBook = useMemo(() => JSON.parse(book) ,[book]);
  const [fields, setFields] = useState({ assets: { value: [ { ...assetState() }] } })
  const assetFields = fieldsFunction({ fields, setFields, assetType })

  return (
    <S.Assets>
      <S.Title>{parsedBook?.title}</S.Title>
      <S.Cover src={parsedBook?.image} />
      
    </S.Assets>
  )
} 