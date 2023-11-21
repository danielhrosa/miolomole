import styled, { css } from "styled-components";
import Button from "../../Elements/Button";

export const PDFReaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  position: relative;
`;

export const PDFReader = styled.div`
  width: 100%; 
  height: 500px;
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