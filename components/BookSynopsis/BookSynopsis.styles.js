import styled, { css } from 'styled-components';

export const BookSynopsis = styled.div`
  background: #FFE495;
  width: 100%;
  padding: 50px;

  .container{
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen{
      @media (min-width: 1024px){
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-areas:
          "sinopsys video"
          "sinopsys video"
          "button video"
        ;
        grid-gap: 20px;
      }
    }
  }

  #save{ grid-area: button }
`

export const SynopsisWrapper = styled.div`
  grid-area: sinopsys;
`

export const SynopsisTitle = styled.div`
  font-family: Amatic SC;
  font-weight: bold;
  font-size: 40px;
  letter-spacing: 2.4px;
  text-align: center;
  @media (min-width: 1024px){ text-align: left }
`
export const SynopsisInfo = styled.div`
  width: 80vw;

  @media screen{
    @media (min-width: 1024px){
      width: 70%;
    }
  }
`

export const SynopsisText = styled.div`
  textarea {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    height: auto;
    font-size: 13px;
    line-height: 1.8;
    margin-bottom: 30px;
    color: #4A4A4A;
    padding: 0;
    ${({isLoggedIn}) => !isLoggedIn 
      ? css `resize: none; background-color: transparent;` 
      : css `background-color: rgba(255, 255, 255, 0.5); padding: 10px;`
    }
    border: none;
    :focus { border: none }
    @media screen{
      @media (min-width: 1024px){
        margin-bottom: 20px;
      }
    }
  }
`

export const SynopsisVideo = styled.div`
  grid-area: video;
  width: 100%;
  height: auto;
  align-self: center;

  .Playerstyles__RPlayer-llteo8-0{ padding: 0 }

  [type="video"] { height: 100% }
`;

export const Type = styled.div`
  width: 100%;
`

export const InputVideo = styled.div`
  background-color: ${({ theme: { color: { blackLigthly }}}) => blackLigthly };
  opacity: 70%;
  height: 200px;
  border: 4px solid ${({ theme: { color: { blackLighter }}}) => blackLighter };;  
  border-radius: 10px;
  position: relative;
  cursor: not-allowed;
  :hover { background-color: ${({ theme: { color: { blackLighter }}}) => blackLighter } }
  /* :active { background-color: #858585 }; */
  ::before {
    content: "Vídeo \\a (em manutenção)";
    white-space: pre;
    text-align: center;
    overflow: auto;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
  transition: .1s all cubic-bezier(0.215, 0.610, 0.355, 1);
`
