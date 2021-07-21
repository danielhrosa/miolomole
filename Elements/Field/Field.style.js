import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const Field = styled.div`
  grid-area: ${({ name }) => name};
  position: relative;
  color: ${({ theme: { color: { blackMedium }}}) => blackMedium } !important;
  width: 100%;
  ${({ hasValue }) => hasValue && css`
    label {
      font-size: 12px;
      transform: translateY(0);
      font-weight: bold;
    }
  `};

  &:focus-within {
    label {
      font-size: 12px;
      transform: translateY(0);
      font-weight: bold;
    }
  }
`;

export const FieldEditable = styled.div`
  ${({styles}) => styles}
`

export const FieldReadOnly = styled.div`
  width: 100%;
  background-color: unset;
`

export const LabelEditable = styled(forwardRef((props, ref) => <TextareaAutosize {...props} ref={ref} />))`
  background-color: transparent;
  resize: none;
  border: none;
  ${({styles}) => styles };
  ${({isLoggedIn}) => isLoggedIn && css`:focus { outline: none; box-shadow: none }` }
`

export const FieldPassword = styled.div`
  grid-area: ${({ name }) => name};
  position: relative;
  color: ${({ theme: { color: { blackMedium }}}) => blackMedium } !important;
  display: flex;
  align-items: center;
  
  ${({ hasValue }) => hasValue && css`
    label {
      font-size: 12px;
      transform: translateY(0);
      font-weight: bold;
    }
  `};

  &:focus-within {
    label {
      font-size: 12px;
      transform: translateY(0);
      font-weight: bold;
    }
  }
`;

export const FieldOuterLabel = styled.label`
  grid-area: ${({ name }) => name};
  font-family: 'Open Sans';
  font-weight: ${({ theme: { fontWeight: { fontWeightBold }}}) => fontWeightBold };
  font-size: ${({ theme: { spacing: { fontSizeSM }}}) => fontSizeSM };
  margin-bottom: -24px;
  color: ${({ theme: { color: { blackMedium }}}) => blackMedium };

`;

export const FieldRadioButtons = styled.div`
  grid-area: ${({ name }) => name};
  display: flex;
  gap: 24px;
`;

export const FieldsRadios = styled.div`
  grid-area: ${({ name }) => name};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media screen{
    @media (min-width: 768px){
      flex-direction: row;
      justify-content: center;
    }
  }
`

export const FieldRadioButton = styled.label`
  font-family: 'Open Sans';
  font-size: ${({ theme: { spacing: { fontSizeXS }}}) => fontSizeXS };
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid ${({ theme: { color: { blackDark }}}) => blackDark };
  transition: color .3s ease, background-color .3s ease, border .3s ease;
  letter-spacing: .45px;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: ${({ theme: { color: { brand }}}) => brand };
    letter-spacing: 0px;
    font-weight: ${({ theme: { fontWeight: { fontWeightBold }}}) => fontWeightBold };
    border: 1px solid ${({ theme: { color: { brand }}}) => brand };
  }

  ${({ checked }) => checked && css`
    border: 1px solid ${({ theme: { color: { brand }}}) => brand };
    color: ${({ theme: { color: { white }}}) => white };
    letter-spacing: 0px;
    font-weight: ${({ theme: { fontWeight: { fontWeightBold }}}) => fontWeightBold };
    background-color: ${({ theme: { color: { brand }}}) => brand };
    &:hover{
      color: ${({ theme: { color: { white }}}) => white };

    }
  `}



  input {
    display: none;
  }
`;


export const FieldRadio = styled.label`
  font-family: 'Open Sans';
  font-size: ${({ theme: { spacing: { fontSizeXS }}}) => fontSizeXS };
  padding: 8px;
  letter-spacing: 0px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  cursor: pointer;
  position: relative;
  color: ${({ theme: { color: { blackMedium }}}) => blackMedium };

  ::after{
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid ${({ theme: { color: { brand }}}) => brand };
    margin-right: 8px;
  }

  ${({ checked }) => checked && css`
    font-weight: ${({ theme: { fontWeight: { fontWeightMediumLarge }}}) => fontWeightMediumLarge };

    ::before{
      content: '✓';
      width: 15px;
      height: 15px;
      position: absolute;
      left: 11px;
      top: 9px;
      color: ${({ theme: { color: { white }}}) => white };
      font-family: 'system-ui';

    }
    ::after{
      /* padding: 5px; */
      background-color: ${({ theme: { color: { brand }}}) => brand };
      /* width: 20px; */
      /* height: 10px; */
    }

  `}

  &:hover {
    background-color: ${({ theme: { color: { whiteLight }}}) => whiteLight };
  }

  input {
    display: none;
  }
`;

export const InputRadioMark = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid ${({ theme: { color: { blue }}}) => blue };
`

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  font-size: ${({ theme: { spacing: { fontSizeXXS }}}) => fontSizeXXS } !important;
  font-weight: ${({ theme: { fontWeight: { fontWeightRegular }}}) => fontWeightRegular };
  transform: translateY(34px);
  transition: font-size .3s ease, transform .3s ease;
  z-index: 0;
`;

export const StyledFieldTip = styled.p`

`;

export const StyledFieldError = styled.p`

`;

export const NormalLabel = styled(forwardRef((props, ref) => <label {...props} ref={ref} />))`
  ${({styles}) => styles}
`

export const FieldTextArea = styled.div`
  font-size: ${({ theme: { fontSize: { fontSizeXXS }}}) => fontSizeXXS};

  resize: none;
  position: relative;
  display: flex;

  width: 100%;
  height: 120px;

  border: 2px solid;
  border-color: ${({ theme: { color: { blue }}}) => blue};

  padding: ${({ theme: { spacing: { spacingSquishXS }}}) => spacingSquishXS};
  
  grid-area: ${({ name }) => name};
  gap: 24px;
`;

export const StyledFieldLinkWarning = styled.p`
  /* text-align: center;
  font-size: 18px;
  font-weight: 600; */
`;

export const SeparatorContainer = styled.div`
  position: relative;

  @media screen{
    @media (min-width: 768px){
      position: inherit;
    }
  }
`

export const SeparatorLine = styled.span`
  width: 100%;
  /* left: -25%; */
  height: 2px;
  position: absolute;
  background-color: ${({ theme: { color: { grayLight }}}) => grayLight };

  @media screen{
    @media (min-width: 768px){
      width: 90%;
      left: 5%;
      font-size: ${({ theme: { fontSize: { fontSizeSM }}}) => fontSizeSM };
    }
  }
`

export const PasswordToggle = styled.div`
  position: absolute;
  align-self: center;
  margin: 10px;
  right: 0;
  bottom: 0px;
  cursor: pointer;
`

export const SwitchField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const FieldMediaUploads = styled.div`
  width: 400px;
  height: auto;
`