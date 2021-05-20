import React from 'react';
import Container from '../Container';
import * as S from './Banner.style';
import Editable from '../Editable'
import EditableImage from '../EditableImage'
import { useAppProvider } from '../../store/appProvider';
import { useRouter } from 'next/router';

export default function Banner({index, ...props}){
  const { isLoggedIn } = useAppProvider();
  const isPair = index % 2 === 0;
  const { texts } = props
  const router = useRouter();

  return(
    <S.Banner isPair={isPair} onClick={() => !!texts[`bannerLink${index}`] && !isLoggedIn && router.push(texts[`bannerLink${index}`])}>
        <EditableImage {...props} textKey={`bannerBgImage${index}`}><S.BannerBgImage/></EditableImage>
        <Container >
          <S.BannerWrapper>
            <Editable {...props} textKey={`bannerTitle${index}`}><S.BannerTitle /></Editable>
            <Editable {...props} textKey={`bannerText${index}`}><S.BannerText /></Editable>
            { isLoggedIn && <Editable {...props} textKey={`bannerLink${index}`}><S.BannerText /></Editable> }
          </S.BannerWrapper>
          <EditableImage {...props} textKey={`bannerImage${index}`}><S.BannerImage/></EditableImage>
        </Container>
    </S.Banner>
  )
}