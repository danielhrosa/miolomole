import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Button from '../../Elements/Button/Button';
import Field from '../../Elements/Field';
import BookIcon from '../../images/js/Book';
import ManualIcon from '../../images/js/ManualIcon';
import VideoIcon from '../../images/js/VideoIcon';
import BookRelated from '../BookRelated/BookRelated';
import Container from '../Container/Container';
import Editable from '../Editable/Editable';
import PNLDBanner from '../PNLDBanner/PNLDBanner';
import * as S from './PNLDOurWorksBook.styles';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function PNLDOurWorksBook({ pnld, book, isLoggedIn, ...props }) {
  const router = useRouter();
  const [fields, setFields] = useState({
    seeWork: { value: '' },
    teacherManual: { value: '' }
  });

  const bannerProps = { pnld, color: pnld?.color, isLoggedIn: false, props };

  useEffect(() => {
    book && setFields((oldFields) => {
      const newFields = { ...oldFields };
      newFields.seeWork.value = book?.seeWork;
      newFields.teacherManual.value = book?.teacherManual;
      return newFields;
    })
  }, [book])

  const saveLinks = async () => {
    const variables = { seeWork: fields.seeWork?.value, teacherManual: fields.teacherManual?.value };
    const res = await axios.put('/api/livros', { ...variables, name: book?.name, pnld })
    if (res.status === 200) {
      toast.success('Links salvos com sucesso!')
    } else {
      toast.error("Erro ao tentar salvar os Links. Por favor chame o Pedro")
    }
  }

  return (
    <S.PNLDOurWorksBook>
      <Container>
        <PNLDBanner {...bannerProps} />
        <S.PNLDOurWorksBookTitle>{book.title}</S.PNLDOurWorksBookTitle>
        <S.PNLDOurWorksBookCode color={pnld?.color}>{book?.pnldCode || 'PNLD CODE NÃO CADASTRADO'}</S.PNLDOurWorksBookCode>
        {isLoggedIn && <Button style={{ marginTop: '32px' }} color={pnld?.color} label="Editar obra" variation="primary" onClick={() => router.push(`/pnld/${pnld.name}/${book.name}/editar`)} />}
        <S.PNLDOurWorksBookSection>
          <S.PNLDOurWorksBookCover src={book.image} />
          <S.PNLDOurWorksBookSectionButtons>
            <S.ButtonStyle>
              <a href={fields.seeWork?.value} target='_blank'>
                <Button icon={BookIcon} variation="file" label="Visualizar obra" />
              </a>
              {isLoggedIn && <Field {...fields.seeWork} type="text" name="seeWork" label="Link visualizar obra" setFields={setFields} />}
            </S.ButtonStyle>
            <S.ButtonStyle>
              <a href={fields.teacherManual?.value} target='_blank'>
                <Button icon={ManualIcon} variation="file" label="Manual do professor" />
              </a>
              {isLoggedIn && <Field {...fields.teacherManual} type="text" name="teacherManual" label="Link manual do professor" setFields={setFields} />}
            </S.ButtonStyle>
            <Button icon={VideoIcon} variation="file" label="Vídeo" onClick={() => router.push(`${router.asPath}/videos`)} />
          </S.PNLDOurWorksBookSectionButtons>
          {isLoggedIn && <Button variation="primary" color={pnld?.color} label="Salvar Links" onClick={saveLinks} />}
        </S.PNLDOurWorksBookSection>
        <S.PNLDOurWorksBookInfosSection>
          <span>Páginas: </span>{book.pages}<br />
          <span>Indicação etária:</span> {book.ageIndication}<br />
          <span>Gênero: </span>{book.genre}<br />
          <span>Temas: </span>{book.themes}<br />
        </S.PNLDOurWorksBookInfosSection>
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
        <BookRelated pnld={pnld.name} textKey="PNLDOtherWorks" {...props} />
      </Container>
    </S.PNLDOurWorksBook>
  )
}
