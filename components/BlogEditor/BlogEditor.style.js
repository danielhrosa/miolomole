import styled from 'styled-components';
import Container from '../Container'

export const BlogEditor = styled(Container)`

  .rdw-editor-wrapper{
    margin-top: 32px;
    margin-bottom: 16px;
  }
  .rdw-editor-toolbar{
    padding: 6px 6px 0;
    border-radius: 8px 8px 0 0;
    background: #00A79D;
    margin-bottom: 0px;
  }
  .rdw-option-wrapper {
    padding: 12px;
    border-radius: 6px;
    margin: 2px 4px;

  }
  .rdw-editor-main{
    background: ${({isLoggedIn}) => isLoggedIn ? '#f2f2f2' : 'white'};
    border-radius: 0 0 8px 8px;
  }
  .public-DraftStyleDefault-block {
    margin: 1em 0;
  }
  .rdw-dropdown-wrapper {
    height: 26px;
    border-radius: 6px;

  }
  .rdw-dropdown-optionwrapper{
    border-radius: 6px;
    padding: 4px;
    -ms-overflow-style: none; 
    scrollbar-width: none; 
    overflow: auto;
    box-shadow: 3px 3px 2px rgb(115 137 169 / 20%);
    background: #f2f2f2;
  }
  .rdw-fontfamily-optionwrapper {
    width: max-content;
  }
  .rdw-editor-main{
    padding: 1em;
  }
  .Inputstyle__ActionButtonWrapper-sc-1bzrsfb-4{
    padding: 0px;
    @media (min-width: 1024px){
      width: 192px;
    }
  }
`

