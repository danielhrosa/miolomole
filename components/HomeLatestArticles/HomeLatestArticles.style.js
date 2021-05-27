import styled from 'styled-components';
import mailbox from '../../images/mailbox.png'
import dots from '../../images/dots.png'


export const HomeLatestArticles = styled.div`
  overflow-x: hidden;
  .container{
    align-items: center;
    margin-top: 0px;
    @media screen{
      @media (min-width: 600px){
        margin-top: 140px;

      }
    }
  }
`

export const DotsBackGround = styled.div`
  background-image: url(${dots});
  border-radius: 50px;
  width: 250px;
  height: 200px;
  position: absolute;
  right: 0px;
  top: 5px;
  overflow: hidden;
  display: none;
  @media screen{
    @media (min-width: 600px){
      display: unset;

    }
  }
`

export const LastestArticlesImage = styled.div`
  background-image: url(${mailbox});
  width: 440px;
  height: 370px;
  position: absolute;
  right: -208px;
  top: -150px;
  display: none;
  @media screen{
    @media (min-width: 600px){
      display: unset;
    }
  }
`

export const HomeLatestArticlesCard = styled.div`
  height: 200px;
  background: #FCBC14;
  border-radius: 50px;
  position: relative;
  width: 100%;
  padding: 20px 30px;
  @media screen{
    @media (min-width: 600px){
      width: 80%;
      padding: 20px 50px;
    }
  }

  >h1{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    color: #FFFFFF;
    font-size: 19px;
    margin-bottom: 27px;
    @media screen{
      @media (min-width: 600px){
        font-size: 24px;
        margin-bottom: 18px;
        width: 90%;

        
      }
      @media (min-width: 1024px){
        font-size: 30px;
        margin-bottom: 34px;
        width: 100%;

      }
    }
  }
`
export const LastestRegister = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  @media screen{
    @media (min-width: 600px){
      width: 70%;

    }
  }
  >input{
    border-bottom: none;
    background: rgba(255, 255, 255, 0.28);
    border-top-left-radius: 29.5px;
    border-bottom-left-radius: 29.5px;
    font-family: Montserrat;
    font-weight: 500;
    padding: 15.5px 20px;
    font-size: ${({ theme: { fontSize: { fontSizeXS }}}) => fontSizeXS };
    color: #FFFCF8;

    &::placeholder {
      font-family: Montserrat;
      font-weight: 500;
      font-size: ${({ theme: { fontSize: { fontSizeXS }}}) => fontSizeXS };
      color: #FFFCF8;
    }
  }
  
`