import Container from '../Container'
import * as S from './BlogList.style'
import pt from "../../i18n/pt";
import PostCard from '../PostCard'
import { useAppProvider } from '../../store/appProvider';
import { useRouter } from 'next/router';

export default function BlogList(props) {
  const router = useRouter()
  const { isLoggedIn } = useAppProvider();
  const t = pt
  const items = t.BLOG_ARTICLES
  const posts = props?.posts ? JSON.parse(props.posts) : [] 
  return (
    <Container>
      <S.BlogList>
        <S.BlogBanner><h1>miolo_blog</h1></S.BlogBanner>
        {isLoggedIn && <S.CreateNewButton onClick={() => router.push('/blog/novo')} label="Criar no post" variation="secondary"/>}
        {posts?.length && posts.map((post) => <PostCard key={`${post}-post`} item={post} />).reverse()}
      </S.BlogList>
    </Container>
  )
}