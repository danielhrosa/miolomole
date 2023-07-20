import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Button from '../../Elements/Button';
import Container from '../Container';
import * as S from './Highlights.styles';

export default function Highlights(props) {
  const router = useRouter();
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    if (props.highlights) { setHighlights(JSON.parse(props.highlights)) }
  }, [props.highlights])

  const handleDelete = async (_id, title) => {
    const confirm = window.confirm(`Tem certeza que deseja deletar o destaque com o titulo ${title}?`)
    if (!confirm) { return false };
    setHighlights((oldFields) => {
      const newFields = [...oldFields];
      return newFields.filter((field) => field._id !== _id)
    })
    await axios.delete('/api/destaques', { data: { _id } })
  }

  return (
    <S.Highlights>
      <S.Header>
        <S.BackButton onClick={() => router.push('/destaques')} />
        <S.Title>Destaques</S.Title>
        <S.AddUserButton onClick={() => router.push('/destaques/novo')}><span>+</span></S.AddUserButton>
      </S.Header>
      <S.List>
        {!!highlights?.length && highlights.map((highlight) => (
          <S.Jumbotron
            img={highlight?.image}
            key={highlight?.image + "Jumbotron"}
            onClick={() => router.push(`/destaques/${highlight.page}/${highlight._id}`)}
          >
            <Button className="delete" type="delete" onClick={(e) => { e.stopPropagation(); handleDelete(highlight._id, highlight.title) }} />
            <Container>
              <S.Description>{highlight?.description}</S.Description>
              <S.JumboTitle>{highlight?.title}</S.JumboTitle>
            </Container>
          </S.Jumbotron>
        ))}
      </S.List>
    </S.Highlights>
  )
}