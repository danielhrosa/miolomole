import styled from 'styled-components';
import pt from '../../i18n/pt';
const t = pt;

export const AboutUsSlider = styled.div`
  background: #F6F6FA;
  display: flex;
  flex-direction: column;
  height: auto;
  position: relative;

  @media screen{
    @media (min-width: 1024px){
      height: 378px;
      overflow: hidden;

      &::before{
        content: '';
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100%;
        /* width: 40%; */
        background: #F6F6FA;
        z-index: 1;
        min-width: 394px;

      }
    }
    @media(min-width: 2000px){
      &::before{
        width: 32%;

      }
    }
  }
  .slick-slide{
    padding: 0 10px;
    height: 300px;
    @media screen{
      @media (min-width: 1024px){
        height: 300px;
      }
    }
  }
  .slick-slide.slick-active.slick-current div, .slick-slide.slick-active div{
    outline: none;
    border: none;
    box-shadow: none;
  }
  
  .slick-track{
    left: 0px;

    @media screen{
      @media (min-width: 1024px){
        /* left: 100px; */
      }
    }
  }
  .slick-list{
    padding:0 10% 0 0;
    @media screen{
      @media (min-width: 1024px){
        overflow: visible;

      }
    }
  }

  .slick-dots{
    bottom: -26px;
    z-index: 3;
    width: 59%;
    left: 24vw;

    @media screen{
      @media (min-width: 1024px){
        top: 217px;
        left: -318px;
        width: 35%;
      }
    }

    li{
      width: 12px;
      height: 3px;
      border-radius: 5px;
      background-color: #B8B8B8;
      button{
        margin-top: -10px;
        &::before{
          display: none;
        }
      }
      &.slick-active{
        width: 24px;
        background-color: ${({ theme: { color: { brand } } }) => brand};
      }
    }
  }
  .slick-prev {
    margin-top: 0 !important;
    width: 15px;
    height: 15px;
    z-index: 10; 
    color: ${({ theme: { color: { brand } } }) => brand};
    border-bottom: 3px solid ${({ theme: { color: { brand } } }) => brand};
    border-left: 3px solid ${({ theme: { color: { brand } } }) => brand};
    transform: rotate(45deg);
    bottom: -6px;
    top: unset;
    left: 20px;

    @media screen{
      @media (min-width: 360px){
      }
      @media (min-width: 425px){
        /* top: 448px; */
      }
      @media (min-width: 600px){
        /* left: 178px; */
        /* top: 406px; */
      }
      @media (min-width: 768px){
        /* top: 421px; */
      }
      @media (min-width: 1024px){
        left: -357px;
        top: 235px;
      }
    }

    &::before{
      display: none;
    }
  }
  .slick-next {
    margin-top: 0 !important;
    z-index: 10; 
    width: 15px;
    height: 15px;
    color: ${({ theme: { color: { brand } } }) => brand};
    border-bottom: 3px solid ${({ theme: { color: { brand } } }) => brand};
    border-right: 3px solid ${({ theme: { color: { brand } } }) => brand};
    transform: rotate(-45deg);
    bottom: -6px;
    top: unset;
    left: 40px;

    @media screen{
      @media (min-width: 1024px){
        left: -337px;
        top: 235px;
      }
    }
    &::before{
      display: none;
    }
  }
`

export const AboutUsSliderContainer = styled.div`
  background: #F6F6FA;
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  max-width: unset;
  width: 100%;
  max-width: 1024px;
  cursor: pointer;
  
  @media screen{
    @media (min-width: 1024px){
      max-width: 1024px;
      height: 270px;
      margin: auto;
      flex-direction: row;
    }
    @media (min-width: 1030px){
      max-width: 1250px;
    }
  }
  
`;

export const SliderInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: auto;
  z-index: 2;
  background-color: #F6F6FA;
  @media screen{
    @media (min-width: 1024px){
      flex-direction: column;
      width: 393px;
      background: #F6F6FA;
      align-items: baseline;
      padding-left: 20px;
      height: 130%;

    }
    @media (min-width: 1290px){
      padding-left: 0px;

    }
  }

`;

export const SliderTitle = styled.h1`
  font-family: Amatic SC;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 69px;
  color: ${({ theme: { color: { brand } } }) => brand};;
  opacity: 0.9;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  @media (min-width: 1024px){
    text-align: unset;
    font-size: 50px;
    margin-bottom: 30px;
    cursor: pointer;
  }

