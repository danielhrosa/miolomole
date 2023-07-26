import styled, { css } from "styled-components";
import ButtonComponent from '../../Elements/Button/Button';

export const PNLD = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
  
  @media (min-width: 1024px){
    padding: 40px;
  }

  h2 {
    margin-top: 32px;
  }

  button { 
    margin-bottom: 32px;

    @media (min-width: 768px) {
      margin-bottom: unset;
    }
  }
`;
export const PNLDTitle = styled.h2`
  color: #333;
  font-family: Roboto Mono;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 60px */
  letter-spacing: -0.88px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;
export const PNLDText = styled.p`
  color: #000;
  font-family: Roboto Mono;
  font-size: 20px;
  font-weight: 300;
  line-height: 150%; /* 30px */
  letter-spacing: -0.44px;
  text-align: justify;

  @media (min-width: 768px) {
    text-align: left;
  }
`;
export const PNLDSubTitle = styled.p`
  color: #000;
  text-align: center;
  font-family: Roboto Mono;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 45px */
  letter-spacing: -0.96px;
  @media (min-width: 768px) {
    text-align: left;
  }
`;
export const PNLDList = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const Button = styled(ButtonComponent)`
  margin: 0 auto;
`;
export const PNLDCard = styled.div`
  ${({ color }) => css`
    cursor: pointer;
    position: relative;
    width: 250px;
    height: 80px;
    padding: 16px 42px ;
    background-color: ${color};
    box-shadow: 0px 3px 10px 0px ${color}50;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;

    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 60px */
    letter-spacing: -0.88px;

    #arrow {
      transform: scale(0.6);
    }

    :hover { 
      transform: scale(1.1); 
      transition: all .2s ease;
    }

    @media (min-width: 768px) {
      width: 340px;
      height: 100px;
    }
    @media (min-width: 1024px) {
      width: 400px;
      height: 100px;
    }
  `}
`;
export const PNLDButtons = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;