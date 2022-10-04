import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  bottom: 0px;
  bottom: 0px;
  background-color: ${({ theme: { color: { brandWhite } } }) => brandWhite};
  .container{ padding: 0; }
`
export const FooterNav = styled.nav`
  width: 100%;
  margin: auto;
`
export const FooterNavList = styled.ul`
  list-style: none;
  border-bottom: 1px solid #474747;
  padding-inline-start: 0;
  padding: 0 16px;
  gap: 18px;
  flex-direction: column;
  
  @media (min-width: 1024px){
    flex-direction: row;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 20px;
    justify-content: space-between;
  }
`

export const FooterNavItem = styled.li`
  margin-bottom: 28px; 
  cursor: pointer;
  grid-area: ${({ name }) => name};
  justify-self: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme: { fontSize: { fontSizeXS } } }) => fontSizeXS};
  line-height: 16px;

  text-align: center;

  @media (min-width: 1024px){
    margin-bottom: 0; 
  }
  
`
export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  padding-bottom: 20px;
  width: 100%;
  flex-direction: column-reverse;
  @media screen{
    @media (min-width: 1024px){
      flex-direction: row;
    }
  }
`