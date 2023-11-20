import styled, { css } from "styled-components";
import Button from "../../Elements/Button";

export const PDFReaderWrapper = styled.div`
  width: 100%;
  height: 50vh;
  padding: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  position: relative;
`;

export const PDFReader = styled.iframe`
  ${({ isFullScrenOn }) => isFullScrenOn 
    ? css`width: 100vw; height: 100vh;`
    : css`width: 100%; height: 50vh;`}
`;

export const PDFReaderFullView = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
`;

export const ButtonClose = styled((props) => <Button {...props}/>)`
  position: absolute;
  right: 25px;
  top: 10px;
`