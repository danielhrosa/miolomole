import styled, { css } from 'styled-components';

export const OurProductsList = styled.div`
  position: relative;
`;
export const AddBookButton = styled.div`
  top: 0px;
  right: 0px;
  background-color: white;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-bottom: 30px;
  span {
    font-size: 36px;
    line-height: 56px;
    font-weight: 500;
  }
  &:hover {
    color: ${({ theme: { color: { blue } } }) => blue};
    transition: .5s cubic-bezier(.22,.68,0,1.71);
  }

  @media (min-width: 768px){
    position: absolute;
    width: 200px;
    top: -40px;
  }
`;
export const OurProductsApresentation = styled.div`
  width: 100%;
  text-align: center;
`;
export const OurProductsTitle = styled.h1`
  font-family: Amatic SC;
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  line-height: 50px;
  margin: 0;
  margin-bottom: 30px;
  width: 100%;
  white-space: break-spaces;

`;
export const OurProductsText = styled.p`
  font-family: Montserrat;
  font-weight: 500;
  font-size: ${({ theme: { fontSize: { fontSizeSMM } } }) => fontSizeSMM};
  line-height: 30px;
  text-align: center;
  width: 100%;
  white-space: break-spaces;
  border: none;
  margin: 0;
  padding: 0;
  resize: none;
  margin-bottom: 30px;
`;
export const ProductCards = styled.div`
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
    margin-bottom: 30px;
  }
`;
export const ProductCard = styled.div`
  text-align: center;
  cursor: pointer;
  margin-bottom: 30px;
  position: relative;

  @media screen{
    @media (min-width: 1024px){
      width: 250px;
    }
  }
`;
export const ProductCardButtons = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 8px;
`;
export const ProductCardImage = styled.img`
  width: 250px;
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 10px;
  ${({ isHidden }) => isHidden && css`filter: grayscale(1);`}
`;
export const ProductCardTitle = styled.div`
  font-family: Montserrat;
  font-weight: 600;
  font-size: ${({ theme: { fontSize: { fontSizeXS } } }) => fontSizeXS};
  line-height: 26px;
  margin-bottom: 5px;
`;
export const ProductCardPrice = styled.div`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
`;
export const BookOrder = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  gap: 16px;

`;
export const Grid = styled.div`
  display: grid;

  gap: 30px;

  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
export const ReorderBooks = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  margin: 30px 0;
  font-weight: bold;
  font-size: 40px;
  font-family: Amatic SC;
  color: #E2A610;
`;