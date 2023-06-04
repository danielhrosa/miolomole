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
  background-image: url(${({ img }) => img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 20px;
`
export const ContactAdressWrapper = styled.div`
  width: 100%;
`;

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

`;

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

`;

export const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 14px;
  @media screen{
    @media (min-width: 1024px){
      width: 45%;
    }
  }
  font-family: Open Sans;
  font-weight: 500;
  font-size: 14px;
`;

export const TextContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const TextContactInfo = styled.p`
  margin: 0;
  width: unset;
  color: ${({ theme: { color: { brand } } }) => brand};

  :hover {
    text-decoration: underline;
  }
`;