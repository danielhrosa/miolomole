import axios from 'axios';
import Link from 'next/link';
import Container from '../Container';
import * as S from './Contacts.styles';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Contacts(props) {
  const [contacts, setContacts] = useState([]);
  const router = useRouter();

  useEffect(() => props.contacts && setContacts(JSON.parse(props.contacts)), [props])

  const handleDeleteContact = async (contact) => {
    const { _id } = contact;
    const confirm = window.confirm(`Tem certeza que deseja deletar ${userName}?`);
    if (!confirm) { return false };
    setContacts((oldContacts) => [...oldContacts].filter((contact) => contact._id !== _id));
    await axios.delete(`/api/contacts`, { data: { _id } });
  };

  return (
    <Container>
      <S.ContactList>
        <S.UsersTitle>Usuários</S.UsersTitle>
        <S.UserHeader>
          <b>Nome</b>
          <b>Email</b>
          <b>Mensagem</b>
          <b>Função</b>
          <S.AddUserButton onClick={() => router.push('/contacts/novo')}><span>+</span></S.AddUserButton>
        </S.UserHeader>
        {contacts.map((contact) => (
          <S.ContactListItem key={contact._id} onClick={() => router.push(`/contacts/${contact._id}`)}>
            <S.ContactName>{contact.name}</S.ContactName>
            <S.ContactEmail>{contact.email}</S.ContactEmail>
            <S.ContactMessage>{contact.message}</S.ContactMessage>
            <S.ButtonDelete type="delete" onClick={(e) => { e.stopPropagation(); handleDeleteContact(contact) }} />
            <S.ButtonDelete type="edit" onClick={(e) => { e.stopPropagation(); router.push(`/contacts/${contact._id}`) }} />
          </S.ContactListItem>
        ))}
      </S.ContactList>
    </Container>
  )
}