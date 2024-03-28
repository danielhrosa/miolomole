import styled from "styled-components";

export const EducatorAreaPublication = styled.div`
  width: 100%;
  padding-top: 70px;
  .sun-editor { 
    border: none;
    margin-bottom: 32px;
  }

  .sun-editor-editable:after {
    content: "";
    width: 100%;
    position: absolute;
    border-bottom: 5px dashed #30303030;
    bottom: 0;
    left: 0;
  }

  .sun-editor-editable p {
    width: 70vw;
    text-align: justify;
    line-height: 2.2;
    margin: 0 auto 30px !important;
    
    @media (min-width: 768px) {
      width: 600px;
    }
  }

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

  cursor: pointer;
`;