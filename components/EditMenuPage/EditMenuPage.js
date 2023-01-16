import axios from 'axios';
import { useState } from 'react'
import Button from '../../Elements/Button'
import Container from '../Container'
import * as S from './EditMenuPage.styles'

export default function EditMenuPage(props) {
  const [pages, setPages] = useState(props.pages);

  const handleHidePage = async (page) => {
    const { _id, isPrivate, label } = page;
    const confirm = window.confirm(`Tem certeza que deseja ${!!isPrivate ? 'desocultar' : 'ocultar'} a pagina ${label}?`);
    if (!confirm) { return false };
    setPages((oldPages) => [...oldPages].reduce((pages, page) => page._id !== _id ? [...pages, page] : [...pages, { ...page, isPrivate: !page?.isPrivate }], []))
    await axios.put(`/api/pages`, { ...page, isPrivate: !page?.isPrivate })
  }

  return (
    <Container>
      <S.EditMenuPage>
        <S.Title>Editar Menu</S.Title>
        <S.Header>
          <b>Página</b>
          <b>Visualização</b>
        </S.Header>
        {pages.map((page) => (
          <S.EditMenuPagesItem>
            {page.label}
            <Button type="toggleHide" ishidden={page?.isPrivate} onClick={() => { handleHidePage(page); }} />
          </S.EditMenuPagesItem>
        ))}
      </S.EditMenuPage>
    </Container>
  )
}