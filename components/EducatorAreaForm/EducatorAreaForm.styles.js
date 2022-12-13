import styled from "styled-components";

export const EducatorAreaForm = styled.div`
  width: 100%;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    width: 100%;
  }

  .se-toolbar-sticky {
    top: 75px !important;
    left: 0;
    width: 100% !important;

    @media (min-width: 768px){
      top: 100px !important;
      left: 50%;
      transform: translateX(-50%);
      width: 90% !important;
    }
  }

  img { height: 260px; }

  figure img {
    width: 100%;
    height: unset !important;
  }
`;