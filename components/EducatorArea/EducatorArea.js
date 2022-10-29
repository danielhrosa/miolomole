import { useRouter } from 'next/router';
import { useAppProvider } from '../../store/appProvider';
import EducatorAreaPublication from '../EducatorAreaPublication/EducatorAreaPublication'
import Jumbotron from '../Jumbotron/Jumbotron'
import * as S from './EducatorArea.styles'
import Slider from "react-slick";
import Container from '../Container';
import AboutUsSlider from '../AboutUsSlider';

const fakePublicationsArray = [
  {
    name: '1-ocupacao-literaria',
    title: 'Título 1ª Ocupação Literária Miolo Mole ',
    description: 'Todos os eventos do projeto serão realizados em parceria com a @bibliotecaijmonteirolobato, que cedeu espaços para a realização dessa ação de caráter público e gratuito, que visa contribuir para a divulgação da leitura literária.',
    image: 'https://i.ibb.co/RD9sQJW/Rectangle-10.png',
    content: 'Teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste',
    area: 'Material de apoio',
  },
  {
    name: 'karina-busquets',
    title: 'Karina Busquets lança Flores Sonhadas e Do Lado de lá',
    description: 'Direto da Inglaterra, a autora @k.busquets trará um pouquinho de sua perspectiva para o lançamento de seus livros "Do lado de lá" e "Flores sonhadas".',
    image: 'https://i.ibb.co/8KYcCkZ/Rectangle-11.png',
    content: 'Teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste',
    area: 'Nossas Recomendações',
  },
];

export default function EducatorArea(props) {
  const { isLoggedIn } = useAppProvider();

  const publications = props?.publications && JSON.parse(props.publications)
  const publicationAreas = [
    { title: 'Material de apoio', color: '#157EFA' },
    { title: 'Notícias', color: '#3DC55D' },
    { title: 'Nossas Recomendações', color: '#FD9426' },
    { title: 'Politica', color: '#9700FF' },
    { title: 'Religião', color: '#FFCC22' },
    { title: 'Futebol', color: '#FF00CF' },
  ];

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  const router = useRouter();

  return (
    <S.EducatorArea>
      <Jumbotron {...props} page="educatorArea" />
      <S.SliderContainer>
        {isLoggedIn && <S.AddButton onClick={() => router.push('/educador/novo')}>Cadastrar<span>+</span></S.AddButton>}
        <Slider {...settings}>
          {publicationAreas.map((item, i) => (
            <S.EducatorAreaSliderCard color={item.color} key={i}>
              {item.title}
            </S.EducatorAreaSliderCard>
          ))}
        </Slider>
      </S.SliderContainer>
      <S.EducatorAreaPosts>
        {fakePublicationsArray.map((publication, i) => (
          <EducatorAreaPublication {...publication} key={i} />
        ))}
      </S.EducatorAreaPosts>
    </S.EducatorArea>
  )
}