import Slider from 'react-slick';
import EducatorAreaPublication from '../EducatorAreaPublication/EducatorAreaPublication'
import Jumbotron from '../Jumbotron/Jumbotron'
import * as S from './EducatorArea.styles'

const fakePublicationsArray = [
  {
    name: '1-ocupacao-literaria',
    title: '1ª Ocupação Literária',
    description: 'Todos os eventos do projeto serão realizados em parceria com a @bibliotecaijmonteirolobato, que cedeu espaços para a realização dessa ação de caráter público e gratuito, que visa contribuir para a divulgação da leitura literária.',
    image: 'https://i.ibb.co/RD9sQJW/Rectangle-10.png',
    content: 'Teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste',
    area: 'Material de apoio',
  },
  {
    name: 'karina-busquets',
    title: 'Karina Busquets lança Flores Sonhadas e Do Lado de lá',
    description: 'Direto da Inglaterra, a autora @k.busquets trará um pouquinho de sua perspectiva para o lançamento de seus livros “Do lado de lá” e “Flores sonhadas”.',
    image: 'https://i.ibb.co/8KYcCkZ/Rectangle-11.png',
    content: 'Teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste',
    area: 'Nossas Recomendações',
  },
];

export default function EducatorArea(props) {
  const publications = props?.publications && JSON.parse(props.publications)
  const publicationAreas = [
    { title: 'Material de apoio', color: '#157EFA' },
    { title: 'Notícias', color: '#3DC55D' },
    { title: 'Nossas Recomendações', color: '#FD9426' },
  ]

  return (
    <S.EducatorArea>
      <Jumbotron {...props} page="educatorArea" />
      <S.EducatorAreaSlider>
        {publicationAreas.filter((item) => !item?.hide).map((item, i) => (
          <S.EducatorAreaSliderCard color={item.color} key={i}>
            {item.title}
          </S.EducatorAreaSliderCard>
        ))}
      </S.EducatorAreaSlider>
      <S.EducatorAreaPosts>
        {fakePublicationsArray.map((publication, i) => (
          <EducatorAreaPublication {...publication} key={i} />
        ))}
      </S.EducatorAreaPosts>
    </S.EducatorArea>
  )
}