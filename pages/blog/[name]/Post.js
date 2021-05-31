import dynamic from 'next/dynamic';
// import LatestArticles from '../../../components/LatestArticles';
import styled from 'styled-components';

const BlogEditor = dynamic(
  () => import('../../../components/BlogEditor'),
  { ssr: false }
);

export default function Post({ article }){
  
 return(
    <StyledBlogPage>
      <BlogEditor article={JSON.parse(article)}/>
      {/* { isLoggedIn && <LatestArticles items={t.BLOG_ARTICLES}/> } */}
    </StyledBlogPage>
  )
}

const StyledBlogPage = styled.div`
  margin-top: 73px;
`