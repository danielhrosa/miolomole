import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';

const primary = css`
  justify-self: center;
  padding: 5px;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 2px;
  color: #FFFFFF;
  width: auto;
  min-width: 200px;
  height: 50px;
  background: ${({ theme: { color: { brand } } }) => brand};
  border-radius: 12px;
  border: none;
  color: white;
  box-shadow: 3px 3px 2px rgb(115 137 169 / 20%);
  transition: all 0.3s; 

  svg {
    path {
      stroke: ${({ theme: { color: { white } } }) => white};
    }
  }

  &:hover {
    background: ${({ theme: { color: { brand } } }) => darken('.05', brand)};
  }

  &:active, &:focus {
    background: ${({ theme: { color: { brand } } }) => darken('.1', brand)};
  }
`

const addMedia = css`
  justify-self: center;
  padding: 15px;
  p {
    font-family: 'Open Sans';
    font-weight: bold;
    font-size: 28px;
    letter-spacing: 2px;
  }
  color: #FFFFFF;
  width: 100%;
  height: 50px;
  background: ${({ theme: { color: { brand } } }) => brand};
  border-radius: 12px;
  border: none;
  color: white;
  box-shadow: 3px 3px 2px rgb(115 137 169 / 20%);
  transition: all 0.3s; 
  margin: 20px 0;

  svg {
    path {
      stroke: ${({ theme: { color: { white } } }) => white};
    }
  }

  &:hover {
    background: ${({ theme: { color: { brand } } }) => darken('.05', brand)};
  }

  &:active, &:focus {
    background: ${({ theme: { color: { brand } } }) => darken('.1', brand)};
  }
`

const inverse = css`
  background: transparent ;
  color: ${({ theme: { color: { white } } }) => white};

  svg {
    path {
      stroke: ${({ theme: { color: { white } } }) => white};
    }
  }

  &:hover {
    background: ${({ theme: { color: { white } } }) => white};
    color: ${({ theme: { color: { brandDark } } }) => brandDark};
  }

  &:active, &:focus {
    background: ${({ theme: { color: { brandDark } } }) => lighten('.5', brandDark)};
    color: ${({ theme: { color: { brandDark } } }) => brandDark};
  }
  
`

const primaryDark = css`
  background: ${({ theme: { color: { brandDarkGreen } } }) => brandDarkGreen};
  color: ${({ theme: { color: { white } } }) => white};

  svg {
    path {
      stroke: ${({ theme: { color: { white } } }) => white};
    }
  }

  &:hover {
    background: ${({ theme: { color: { brandDarkGreen } } }) => darken('.05', brandDarkGreen)};
  }

  &:active, &:focus {
    background: ${({ theme: { color: { brandDarkGreen } } }) => darken('.1', brandDarkGreen)};
  }
  
`

const secondary = css`
  background: ${({ theme: { color: { white } } }) => white};
  color: ${({ theme: { color: { brandDark } } }) => brandDark};
  height: 50px;
  letter-spacing: 2px;

  /* border-radius: 29.5px; */
  &:hover {
    background: ${({ theme: { color: { brandDark } } }) => brandDark};
    color: ${({ theme: { color: { white } } }) => white};
  }

  &:active, &:focus {
    background: ${({ theme: { color: { brandDark } } }) => darken('0.05', brandDark)};
    color: white;
  }
`

const danger = css`
  background: ${({ theme: { color: { danger } } }) => danger};
  color: ${({ theme: { color: { white } } }) => white};

  &:hover {
    background: ${({ theme: { color: { danger } } }) => darken('.05', danger)};
  }

  &:active, &:focus {
    background: ${({ theme: { color: { danger } } }) => darken('.1', danger)};
  }

  svg {
    path {
      stroke: ${({ theme: { color: { white } } }) => white};
    }
  }
`

const dark = css`
  background: ${({ theme: { color: { gray } } }) => gray};
  color: ${({ theme: { color: { white } } }) => white};

  &:hover {
    background: ${({ theme: { color: { gray } } }) => darken('.05', gray)};
  }

  &:active, &:focus {
    background: ${({ theme: { color: { gray } } }) => darken('.1', gray)};
  }

  svg {
    path {
      stroke: ${({ theme: { color: { white } } }) => white};
    }
  }
`

const remove = css`
  background: ${({ theme: { color: { error } } }) => error};
  justify-self: center;
  padding: 5px;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 2px;
  color: #FFFFFF;
  min-width: 100%;
  border: none;
  &:hover {
    background: ${({ theme: { color: { error } } }) => darken('.05', error)};
  }

  &:active, &:focus {
    background: ${({ theme: { color: { error } } }) => darken('.1', error)};
  }

  &:disabled {
    color: ${({ theme: { color: { white } } }) => white};
  }
`

const rounded = css`
  height: 50px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 29.5px;
  border-bottom-right-radius: 29.5px;
  border: none;
  background-color: #FFFFFF;
  font-family: Montserrat;
  font-weight: 500;
  font-size: ${({ theme: { fontSize: { fontSizeXS } } }) => fontSizeXS};
  padding: 12px 30px;
  color: #2D2E2E;
  text-transform: unset;
  width: 100px;
  transition: .3s background-color ease-in-out;

  @media screen{
    @media (min-width: 900px){
      width: 140px;

    }
  }

  :hover{
    background-color: #E5F0FF;
  }
`

