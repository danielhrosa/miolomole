import * as S from './EducatorAreaPublication.styles'

export default function EducatorAreaPublication({ image, name, title, description, i }) {

  return (
    <S.EducatorAreaPublication key={i}>
      <S.EducatorAreaPublicationPicture src={image} onClick={() => { console.log(`/educator/publications/${name}`) }} height="auto" width="100%" />
      <S.EducatorAreaPublicationContainer>
        <S.EducatorAreaPublicationContainerTitle>{title}</S.EducatorAreaPublicationContainerTitle>
        <S.EducatorAreaPublicationContainerDescription>{description}</S.EducatorAreaPublicationContainerDescription>
      </S.EducatorAreaPublicationContainer>
    </S.EducatorAreaPublication>
  )
}