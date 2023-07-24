import styled, { css } from "styled-components";
import { darken } from "polished";

export const PNLDOurWorksBook = styled.div`
  margin-top: 70px;

  .container { padding: 0; }

  @media (min-width: 768px) {
    margin-top: 94px;
  }
`;
export const PNLDOurWorksBookTitle = styled.h1`
  color: #333;
  font-family: Roboto Mono;
  font-size: 42px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  margin: 0 0 32px;

  @media (min-width: 1024px) {
      font-size: 42px;
    }
`;
export const PNLDOurWorksBookCode = styled.div`
  ${({ color }) => css`
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

    @media (min-width: 1024px) {
      height: 110px;
      font-size: 42px;
    }
  `}
`;