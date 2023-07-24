import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const Editable = styled.div`
  position: relative;
  z-index: 1;
  transition: background-color .2s cubic-bezier(.22,.68,0,1.71);
    
  >div {
    display: none; 
  }

  ${({isLoggedIn}) => isLoggedIn && css`
    &:hover {
      background-color: ${({ theme: { color: { brandVeryLighter }}}) => brandVeryLighter };
      background-size: 120%;
      border-radius: 10px;
      > div { display: flex }
    }
  `}
`

export const EditableInput = styled(forwardRef((props, ref) => <TextareaAutosize {...props} ref={ref} />))`
  ${({styles}) => styles };
  color: #000;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  &:focus { outline: none }
`

export const EditableButtons = styled.div`
  position: absolute;
  right: 0;
  bottom: 0px;
  display: flex;
  align-items: center;
  z-index: 1;
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
`
