import BookFiles from '../BookFiles';
import BookRelated from '../BookRelated';
import BookSection from '../BookSection';
import * as S from './BookComponent.style';
import BookSynopsis from '../BookSynopsis';

export default function BookComponent(props){
  return(
    <S.BookComponent>
      <BookSection {...props} />
      <BookSynopsis {...props} />
      <BookRelated {...props} />
    </S.BookComponent>
  )
}