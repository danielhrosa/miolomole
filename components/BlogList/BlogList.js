import Container from '../Container'
import * as S from './BlogList.style'
import pt from "../../i18n/pt";
import PostCard from '../PostCard'
import { useAppProvider } from '../../store/appProvider';

export default function BlogList(props) {
  const { isLoggedIn } = useAppProvider();
  const t = pt
  const items = t.BLOG_ARTICLES
  const posts = props?.posts ? JSON.parse(props.posts) : [] 
  return (
    <Container>
      <S.BlogList>
        { isLoggedIn && <S.CreateNewButton onClick={() => Router.push('/blog/novo')} label="Criar no post" variation="secondary"/> }
        {posts?.length && posts.map((post) => <PostCard key={`${post}-post`} item={post} />)}
      </S.BlogList>
    </Container>
  )
}