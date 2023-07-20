import styled from "styled-components";
import ButtonComponent from '../../Elements/Button/Button';

export const PNLD = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
  
  @media (min-width: 1024px){
    padding: 40px;
  }

  h2 {
    margin-top: 32px;
  }
`;
export const PNLDTitle = styled.h2`
  color: #333;
  font-family: Roboto Mono;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 60px */
  letter-spacing: -0.88px;
`;
export const PNLDText = styled.p`
  color: #000;
  font-family: Roboto Mono;
  font-size: 20px;
  font-weight: 300;
  line-height: 150%; /* 30px */
  letter-spacing: -0.44px;
`;
export const PNLDSubTitle = styled.p`
  color: #000;
  text-align: left;
  font-family: Roboto Mono;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 45px */
  letter-spacing: -0.96px;
`;
export const PNLDList = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;
export const Button = styled(ButtonComponent)`
  margin: 0 auto;
`