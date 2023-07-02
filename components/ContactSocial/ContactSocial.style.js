import styled from 'styled-components';

export const ContactSocial = styled.li`
  margin-bottom: 16px;
  grid-area: ${({ name }) => name};
  justify-self: end;

  @media (min-width: 1024px){
    margin-bottom: 0; 
  }
`

export const ContactSocialList = styled.ul`
  display: flex;
  padding-inline-start: 0;
  justify-content: center;
  justify-content: space-between;
  width: 180px;
  margin: 0 auto;

`
export const ContactSocialListItem = styled.li`
  display: flex;
  align-items: center;
  
  path {
    fill: ${({ theme: { color: { blackLight }}}) => blackLight };
    transition: .3s ease;
  }

  &:hover{
    path{
      fill: ${({ theme: { color: { brand }}}) => brand };
    }
  }
`