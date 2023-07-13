import styled, { css } from "styled-components";

export const EducatorAreaPublication = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
  padding: 18px;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.20);

  border-radius: 10px;
  
  :hover {
    transform: scale(1.02);
    transition: all .5s ease;
  }

  @media (min-width: 768px) {
    padding: 32px;
  }
`;

export const EducatorAreaPublicationButtons = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 8px;
`;

export const EducatorAreaPublicationPicture = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 28px;
  ${({ hide }) => hide && css`filter: grayscale(1);`}
`;


export const EducatorAreaPublicationContainer = styled.div`

`;

export const EducatorAreaPublicationContainerTitle = styled.div`
  color: #333333;
  font-family: 'Roboto Mono', monospace;
  font-weight: 700;
  letter-spacing: -0.022em;
  font-size: 18px;
  
  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const EducatorAreaPublicationContainerDescription = styled.div`
  font-size: 11px;
  font-family: 'Roboto Mono', monospace;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
