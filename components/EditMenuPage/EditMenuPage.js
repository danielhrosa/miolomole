import axios from 'axios';
import { useState } from 'react';
import Button from '../../Elements/Button';
import Container from '../Container';
import * as S from './EditMenuPage.styles';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import toast from 'react-hot-toast';

const orderFunc = (list, order) => (
  list.sort((a, b) => order.indexOf(a._id) - order.indexOf(b._id))
)

export default function EditMenuPage({ pages, menuOrder }) {
  const [order, setOrder] = useState(orderFunc(pages, menuOrder));

  function arrayMove(array, from, to) {
    array = array.slice();
    array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
    return array;
  }

  const handleHidePage = async (page) => {
    const { _id, isPrivate, label } = page;
    const confirm = window.confirm(`Tem certeza que deseja ${!!isPrivate ? 'desocultar' : 'ocultar'} a pagina ${label}?`);
    if (!confirm) { return false };
    setPages((oldPages) => [...oldPages].reduce((pages, page) => page._id !== _id ? [...pages, page] : [...pages, { ...page, isPrivate: !page?.isPrivate }], []))
    await axios.put(`/api/pages`, { ...page, isPrivate: !page?.isPrivate })
  }

  const handleSort = ({ oldIndex, newIndex }) => {
    setOrder((oldFileds) => arrayMove(oldFileds, oldIndex, newIndex))
    toast.promise(axios.put('/api/siteSettings', { config: 'menuOrder', value: JSON.stringify(arrayMove(order, oldIndex, newIndex).map((page) => page._id)) }), {
      loading: 'Salvando ordem..',
      success: 'Ordem do menu salva com sucesso!',
      error: 'Erro ao salvar ordem do menu',
    });
  }

  const SortableItem = SortableElement(({ page }) => (
    <S.EditMenuPagesItem className='unselectable'>
      {page.label}
      <Button type="toggleHide" ishidden={page?.isPrivate} onClick={() => { handleHidePage(page); }} />
    </S.EditMenuPagesItem>
  ));

  const SortableList = SortableContainer(({ items }) => {
    return (
      <div>
        {items.map((item, index) => (
          <SortableItem key={`item-${item._id}`} index={index} page={item} />
        ))}
      </div>
    );
  });

  return (
    <Container>
      <S.EditMenuPage>
        <S.Title>Editar Menu</S.Title>
        <S.Header>
          <b>Página</b>
          <b>Visualização</b>
        </S.Header>
        <SortableList items={order} onSortEnd={handleSort} />
      </S.EditMenuPage>
    </Container>
  )
}