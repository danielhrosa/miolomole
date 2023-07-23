import axios from 'axios';
import debounce from 'lodash.debounce';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import Button from '../../Elements/Button/Button';
import Input from '../../Elements/Input';
import PnldHomeIcon from '../../images/js/PnldHomeIcon';
import { useAppProvider } from '../../store/appProvider';
import Editable from '../Editable';
import * as S from './PNLDOurWorks.styles';
import PNLDOurWorksCard from './PNLDOurWorksCard/PNLDOurWorksCard';
import { readableColor, darken } from "polished";

export default function PNLDOurWorks({ name, color, title, ...props }) {
  const { isLoggedIn } = useAppProvider();
  const [pnlds, setPnlds] = useState([]);
  const [colorState, setColorState] = useState(color);

  useEffect(() => {
    if (props.pnlds) { setPnlds(props.pnlds) }
    if (color) { setColorState(color) }
  }, [props.pnlds, color])

  const fakePnldBooks = [
    {
      _id: 1,
      name: 'pnld2022',
      title: 'PNLD 2022',
      image: 'https://s3-sa-east-1.amazonaws.com/eurekadigital/dev/mioloMole/38925cca-999a-4438-a5c8-fe90ff0c67c4garoto-avatar-capa-1%201.png',
      hide: false,
      color: '#00FFFF',
      pnldCode: 'S0DJ2H-329DSUL-DSAO9832JID-SDJKDS',
      authors: [
        { userFullName: 'Teste da Silva' },
        { userFullName: 'Teste da Silveira' },
      ],
      illustrators: [
        { userFullName: 'Ilustrador da Silva' },
        { userFullName: 'Teste da Silveira' },
      ]
    },
    {
      _id: 2,
      name: 'pnld2023',
      title: 'PNLD 2023',
      image: 'https://s3-sa-east-1.amazonaws.com/eurekadigital/dev/mioloMole/38925cca-999a-4438-a5c8-fe90ff0c67c4garoto-avatar-capa-1%201.png',
      hide: false,
      color: '#3C6E',
      pnldCode: 'S0DJ2H-329DSUL-DSAO9832JID-SDJKDS',
      authors: [
        { userFullName: 'Teste da Silva' },
      ],
      illustrators: [
        { userFullName: 'Ilustrador da Silva' },
        { userFullName: 'Teste da Silveira' },
      ]
    },
    {
      _id: 3,
      name: 'pnld2024',
      title: 'PNLD 2024',
      image: 'https://s3-sa-east-1.amazonaws.com/eurekadigital/dev/mioloMole/38925cca-999a-4438-a5c8-fe90ff0c67c4garoto-avatar-capa-1%201.png',
      hide: false,
      color: '#3C6ED0',
      pnldCode: 'S0DJ2H-329DSUL-DSAO9832JID-SDJKDS',
      authors: [
        { userFullName: 'Teste da Silva' },
        { userFullName: 'Teste da Silveira' },
      ],
      illustrators: [
        { userFullName: 'Teste da Silveira' },
      ]
    },
    {
      _id: 5,
      name: 'pnld2025',
      title: 'PNLD 2025',
      image: 'https://s3-sa-east-1.amazonaws.com/eurekadigital/dev/mioloMole/38925cca-999a-4438-a5c8-fe90ff0c67c4garoto-avatar-capa-1%201.png',
      hide: false,
      color: '#3C6ED0',
      pnldCode: 'S0DJ2H-329DSUL-DSAO9832JID-SDJKDS',
      authors: [
        { userFullName: 'Teste da Silva' },
        { userFullName: 'Teste da Silveira' },
      ],
      illustrators: [
        { userFullName: 'Ilustrador da Silva' },
        { userFullName: 'Teste da Silveira' },
      ]
    },
    {
      _id: 4,
      name: 'pnld2026',
      title: 'PNLD 2026',
      image: 'https://s3-sa-east-1.amazonaws.com/eurekadigital/dev/mioloMole/38925cca-999a-4438-a5c8-fe90ff0c67c4garoto-avatar-capa-1%201.png',
      hide: false,
      color: '#3C6ED0',
      pnldCode: 'S0DJ2H-329DSUL-DSAO9832JID-SDJKDS',
      authors: [
        { userFullName: 'Teste da Silva' },
      ],
      illustrators: [
        { userFullName: 'Ilustrador da Silva' },
        { userFullName: 'Teste da Silveira' },
      ]
    },
    {
      _id: 6,
      name: 'pnld2027',
      title: 'PNLD 2027',
      image: 'https://s3-sa-east-1.amazonaws.com/eurekadigital/dev/mioloMole/38925cca-999a-4438-a5c8-fe90ff0c67c4garoto-avatar-capa-1%201.png',
      hide: false,
      color: '#F3420F',
      pnldCode: 'S0DJ2H-329DSUL-DSAO9832JID-SDJKDS',
      authors: [
        { userFullName: 'Teste da Silva' },
        { userFullName: 'Teste da Silveira' },
      ],
      illustrators: [
        { userFullName: 'Ilustrador da Silva' },
        { userFullName: 'Ilustrador da Silveira' },
      ]
    },
  ]

  const handleDeletePnld = async ({ _id, title }) => {
    const confirm = window.confirm(`Tem certeza que deseja deletar "${title}"?`)
    if (!confirm) { return false };
    setPnlds((oldPnlds) => [...oldPnlds].filter((pnld) => pnld._id !== _id))
    await axios.delete(`/api/pnld`, { data: { _id } })
      .catch((err) => { toast.error(`Error ${err.response.data.errorMessage || ''}`) })
  }

  const pndlOurWorksCardProps = {
    handleDeletePnld,
    isLoggedIn
  }

  const debouncedUpdateColor = debounce((newColor) => { setColorState(newColor) }, 100);

  const colorInputProps = {
    id: 'color',
    type: 'color',
    value: colorState,
    onChange: (event) => {
      const newColor = event.target.value;
      // Atualizar a cor usando a função debounced
      debouncedUpdateColor(newColor);
    }
  }

  return (
    <S.PNLDOurWorks>
      <S.PNLDOurWorksBanner color={colorState}>
        <S.PNLDOurWorksBannerTitle color={colorState}>{title}</S.PNLDOurWorksBannerTitle>
        
        {isLoggedIn && (
          <S.PNLDOurWorksBannerColor color={readableColor(darken(0.1, colorState))}>
            <S.PNLDOurWorksBannerColorLabel color={readableColor(darken(0.1, colorState))} htmlFor='color'>
              Clique para alterar a cor
              <Input {...colorInputProps} />
            </S.PNLDOurWorksBannerColorLabel>
            <Button label="Salvar nova cor" variation="inverse" onClick={() => {}} />
          </S.PNLDOurWorksBannerColor>
        )}

        <PnldHomeIcon />
      </S.PNLDOurWorksBanner>
      <Editable {...props} textKey={`pnldOurWorksTitle`}><S.PNLDOurWorksTitle /></Editable>
      <S.PNLDOurWorksList>
        {fakePnldBooks?.length ?
          fakePnldBooks?.map((pnld) => (
            <Link key={pnld._id} href={`/pnld/${pnld.name}`}>
              <PNLDOurWorksCard pnld={pnld} {...pndlOurWorksCardProps} />
            </Link>
          )) : (
            <p>Sem PNLDs Cadastradas ainda...</p>
          )}
      </S.PNLDOurWorksList>
    </S.PNLDOurWorks>
  )
}
