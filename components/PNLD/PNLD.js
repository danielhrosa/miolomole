import { useEffect, useState } from 'react';
import { useAppProvider } from '../../store/appProvider';
import Editable from '../Editable';
import SpotlightJumbotron from "../SpotlightBooksJumbotron/SpotlightBooksJumbotron";
import * as S from './PNLD.styles';
import Input from '../../Elements/Input';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function PNLD({ pnld, ...props }) {
  const { isLoggedIn } = useAppProvider();
  const [field, setField] = useState({ video: { value: '' } });

  const video = {
    ...field.video,
    name: 'video',
    type: 'asset',
    isLoggedIn,
    setFields: setField
  }

  useEffect(() => {
    setField({ video: { value: pnld.video } });
  }, [pnld.video])

  const handleSave = async () => {
    const res = await axios.put(`/api/pnld`, { ...pnld, video: video.value });
    if (res.status === 200) {
      toast.success("Video do PNLD atualizado com sucesso!");
    } else {
      toast.error("Erro ao atualizar video do PNLD no banco de dados. Chamar o Pedro.")
    }
  }

  return (
    <S.PNLD>
      <SpotlightJumbotron {...props} />
      <S.PNLDInfos>
        <div>
          <Editable {...props} textKey={`${pnld?.name}Title`}><S.PNLDTitle /></Editable>
          <Editable {...props} textKey={`${pnld?.name}Description`}><S.PNLDText /></Editable>
          <Editable {...props} textKey={`${pnld?.name}Subtitle`}><S.PNLDSubTitle /></Editable>
        </div>
        <S.PNLDInfoVideo>
          <Input {...video} />
          {isLoggedIn && <S.Button variation="primary" label="Salvar Video" onClick={handleSave} />}
        </S.PNLDInfoVideo>
      </S.PNLDInfos>
    </S.PNLD>
  )
}
