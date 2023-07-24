import * as S from './PNLDOurWorksBook.styles';
import Container from '../Container/Container';
import PNLDBanner from '../PNLDBanner/PNLDBanner';
import Image from 'next/image';

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
        <S.PNLDOurWorksBookSection>
          <S.PNLDOurWorksBookCover>
            <Image src={book.image} objectFit='contain' alt="Capa do livro" height={500} width="auto" />
          </S.PNLDOurWorksBookCover>
        </S.PNLDOurWorksBookSection>
      </Container>
    </S.PNLDOurWorksBook>
  )
}
