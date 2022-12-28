import styled from "styled-components";

export const EditMenuPage = styled.div`
  padding: 50px 0 0 0;
  min-height: 70vh;
  width: 100%;
  max-width: 800px;
`;


export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme: { color: { brand } } }) => brand};;
`;

export const Header = styled.div`
  display: grid;
  width: 100%;
  padding: 8px;
  grid-template-columns: 1fr 60px;
  margin-bottom: 10px;

  b {
    font-size: 12px;
  }
`;

export const EditMenuPagesItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 30px;
  padding: 8px;
  margin-bottom: 30px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  :hover{ box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px; }
  :active { box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset; }

  transition: .3s cubic-bezier(0.19, 1, 0.22, 1);
`;