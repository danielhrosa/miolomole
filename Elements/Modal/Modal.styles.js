import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #00000050;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  height: 400px;
  min-width: 300px;
  padding: 16px;
  border-radius: 8px;
  background-color: #FFFFFF;
  z-index: 100;
  position: relative;
`;

export const Close = styled.div`
  position: absolute;
  right: 25px;
  top: 10px;

  cursor: pointer;

  font-size: 36px;

  transform: rotate(45deg);
`;
