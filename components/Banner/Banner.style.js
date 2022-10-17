import styled from 'styled-components';
import templateCover from '../../images/banners/template_cover.png'

export const Banner = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  cursor: pointer;

  .container{
    align-items: center;
    height: auto;
    justify-content: space-evenly;
    flex-direction: ${({isPair}) => {
      return isPair ? 'column' : 'column-reverse'}};

    @media screen{
      @media (min-width: 1024px){
        height: 400px;
        flex-direction: ${({isPair}) => {
          return isPair ? 'row' : 'row-reverse'}};
      }
    }
  }
`
export const BannerBgImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  position: absolute;
  height: 186vw;


  @media screen{
    @media (min-width: 1024px){
      max-height: 400px;
      height: fit-content;
    }
  }
`;

export const BannerWrapper = styled.div`
  margin: 0 50px;
  z-index: 1;
  width: 100%;
  @media screen{
    @media(min-width: 1024px){
      width: 55%;
    }
  }

`
export const BannerTitle = styled.h1`
  margin: 0px;
  font-size: 31px;

  @media screen{
    @media (min-width: 1024px){
      font-size: 33px;
    }
    @media (min-width: 1260px){
      font-size: 50px;
    }
  }
`

export const BannerText = styled.p`
  line-height: 1.5;
  font-size: 14px;

  @media screen{
    @media (min-width: 1024px){
      font-size: 18px;

    }
  }
`

export const BannerImage = styled.img`
  /* background-image: url(${templateCover}); */
  /* background-color: red; */
  width: 100%;
  object-fit: contain;
  background-size: contain;
  z-index: 1;
  height: 60vw;
  margin: 0;


  @media screen{
    @media (min-width: 1024px){
      height: 360px;
      width: auto;

    }
  }
`