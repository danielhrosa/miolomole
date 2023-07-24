import * as S from './PNLDOurWorksBook.styles';
import Container from '../Container/Container';
import PNLDBanner from '../PNLDBanner/PNLDBanner';

export default function PNLDOurWorksBook({ pnld, book, books, ...props }) {
  const bannerProps = {
    pnld,
    color: pnld?.color,
    isLoggedIn: false,
    props
  }

  return (
    <S.PNLDOurWorksBook>
      <Container>
        <PNLDBanner {...bannerProps} />
        <S.PNLDOurWorksBookTitle>{book.title}</S.PNLDOurWorksBookTitle>
        <S.PNLDOurWorksBookCode color={pnld?.color}>{book?.pnldCode || 'PNLD CODE NÃO CADASTRADO'}</S.PNLDOurWorksBookCode>
      </Container>
    </S.PNLDOurWorksBook>
  )
}
