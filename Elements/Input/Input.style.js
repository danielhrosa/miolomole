import Button from '../Button';
import { Range } from 'rc-slider';
import Switch from "react-switch";
import { forwardRef } from 'react';
import Input from 'react-input-mask';
import styled, { css } from 'styled-components';
import Select from "react-select/async-creatable";
import { SortableContainer } from 'react-sortable-hoc';
import TextareaAutosize from 'react-textarea-autosize';

const SortableSelect = SortableContainer(Select);

export const StyledInputSwitchs = styled.div`
`;

export const StyledInputDate = styled.div`
`;

export const InputFile = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const DropArea = styled.span`
  width: 130px; 
  height: 100px;
  border: 3px solid ${({ theme: { color: { blackMedium }}}) => blackMedium };;
  border-right: none;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`

export const ActionButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  cursor: copy;
  margin: 30px 0;
  width: 182px;

  @media (min-width: 1024px){ 
    padding: 30px;  
    width: 252px;
  }
  p{
    font-size: 12px;
    @media screen{
      @media (min-width:1024px){
        font-size: 16px;

      }
    }
  }
  span{
    padding: 20px;
  }
`

export const DeleteButton = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid ${({ theme: { color: { error }}}) => error };;
  border-left: none;
  cursor: auto;
  p { margin: 5px; }
`

export const InputPreview = styled.div`
  grid-area: preview;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  background-color: ${({ isLoggedIn }) => isLoggedIn ? '#99999950' : '#FFFFFF' };
  position: relative;
  @media screen{
    @media (min-width: 1024px){
      min-height: 100%;
    }
  }

  img { 
    width: 100%;
    object-fit: cover;
    height: 28vw;

    @media screen{
      @media (min-width: 1024px){
        height: 260px;
      }
    }
  }

`

export const Loading = styled.div`
  width: 100%;
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  grid-gap: 20px;
`;

export const ProgressBar = styled.div`
  height: 18px;
	background-color: #ee303c;
  border-radius: 4px;
  transition: 0.4s linear;
  transition-property: width, background-color;
  background-color: ${({ theme: { color: { brand }}}) => brand };;
  width: ${({ progress }) => `${progress}%` };
  background-image: linear-gradient(
        45deg, #8AC2BF 25%,
        transparent 25%, transparent 50%,
        #8AC2BF 50%, #8AC2BF 75%,
        transparent 75%, transparent);
  /* Só não coloquei cor global porq não aceitou no linear gradient hahaha */
  animation: progressAnimationStrike 6s;
`;

export const Progress = styled.div`
  width: 100%;
  padding: 6px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
`;

export const InputRadio = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`

export const InputRadioCheckMark = styled.div`
  width: 100px;
  height: 100px;
  right: 0;
  position: absolute;
`

export const InputRadioLabel = styled.label`
  width: 107px;
  height: 34px;
  border-radius: 20px;
  border: 1.5px solid ${({ theme: { color: { blackLigthly }}}) => blackLigthly };
  padding: 5px 16px;
  margin-right: 15px;
  text-align: center;
  font-family: 'Open Sans';
  font-weight: ${({ theme: { fontWeight: { fontWeightLight }}}) => fontWeightLight };
  
  &:has(input:checked){
    background-color: ${({ theme: { color: { blue }}}) => blue };
  }
`

export const InputRadioContainer = styled.div`
  display: flex;
  margin-bottom: 26px;

`

export const StyledInputSwitchLabel = styled.p`
`;

export const StyledInputSwitchOption = styled.div`
`;

export const InputText = styled(Input)`
  width: 100%;
  border: none;
  border-bottom: 1px solid #151B64;
  padding: 24px 0 16px;
  font-size: ${({ theme: { fontSize: { fontSizeXXS }}}) => fontSizeXXS};

  &:focus {
    outline: none;
  }
`;

export const InputSearchContainer = styled.div`
  border-radius: ${({theme: { borderRadius: { borderRadiusXL}}}) => borderRadiusXL};
  background: ${({ theme: { color: { grayLight }}}) => grayLight};
  width: 200px;
  height: 41px;
  display: flex;
  align-items: center;
  position: relative;

  svg{
    position: absolute;
    right: 41px;
    top: 15px;
  }

  @media screen{
    @media (min-width: 375px){
      width: 220px;
      height: 41px;
      margin-right: 20px;
    }
    @media (min-width: 425px){
      width: 250px;
      height: 41px;
      margin-right: 20px;
    }
    @media (min-width: 768px){
      width: 500px;
      height: 41px;
    }
    @media (min-width: 1024px){
      width: 270px;
      height: 41px;
    }
    @media (min-width: 1440px){
      width: 353px;
      height: 41px;
    }
  }
`
export const InputSearch = styled.div`

`
export const switchStyles = {
}

export const StyledInputSwitch = styled(Switch)``;

export const StyledLabel = styled.label`
`;

export const StyledInputSelect = styled(SortableSelect)`
  ${({variation}) => variation === 'borderSelect'
    ? css`
      width: 100%;
      font-size: ${({ theme: { fontSize: { fontSizeXS }}}) => fontSizeXS};
    
      .inputSelect__control {
        padding: 0;
        border: none;
        min-height: 40px;
        box-shadow: 0 0 0 0 #000000 !important;
        border: 1px solid ${({ theme: { color: { blackDark }}}) => blackDark};
        border-radius: 8px;
      }
    
      .inputSelect__option--is-selected  {
        background: ${({ theme: { color: { brandLight }}}) => brandLight};
      }
    
      .inputSelect__option--is-focused {
        background: ${({ theme: { color: { brand }}}) => brand};
        color: ${({ theme: { color: { white }}}) => white};
      }
    
      &:focus {
        outline: none;
        border-color: none !important;
      }
    `
    : css`
      padding-top: 18px;
      border-bottom: 2px solid #BFC0C5;

      .inputSelect__control{
        border: none !important;
        box-shadow: unset !important;
        &:hover {
          border: none !important;
          box-shadow: unset !important;
        }
      }

      .inputSelect__indicator-separator {
        display: none;
      }

      .inputSelect__dropdown-indicator{
        
        svg{
          display: none;
        }
      
        ::after{
          content: '';
          height: 0;
          width: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid ${({ theme: { color: { blackMedium }}}) => blackMedium };
        }
      }

      .inputSelect__option--is-selected  {
          border: none;
        }

      .inputSelect__option--is-focused {
        background: ${({ theme: { color: { brand }}}) => brand};
        color: ${({ theme: { color: { white }}}) => white};

      }
  `};
`

export const StyledDropzone = styled.div`
`;

export const StyledFieldError = styled.p`
`;

export const StyledFieldLink = styled(Button)`

`;

export const TextArea = styled(forwardRef((props, ref) => <TextareaAutosize {...props} ref={ref} />))`
  border: 1px solid #151B64;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  min-height: 140px;
  margin-top: 24px;
  padding: 10px;
  font-family: 'Open Sans';
  font-size: 14px;
  line-height: 20px;
  color: #A1A1A1;

  &:focus {
    outline: none;
    border: 1px solid #151B64;
  }
`

export const InputRange = styled(Range)`
  margin: 20px 0;
  height: 20px
`
