import styled from 'styled-components';

export const AboutUsOurHistory = styled.div`
  margin-bottom: 0px;

  .container{
    align-items: end;

    @media screen{
      @media (min-width: 1024px){
        margin-bottom: 90px;
        padding: 0;
      }
    }
  }
`;

export const OurHistoryWrapper = styled.div`
  background: #333333;
  /* margin: 0 auto; */
  padding: 50px;
  margin-top: -180px;
  position: relative;
  width: 100%;
  z-index: 10;

  @media screen{
    @media (min-width: 1024px){

      width: 84%;
    }
  }
  div{
    div{
      left: -40px;
    }
  }
  div:last-child{
    div{
      left: unset;
      right: 0;
      top: 5px;

      @media screen{
        @media (min-width: 1024px){
          right: -150px;
          top: -220px;
        }
      }
    }
  }
`

export const OurHistoryTitle = styled.h2`
  font-family: Amatic SC;
  font-weight: bold;
  letter-spacing: 2.4px;
  color: ${({ theme: { color: { brand } } }) => brand};
  margin: 0;
  margin-bottom: 20px;
  font-size: 35px;
  width: 100%;

  @media screen{
    @media (min-width: 1024px){
      width: 80%;
      font-size: 75px;
    }
  }
`

export const OurHistoryText = styled.p`
  font-family: Montserrat;
  font-weight: 500;
  color: #FFFFFF;
  width: 100%;
  font-size: 14px;
  line-height: 26px;
  margin: 0;

  @media screen{
    @media (min-width: 1024px){
      width: 80%;
      font-size: ${({ theme: { fontSize: { fontSizeSM }}}) => fontSizeSM };
      line-height: 30px;

    }
  }

`
export const AboutUsOurHistoryImage = styled.img`
  position: initial;
  width: 100%;

  @media screen{
    @media (min-width: 1024px){
      max-width: 325px;
      max-height: 475px;
      position: absolute;
      right: -160px;
      bottom: -90px;
    }
  }
`