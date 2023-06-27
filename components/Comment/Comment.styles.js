import { forwardRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import styled from "styled-components";

export const Comment = styled.div`
  height: auto;
  padding: 8px 8px 16px;
  border-bottom: 3px solid ${({ theme: { color: { blackLight } } }) => blackLight};
  position: relative;
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

export const ContentEditable = styled(forwardRef((props, ref) => <TextareaAutosize {...props} ref={ref} />))`
  padding: 0px 8px;
  max-height: 295px;
  word-wrap: break-word;
  overflow-y: scroll;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  &:focus { outline: none }
`;

export const EditableButtons = styled.div`
  position: absolute;
  right: 0;
  bottom: 0px;
  display: flex;
  gap: 4px;
  align-items: center;
  z-index: 1;

  [type="edit"] {
    margin: 0
  }
`
export const EditButton = styled.div`
  background-color: transparent;
  border: none;

  &:focus, svg:focus {
    outline: none;
  }

  & > div {
    margin: 5px 5px 5px 0;
  }
`;

export const EditableInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  h3 { margin-block: 4px; }

`;