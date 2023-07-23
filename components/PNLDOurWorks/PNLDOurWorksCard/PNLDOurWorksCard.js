import Button from '../../../Elements/Button/Button';
import * as S from './PNLDOurWorksCard.styles';

export default function PNLDOurWorksCard({ pnld, isLoggedIn, handleDeletePnld }) {

  return (
    <S.PNLDOuWorksCard>
      {isLoggedIn && (
        <S.PNLDButtons onClick={(e) => { e.stopPropagation(); }}>
          <Button onClick={(e) => { e.stopPropagation(); handleDeletePnld(pnld); }} type="delete" />
        </S.PNLDButtons>
      )}
      <S.PNLDOurWorksCardTitle>{pnld.title}</S.PNLDOurWorksCardTitle>
      <S.PNLDOurWorksCardCover objectFit="cover" sizes="100%" src={pnld.image} width={340} height={200} />
      <S.PNLDOurWorksCardInfos>
        {pnld?.authors?.length && <S.PNLDOurWorksCardLabel><span>Autoria:</span> {pnld?.authors[0]?.userFullName}</S.PNLDOurWorksCardLabel>}
        {pnld?.illustrators?.length && <S.PNLDOurWorksCardLabel><span>Ilustrações:</span> {pnld?.illustrators[0]?.userFullName}</S.PNLDOurWorksCardLabel>}
      </S.PNLDOurWorksCardInfos>
      <S.PNLDOurWorksCardCode color={pnld?.color}>
        <span>{pnld?.pnldCode}</span>
        <S.PNLDOurWorksCardCodeCopy color={pnld?.color}>
          <S.PNLDOurWorksCardCodeCopyLabel color={pnld?.color}>COPIAR</S.PNLDOurWorksCardCodeCopyLabel>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 7H9C7.89543 7 7 7.89543 7 9V19C7 20.1046 7.89543 21 9 21H19C20.1046 21 21 20.1046 21 19V9C21 7.89543 20.1046 7 19 7Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 15C1.9 15 1 14.1 1 13V3C1 1.9 1.9 1 3 1H13C14.1 1 15 1.9 15 3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </S.PNLDOurWorksCardCodeCopy>
      </S.PNLDOurWorksCardCode>
    </S.PNLDOuWorksCard>
  )
}