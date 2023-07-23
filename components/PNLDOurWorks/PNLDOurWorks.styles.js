import styled, { css } from "styled-components";
import { readableColor, darken } from "polished";

export const PNLDOurWorks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1280px;
  margin: 0 auto;
  padding: 70px 20px 20px;

  @media (min-width: 1024px){
    padding: 93px 40px 40px;
  }

  button {
    margin-bottom: 32px;

    @media (min-width: 768px) {
      margin-bottom: unset;
    }
  }
`;
export const PNLDOurWorksTitle = styled.h2`
  color: #333;
  font-family: Roboto Mono;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  margin: 0;
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
export const PNLDOurWorksList = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;
  @media (min-width: 880px) {
    justify-content: space-between;
  }
`;
export const PNLDOurWorksBanner = styled.div`
  margin-bottom: 32px;
  width: 100%;
  height: 110px;
  display: flex;
  padding: 0px 47px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ color, theme: { color: { brand } } }) => color || brand};
`;
export const PNLDOurWorksBannerTitle = styled.h1`
  color: ${({ color }) => readableColor(darken(0.1, color))};
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  letter-spacing: -0.528px;
`;
export const PNLDOurWorksBannerColor = styled.div`
  ${({ color }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    button {
      border: solid 2px ${color} !important;
      color: ${color} !important;
    }
  `}
`;
export const PNLDOurWorksBannerColorLabel = styled.label`
  ${({ color }) => {
    return css`
      display: flex;
      align-items: center;
      gap: 16px;
      color: ${color};
      > div {
        border: solid 2px ${color} !important;
        color: ${color} !important;
      }
  `}};
`;
