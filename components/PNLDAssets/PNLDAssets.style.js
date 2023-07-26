import styled from "styled-components";

export const PNLDAssets = styled.div`
  width: 100%;
  padding: 50px;

  .container{
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  #save{ grid-area: button }
`;

export const Title = styled.div`
  font-family: Amatic SC;
  font-weight: bold;
  font-size: 40px;
  letter-spacing: 2.4px;
  text-align: center;
  @media (min-width: 1024px){ text-align: left }
`