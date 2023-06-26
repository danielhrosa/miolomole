import styled from "styled-components";

export const Comments = styled.section`
  min-height: 100px;
  width: 100%;
  padding: 32px;
  border-radius: 50px;
  input { background: transparent; }
  box-shadow: rgb(204, 219, 232) 3px 3px 10px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
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
`;

export const CommentsListEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;