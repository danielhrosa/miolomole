import React from 'react';
import Container from '../Container';
import * as S from './Banner.style';
import Editable from '../Editable'
import EditableImage from '../EditableImage'
import { useAppProvider } from '../../store/appProvider';
import { useRouter } from 'next/router';
import Button from '../../Elements/Button/Button';

export default function Banner({ i, ...props }) {
  const { isLoggedIn } = useAppProvider();
  const isPair = i % 2 === 0;
  const { texts } = props;
  const router = useRouter();

  return (
    <S.Banner isPair={isPair}>
      <EditableImage {...props} textKey={`bannerBgImage${i}`}><S.BannerBgImage /></EditableImage>
      <Container>
        <S.BannerWrapper>
          <Editable {...props} textKey={`bannerTitle${i}`}><S.BannerTitle /></Editable>
          <Editable {...props} textKey={`bannerText${i}`}><S.BannerText /></Editable>
          {isLoggedIn && <S.BannerLink><Editable {...props} textKey={`bannerLink${i}`}><S.BannerText /></Editable></S.BannerLink>}
          {(!!texts[`bannerLink${i}`] && !isLoggedIn) && (
            <a href={texts[`bannerLink${i}`]} target='_blank'><Button variation="primary">Saiba mais</Button></a>
          )}
        </S.BannerWrapper>
        <EditableImage {...props} textKey={`bannerImage${i}`}><S.BannerImage /></EditableImage>
      </Container>
    </S.Banner>
  )
}