import Link from 'next/link';
import { useEffect, useState } from 'react';
import Editable from '../Editable';
import ArrowPnld from '../../images/js/ArrowPnld.js';
import SpotlightJumbotron from "../SpotlightBooksJumbotron/SpotlightBooksJumbotron";
import * as S from './PNLD.styles';
import { useAppProvider } from '../../store/appProvider';
import axios from 'axios';
import Button from '../../Elements/Button/Button';

export default function PNLD({ ...props }) {
  const { isLoggedIn } = useAppProvider();
  const [pnlds, setPnlds] = useState([]);

  useEffect(() => {
    if (props.pnlds) { setPnlds(props.pnlds) }
  }, [props.pnlds])

  const handleDeletePnld = async ({ _id, title }) => {
    const confirm = window.confirm(`Tem certeza que deseja deletar "${title}"?`)
    if (!confirm) { return false };
    setPnlds((oldPnlds) => [...oldPnlds].filter((pnld) => pnld._id !== _id))
    await axios.delete(`/api/pnld`, { data: { _id } })
      .catch((err) => { toast.error(`Error ${err.response.data.errorMessage || ''}`) })
  }

  return (
    <S.PNLD>
      <SpotlightJumbotron {...props} />
      <Editable {...props} textKey="pnldTitle"><S.PNLDTitle /></Editable>
      <Editable {...props} textKey="pnldDescription"><S.PNLDText /></Editable>
      <Editable {...props} textKey="pnldSubtitle"><S.PNLDSubTitle /></Editable>
      <Link href="/pnld/novo">
        <S.Button variation="primary" label="+ Adicionar" />
      </Link>
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
