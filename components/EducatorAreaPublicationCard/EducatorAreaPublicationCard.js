import { useRouter } from 'next/router';
import Button from '../../Elements/Button';
import * as S from './EducatorAreaPublicationCard.styles'

export default function EducatorAreaPublication({ isLoggedIn, publication, i, handleHidePublication, handleDeletePublication }) {
  const { image, name, title, description, hide } = publication;

  const router = useRouter();

  return (
    <S.EducatorAreaPublication key={i} onClick={() => { router.push(`/blog/${name}`) }}>
      {isLoggedIn && (
        <S.EducatorAreaPublicationButtons onClick={(e) => { e.stopPropagation(); }}>
          <Button onClick={(e) => { e.stopPropagation(); handleDeletePublication(publication); }} type="delete" />
          <Button ishidden={hide} onClick={(e) => { e.stopPropagation(); handleHidePublication(publication); }} type="toggleHide" />
        </S.EducatorAreaPublicationButtons>
      )}
      <S.EducatorAreaPublicationPicture hide={hide} src={image} height="auto" width="100%" />
      <S.EducatorAreaPublicationContainer>
        <S.EducatorAreaPublicationContainerTitle>{title}</S.EducatorAreaPublicationContainerTitle>
        <S.EducatorAreaPublicationContainerDescription>{description}</S.EducatorAreaPublicationContainerDescription>
      </S.EducatorAreaPublicationContainer>
    </S.EducatorAreaPublication>
  )
}