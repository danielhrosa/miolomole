import Button from '../../../Elements/Button/Button';
import * as S from './PNLDOurWorksCard.styles';

export default function PNLDOurWorksCard({ book, color, isLoggedIn, handleDeletePnld, ...props }) {

  return (
    <S.PNLDOuWorksCard {...props}>
      {isLoggedIn && (
        <S.PNLDButtons onClick={(e) => { e.stopPropagation(); }}>
          <Button onClick={(e) => { e.stopPropagation(); handleDeletePnld(book); }} type="delete" />
        </S.PNLDButtons>
      )}
      <S.PNLDOurWorksCardTitle>{book.title}</S.PNLDOurWorksCardTitle>
      <S.PNLDOurWorksCardCover objectFit="cover" sizes="100%" src={book.image} width={340} height={200} />
      <S.PNLDOurWorksCardInfos>
        {book?.authors?.length && <S.PNLDOurWorksCardLabel><span>Autoria:</span> {book?.authors[0]?.userFullName}</S.PNLDOurWorksCardLabel>}
        {book?.illustrators?.length && <S.PNLDOurWorksCardLabel><span>Ilustrações:</span> {book?.illustrators[0]?.userFullName}</S.PNLDOurWorksCardLabel>}
      </S.PNLDOurWorksCardInfos>
      <S.PNLDOurWorksCardCode color={color}>
        <span>{book?.pnldCode || 'PNLD CODE NÃO CADASTRADO'}</span>
        <S.PNLDOurWorksCardCodeCopy color={color}>
          <S.PNLDOurWorksCardCodeCopyLabel color={color}>COPIAR</S.PNLDOurWorksCardCodeCopyLabel>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 7H9C7.89543 7 7 7.89543 7 9V19C7 20.1046 7.89543 21 9 21H19C20.1046 21 21 20.1046 21 19V9C21 7.89543 20.1046 7 19 7Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 15C1.9 15 1 14.1 1 13V3C1 1.9 1.9 1 3 1H13C14.1 1 15 1.9 15 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </S.PNLDOurWorksCardCodeCopy>
      </S.PNLDOurWorksCardCode>
    </S.PNLDOuWorksCard>
  )
}