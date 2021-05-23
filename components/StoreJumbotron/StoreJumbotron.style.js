import styled from 'styled-components';
import StoreJumbotron from '../../images/jumbotronLoja.jpg'

export const StoreJumbotronContainer = styled.div`
  width: 100vw;
  height: 400px;
  margin-top: 70px;

  @media screen{
    @media (min-width: 1024px){
      margin-top: 75px;
    }
  }
  /* .container{
    align-items: flex-start;
    padding: 0 40px;
  } */
  >div{
    >div{
      right: 20px;
      
    }
  }
`
export const StoreJumbotronImage = styled.img`
  width: 100%;
  height: max-content;
  object-fit: cover;
  z-index: -8;
`

export const JumbotronWraper = styled.div`
  width: 90%;
  height: 70%;
  position: absolute;
  top: 90px;
  z-index: 10;


  .inputSelect__control{
    background-color: transparent;
  }
  .inputSelect__placeholder{
    color: ${({ theme: { color: { white }}}) => white };
    font-family: Lato;
    font-weight: 500;
    font-size: ${({ theme: { fontSize: { fontSizeSM }}}) => fontSizeSM };
    line-height: 1.4;
    color: #FFFFFF;
  }
  .css-b8ldur-Input {
    color: white;
    font-weight: bold;
  }
  .css-1uccc91-singleValue{
    color: white;
    font-weight: bold;
  }
  .primary{
    width: 150px;
    border: none;
    border-radius: 12px;
    text-transform: inherit;
    font-family: 'Open Sans';
    font-weight: bold;
    font-size: ${({ theme: { fontSize: { fontSizeSM }}}) => fontSizeSM };
    line-height: 1.3;
    color: #FFFFFF;
  }
`
export const StoreJumbotronTitle = styled.h1`
  font-family: Amatic SC;
  font-style: normal;
  font-weight: 500;
  font-size: 80px;
  /* identical to box height */
  margin-bottom: 0px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 2.4px;
  color: #FFFFFF;
  font-size: 50px;
  line-height: 1.5;
  @media screen{
    @media (min-width: 1024px){
      font-size: 80px;
      margin-block-start: 33px;

    }
  }
`
export const StoreJumbotronSubTitle = styled.h4`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: #FFFFFF;
  margin-bottom: 0px;
  font-size: 15px;
  line-height: 1.6;
  width: 90%;
  @media screen{
    @media (min-width: 1024px){
      font-size: ${({ theme: { fontSize: { fontSizeSMM }}}) => fontSizeSMM };
      width: 480px;
    }
  }
`