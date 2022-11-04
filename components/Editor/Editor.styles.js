import styled from "styled-components";

export const SunEditorWrapper = styled.div`
  grid-area: ${({ name }) => name};

  .sun-editor-editable {
    height: 100% !important;
  }
`;