import Container from '../Container/Container';
import * as S from './PNLDAssets.style';
import Form from '../../Elements/Form'
import { PNLDAssetsFieldsFunction, PNLDAssetsFieldsState, gridTemplate } from './PNLDAssets.constants';
import { useState } from 'react';
import { useAppProvider } from '../../store/appProvider';
import Button from '../../Elements/Button/Button';

export default function PNLDAssets() {
  const { isLoggedIn } = useAppProvider();
  const [fields, setFields] = useState(PNLDAssetsFieldsState);
  const pnldAssetsFields = PNLDAssetsFieldsFunction({ fields, isLoggedIn })

  const formProps = {
    fields: pnldAssetsFields,
    setFields,
    gridTemplate
  }

  return (
    <S.PNLDAssets>
      <Container>
        <S.Title>PNLD</S.Title>
        <Form {...formProps} />
        <Button label="Salvar" variation="primary" />
      </Container>
    </S.PNLDAssets>
  )
}