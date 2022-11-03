import styled from "styled-components";

export const EducatorAreaPublication = styled.div`
  width: 100%;
  padding-top: 70px;
  .sun-editor { border: none; }
  .se-resizing-bar { display: none !important; }
`;

export const EducatorAreaPublicationHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 100%;
`;

export const EducatorAreaPublicationBackButton = styled.div`
  left: 15px;
  width: 20px;
  height: 20px;
  border-bottom: 3px solid #333;
  border-left: 3px solid #333;
  transform: rotate(45deg);
`;