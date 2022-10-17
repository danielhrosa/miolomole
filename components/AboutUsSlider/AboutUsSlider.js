import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useAppProvider } from '../../store/appProvider';
import Editable from '../Editable';
import * as S from './AboutUsSlider.style';

export default function AboutUsSlider(props) {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    ltr: true,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const [items, setItems] = useState([]);
  const router = useRouter();
  const { isLoggedIn } = useAppProvider();

  useEffect(() => props.items && setItems(JSON.parse(props.items)), [])

  return (
    <S.AboutUsSlider id='AboutUsSlider'>
      <S.AboutUsSliderContainer>
        <S.SliderInfo>
          <Editable {...props} textKey={`${props.page}aboutUsAuthorsListTitle`} onClick={() => !isLoggedIn && router.push('/autores')}><S.SliderTitle /></Editable>
          <Editable {...props} textKey={`${props.page}aboutUsAuthorsListDesc`}><S.SliderDescription /></Editable>
        </S.SliderInfo>
        <S.SliderCards>
          <Slider {...settings}>
            {items.filter((item) => !item?.hideFromList).map((item, i) => (
              <S.SliderCard key={item._id + i}>
                <S.CardPicture src={item.avatar} />
                <S.SliderCardContainer>
                  <S.CardTitle>{item.userFullName}</S.CardTitle>
                  <S.CardDescription>{item.description}</S.CardDescription>
                </S.SliderCardContainer>
              </S.SliderCard>
            ))}
          </Slider>
        </S.SliderCards>
      </S.AboutUsSliderContainer>
    </S.AboutUsSlider>
  )
}
