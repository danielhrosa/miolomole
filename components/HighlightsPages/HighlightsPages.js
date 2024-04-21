import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Container from '../Container';
import * as S from './HighlightsPages.styles';

export default function HighlightsPages(props) {
  const router = useRouter();
  const [highlightsByPage, setHighlightsByPage] = useState([]);

  useEffect(() => {
    if (props.highlightsByPageStringField) { setHighlightsByPage(JSON.parse(props.highlightsByPageStringField)) }
  }, [props.highlightsByPageStringField])

  return (
    <S.HighlightsPages>
      <Container>
        <S.Header>
          <S.Title>Destaques</S.Title>
          <S.AddUserButton onClick={() => router.push('/destaques/novo')}><span>+</span></S.AddUserButton>
          <h1>Páginas</h1>
        </S.Header>
        <S.List>
          {!!Object.values(highlightsByPage)?.length && Object.entries(highlightsByPage).map(([highlightName]) => (
            <Link href={`/destaques/${highlightName}`}>
              <S.HighlightsPagesCard color="#00A79D">
                <h2>{highlightName}</h2>
              </S.HighlightsPagesCard>
            </Link>
          ))}
        </S.List>
      </Container>
    </S.HighlightsPages>
  )
}