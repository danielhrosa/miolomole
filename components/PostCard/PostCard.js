import * as S from './PostCard.style'
import { useRouter } from 'next/router';
import Clock from '../../images/js/Clock';
import View from '../../images/js/View';
import Button from '../../Elements/Button';
import { useAppProvider } from '../../store/appProvider';
import axios from 'axios';
import { useState } from 'react';

export default function PostCard({ item }){
  const { isLoggedIn } = useAppProvider();
  const router = useRouter();
  const [blog, setBlog] = useState(item);

  const handleDeletePost = async (item) => {
    console.log('Deletando blog: ', item);
    const { _id } = item;
    // setBlog((oldPost) => [...oldPost].filter((blog) => blog._id !== _id))
    const confirm = window.confirm(`Tem certeza que deseja deletar o blog ${item.title}?`)
    if(!confirm) { return false };
    await axios.delete(`/api/publication`, { data: { _id: item._id } })
    window.location.reload();
  }
  return(
    <S.PostCard key={item.id} onClick={() => router.push(`/blog/${item.name}`)}>
      <S.PostCardTitle>{item.title}</S.PostCardTitle>
      { isLoggedIn && <S.DeleteButton type="delete" onClick={(e) => { e.stopPropagation(); handleDeletePost(blog) }}  /> }
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
