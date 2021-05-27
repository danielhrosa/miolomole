import styled from 'styled-components';

export const UsuariosWrapper = styled.div`
  margin: 30% auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > section { width: 80%; margin: 0 auto;}
  > section > form > div, > section > form > button { margin: 15px }
  #occupation > div.inputSelect__control.css-yk16xz-control > div { padding: 0; }
  > section > form > button { justify-self: flex-end }

  img{
    height: 100%;
    overflow: hidden;
  }

  textarea {
    width: 100%;
    height: 170px;
    resize: none;
  }

  @media (min-width: 1024px){
    margin: 10% auto;
  }

`
