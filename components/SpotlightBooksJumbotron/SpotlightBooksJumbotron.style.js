import styled from 'styled-components';

export const SpotilightJumbotronContainer = styled.div`
  width: 100%;
  .slick-dots{
    ul{
      margin: 0px;
      list-style-type: none;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-inline-start: 0px;


      li{
        width: 123px;
        bottom: 15px;
        padding-bottom: 30px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        letter-spacing: 2.4px;
        color: #FFFFFF;
        display: flex;
        @media screen{
          @media (min-width: 500px){
            width: 170px;
          }
        }
        &.slick-active{
          border-bottom: 3px solid #FECA30;
          font-weight: 500;
        }  
      }
    }
  }
  
`
export const SpotLightJumbotron = styled.div`
  background-image: url(${({ img }) => img });
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom: 3px solid #898F9B;
  background-position: center;


  .container{
    display: flex;
    align-items: flex-start;
  }
 
`
export const Description = styled.div`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 2.4px;
  line-height: 2;
  margin-bottom: 30px;
  color: #FFFFFF;
  filter: drop-shadow(2px 4px 2px black);
`
export const HomeJumboTitle = styled.div`
  font-family: Arvo;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  color: #FFFFFF;
  margin-left: 30px;
  filter: drop-shadow(2px 4px 6px black);
`
export const HomeJumbotronNav = styled.div`
  filter: drop-shadow(2px 4px 6px black);
`

export const JumbotronSliderTitle = styled.div`
  width: 100%;
  filter: drop-shadow(2px 4px 6px black);
  text-overflow: ellipsis;
  overflow: hidden; 
  width: 160px; 
  height: 1.2em; 
  white-space: nowrap;
`