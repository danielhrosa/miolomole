import styled from "styled-components";

export const EducatorAreaPublication = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding-bottom: 24px;

  :not(:last-child) {
    border-bottom: 2px solid #D9D9D9;
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
  padding: 16px 0;
  font-size: 24px;
  
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const EducatorAreaPublicationContainerDescription = styled.div`
  font-size: 14px;
`;
