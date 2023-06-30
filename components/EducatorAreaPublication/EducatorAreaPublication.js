import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import 'suneditor/dist/css/suneditor.min.css';
import Button from '../../Elements/Button';
import { useAppProvider } from '../../store/appProvider';
import Comments from '../Comments/Comments';
import Container from '../Container';
import * as S from './EducatorAreaPublication.styles';

const SunEditor = dynamic(() => import("suneditor-react"), { ssr: false });

export default function EducatorAreaPublication({ publication }) {
  const router = useRouter();
  const { isLoggedIn } = useAppProvider();
  const [comments, setComments] = useState([]);
  useEffect(() => { setComments(publication?.comments); }, [publication]);

  const onDelete = (comment) => {
    const confirm = window.confirm('Tem certeza que deseja deletar este comentário?')
    if (!confirm) { return false };
    const oldComments = comments;
    setComments(comments.filter(({ _id }) => _id !== comment._id));
    axios.delete('/api/comment', { data: { _id: comment._id, publicationId: publication._id } })
      .then(() => { toast.success("Sucesso") })
      .catch(() => {
        toast.error("Erro ao deletar comentário")
        setComments(oldComments);
      })
  };

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
        <Button type="delete" onClick={() => onDelete({ _id: "649c7129bb62b08618637693" })} />
        <Comments comments={comments} publicationId={publication._id} onDelete={onDelete} setComments={setComments} />
      </Container>
    </S.EducatorAreaPublication>
  )
}