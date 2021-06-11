import Container from '../Container'
import Editable from '../Editable'
import EditableImage from '../EditableImage'
import * as S from './AboutUsSectionOne.style'

export default function AboutUsSectionOne(props){

 return(
    <S.AboutUsSectionOne>
      <Container>
        <S.SectionOneImages>
          <S.ImageWrapper>
            <EditableImage {...props} textKey="sectionOneImageOne"><S.SectionOneImageOne /></EditableImage>
            <Editable {...props} textKey="aboutUsImageNameOne"><S.ImageName /></Editable>
          </S.ImageWrapper>
          <S.ImageWrapper>
            <EditableImage {...props} textKey="sectionOneImageTwo"><S.SectionOneImageOne /></EditableImage>
            <Editable {...props} textKey="aboutUsImageNameTwo"><S.ImageName /></Editable>
          </S.ImageWrapper>
        </S.SectionOneImages>
        <Editable {...props} textKey="aboutUsSectionOne"><S.SectionOneText /></Editable>
      </Container>
    </S.AboutUsSectionOne>
  )
}