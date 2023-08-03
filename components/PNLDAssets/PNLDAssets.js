import Container from '../Container/Container';
import * as S from './PNLDAssets.style';
import Form from '../../Elements/Form'
import { PNLDAssetsFieldsFunction, PNLDAssetsFieldsState, gridTemplate } from './PNLDAssets.constants';
import { useEffect, useState } from 'react';
import { useAppProvider } from '../../store/appProvider';
import Button from '../../Elements/Button/Button';
import axios from 'axios';
import mapFieldsToData from '../../utils/mapFieldsToData';
import toast from 'react-hot-toast';

export default function PNLDAssets({ book, pnld }) {
  const { isLoggedIn } = useAppProvider();
  const [fields, setFields] = useState(PNLDAssetsFieldsState);
  const pnldAssetsFields = PNLDAssetsFieldsFunction({ fields, isLoggedIn })

  const formProps = {
    fields: pnldAssetsFields,
    setFields,
    gridTemplate
  }

  useEffect(() => {
    setFields((oldFields) => {
      const newFields = { ...oldFields };
      book.pnldVideo && (newFields.pnldVideo.value = book.pnldVideo);
      book.teacherManual && (newFields.teacherManual.value = book.teacherManual);
      book.seeWork && (newFields.seeWork.value = book.seeWork);
      return newFields;
    })
  }, [book])

  const saveAssets = async () => {
    const variables = mapFieldsToData(pnldAssetsFields)
    if (!book?.name) {
      const res = await axios.post('/api/livros', { ...book, ...variables, pnld })
      if (res.status === 200) { toast.success('Cadastro realizado com sucesso!') }
      else { alert(res?.data?.response) }
    } else {
      const res = await axios.put('/api/livros', { ...book, ...variables, pnld })
      if (res.status === 200) { toast.success('Cadastro atualizado com sucesso!') }
      else { alert(res?.data?.response) }
    }
  };

  return (
    <S.PNLDAssets>
      <Container>
        <S.Title>PNLD</S.Title>
        <Form {...formProps} />
        <Button label="Salvar" variation="primary" onClick={saveAssets} />
      </Container>
    </S.PNLDAssets>
  )
}