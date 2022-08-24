import styled from 'styled-components';

export const ContactSection = styled.div`
  display: flex;
  .container{
    flex-direction: column;
    @media screen{
      @media (min-width: 1024px){
        flex-direction: row;
      }
    }
  }
`;
export const ContactInfoWrapper = styled.div`
  display: flex;

  flex-direction: column;
  width: 100%;
  margin: 0 auto;

  @media screen{
    @media (min-width: 1024px){
      width: 45%;
      margin: unset;
      margin-right: 50px;
    }
  }
`
export const TitleContact = styled.div`
  font-family: Roboto;
  font-weight: bold;
  font-size: 36px;
  color: #212121;
  margin-bottom: 20px;
`

export const TextContact = styled.p`
  font-family: 'Open Sans';
  font-size: 14px;
  line-height: 2;
  color: #212121;
  margin-bottom: 20px;
  width: 100%;
`

export const TagContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-bottom: 20px;

`
export const Logo = styled.div`
  width: 91px;
  height: 91px;
  background-image: url(${({ img }) => img });
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 20px;
`
export const ContactAdressWrapper = styled.div`
  width: 100%;
`
export const ContactTitle = styled.div`
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: 2.4px;
  color: #BBBBBB;
  margin-bottom: 5px;
  @media screen{
    @media (min-width: 1024px){
      font-size: 14px;
      margin-bottom: 10px;

    }
  }

`
export const ContactAdress = styled.p`
  font-family: 'Open Sans';
  line-height: 1.6;
  color: #212121;
  font-size: 13px;
  width: 100%;

  @media screen{
    @media (min-width: 1024px){
      font-size: 14px;

    }
  }

`
export const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
  @media screen{
    @media (min-width: 1024px){
      width: 45%;

    }
  }
  textarea{
    margin-bottom: 20px;
    background: #F6F6F6;
    border: 1px solid #DEDEDE;
    margin-top: 0px;
    font-family: Open Sans;
    font-weight: 500;
    font-size: 14px;
  }

  >input{
    margin-bottom: 20px;
    border-bottom: none;
    font-family: Montserrat;
    font-weight: 500;
    padding: 15px 20px;
    font-size: 16px;
    color: #212121;
    background: #F6F6F6;
    border: 1px solid #DEDEDE;
    box-sizing: border-box;
    border-radius: 5px;

    &::placeholder {
      font-family: Open Sans;
      font-weight: 500;
      font-size: 14px;
      /* color: #FFFCF8; */
    }
  }
  
  button{
    padding: 5px;
    text-transform: capitalize;
    font-family: Montserrat;
    font-weight: bold;
    font-size: ${({ theme: { fontSize: { fontSizeS }}}) => fontSizeS };
    letter-spacing: 2.4px;
    color: #FFFFFF;
    width: 150px;
    background: #FFCB05;
    border-radius: 100px;
    border: none;
    color: white;
    box-shadow: 3px 3px 2px rgb(115 137 169 / 20%);
    transition: background 0.3s; 

    :hover{
      background: ${({ theme: { color: { brand } } }) => brand};;
    }
  }
`