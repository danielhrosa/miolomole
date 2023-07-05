import styled from "styled-components";

export const Comments = styled.section`
  min-height: 100px;
  width: 100%;
  padding: 16px;
  input { background: transparent; }
`;

export const CommentsTitle = styled.h3`
  margin: 0;
`;

export const CommentsList = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 16px;
  height: 100%;

  svg {
    g > g {
      g:nth-child(2) {
        g:nth-child(2) > path { fill: rgb(0 167 157); }
      }
    } 
  }
`;

export const CommentInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;

  #content {
    max-height: 300px;
    overflow-y: scroll;
    margin-top: 8px;
  }

  input {
    padding: 16px;
    padding-left: 0;
  }

  @media (min-width: 768px) {
    button {
      grid-area: button;
    }
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "userFullName phone email"
      "content content content"
      "button button button"
    ;
  }
`;

export const CommentsListEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  path { stroke: #999; }
`;