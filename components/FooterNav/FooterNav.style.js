import styled from 'styled-components';

export const FooterNav = styled.ul`
  display: none;
  width: 60%;
  grid-area: headerNav;
  list-style: none;
  justify-content: space-around;

  @media (min-width: 1024px){ display: flex; }
`;

export const NavItem = styled.li`
  letter-spacing: 0.13px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: all 0.3s;
  color: ${({ isActive }) => isActive ? '${({ theme: { color: { brand } } }) => brand};' : '#474747'};
  background: ${({ isActive }) => isActive ? '#E4E4E480' : 'none'};
  border-radius: 8px;
  padding: 4px 8px;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 15px;
  text-align: center;

  :hover { 
    color: ${({ theme: { color: { brand } } }) => brand};;
  }

  @media (min-width: 1024px) { margin-bottom: 0 }
`