import styled from 'styled-components';

export const AboutUsImagination = styled.div`
  .container{
    /* flex-direction: row; */
  }
`;

export const ImagitationTitle = styled.h2`
  font-family: Amatic SC;
  font-weight: bold;
  font-size: ${({ theme: { fontSize: { fontSizeUL }}}) => fontSizeUL };
  align-items: center;
  color: #F6D300;
  margin-bottom: 40px;
  width: 100%;
`

export const ImaginationWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 
    'textOne'
    'imgOne'
    'textTwo'
    'imgTwo'
    'textThree'
    'imgThree';
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  align-items: center;

  @media screen{
    @media (min-width: 768px){
      grid-template-columns: 1fr 1fr;
      grid-template-areas: 
        'textOne imgOne'
        'imgTwo textTwo'
        'textThree imgThree';
      }
  }
`

export const ImaginationTextOne = styled.p`
  grid-area: textOne;
  width: 100%;
  font-family: Montserrat;
  font-weight: 500;
  text-align: right;
  font-size: ${({ theme: { fontSize: { fontSizeSM }}}) => fontSizeSM };
  line-height: 30px;
  color: #071825;
  margin-right: 30px;
`

export const ImaginationImgOne = styled.img`
  grid-area: imgOne;
  width: 100%;
  height: 364px;
  background: #C4C4C4;
  border-radius: 8px; 
  object-fit: cover;
 
`

export const ImaginationTextTwo = styled.p`
  grid-area: textTwo;
  width: 100%;
  font-family: Montserrat;
  font-weight: 500;
  font-size: ${({ theme: { fontSize: { fontSizeSM }}}) => fontSizeSM };
  line-height: 30px;
  color: #071825;
`

export const ImaginationImgTwo = styled.img`
  grid-area: imgTwo;
  width: 100%;
  height: 364px;
  background: #C4C4C4;
  border-radius: 8px;  
  object-fit: cover;

`
export const ImaginationTextThree = styled.p`
  grid-area: textThree;
  width: 100%;
  font-family: Montserrat;
  text-align: right;
  font-weight: 500;
  font-size: ${({ theme: { fontSize: { fontSizeSM }}}) => fontSizeSM };
  line-height: 30px;
  color: #071825;
  margin-right: 30px;
`

export const ImaginationImgThree = styled.img`
  grid-area: imgThree;
  width: 100%;
  height: 364px;
  background: #C4C4C4;
  border-radius: 8px; 
  object-fit: cover;
`