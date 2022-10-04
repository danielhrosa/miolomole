import EducatorAreaPublication from '../EducatorAreaPublication/EducatorAreaPublication'
import Jumbotron from '../Jumbotron/Jumbotron'
import * as S from './EducatorArea.styles'

export default function EducatorArea(props) {
  return (
    <S.EducatorArea>
      <Jumbotron {...props} page="educatorArea" />
      <S.EducatorAreaSlider>
        <h1>Post simplificado slider</h1>
      </S.EducatorAreaSlider>
      <S.EducatorAreaPosts>
        {[0,1,2].map((publication) => (
          <EducatorAreaPublication {...publication} />
        ))}
      </S.EducatorAreaPosts>
    </S.EducatorArea>
  )
}