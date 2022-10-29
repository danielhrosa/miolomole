import styled from "styled-components";

export const EducatorAreaPublication = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;

  padding-top: 32px;
  border-top: 3px solid #D9D9D9;

  @media (min-width: 768px) {
    padding-top: 50px;
  }
`;

export const EducatorAreaPublicationPicture = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export const EducatorAreaPublicationContainer = styled.div`

`;

export const EducatorAreaPublicationContainerTitle = styled.div`
  color: #333333;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.022em;
  padding: 32px 0;
  font-size: 24px;
  
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const EducatorAreaPublicationContainerDescription = styled.div`
  font-size: 14px;
    
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 44px;
  }
`;
