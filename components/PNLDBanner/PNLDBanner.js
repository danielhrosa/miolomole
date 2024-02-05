import debounce from 'lodash.debounce';
import { darken, readableColor } from "polished";
import Input from '../../Elements/Input';
import Link from 'next/link';
import PnldHomeIcon from '../../images/js/PnldHomeIcon';
import Button from '../../Elements/Button/Button';
import Editable from '../Editable';
import * as S from './PNLDBanner.styles';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function PNLDBanner({ color = '#00A79D', pnld, isLoggedIn, setField, ...props }) {
  const debouncedUpdateColor = debounce((newColor) => { setField(newColor) }, 100);

  const colorInputProps = {
    id: 'color',
    type: 'color',
    value: color,
    onChange: (event) => {
      const newColor = event.target.value;
      debouncedUpdateColor(newColor);
    }
  }

  const savePNLD = async () => {
    const res = await axios.put(`/api/pnld`, { ...pnld, color: colorInputProps.value, });
    if (res.status === 200) {
      toast.success("PNLD atualizado com sucesso!");
    } else {
      toast.error("Erro ao atualizar PNLD. Chamar o Pedro.")
    }
  }

  return (
    <S.PNLDOurWorksBanner color={color}>
      <Editable
        {...props}
        _id={pnld?._id}
        model="pnld"
        field="title"
        value={pnld?.title}
        isLoggedIn={isLoggedIn}
      >
        <S.PNLDOurWorksBannerTitle color={color} />
      </Editable>

      {isLoggedIn && (
        <S.PNLDOurWorksBannerColor color={color} readableColor={readableColor(darken(0.1, color))}>
          <S.PNLDOurWorksBannerColorLabel readableColor={readableColor(darken(0.1, color))} htmlFor='color'>
            Clique para alterar a cor
            <Input {...colorInputProps} />
          </S.PNLDOurWorksBannerColorLabel>
          <Button label="Salvar nova cor" variation="inverse" onClick={savePNLD} />
        </S.PNLDOurWorksBannerColor>
      )}

      <Link href={"/pnld"}>
        <S.PnldHomeIconWrapper><PnldHomeIcon color={color} /></S.PnldHomeIconWrapper>
      </Link>
    </S.PNLDOurWorksBanner>
  )
}
