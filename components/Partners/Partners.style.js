import styled from 'styled-components';

export const Partners = styled.li`
  margin-bottom: 28px;
  
  @media (min-width: 1024px){
    margin-bottom: 0; 
  }
`;

export const PartnersList = styled.ul`
  padding-inline-start: 0;
  display: flex;
  justify-content: center;
  img {
    height: 30px;
    margin: 8px;
    @media (min-width: 768px) {
      margin: 16px;
    }
  }
  
`;