import Link from 'next/link';
import { useEffect, useState } from 'react';
import ArrowPnld from '../../images/js/ArrowPnld.js';
import * as S from './PNLDAdmin.styles.js';
import { useAppProvider } from '../../store/appProvider.js';
import axios from 'axios';
import Button from '../../Elements/Button/Button.js';
import toast from 'react-hot-toast';

export default function PNLD(props) {
  const { isLoggedIn } = useAppProvider();
  const [pnlds, setPnlds] = useState([]);

  useEffect(() => {
    if (props.pnlds) { setPnlds(props.pnlds) }
  }, [props.pnlds])

  const handleDeletePnld = async ({ _id, title, name }) => {
    const confirm = window.confirm(`Tem certeza que deseja deletar "${title}"?`)
    if (!confirm) { return false };
    setPnlds((oldPnlds) => [...oldPnlds].filter((pnld) => pnld._id !== _id))
    await axios.delete(`/api/pnld`, { data: { _id, name } })
      .then((_res) => {
        toast.success("PNLD removido com sucesso")
      })
      .catch((err) => { 
        console.log(err)
        toast.error(`Error ${err.response.data.errorMessage || ''}`) 
      })
  }

  return (
    <S.PNLD>
      <S.PNLDTitle>PNLD Admin</S.PNLDTitle>
      <S.PNLDText>Gerenciamento de PNLDs. Adicione ou remova PNDLs aqui.</S.PNLDText>
      {isLoggedIn && <Link href="/pnld/novo">
        <S.Button variation="primary" label="+ Adicionar" />
      </Link>}
      <S.PNLDList>
        {pnlds?.length ?
          pnlds?.map((pnld) => (
            <Link href={`/pnld/${pnld.name}`}>
              <S.PNLDCard color={pnld?.color}>
                {isLoggedIn && (
                  <S.PNLDButtons onClick={(e) => { e.stopPropagation(); }}>
                    <Button onClick={(e) => { e.stopPropagation(); handleDeletePnld(pnld); }} type="delete" />
                  </S.PNLDButtons>
                )}
                {pnld.title}<ArrowPnld />
              </S.PNLDCard>
            </Link>
          )) : (
            <p>Sem PNLDs Cadastradas ainda...</p>
          )}
      </S.PNLDList>
    </S.PNLD>
  )
}
