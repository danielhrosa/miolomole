import EditableImage from '../EditableImage'
import * as S from './BookGallery.style'

export default function BookGallery({ book, ...props }) {
  return (
    <S.BookGallery>
      <EditableImage {...props} book={book}><S.BookCover /></EditableImage>
    </S.BookGallery>
  )
}