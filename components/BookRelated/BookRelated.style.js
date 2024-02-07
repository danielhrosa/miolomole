import styled from 'styled-components';

export const BookRelated = styled.div`

`
export const RelatedBooks = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 300px;
  gap: 16px;
  @media screen{
    @media (min-width: 768px){ grid-template-columns: 1fr 1fr; }
    @media (min-width: 1024px){ grid-template-columns: 1fr 1fr 1fr 1fr; }
  }
`
export const RelatedTitle = styled.h1`
  font-family: Amatic SC;
  font-weight: bold;
  font-size: 40px;
  line-height: 1.3;
  display: flex;
  align-items: flex-end;
  letter-spacing: 2.4px;
  margin-bottom: 50px;

`
export const BookRelatedCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`
export const BookRelatedCover = styled.div`
  background-image: url(${({ img }) => img });
  width: 100%;
  height: 180px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  @media (min-width: 1024px){
    width: 150px;
    height: 200px;
  }
`
export const BookRelatedItemTitle = styled.div`
  font-family: Montserrat;
  font-weight: 600;
  font-size: ${({ theme: { fontSize: { fontSizeXS }}}) => fontSizeXS };
  line-height: 1.5;
  color: #071825;
  margin: 20px;
  width: 200px;
  text-align: center;
`