import Container from '../Container'
import * as S from './BlogList.style'
import pt from "../../i18n/pt";
import PostCard from '../PostCard'

export default function BlogList(props) {
  const t = pt
  const items = t.BLOG_ARTICLES
  const posts = props?.posts ? JSON.parse(props.posts) : []
  return (
    <Container>
      <S.BlogList>
        {posts?.length && posts.map((post) => <PostCard key={`${post}-post`} item={post} />)}
      </S.BlogList>
    </Container>
  )
}