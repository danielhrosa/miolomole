import styled from "styled-components";

export const PNLDOurWorks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1280px;
  margin: 0 auto;
  padding: 70px 20px 20px;

  @media (min-width: 1024px){
    padding: 93px 40px 40px;
  }

  button {
    margin-bottom: 32px;

    @media (min-width: 768px) {
      margin-bottom: unset;
    }
  }
`;
export const PNLDOurWorksTitle = styled.h2`
  color: #333;
  font-family: Roboto Mono;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 48px;
  }
`;
export const PNLDText = styled.p`
  color: #000;
  font-family: Roboto Mono;
  font-size: 20px;
  font-weight: 300;
  line-height: 150%; /* 30px */
  letter-spacing: -0.44px;
  text-align: justify;

  @media (min-width: 768px) {
    text-align: left;
  }
`;
export const PNLDOurWorksList = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;
  @media (min-width: 880px) {
    justify-content: space-between;
  }
`;
export const PNLDOurWorksInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > div { width: 100%; }
  gap: 16px;

  /* @media (min-width: 768px) {
    flex-direction: row;
  } */
`;