`;

export const SliderDescription = styled.h3`
  font-family: Montserrat;
  font-size: 14px;
  width: 270px;
  line-height: 1.4;
  font-weight: normal;
  display: flex;
  color: #000000;
  text-align: center;
  @media (min-width: 1024px){
    font-size: 18px;
    text-align: unset;
    width: 380px;
  }
`;

export const SliderCards = styled.div`
  /* display: flex; */
  width: 90vw;
  margin-bottom: 70px;
  @media screen{
    @media (min-width: 1024px){
      margin-bottom: unset;

      width: 61%;
    }
  }
`;

export const SliderCard = styled.div`
  /* width: 170px; */
  height: 100%;
  border-radius: 8px;
  position: relative;
  /* padding: 0 200px; */
  @media screen{
    @media (min-width: 1024px){
      height: 100%;

      padding: 0px;
    }
  }

`;

export const CardTitle = styled.div`
  font-family: Montserrat;
  font-weight: 500;
  line-height: 35px;
  color: ${({ theme: { color: { brand } } }) => brand};;
  margin-bottom: 5px;
  font-size: ${({ theme: { fontSize: { fontSizeXS } } }) => fontSizeXS};
  margin-left: 64px;
  @media screen{
    @media (min-width: 1024px){
      font-size: ${({ theme: { fontSize: { fontSizeSMM } } }) => fontSizeSMM};
      margin-left: 100px;
    }
  }

`
  ;
export const SliderCardContainer = styled.div`
  background-color: #FFFFFF;
  height: 220px;
  margin-top: 40px;
  margin-bottom: 40px;
  /* width: 90vw; */
  padding: 14px 20px;
  border-radius: 11px;
  &:focus{
    outline: none;
    border: none;
  }

  @media screen{
    @media (min-width: 1024px){
      height: 261px;
      margin-top: 15px;
      width: 100%;
    }
  }

`
  ;
export const CardName = styled.div`
  text-align: left;
  grid-area: cardName;
  width: max-content;
  >b{
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
  ;
export const CardInfo = styled.div`
  display: flex;
`;

export const CardDescription = styled.div`
  font-family: Montserrat;
  font-size: ${({ theme: { fontSize: { fontSizeXXS } } }) => fontSizeXXS};
  line-height: 19px;
  position: relative;
  margin-top: 20px;
  height: 118px;
  width: 100%;
  color: #071825;
  overflow-Y: scroll;

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme: { color: { brand } } }) => brand};
    border-radius: 8px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  
  @media screen{
    @media (min-width: 1024px){
      font-size: ${({ theme: { fontSize: { fontSizeXXS } } }) => fontSizeXXS};
      height: 150px;
      margin-top: 30px;
    }
  }
`;

export const CarrousselButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0px;
  margin-left: 20px;
  margin-bottom: 30px;

  @media screen{
    @media (min-width: 1024px){
    margin-bottom: 0;

    }
  }

`;

export const CarrousselLeftArrow = styled.div`
  width: 15px;
  height: 15px;
  cursor: pointer;
  transform: rotate(45deg);
  border-bottom: 3px solid ${({ theme: { color: { brand } } }) => brand};
  border-left: 3px solid ${({ theme: { color: { brand } } }) => brand};
  transition: all 0.5s;

  :hover{
    width: 18px;
    height: 18px;
  }
`;

export const CarrousselRightArrow = styled.div`
  cursor: pointer;
  width: 15px;
  height: 15px;
  transform: rotate(45deg);
  border-top: 3px solid ${({ theme: { color: { brand } } }) => brand};
  border-right: 3px solid ${({ theme: { color: { brand } } }) => brand};
  margin-right: 20px;
  transition: all 0.5s;

  :hover{
    width: 18px;
    height: 18px;
  }
`;

export const CarrousselListButtons = styled.ul`
  display: flex;
  /* margin-bottom: 60px; */

  li{
    cursor: pointer;
    width: 12px;
    height: 3px;
    margin-right: 5px;  
    background-color: ${({ theme: { color: { blackLight } } }) => blackLight};
    :first-child{
      width: 23px;
      background-color: ${({ theme: { color: { brandDark } } }) => brandDark};

    }
  }
`;

export const CardLogo = styled.div`
  background-image: url(${({ src }) => src});
  width: 80px;
  background-size: cover;
  height: 40px;
  grid-area: cardLogo;
  background-repeat: no-repeat;
  margin-right: 10px;
  background-position: center;
`;

export const CardPicture = styled.div`
  background-color: ${({ theme: { color: { whiteDark } } }) => whiteDark};;
  background-image: url(${({ src }) => src});
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
`;