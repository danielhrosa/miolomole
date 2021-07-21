import styled, { css } from 'styled-components';

export const BookInfo = styled.div`
  width: 90%;
  button{ grid-area: button; }
  @media screen{ @media (min-width: 1024px){ width: 60% } }
`

export const BookInfoTitle = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  line-height: 1.5;
  color: #333333;
  display: flex;
  width: 100%;
  margin: 15px 0;
  font-size: 32px;
  text-align: center;
  align-items: center;
  @media (min-width: 1024px){ font-size: 40px; text-align: left; }
  ${({isLoggedIn}) => !isLoggedIn && css`:focus-visible { outline: none }`}
`

export const BookInfoItem = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  padding: 10px;
  height: 100%;
  width: 100%;

  ${({isLoggedIn}) => !isLoggedIn && css`:focus-visible { outline: none }`};

  @media screen {
    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: baseline;
    }
  }
`

export const BookInfoItemSelect = styled.div`
  flex-direction: column;
  display: flex;
  padding: 10px;
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;

  ${({isLoggedIn}) => !isLoggedIn && css`:focus-visible { outline: none }`};
  
  @media screen {
    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: baseline;
      text-align: left;
    }
  }
  > div { 
    width: 100%; 
    padding-top: 0;
    .inputSelect__control {
      padding: 0;
      border: none;
      min-height: 40px;
      box-shadow: 0 0 0 0 #000000 !important;
      border: 1px solid ${({ theme: { color: { blackDark }}}) => blackDark};
      border-radius: 8px;
    }
  
    .inputSelect__option--is-selected  {
      background: ${({ theme: { color: { brandLight }}}) => brandLight};
    }
  
    .inputSelect__option--is-focused {
      background: ${({ theme: { color: { brand }}}) => brand};
      color: ${({ theme: { color: { white }}}) => white};
    }
    .inputSelect__control {
      background: unset;
    }
    .inputSelect__multi-value {
      background-color: hsl(0, 0%, 90%);
      
      .inputSelect__multi-value__label { background-color: hsl(0, 0%, 90%) }

      .inputSelect__multi-value__remove {
        background-color: unset;
        cursor: pointer;
      }
    }
  }
`

export const BookItemLabel = styled.label`
  width: 100%;
  height: auto;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #071825;
  text-align: center;
  ${({isLoggedIn}) => !isLoggedIn && css`:focus-visible { outline: none }`}
  @media (min-width: 1024px){
    text-align: left;
    width: 200px;
  }
`

export const BookItemValue = styled.p`
  width: 100%;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 14px;
  color: #071825;
  padding: 7px;
  border-radius: 5px;
  text-align: center;
  ${({isLoggedIn}) => isLoggedIn ? css`:focus-visible { background-color: ${({ theme: { color: { brandVeryLighter }}}) => brandVeryLighter } }` : css `:focus-visible { outline: none }`}
  @media (min-width: 1024px){
    text-align: left;
    width: 100%;
  }
`

export const BottomWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  #save { width: 80%; }

  @media (min-width: 1024px){
    display: grid;
    text-align: left;
    grid-template-columns: 1fr 3fr;
    grid-template-areas: "price button";
  }
`

export const Price = styled.div`
  grid-area: price;
  margin: 0;
  width: 100%;
  height: 100%;
  @media (min-width: 1024px){ margin: 0 20px }
`

export const Label = styled.label`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: left;
  margin-bottom: 15px;
  color: ${({ theme: { color: { blackMedium }}}) => blackMedium };
`

export const PriceValue = styled.p`
  ${({isLoggedIn}) => !isLoggedIn && css`:focus-visible { outline: none }`}
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  width: 100%;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  @media (min-width: 1024px){ text-align: left }
`

export const PriceLabel = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  height: auto;
  font-size: 24px;
  line-height: 29px;
  align-self: center;
  @media (min-width: 1024px){ text-align: left; width: unset }
`

export const PriceText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;

  @media (min-width: 1024px){ flex-direction: row }
`
