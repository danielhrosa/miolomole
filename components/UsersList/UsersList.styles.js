import styled from "styled-components";
import Button from "../../Elements/Button";

export const UsersList = styled.div`
  padding: 50px 0 0 0 ;
  min-height: 70vh;
  width: 100%;
  max-width: 800px;

`
export const UsersTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme: { color: { brand } } }) => brand};;

`
export const UserHeader = styled.div`
  display: grid;
  grid-template-columns: 35px 1fr 2fr 30px 30px;
  align-items: center;
  grid-gap: 10px;
  justify-content: center;
  margin-bottom: 10px;
  @media screen{
    @media(max-width: 500px){grid-template-columns: 35px 1fr 2fr 20px 20px;}
    @media (min-width: 1024px){grid-template-columns: 55px 1fr 2fr 2fr 30px 30px;}
  }

  b{
    overflow: hidden; 
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical; 
    font-size: 12px;
    padding: 15px;
    :nth-child(2) {display: none;}
    @media(min-width: 1024px){
      font-size: unset;
      :nth-child(2){ display: unset; }
    }
  }
`
export const UsersListItem = styled.div`
  display: grid;
  grid-template-columns: 35px 1fr 30px 30px;
  align-items: center;
  grid-gap: 10px;
  margin-bottom: 30px;
  font-size: 12px;
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  :hover{ box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px; }
  :active { box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset; }

  transition: .3s cubic-bezier(0.19, 1, 0.22, 1);

  @media screen{
    @media (min-width: 1024px){grid-template-columns: 55px 1fr 2fr 2fr 30px 30px; font-size: unset;}
  }
`
export const UserAvatar = styled.image`
  background-color: ${({ theme: { color: { blackLight }}}) => blackLight };
  background-image: url(${({ img }) => img });
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-right: 10px;
  border-radius: 50px;
  @media screen{
    @media (min-width: 1024px){
      margin-right: 10px;
      width: 40px;
      height: 40px;
    }
  }
`
// No Mobile
export const UserName = styled.div`
  overflow: hidden; 
  text-overflow: ellipsis; 
  display: -webkit-box;
  -webkit-line-clamp: 1; 
  -webkit-box-orient: vertical;
  display: none;
  @media (min-width: 1024px){ display: unset; }
`
export const UserFullName = styled.div`
`
// No Mobile
export const UserOccupation = styled.div`
  display: none;
  @media (min-width: 1024px){
    display: unset;
  }
`
export const ButtonDelete = styled(Button)`
  height: 20px;
  width: 20px;
`
export const ButtonEdit = styled(Button)`
  height: 20px;
  width: 20px;
`
export const AddUserButton = styled.div`
  background-color: white;
  width: 100%;
  cursor: pointer;
  span {
    font-size: 36px;
    line-height: 56px;
    font-weight: 500;
  }
  &:hover {
    color: ${({ theme: { color: { blue }}}) => blue };
    transition: .5s cubic-bezier(.22,.68,0,1.71);
  }

`