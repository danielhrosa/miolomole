import * as S from './PNLDOurWorksBook.styles';
import Container from '../Container/Container';
import PNLDBanner from '../PNLDBanner/PNLDBanner';
import Image from 'next/image';
import Editable from '../Editable/Editable';
import BookRelated from '../BookRelated/BookRelated';
import Button from '../../Elements/Button/Button';

export default function PNLDOurWorksBook({ pnld, book, ...props }) {
  const bannerProps = {
    pnld,
    color: pnld?.color,
    isLoggedIn: false,
    props
  }

  const downloadFile = (link) => {
    // TODO: aqui que vai o loading
    fetch(link)
      .then((res) => res.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "Catalogo Miolo Mole";
        link.target = "__blank";
        link.click();
      })
      .catch(console.error);
  }

  return (
    <S.PNLDOurWorksBook>
      <Container>
        <PNLDBanner {...bannerProps} />
        <S.PNLDOurWorksBookTitle>{book.title}</S.PNLDOurWorksBookTitle>
        <S.PNLDOurWorksBookCode color={pnld?.color}>{book?.pnldCode || 'PNLD CODE NÃO CADASTRADO'}</S.PNLDOurWorksBookCode>
        <S.PNLDOurWorksBookSection>
          <S.PNLDOurWorksBookCover src={book.image} />
          <S.PNLDOurWorksBookSectionButtons>
            <Button variation="file" label="Visualizar obra" onClick={() => downloadFile(book.seeWork)} />
            <Button variation="file" label="Manual do professor" onClick={() => downloadFile(book.teacherManual)} />
            <Button variation="file" label="Vídeo" onClick={() => downloadFile(book.video)} />
          </S.PNLDOurWorksBookSectionButtons>
        </S.PNLDOurWorksBookSection>
        <S.PNLDOurWorksBookDescription>{book.synopsis}</S.PNLDOurWorksBookDescription>
        <Editable {...props} textKey="PNLDOurWorksBookUsersTitle"><S.PNLDOurWorksBookUsersTitle /></Editable>
        <S.PNLDOurWorksBookUsers>
          <S.PNLDOurWorksBookUsersList>
            {book.authors.map((author) => (
              <S.PNLDOurWorksBookUsersUser key={author._id}>
                <S.PNLDOurWorksBookUsersUserAvatar src={author.avatar} />
                <S.PNLDOurWorksBookUsersUserName>{author.userFullName}</S.PNLDOurWorksBookUsersUserName>
                <S.PNLDOurWorksBookUsersDescription>{author.description}</S.PNLDOurWorksBookUsersDescription>
              </S.PNLDOurWorksBookUsersUser>
            ))}
          </S.PNLDOurWorksBookUsersList>
        </S.PNLDOurWorksBookUsers>
        <BookRelated textKey="PNLDOtherWorks" {...props} />
      </Container>
    </S.PNLDOurWorksBook>
  )
}
