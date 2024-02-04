import styled, { css } from "styled-components";
import { darken, readableColor } from "polished";

export const PNLDOurWorksBanner = styled.div`
  margin-bottom: 32px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 47px 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  background-color: ${({ color, theme: { color: { brand } } }) => color || brand};

  svg { cursor: pointer; }

  @media (min-width: 768px) {
    padding: 0px 47px;
    height: 110px;
    flex-direction: row;
  }
`;
export const PNLDOurWorksBannerTitle = styled.h1`
  color: ${({ color }) => readableColor(darken(0.1, color))};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  letter-spacing: -0.528px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left; 
  }
`;
export const PNLDOurWorksBannerColor = styled.div`
  ${({ color, readableColor }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    button {
      border: solid 2px ${readableColor} !important;
      color: ${readableColor} !important;
      :hover {
        color: ${color} !important;
      }
    }

    @media (min-width: 768px) {
      flex-direction: row;
    }
  `}
`;
export const PNLDOurWorksBannerColorLabel = styled.label`
  ${({ readableColor }) => {
    return css`
      display: flex;
      text-align: center;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      color: ${readableColor};
      > div {
        border: solid 2px ${readableColor} !important;
        color: ${readableColor} !important;
      }
      @media (min-width: 768px) {
        text-align: left;
        flex-direction: row;
      }
  `}};
`;
export const PnldHomeIconWrapper = styled.div`
  width: 200px;
  svg { width: 200px; }
`;