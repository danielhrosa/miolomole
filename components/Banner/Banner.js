import React from 'react';
import Container from '../Container';
import * as S from './Banner.style';
import Editable from '../Editable'
import EditableImage from '../EditableImage'
import { useAppProvider } from '../../store/appProvider';
import { useRouter } from 'next/router';

export default function Banner({ i, ...props }) {
  const { isLoggedIn } = useAppProvider();
  const isPair = i % 2 === 0;
  const { texts } = props
  const router = useRouter();

  return (
    <S.Banner isPair={isPair} onClick={() => !!texts[`bannerLink${i}`] && !isLoggedIn && router.push(texts[`bannerLink${i}`])}>
      <EditableImage {...props} textKey={`bannerBgImage${i}`}><S.BannerBgImage /></EditableImage>
      <Container>
        <S.BannerWrapper>
          <Editable {...props} textKey={`bannerTitle${i}`}><S.BannerTitle /></Editable>
          <Editable {...props} textKey={`bannerText${i}`}><S.BannerText /></Editable>
          {isLoggedIn && <Editable {...props} textKey={`bannerLink${i}`}><S.BannerText /></Editable>}
        </S.BannerWrapper>
        <EditableImage {...props} textKey={`bannerImage${i}`}><S.BannerImage /></EditableImage>
      </Container>
    </S.Banner>
  )
}