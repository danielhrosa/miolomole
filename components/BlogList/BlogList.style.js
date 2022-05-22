import styled from 'styled-components';
import Button from '../../Elements/Button';

export const BlogList = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;  
  display: flex;
  justify-content: left;
  flex-flow: wrap;
  flex-direction: column;
  align-items: left;
  >button{
    max-width: 300px;
    margin: 0 auto;
  }
`

export const CreateNewButton = styled(Button)`
`