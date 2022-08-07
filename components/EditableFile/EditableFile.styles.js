import styled, { css } from 'styled-components';

export const Editable = styled.div`
`;

export const Dropzone = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 43px;
  width: 210px;
  height: calc(100% - 25px);
  border: 2px dashed ${({ theme: { color: { brand } } }) => brand};
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  position: relative;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};;
  ${({ hasFile }) => hasFile && css`padding-right: 30px;`}

  a,
  p {
    color: #666;
    font-weight: 700;
    font-family: Montserrat;
    text-align: center;
    padding: 0 10px;

    &:visited {
      color: ${({ theme: { color: { brandDark } } }) => brandDark};
    }
  }
`;