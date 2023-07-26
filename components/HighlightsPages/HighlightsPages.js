import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Container from '../Container';
import * as S from './HighlightsPages.styles';
import Link from 'next/link';
import randomColor from '../../utils/randomColor';

export default function HighlightsPages(props) {
  const router = useRouter();
  const [highlightsByPage, setHighlightsByPage] = useState([]);

  useEffect(() => {
    if (props.highlightsByPageStringfied) { setHighlightsByPage(JSON.parse(props.highlightsByPageStringfied)) }
  }, [props.highlightsByPageStringfied])

  const color = randomColor();
  
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
              <S.HighlightsPagesCard color={color}>
                <h2>{highlightName}</h2>
              </S.HighlightsPagesCard>
            </Link>
          ))}
        </S.List>
      </Container>
    </S.HighlightsPages>
  )
}