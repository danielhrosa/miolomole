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

export const BlogBanner = styled.div`
  font-family: Montserrat;
  margin: 40px auto;
  background-color: #00A79D;
  height: 60px;
  width: 100%;
  max-width: 1024px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
`