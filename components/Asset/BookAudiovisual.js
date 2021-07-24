import Player from '../Player';
import Field from '../../Elements/Field';
import Editable from '../Editable';
import EditableImage from '../EditableImage';
import * as S from './BookAudiovisual.styles';

export default function BookAudiovisual({ book, ...props }) {
  const defaultItem = {
    textKey: 'accessibleAssets',
    value: '',
    name: 'accessibleAssets',
    label: 'Nome da midia',
    type: 'asset',
  }

  const fieldProps = {
    defaultItem,
    items: book?.accessibleAssets,
    MediaTitle: <S.MediaTitle/>,
  }

  return (
    <S.BookAcessivel>
      <Editable {...props} textKey={`accessibleTitle${book.name}`}><S.AccessibleTitle /></Editable>
      <EditableImage {...props} textKey={`accessibleCover${book.name}`}><S.AccessibleCover /></EditableImage>
      <Field {...props} type="mediaUploads" {...fieldProps} />
    </S.BookAcessivel>
  )
} 