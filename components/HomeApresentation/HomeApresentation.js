import Container from '../Container'
import Editable from '../Editable'
import EditableImage from '../EditableImage'
import * as S from './HomeApresentation.style'

export default function HomeApresentation(props) {

  return (
    <S.HomeApresentation>
      <Container>
        <EditableImage {...props} textKey="homeApresentationImage"><S.HomeApresentationImage /></EditableImage>
        <S.HomeInfo>
          <Editable {...props} textKey="homeApresentationTitle"><S.HomeApresentationTitle /></Editable>
          <Editable {...props} textKey="homeApresentationCall"><S.HomeApresentationText /></Editable>
        </S.HomeInfo>
      </Container>
    </S.HomeApresentation>
  )
}
