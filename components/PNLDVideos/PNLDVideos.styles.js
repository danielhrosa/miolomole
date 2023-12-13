import { darken } from "polished";
import styled, { css } from "styled-components";

export const PNLDVideos = styled.div`
  width: 100%;

  margin-top: 70px;

  font-family: Montserrat;
  
  @media (min-width: 768px) {
    .container { padding: 0; }
    margin-top: 94px;
  }
`;

export const PNLDOurWorksBookTitle = styled.h1`
  color: #333;
  font-family: Roboto Mono;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  margin: 0 0 32px;

  @media (min-width: 1024px) {
    font-size: 42px;
  }
`;
export const PNLDOurWorksBookCode = styled.div`
  ${({ color = '#00A79D' }) => css`
    background-color: ${darken(0.1, color)};
    width: 100%;
    height: 40px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    font-size: 10px;
    
    font-family: Roboto Mono;
    font-weight: 400;

    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    margin-bottom: 32px;
    
    @media (min-width: 1024px) {
      height: 80px;
      font-size: 32px;
    }
  `}
`;

export const PNLDVideosWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 32px;
`;

export const PNLDVideoPlayer = styled.div`
  width: 100%;
  height: 100%;
  height: auto;
  align-self: center;
  position: relative;
  padding: 32px;

  .Playerstyles__RPlayer-llteo8-0 { padding: 0 }

  [type="video"] { height: 100% } 
`;

export const Dotted = styled.div`
  width: 100%;
  height: 10px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    border-bottom: 5px dashed #30303030;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

`;