const bigIcon = css`
  width: 38px;
  right: -2px;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: 2px dashed ${({ theme: { color: { brand } } }) => brand};
  border-radius: 0;

  svg {
    width: 100%;
    margin: 0;
  }

  &:disabled {
    background: transparent;
    cursor: not-allowed;

    &:hover {
      background: transparent;
    }
  }
`

const file = css`
  display: flex;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: #3C6ED0;
  text-align: center;
  font-family: Roboto;
  font-size: 29px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px; /* 113.793% */

  border-radius: 8px;
  background: #EDF8FF;

  /* ButtonHover */
  box-shadow: 0px 3px 10px 0px rgba(32, 132, 217, 0.50);
`

const button = css`
  grid-area: ${({ name }) => name};
  text-transform: uppercase;
  text-align: center;
  padding: 0 12px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 32px;
  border: 1px solid;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 3px 3px 2px rgb(115 137 169 / 20%);
  
  p {
    font-weight: ${({ theme: { fontWeight: { fontWeightBold } } }) => fontWeightBold};
    font-size: 12px;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background: ${({ theme: { color: { mediumGray } } }) => mediumGray};
    cursor: not-allowed;

    &:hover {
      background: ${({ theme: { color: { mediumGray } } }) => mediumGray};
    }
  }

  &.primary {
    ${primary}
  }
  
  &.addMedia {
    ${addMedia}
  }

  &.primaryDark {
    ${primaryDark}
  }

  &.secondary {
    ${secondary}
  }

  &.inverse {
    ${inverse}
  }

  &.danger {
    ${danger}
  }

  &.dark {
    ${dark}
  }

  &.remove {
    ${remove}
  }
  
  &.bigIcon {
    ${bigIcon}
  }

  &.rounded {
    ${rounded}
  }

  &.file {
    ${file}
  }
`

const customButton = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  &:focus, svg:focus { outline: none }

  svg {
    cursor: pointer;
    width: 30px;  
    height: 30px;
    border-radius: 50%;
  }
`

export const DeleteButton = styled.div`
  ${customButton}
  svg.delete:hover{
    transform: scale(1.2) rotate(15deg);
    transition: .2s cubic-bezier(.22,.68,0,1.71);
    
    path.tampa{
      transform: translate(-20px, -10px) rotate(-15deg);
      transition: .2s cubic-bezier(.22,.68,0,1.71);
    }

    path:nth-child(2){
      fill: #F15249;
      transition: .2s cubic-bezier(.22,.68,0,1.71);
    }
  }
`

export const EditButton = styled.div`
  ${customButton}
  svg.edit:hover{
    transform: scale(1.2) rotate(-45deg);
    transition: .2s cubic-bezier(.22,.68,0,1.71);
    path:nth-child(2){
      fill: #7584f2;
      transition: .2s cubic-bezier(.22,.68,0,1.71);
    }
  }
`

export const ConfirmButton = styled.div`${customButton}`
export const CancelButton = styled.div`${customButton}`

export const StyledButtonAction = styled.button`
  ${({ height }) => `height: ${height}px;`}
  ${button}
  ${({ color }) => color && css`background: ${color} !important;`}
`

export const ToggleHideButton = styled.div`
  svg {
    cursor: pointer;
    width: 30px;  
    height: 30px;
  }
  svg.hide:hover{
    transform: scale(1.2);
    transition: .2s cubic-bezier(.22,.68,0,1.71);
    .eye { fill: #FFFFFF; }
    .iris { animation: blink .2s cubic-bezier(.04,-0.01,.13,.85); };
    path.shadow{
      fill: ${({ isHidden }) => !!isHidden ? '#707070' : '#59A642'};
      transition: .2s cubic-bezier(.22,.68,0,1.71);
    }
  }

  @keyframes blink {
    0% { d: path('M134 175c-21 0-38-18-38-41 0-22 17-40 38-40s38 18 38 40c0 23-17 41-38 41Zm0-65c-13 0-23 11-23 24 0 14 10 24 23 24s23-10 23-24c0-13-10-24-23-24Z') }
    50% { d: path('M134 141.815C112.567 141.815 95.728 138.118 95.728 133.414C95.728 128.709 112.567 125.011 134 125.011C155.433 125.011 172.272 128.709 172.272 133.414C172.272 138.118 155.433 141.815 134 141.815ZM134 128.373C120.987 128.373 111.033 130.557 111.033 133.414C111.033 136.27 120.987 138.455 134 138.455C147.013 138.455 156.967 136.27 156.967 133.414C156.967 130.557 147.013 128.373 134 128.373Z') }
    100% { d: path('M134 175c-21 0-38-18-38-41 0-22 17-40 38-40s38 18 38 40c0 23-17 41-38 41Zm0-65c-13 0-23 11-23 24 0 14 10 24 23 24s23-10 23-24c0-13-10-24-23-24Z') }
  }

`;
