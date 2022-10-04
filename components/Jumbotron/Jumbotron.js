import * as S from './Jumbotron.styles'
import EditableImage from '../EditableImage'

export default function Jumbotron({ page, ...props }){

 return(
    <S.JumbotronContainer>
      <EditableImage {...props} textKey={`${page}JumbotronImage`}><S.JumbotronImage /></EditableImage>
    </S.JumbotronContainer>
  )
}