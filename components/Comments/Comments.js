import * as S from './Comments.styles';
import Comment from '../Comment/Comment';
import Field from '../../Elements/Field/Field';
import Button from '../../Elements/Button/Button';
import { useState } from 'react';
import { commentFieldsFunction, commentFieldsState } from './Comments.constant';
import axios from 'axios';
import Lottie from 'react-lottie';
import toast from 'react-hot-toast';
import animationData from '../../lotties/empty-comments.json';

export default function Comments({ comments = [], publicationId, setComments }) {
  const [fields, setFields] = useState(commentFieldsState);
  const [loading, setLoading] = useState();
  const commentFields = commentFieldsFunction({ fields })

  const defaultOptions = {
    animationData,
    loop: true,
    autoplay: true,
    rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
  };

  const onComment = async () => {
    setLoading(true);
    const commentProps = {
      content: commentFields.content?.value,
      userFullName: commentFields.userFullName?.value,
      phone: commentFields.phone?.value?.slice(-1) == "_" ? commentFields.phone?.value.slice(0, -1) : commentFields.phone?.value,
      email: commentFields.email?.value,
      publicationId: publicationId
    };
    if (!commentProps?.userFullName) {
      setLoading(false);
      toast.error('Campo Nome obrigatório')
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(commentProps.email)) {
      setLoading(false);
      toast.error('Formato de email inválido ou campo vazio')
      return;
    }
    if (!commentProps.content) {
      setLoading(false);
      toast.error('Por favor escreva algo no campo conteúdo')
      return;
    }
    const oldComments = comments;
    setComments((oldComments) => [...oldComments, commentProps])
    const res = await axios.post('/api/comment', { ...commentProps })
    if (res.status === 200) {
      setLoading(false);
      toast.success('Comentário realizado com sucesso!')
    }
    else {
      setComments(oldComments);
      setLoading(false);
      console.log(res)
    }
  };

  return (
    <S.Comments>
      <S.CommentInput>
        <Field labelvariation="simple" {...commentFields?.userFullName} setFields={setFields} />
        <Field labelvariation="simple" {...commentFields?.phone} setFields={setFields} />
        <Field labelvariation="simple" {...commentFields?.email} setFields={setFields} />
        <Field labelvariation="simple" {...commentFields?.content} setFields={setFields} />
        <Button label="Comentar" variation="primary" onClick={onComment} />
      </S.CommentInput>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <S.CommentsList>
        {comments?.length
          ? comments.map((comment) => <Comment {...comment} />)
          : (
            <S.CommentsListEmpty>
              <Lottie
                options={defaultOptions}
                height={300}
                width={300}
              />
              <S.CommentsTitle>Seja o primeiro a comentar!</S.CommentsTitle>
            </S.CommentsListEmpty>
          )
        }
      </S.CommentsList>
    </S.Comments>
  )
}