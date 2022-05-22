import * as S from './PostCard.style'
import { useRouter } from 'next/router';
import Clock from '../../images/js/Clock';
import View from '../../images/js/View';
import Button from '../../Elements/Button';
import { useAppProvider } from '../../store/appProvider';

export default function PostCard({ item }){
  const { isLoggedIn } = useAppProvider();
  const router = useRouter();
  return(
    <S.PostCard key={item.id} onClick={() => router.push(`/blog/${item.name}`)}>
      <S.PostCardTitle>{item.title}</S.PostCardTitle>
      { isLoggedIn && <S.DeleteButton type="delete"/> }
      <S.PostCardImage key={item.image} src={item.image} />
      <S.PostCardInfo color={item.color || 'green'}>
        <S.PostCardText>{item.description || ''}</S.PostCardText>
        {/* <S.Footer>
          <S.FooterItemLabel><Clock />{item.updatedAt}</S.FooterItemLabel>
          <S.FooterItemLabel><View />{item.views || 0}</S.FooterItemLabel>
        </S.Footer> */}
      </S.PostCardInfo>
      <S.Line/>
    </S.PostCard>
  )
}
