import styled, { css } from "styled-components";

export const Catalog = styled.div`
  button { width: 200px !important; }

  width: 100vw;
  min-height: 64vh;
  overflow: hidden;

  .container{
    align-items: center;
    height: auto;
    flex-direction: ${({ isPair }) => {
    return isPair ? 'column' : 'column-reverse'
  }};

    @media screen{
      @media (min-width: 1024px){
        height: 400px;
        flex-direction: ${({ isPair }) => isPair ? 'row' : 'row-reverse'};
      }
    }
  }

`;

export const CatalogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
  height: 100%;
  width: 100%;
`;

export const CatalogDropzone = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid red;
`;

export const ButtonText = styled.a`
  font-weight: bold;
`;

export const CatalogoTitle = styled.h1`
  font-family: Amatic SC;
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  z-index: 0;

  width: 107%;
  text-align: center;

  background: #000000;
  width: fit-content;
  padding: 4px 52px 4px 24px;
  border-radius: 36px;
  position: relative;
  box-shadow: 5px 10px 20px #07182550;
  
  :after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: #FFF;
    border-radius: 50px;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: 1042px) {
    margin: 0 auto;
    width: 100%;
    font-size: 47px;
    padding: 4px 120px 8px 32px;
  }
`;

export const CatalogComingSoon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 32px;
  font-family: Montserrat;
  font-weight: bold;
  position: relative;

  svg { animation: .8s linear infinite walking; }
  
  span::after {
    content: '';
    animation: 2s linear dotAnimation infinite;
    position: absolute;
  }

  @keyframes walking {
    0% { 
      transform: rotate(0deg) translateY(0px);
    }
    25% { 
      transform: rotate(7deg) translateY(-10px);
    }
    50% { 
      transform: rotate(0deg) translateY(-10px);
    }
    75% { 
      transform: rotate(-7deg) translateY(0px);
    }
    85% { 
      transform: rotate(0deg) translateY(-1px);
    }
    100% { 
      transform: rotate(0deg) translateY(0px);
    }
  }

  @keyframes dotAnimation {
    0% { content: '' }
    14% { content: '.' }
    28% { content: '..' }
    42% { content: '...' }
    57% { content: '..' }
    71% { content: '.' }
    100% { content: '' }
  }
`;

export const CatalogsList = styled.div`
  display: flex;
  gap: 16px;
  column-gap: 48px;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin-bottom: 16px;
  flex-wrap: wrap;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const CatalogBg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  position: absolute;
  height: 64vh;
`;

export const CatalogItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  position: relative;
  .delete {
    position: absolute;
    right: -20px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin: 8px 0px;
`;


export const CatalogListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;