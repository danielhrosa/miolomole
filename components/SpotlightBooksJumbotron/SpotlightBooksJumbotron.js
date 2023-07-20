import Slider from 'react-slick';
import Container from '../Container';
import "slick-carousel/slick/slick.css"; 
import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick-theme.css";
import * as S from './SpotlightBooksJumbotron.style';

const settings = (items) => ({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  arrows: false,
  pauseOnHover: true,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: '30',
  appendDots: (dots) => (
    <div style={{ backgroundColor: "transparent", padding: "10px" }}>
      <ul>{dots}</ul>
    </div>
  ),
  customPaging: (i) => {
    //  capture domain color from remote image
    return (
      <S.JumbotronSliderTitle key={items[i].title}>
        {items[i].title}
      </S.JumbotronSliderTitle>
    )
  }
});

export default function SpotlightJumbotron(props){
  const [highlights, setHighlight] = useState([]);
  useEffect(() => props.highlights && setHighlight(JSON.parse(props.highlights)), [props]);
  
  return(
    <S.SpotilightJumbotronContainer>
      <Slider {...settings(highlights)}>
        {highlights.map((highlight) => {
          return (
            <S.SpotLightJumbotron img={highlight?.image} key={highlight?.image + "Jumbotron"}>
              <Container>
                <S.Description>{highlight?.description}</S.Description>
                <S.HomeJumboTitle>{highlight?.title}</S.HomeJumboTitle>
              </Container>
            </S.SpotLightJumbotron>
          )}
        )}
        </Slider>
    </S.SpotilightJumbotronContainer>
  )
}
