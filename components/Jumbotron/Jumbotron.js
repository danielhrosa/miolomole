import * as S from './Jumbotron.styles'
import EditableImage from '../EditableImage'

export default function Jumbotron(props){

 return(
    <S.JumbotronContainer>
      <EditableImage {...props} textKey={`${props?.page || ''}JumbotronImage`}><S.JumbotronImage /></EditableImage>
    </S.JumbotronContainer>
  )
}