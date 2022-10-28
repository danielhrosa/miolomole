import styled from "styled-components";

export const EducatorArea = styled.div`
`;

export const EducatorAreaSliderCard = styled.div`
  height: 100px;
  width: 150px;
  border-radius: 20px;
  background-color: ${({ color }) => color};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 700;
  letter-spacing: -0.011em;
  padding: 16px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const EducatorAreaPosts = styled.div`
  display: flex;
  flex-direction: column;

  gap: 50px;
  padding: 16px;

  @media (min-width: 768px) {
    padding: 100px;
  }
`;

export const SliderContainer = styled.div`
  /* display: flex; */
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  flex-direction: column;

  width: 100%;

  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AddButton = styled.div`
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
  z-index: 5;
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
    top: -55px;
  }
`