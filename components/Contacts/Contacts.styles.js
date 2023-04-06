import styled from "styled-components";
import Button from "../../Elements/Button";

export const ContactList = styled.div`
  padding: 50px 0 0 0 ;
  min-height: 70vh;
  width: 100%;
  max-width: 800px;
`;

export const ContactTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme: { color: { brand } } }) => brand};
`;

export const ContactHeader = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 25% 10px;
  align-items: center;
  grid-gap: 10px;
  /* justify-content: center; */
  margin-bottom: 10px;
  @media screen {
    /* @media(max-width: 500px) { grid-template-columns: 35px 1fr 2fr 20px 20px; }
    @media (min-width: 1024px) { grid-template-columns: 55px 1fr 2fr 2fr 30px 30px; } */
  }

  b {
    overflow: hidden; 
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical; 
    font-size: 12px;
    padding: 15px;
  }
`;

export const ContactListItem = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 25% 10px;
  grid-template-rows: 30px 1fr;
  grid-template-areas:
    "name email date delete"
    "message message message message"
  ;
  grid-gap: 10px;
  margin-bottom: 30px;
  font-size: 12px;
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;

  transition: .3s cubic-bezier(0.19, 1, 0.22, 1);

  @media screen {
    @media (min-width: 1024px) {
      font-size: unset;
    }
  }
`;

export const ContactMessage = styled.div`
  grid-area: message;
`;

export const ContactEmail = styled.div`
  grid-area: email;
`;

export const ContactName = styled.div`
  grid-area: name;
`;

export const ContactDate = styled.div`
  grid-area: date;
`;

export const ButtonDelete = styled(Button)`
  grid-area: delete;
  height: 20px;
  width: 20px;
`;

export const ButtonEdit = styled(Button)`
  height: 20px;
  width: 20px;
`;

export const AddContactButton = styled.div`
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
`;
