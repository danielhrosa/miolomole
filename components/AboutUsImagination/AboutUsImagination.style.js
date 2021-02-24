import styled from 'styled-components';

export const AboutUsImagination = styled.div`
  .container{
    /* flex-direction: row; */
  }
`;

export const ImagitationTitle = styled.div`
  font-family: Amatic SC;
  font-weight: bold;
  font-size: 48px;
  align-items: center;
  color: #F6D300;
  margin-bottom: 40px;

`

export const ImaginationWrapper = styled.div`
  display: grid;
  grid-template-areas: 
    'textOne'
    'imgOne'
    'textTwo'
    'imgTwo';
  grid-column-gap: 30px;
  grid-row-gap: 50px;
  @media screen{
    @media (min-width: 1024px){
      grid-template-areas: 
        'textOne imgOne'
        'imgTwo textTwo';
      }
  }
`

export const ImaginationTextOne = styled.div`
  grid-area: 'textOne';
  width: 100%;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 17px;
  line-height: 30px;
  color: #071825;
  margin-right: 30px;
`

export const ImaginationImgOne = styled.div`
  grid-area: 'imgOne';
  width: 100%;
  height: 364px;
  background: #C4C4C4;
  border-radius: 8px;  
`

export const ImaginationTextTwo = styled.div`
  grid-area: 'textTwo';
  width: 100%;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 17px;
  line-height: 30px;
  color: #071825;
`

export const ImaginationImgTwo = styled.div`
  grid-area: 'imgTwo';
  width: 100%;
  height: 364px;
  background: #C4C4C4;
  border-radius: 8px;  
`