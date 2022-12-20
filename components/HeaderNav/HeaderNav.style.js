import styled from 'styled-components';

export const HeaderNav = styled.ul`
  grid-area: headerNav;
  list-style: none;
  justify-content: space-around;
  margin: 0 auto;
  height: 170px;
  width: 100%;
  padding: 0;
  top: 90px;
  position: relative;
  
  @media screen {
    @media (min-width: 1024px) {
      height: unset;
      position: unset;
      width: 80%;
      display: flex;
      margin: auto;
      margin-right: 20px;
      margin-block-start: 1em;
      margin-block-end: 1em;
      max-width: 1030px;
    }
  }
`
export const NavItem = styled.li`
  letter-spacing: 0.13px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: all 0.3s;
  color: ${({ isActive, theme: { color: { brand }}}) => isActive ? brand : '#474747'};
  background: ${({ isActive }) => isActive ? '#E4E4E480' : 'none'};
  border-radius: 8px;
  padding: 4px 8px;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 15px;
  text-align: center;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #767676;

  :hover { 
    color: ${({ theme: { color: { brand } } }) => brand};;
  }

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`