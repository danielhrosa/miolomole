import styled from 'styled-components';
import Container from '../Container'

export const BlogEditor = styled(Container)`
  .rdw-editor-toolbar{
    padding: 6px;
    border-radius: 8px 8px 0 0;
    background: lightslategrey;
    margin-bottom: 0px;
  }
  .rdw-option-wrapper {
    padding: 12px;
    border-radius: 6px;
  }
  .rdw-editor-main{
    background: ${({isLoggedIn}) => isLoggedIn ? '#f2f2f2' : 'white'};
    border-radius: 0 0 8px 8px;
  }
  .public-DraftStyleDefault-block {
    margin: 1em;
  }

`

