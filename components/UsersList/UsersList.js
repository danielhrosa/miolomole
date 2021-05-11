import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from '../Container';
import * as S from './UsersList.styles';
import { useRouter } from 'next/router';

export default function UsersList(props) {
  const [users, setUsers] = useState([]);
  const router = useRouter();

  useEffect(() => props.users && setUsers(JSON.parse(props.users)), [props])

  const handleDeleteUser = async (user) => {
    const { _id, userName } = user;
    const confirm = window.confirm(`Tem certeza que deseja deletar ${userName}?`)
    if(!confirm) { return false };
    setUsers((oldUsers) => {
      const newUsers = [...oldUsers];
      return newUsers.filter((user) => user._id !== _id);
    })
    await axios.delete(`/api/users`, { data: { _id } })
  }

  return (
    <Container>
      <S.UsersList>
        <S.UsersTitle>Usuários</S.UsersTitle>
        <S.UserHeader>
          <b>Foto</b>
          <b>Login</b>
          <b>Nome</b>
          <b>Função</b>
          <S.AddUserButton onClick={() => router.push('/usuarios/novo')}><span>+</span></S.AddUserButton>
        </S.UserHeader>
        {users.map((user) => (
          <S.UsersListItem key={user._id} onClick={() => router.push(`/usuarios/${user._id}`)}>
            <S.UserAvatar img={user.avatar}/>
            <S.UserName>{user.userName}</S.UserName>
            <S.UserFullName>{user.userFullName}</S.UserFullName>
            <S.UserOccupation>{user.occupation.join(', ')}</S.UserOccupation>
            <S.ButtonDelete type="delete" onClick={(e) => { e.stopPropagation() ;handleDeleteUser(user)} }/>
            <S.ButtonDelete type="edit" onClick={(e) => { e.stopPropagation(); router.push(`/usuarios/${user._id}`)} } />
          </S.UsersListItem>
        ))}
      </S.UsersList>
    </Container>
  )
}