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

  .rpv-core__inner-page {
    background-image: url(${({ src }) => src});
    background-size: cover;
  }
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
`;

export const PDFHeader = styled.div`
  position: sticky;
  color: #fff;
  top: 0;

  cursor: pointer;

  height: 80px;   
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: ${({ theme: { color: { brand } } }) => brand};
  z-index: 9999;

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;
export const PDFHeaderTitle = styled.h1`
  font-size: 24px;
  margin: 2px;
`;