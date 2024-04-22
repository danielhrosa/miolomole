import Slider from 'react-slick';
import Container from '../Container';
import "slick-carousel/slick/slick.css";
import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick-theme.css";
import * as S from './SpotlightBooksJumbotron.style';
import Input from '../../Elements/Input';
import { useAppProvider } from '../../store/appProvider';
import Button from '../../Elements/Button';
import axios from 'axios';
import toast from 'react-hot-toast';

const settings = (items) => ({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  arrows: false,
  pauseOnHover: true,
  slidesToShow: 1,
  autoplay: true,
  appendDots: (dots) => (
    <div style={{ backgroundColor: "transparent", padding: "10px" }}>
      <ul>{dots}</ul>
    </div>
  ),
  customPaging: (i) => {
    return (
      <S.JumbotronSliderTitle key={items[i].title}>
        {items[i].title}
      </S.JumbotronSliderTitle>
    )
  }
})

export default function SpotlightJumbotron(props) {
  const { isLoggedIn } = useAppProvider();
  const [highlights, setHighlights] = useState([]);
  const siteConfig = props?.siteConfig ? JSON.parse(props.siteConfig) : 3;
  const [timeState, setTimeState] = useState(Number(siteConfig?.value) || 2);

  const timeField = {
    value: timeState,
    name: 'time',
    label: 'Tempo:',
    type: 'number',
    onChange: ({ target: { value } }) => {
      setTimeState(Number(value));
    }
  }

  useEffect(() => props.highlights && setHighlights(JSON.parse(props.highlights)), [props.highlights]);

  const handleSave = async () => {
    await axios.put('/api/siteSettings', { config: `bannerSpeed${props.page}`, value: timeState })
      .then((_res) => {
        toast.success('Sucesso ao salvar configuração')
      })
      .catch((err) => {
        console.log(err)
        toast.error('Erro ao salvar configuração, por favor chame o Pedro')
      })
  }

  const SpotLightJumbotron = ({ link, children, key, ...props }) => {
    if (link) {
      if(!link.includes("http://") && !link.includes("https://")) {
        link = `http://${link}`;
      }
      return (
        <a href={link} key={key} target="_blank">
          <S.SpotLightJumbotron {...props} link={link}>
            {children}
          </S.SpotLightJumbotron>
        </a>
      )
    } else {
      return (
        <S.SpotLightJumbotron {...props} key={key} link={link}>
          {children}
        </S.SpotLightJumbotron>
      )
    }
  }

  return (
    <S.SpotilightJumbotronContainer className={props.className}>
      <Slider {...settings(highlights)} autoplaySpeed={timeState * 1000}>
        {highlights.map((highlight) => {
          return (
            <SpotLightJumbotron
              img={highlight?.image}
              key={highlight?.image + "Jumbotron"}
              link={highlight?.link}
            >
              <Container>
                <S.Description>{highlight?.description}</S.Description>
                <S.HomeJumboTitle>{highlight?.title}</S.HomeJumboTitle>
              </Container>
            </SpotLightJumbotron>
          )
        })}
      </Slider>
      {isLoggedIn && <S.Time>
        <span>Tempo de transição do banner em segundos: </span>
        <Input {...timeField} />
        <Button label="Salvar tempo" variation="primary" onClick={handleSave} />
      </S.Time>}
    </S.SpotilightJumbotronContainer>
  )
}
