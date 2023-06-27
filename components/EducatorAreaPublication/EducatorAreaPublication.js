import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import 'suneditor/dist/css/suneditor.min.css';
import Button from '../../Elements/Button';
import { useAppProvider } from '../../store/appProvider';
import Container from '../Container';
import Comments from '../Comments/Comments';
import * as S from './EducatorAreaPublication.styles';
import { useEffect, useState } from "react";

const SunEditor = dynamic(() => import("suneditor-react"), { ssr: false });

export default function EducatorAreaPublication({ publication }) {
  const router = useRouter();
  const { isLoggedIn } = useAppProvider();
  const [comments, setComments] = useState([]);
  useEffect(() => { setComments(publication?.comments); }, [publication]);

  return (
    <S.EducatorAreaPublication>
      <Container>
        <S.EducatorAreaPublicationHeader>
          <S.EducatorAreaPublicationBackButton onClick={() => router.push('/educador')} />
          {isLoggedIn && <Button type="edit" onClick={() => router.push(`/educador/${publication.name}/editar`)} />}
        </S.EducatorAreaPublicationHeader>
        <SunEditor
          readOnly
          hideToolbar
          height="100%"
          setContents={publication?.content}
          setDefaultStyle={'font-family: Arial'}
        />
        <Comments comments={comments} publicationId={publication._id} setComments={setComments} />
      </Container>
    </S.EducatorAreaPublication>
  )
}