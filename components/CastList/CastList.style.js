import styled from 'styled-components';
import Container from '../Container';

export const CastContainer = styled(Container)`

`
export const CastTitle = styled.h1`
  padding-top: 40px;
  color: #00A79D;
`
export const CardRoles = styled.div`
  display: flex;
  >div{
    background-color: #99999950;
    padding: 3px;
    margin: 0 5px;
    font-size: 10px;
    font-weight: bold;
  }
`
export const CastList = styled.div`
  padding-top: 20px;
  display: flex;
  flex-flow: wrap;
  gap: 0 20px;
  justify-content: center;
  
`;

export const SliderCard = styled.div`
  /* width: 170px; */
  height: 100%;
  border-radius: 8px;
  position: relative;
  flex: 1 1 400px;
  max-width: 386.67px;
  /* padding: 0 200px; */
  @media screen{
    @media (min-width: 1024px){
      height: 100%;
      padding: 0px;
    }
    @media (min-width: 1200px){
      flex: 1 1 360px;

    }
  }

`
export const CardTitle = styled.div`
  font-family: Montserrat;
  font-weight: 500;
  line-height: 35px;
  color: #00A79D;
  margin-bottom: 15px;
  font-size: ${({ theme: { fontSize: { fontSizeXS }}}) => fontSizeXS };
  margin-left: 64px;
  @media screen{
    @media (min-width: 1024px){
      font-size: ${({ theme: { fontSize: { fontSizeSMM }}}) => fontSizeSMM };
      margin-left: 100px;
    }
  }

`
export const SliderCardContainer = styled.div`
  background-color: #FFFFFF;
  height: 220px;
  margin-top: 40px;
  margin-bottom: 40px;
  /* width: 90vw; */
  padding: 14px 20px;
  border-radius: 11px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);
  &:focus{
    outline: none;
    border: none;
  }

  @media screen{
    @media (min-width: 1024px){
      /* height: 261px; */
      margin-top: 15px;
      width: 100%;
    }
    @media (min-width: 1200px){
      /* width: 475px; */
    }
  }
`
export const CardName = styled.div`
  text-align: left;
  grid-area: cardName;
  width: max-content;
  >b{
    font-family: 'Inter';
    font-weight: 500;
    font-size: 11px;
    line-height: 1.4 !important;
    line-height: 22px;
    color: #7DBBB8;
  }
  >p{
    font-family: 'Open Sans';
    font-size: 10px;
    line-height: 1.4 !important;
    line-height: 20px;
    color: #7C7C7C;
  }

`
export const CardInfo = styled.div`
  display: flex;
`

export const CardDescription = styled.div`
  font-family: Montserrat;
  font-size: ${({ theme: { fontSize: { fontSizeXXS }}}) => fontSizeXXS };
  line-height: 19px;
  position: relative;
  margin-top: 25px;
  height: 98px;
  width: 100%;
  color: #071825;
  /* display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical; */
  overflow-Y: scroll;
  /* text-overflow: ellipsis; */
  
  @media screen{
    @media (min-width: 1024px){
      font-size: ${({ theme: { fontSize: { fontSizeXXS }}}) => fontSizeXXS };
      /* height: 150px; */
      /* width: 350px; */
    }
    @media (min-width: 1205px){
      /* width: 400px; */
    }
  }
`

export const CardPicture = styled.div`
  background-color: ${({ theme: { color: { whiteDark }}}) => whiteDark };;
  background-image: url(${({ src }) => src });
  position: absolute;
  width: 56px;
  height: 56px;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-size: cover;
  top: 20px;
  left: 6px;
  margin-left: 8px;

  @media (min-width: 1024px){
    top: -10px;
    left: -15px;
    width: 75px;
    height: 75px;
    margin-left: 35px;
  }
`
export const CardRole = styled.div`

`