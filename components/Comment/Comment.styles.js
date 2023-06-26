import styled from "styled-components";

export const Comment = styled.div`
  height: auto;
  padding: 8px 8px 16px;
  border-bottom: 3px solid ${({ theme: { color: { blackLight } } }) => blackLight};
`;

export const UserFullName = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

export const Content = styled.div`
  margin-top: 16px;
  padding: 0px 8px;
  max-height: 295px;
  word-wrap: break-word;
  overflow-y: scroll;
`;