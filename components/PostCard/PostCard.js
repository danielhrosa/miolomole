import * as S from './PostCard.style'
import { useRouter } from 'next/router';
import Clock from '../../images/js/Clock';
import View from '../../images/js/View';

export default function PostCard({ item }){
  const router = useRouter();
  return(
    <S.PostCard key={item.id} onClick={() => router.push(`/blog/${item.name}`)}>
      <S.PostCardImage key={item.image} src={item.image} />
      <S.PostCardInfo color={item.color || 'green'}>
        <S.PostCardTitle>{item.title}</S.PostCardTitle>
        <S.PostCardText>{item.shortDescription || ''}</S.PostCardText>
        <S.Footer>
          <S.FooterItemLabel><Clock />{item.createdAt}</S.FooterItemLabel>
          <S.FooterItemLabel><View />{item.views || 0}</S.FooterItemLabel>
        </S.Footer>
      </S.PostCardInfo>
    </S.PostCard>
  )
}
