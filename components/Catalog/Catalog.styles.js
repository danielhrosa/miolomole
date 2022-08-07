import styled from "styled-components";
import ButtonComponent from '../../Elements/Button';

export const Catalog = styled.div`
  padding: 32px 16px;
  background-color: #00A79D;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  font-size: 47px;
  text-align: center;
  font-weight: 700;
  color: #fff;
`;

export const CatalogComingSoon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 32px;
  color: #fff;
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
  flex-direction: column;
  gap: 16px;
`;