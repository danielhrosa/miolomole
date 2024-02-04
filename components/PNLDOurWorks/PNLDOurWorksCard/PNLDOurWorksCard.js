import * as S from './PNLDOurWorksCard.styles';
import Button from '../../../Elements/Button/Button';
import { darken } from 'polished';

export default function PNLDOurWorksCard({ book, color, isLoggedIn, handleRemoveBookPnld, ...props }) {

  return (
    <S.PNLDOuWorksCard {...props}>
      {isLoggedIn && (
        <S.PNLDButtons onClick={(e) => { e.stopPropagation(); }}>
          <Button onClick={(e) => { e.stopPropagation(); handleRemoveBookPnld(book); }} type="delete" />
        </S.PNLDButtons>
      )}
      <S.PNLDOurWorksCardTitle>{book.title}</S.PNLDOurWorksCardTitle>
      <S.PNLDOurWorksCardCoverWrapper>
        <S.PNLDOurWorksCardCover src={book.image} />
      </S.PNLDOurWorksCardCoverWrapper>
      <S.PNLDOurWorksCardInfos>
        {book?.authors?.length && <S.PNLDOurWorksCardLabel><span>Autoria:</span> {book?.authors[0]?.userFullName}</S.PNLDOurWorksCardLabel>}
        {book?.illustrators?.length && <S.PNLDOurWorksCardLabel><span>Ilustrações:</span> {book?.illustrators[0]?.userFullName}</S.PNLDOurWorksCardLabel>}
      </S.PNLDOurWorksCardInfos>
      <S.PNLDOurWorksCardCode color={darken(0.4, color)} onClick={(e) => e.stopPropagation()}>
        <span>Saiba mais</span>
      </S.PNLDOurWorksCardCode>
      <S.PNLDOurWorksCardCode color={color} onClick={(e) => e.stopPropagation()}>
        <span>{book?.pnldCode || 'PNLD CODE NÃO CADASTRADO'}</span>
      </S.PNLDOurWorksCardCode>
    </S.PNLDOuWorksCard>
  )
}