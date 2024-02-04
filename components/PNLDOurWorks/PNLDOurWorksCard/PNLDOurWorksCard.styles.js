import Image from 'next/image';
import { darken } from 'polished';
import styled, { css } from "styled-components";
import ButtonComponent from '../../../Elements/Button/Button';

export const PNLDOuWorksCard = styled.div`
  width: 250px;
  
  cursor: pointer;
  position: relative;

  padding: 16px 24px ;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.20);
  
  :hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);
    transition: all .2s ease;
  }

  @media (min-width: 1024px) {
    height: 580px;
    min-width: 400px;
    width: 48%;
  }
`;
export const PNLDButtons = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const PNLDOurWorksCardTitle = styled.h1`
  color: #333;
  font-family: Roboto Mono;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  margin: 0 0 16px 0;
  @media (min-width: 1024px) {
    font-size: 24px;
    height: 50px;
  }
`;
export const PNLDOurWorksCardCover = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin: 0 auto;

  @media (min-width: 1024px) {
    width: auto;
    height: 300px;
  }
`;
export const PNLDOurWorksCardCoverWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const PNLDOurWorksCardInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 32px;
  height: 70px;
  margin-bottom: 16px;
`;
export const PNLDOurWorksCardLabel = styled.p`
  color: #333;
  font-family: Roboto Mono;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  margin: 0;
  span { font-weight: bold; }
`;
export const PNLDOurWorksCardCode = styled.div`
  ${({ color }) => css`
    background-color: ${darken(0.1, color)};
    cursor: initial;
    width: 100%;
    height: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    font-size: 10px;

    margin-bottom: 8px;
    
    font-family: Roboto Mono;
    font-weight: 400;

    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    @media (min-width: 1024px) {
      font-size: 14px;
    }
  `}
`;
export const PNLDOurWorksCardCodeCopy = styled.div`
  ${({ color }) => css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;

    svg {
      position: absolute;
      right: -19px;
      top: -16px;
    }

    :hover {
      transition: all .2s ease-in-out;
      box-shadow: ${darken(0.2, color)} 0px 0px 2px 1px;
      border-radius: 4px;
      opacity: 1;
    }
  `}
`;
export const PNLDOurWorksCardCodeCopyLabel = styled.div`
  ${({ color }) => css`
    position: absolute;
    font-family: Roboto Mono;
    font-weight: 400;
    font-size: 11px;
    top: -20px;
    right: -35px;
    padding: 8px 16px ;
    border-radius: 8px;
    width: 100px;
    background-color: ${darken(0.2, color)};
  `}
`;
export const Button = styled(ButtonComponent)`
   width: 100%;
`;