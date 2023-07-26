import styled from 'styled-components';

export const Header = styled.div`
  position: fixed;
  background-color: ${({ theme: { color: { brandWhite }}}) => brandWhite };
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  z-index: 99;
  
  > a {
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 30px;
    @media (min-width: 1024px){
      margin: 0;
      margin-left: 20px;
      position: unset;
      height: 40px;
    }
  }
  >.container{
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 16px;
    >a{
      position: absolute;
      right: 20px;
      @media(min-width: 1024px){
        right: unset;
      }
    }
  }

  @media (min-width: 1024px){
  height: 94px;

    > a {
      position: initial;
      > svg {
        position: relative;
        height: 80px;
        width: 140px;
        top: 0;
        left: 10px;
      }
    }
  }
`
export const HeaderMenu = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 99;
  background-color: ${({ theme: { color: { transparentBlack }}}) => transparentBlack };
  transition: .6s ${({isOpen}) => isOpen ? 0 : '.6s'} ease;
  opacity: ${({isOpen}) => isOpen ? 1 : 0};
  pointer-events: ${({isOpen}) => isOpen ? 'initial' : 'none'};

  @media screen{
    @media (min-width: 1024px){
      position: initial;
      top: initial;
      left: initial;
      height: initial;
      width: initial;
      z-index: initial;
      background-color: initial;
      transition: initial;
      opacity: initial;
      pointer-events: initial;
      flex: 1;
      .searchFieldMobile{
        display: none;
      }
    }
  }
`
export const HeaderMenuContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { color: { white }}}) => white };
  width: 100%;
  max-width: 280px;
  height: 100vh;
  padding: 20px;
  transform: translateX(${({isOpen}) => isOpen ? 0 : '-280px'});
  transition: .6s ease;

  >a {
    position: absolute;
    top: 10px;
    left: 15px;
    width: 43px;
    right: 0;
    grid-area: logo-miolo;
  }

  >.searchField {
    height: fit-content;
    display: block;
    top: -130px;
    >input{
      width: 100%;
      max-width: 100%;
      background: ${({ theme: { color: { grayLight }}}) => grayLight};
      
      &:focus {
        max-width: 100%;
      }
    
    }
  }

  .hamburger {
    position: absolute;
    top: 15px;
    right: 15px;
    width: auto;
  }
  
  @media screen{
    @media (min-width: 1024px){
      flex-direction: row;
      position: initial;
      background-color: initial;
      width: initial;
      max-width: initial;
      height: initial;
      padding: initial;
      transform: initial;
      transition: initial;

      >a {
        display: none;
      }

      >.searchField {
        display: flex;
        position: absolute;
        top: 20px;
        right: 20px;
        justify-content: flex-end;
        display: none;
        >input {
          background-color: ${({ theme: { color: { whiteLight }}}) => whiteLight };
          transition: .3s ease;
          font-size: 12px;
          border: none;
          outline: none;
          padding: 8px 30px 8px 16px;
          /* max-width: unset; */
        }
      }

      .contactAddress {
        white-space: nowrap;
        margin-right: 20px;
        
        span {
          color: ${({ theme: { color: { blackLigthly }}}) => blackLigthly };
        }

        br {
          display: none;
        }

        a {
          &:after {
            display: none;
          }
        }
      }
    }
  }
`

export const SearchField = styled.div`
  display: flex;
  grid-area: search;
  position: relative;
  height: fit-content;
  align-items: center;
  top: -140px;

  > div {
    background-color: transparent;
    border-radius: 50px;
    transition: .3s ease;
    font-size: 14px;
    border: none;
    outline: none;
    padding: 8px 30px 8px 16px;
    width: 100%;

    &:focus {
      max-width: 30vw;
      background-color: ${({ theme: { color: { brandLighter }}}) => brandLighter };
    }
  }
  >svg {
    position: absolute;
    pointer-events: none;
    right: 0px;
  }  
  @media screen{
    @media (min-width: 1024px){
      right: 0;
      display: flex;
      top: 0;
      width: 230px;

    }
  }
`