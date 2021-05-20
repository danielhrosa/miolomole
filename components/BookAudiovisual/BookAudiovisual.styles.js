import styled from 'styled-components';

export const BookAcessivel = styled.div`
  padding-top: 65px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .container { justify-content: unset }

  >div:nth-child(even){
    background-color: ${({ theme: { color: { brandSmoth }}}) => brandSmoth };
  }
`;

export const Title = styled.h1`
  text-align: center;
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