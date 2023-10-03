import styled, { css } from "styled-components";
import { darken } from "polished";

export const PNLDOurWorksBook = styled.div`
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
      height: 80px;
      font-size: 32px;
    }
  `}
`;
export const PNLDOurWorksBookSection = styled.section`
  margin: 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  
  gap: 32px;
  
  @media (min-width: 425px) {
    padding: 32px;
  }
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const PNLDOurWorksBookDescription = styled.div`
  padding: 32px;
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
`;
export const PNLDOurWorksBookSectionButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
`;
export const PNLDOurWorksBookCover = styled.img`
  width: 60%;
`;
export const PNLDOurWorksBookUsers = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  margin: 16px;
  padding: 16px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.20);
`;
export const PNLDOurWorksBookUsersTitle = styled.h1`
  color: #333;
  width: 100%;
  font-family: Roboto Mono;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
`;
export const PNLDOurWorksBookUsersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 32px;
`;
export const PNLDOurWorksBookUsersUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
    display: grid;
    gap: 16px;
    grid-template-areas:
      "avatar userName"
      "avatar description"
    ;
    grid-template-columns: 200px 1fr;
  }
`;
export const PNLDOurWorksBookUsersUserAvatar = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  grid-area: avatar;

`;
export const PNLDOurWorksBookUsersUserName = styled.h1`
  color: #333;
  font-family: Roboto Mono;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 60px */
  grid-area: userName;
`;
export const PNLDOurWorksBookUsersDescription = styled.div`
  grid-area: description;
`;

export const PNLDOurWorksBookInfosSection = styled.div`
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  width: 100%;
  padding: 32px 0;
  line-height: 24px;

  span { font-weight: bold; }
`;