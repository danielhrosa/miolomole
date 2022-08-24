import styled from 'styled-components';

export const ContactAddressListItem = styled.li`
  display: flex;
  margin-bottom: 28px;
  grid-area: ${({ name }) => name};

  svg{
    margin-left: 2px;
    margin-right: 8px;
    width: 12px;
  }
  :hover{
    svg{
      path{
        fill: ${({ theme: { color: { brand } } }) => brand};;
      }
    }
    span{
      font-weight: 600;
      color: ${({ theme: { color: { brand } } }) => brand};;
      letter-spacing: 0;   
    }
  }
  a{
    position: relative;
    display: flex;
    align-items: center;
    transition: all 0.3s;

    /* &:after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      display: block;
      width: 100%;
      max-width: 0;
      height: 2px;
      background-color: ${({ theme: { color: { brand }}}) => brand};
      transition: .3s ease;
    }

    &:hover {
      &:after {
        max-width: 100%;
        transition: .3s ease;
      }
    } */
  }

  @media (min-width: 1024px){
    margin-bottom: 0;
    letter-spacing: 0.3px;

    br {
      display: none;
    }

    &:hover {
      &:after {
        max-width: 520px;
        transition: .3s ease;
      }
    }
  }
`

export const Label = styled.span`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  letter-spacing: 0.195px;
  align-items: flex-end;
  color: ${({ theme: { color: { blackDark }}}) => blackDark };

`