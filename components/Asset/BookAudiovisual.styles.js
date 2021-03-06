import styled from 'styled-components';

export const BookAcessivel = styled.div`
  padding-top: 65px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 80vh;

  .container { justify-content: unset }

  >div:nth-child(even){
    background-color: ${({ theme: { color: { brandSmoth }}}) => brandSmoth };
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`

export const Book = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`

export const BookWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const AccessibleTitle = styled.h1`
  font-family: 'Montserrat';
`

export const AccessibleCover = styled.img`
  
`

export const MediaTitle = styled.p`
  
`