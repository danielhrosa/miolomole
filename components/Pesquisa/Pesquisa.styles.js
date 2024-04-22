import styled, { css } from 'styled-components'

export const Pesquisa = styled.div`
  min-height: 90vh;
  margin-top: 100px;

  iframe {
    ${({ iframeProps }) => css`
      height: ${Number(iframeProps?.height + 500)}px !important;
      width: 100%;
    `}
  }
`;