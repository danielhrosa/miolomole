import Link from 'next/link';
import { useEffect, useState } from 'react';
import Editable from '../Editable';
import SpotlightJumbotron from "../SpotlightBooksJumbotron/SpotlightBooksJumbotron";
import * as S from './PNLD.styles';

export default function PNLD({ ...props }) {
  const [pnlds, setPnlds] = useState([]);

  useEffect(() => {
    if (props.pnldObj) { setPnlds(JSON.parse(props.pnldObj)) }
  }, [props.pnldObj])


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
          <>
            {pnld.name}
          </>
        )) : (
          <p>Sem PNLDs Cadastradas ainda...</p>
        )}
      </S.PNLDList>
    </S.PNLD>
  )
}
