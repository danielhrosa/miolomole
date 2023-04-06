import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from '../Container';
import * as S from './Contacts.styles';

export default function Contacts(props) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => props.contacts && setContacts(JSON.parse(props.contacts)), [props])

  const handleDeleteContact = async (contact) => {
    const { _id } = contact;
    const confirm = window.confirm('Tem certeza que deseja deletar este contato?');
    if (!confirm) { return false };
    setContacts((oldContacts) => {
      return [...oldContacts].filter((contact) => contact._id !== _id)
    });
    await axios.delete(`/api/contacts`, { data: { _id } });
  };

  const contactDate = (createdAt) => {
    const date = new Date(createdAt);
    return ("0" + date.getDate()).slice(-2) + "/" + ("0"+(date.getMonth()+1)).slice(-2) + "/" +
    date.getFullYear() + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
  }

  return (
    <Container>
      <S.ContactList>
        <S.ContactTitle>Contatos</S.ContactTitle>
        <S.ContactHeader>
          <b>Nome</b>
          <b>Email</b>
          <b>Deletar</b>
        </S.ContactHeader>
        {contacts.map((contact) => (
          <S.ContactListItem key={contact._id}>
            <S.ContactName>{contact.name}</S.ContactName>
            <S.ContactEmail>{contact.email}</S.ContactEmail>
            <S.ContactDate>{contactDate(contact.createdAt)}</S.ContactDate>
            <S.ContactMessage>{contact.message}</S.ContactMessage>
            <S.ButtonDelete type="delete" onClick={(e) => { e.stopPropagation(); handleDeleteContact(contact) }} />
          </S.ContactListItem>
        ))}
      </S.ContactList>
    </Container>
  )
}