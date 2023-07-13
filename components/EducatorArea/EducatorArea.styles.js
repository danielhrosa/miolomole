import styled, { css } from "styled-components";

export const EducatorArea = styled.div`
`;

export const EducatorAreaSliderCard = styled.div`
  height: 150px;
  width: 200px;
  border-radius: 20px;
  background-color: ${({ color }) => color};
  color: #fff;
  display: flex !important;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: -0.011em;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  div { margin: 0; }
  position: relative;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const EducatorAreaPosts = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 50px;
`;

export const SliderContainer = styled.div`
  ${({ colors, index }) => css`
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
    flex-direction: column;

    width: 100%;

    .slick-slide { padding: 10px 30px; }

    .slick-list{
      height: 220px;
      padding: 30px 0;
      @media (min-width: 768px) { height: 230px; }
    }

    .slick-prev, .slick-next {
      z-index: 10; 
      width: 15px;
      height: 15px;
      top: 110px;
      border-bottom: 5px solid ${colors[index]};
      &::before { display: none; }

      &::after { 
        position: absolute;
        top: 200px;
        background-color: red;
        width: 40px;
        height: 100px;
        z-index: 10;
      }
    }

    .slick-prev {
      border-left: 5px solid ${colors[index]};
      transform: rotate(45deg);
      left: 10px;
    }

    .slick-next {
      border-right: 5px solid ${colors[index]};
      transform: rotate(-45deg);
      right: 10px;
    }
    
    border-bottom: 5px solid ${colors[index]};
    
    @media (min-width: 768px) { flex-direction: row; }
    @media (min-width: 1023px) {
      border-bottom: 5px solid ${colors[(index + 1) % colors?.length]};
      .slick-prev, .slick-next { border-bottom: 5px solid ${colors[(index + 1) % colors?.length]} };
      .slick-prev { border-left: 5px solid ${colors[(index + 1) % colors?.length]}; }
      .slick-next { border-right: 5px solid ${colors[(index + 1) % colors?.length]}; }
    }
    /* @media (min-width: 1250px) {
      border-bottom: 5px solid ${colors[(index + 2) % colors?.length]};
      .slick-prev, .slick-next { border-bottom: 5px solid ${colors[(index + 2) % colors?.length]} };
      .slick-prev { border-left: 5px solid ${colors[(index + 2) % colors?.length]}; }
      .slick-next { border-right: 5px solid ${colors[(index + 2) % colors?.length]}; }
    } */
  `}
`;

export const AddButton = styled.div`
  ${({ theme: { color: { white, black } }, color }) => css`
    position: absolute;
    height: 50px;
    bottom: 0px;
    right: 0px;
    width: 100%;
    color: ${color};

    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: ${white};
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;

    z-index: 5;
    cursor: pointer;

    font-weight: 700;
    letter-spacing: 0.7px;

    span {
      font-size: 36px;
      line-height: 56px;
    }

    &:hover {
      color: ${({ theme: { color: { blue } } }) => blue};
      transition: .5s cubic-bezier(.22,.68,0,1.71);
    }

    @media (min-width: 768px){
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      width: 200px;
      color: ${black}
    }
  `}
`;

export const EducatorAreaPostsEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  padding: 32px 16px;
`;

export const EducatorAreaSliderCardButtons = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const EducatorAreaHeader = styled.div`
  position: relative;
  width: 100%;
`;