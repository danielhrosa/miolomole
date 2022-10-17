import styled from "styled-components";

export const EducatorArea = styled.div`

`;

export const EducatorAreaSlider = styled.div`
  height: 150px;
  width: 1000px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  overflow-x: scroll !important;
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
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const EducatorAreaPosts = styled.div`
  padding: 16px;
`;