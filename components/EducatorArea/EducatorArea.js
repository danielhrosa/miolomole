import { useRouter } from 'next/router';
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useAppProvider } from '../../store/appProvider';
import Container from '../Container';
import EducatorAreaPublication from '../EducatorAreaPublicationCard/EducatorAreaPublicationCard';
import Jumbotron from '../Jumbotron/Jumbotron';
import * as S from './EducatorArea.styles';
import animationData from '../../lotties/empty.json';
import Lottie from 'react-lottie';
import axios from 'axios';
import toast from 'react-hot-toast';
import ComingSoon from '../ComingSoon/ComingSoon';
import Button from '../../Elements/Button';

export default function EducatorArea({ publications, publicationsAreas: pubAreas, ...props }) {
  const { isLoggedIn } = useAppProvider();
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [newPublications, setNewPublications] = useState(publications);
  const [newPublicationsAreas, setNewPublicationsAreas] = useState(pubAreas);
  const colors = pubAreas.map((item) => item?.color);

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    beforeChange: (_oldIndex, newIndex) => { setIndex(newIndex) },
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  const handleDeletePublication = async ({ _id, title }) => {
    const confirm = window.confirm(`Tem certeza que deseja deletar "${title}"?`)
    if (!confirm) { return false };
    setNewPublications((oldPublication) => [...oldPublication].filter((publication) => publication._id !== _id))
    await axios.delete(`/api/publication`, { data: { _id } })
      .catch((err) => { toast.error(`Error ${err.response.data.errorMessage || ''}`) })
  }

  const handleDeletePublicationArea = async ({ _id, title }) => {
    const confirm = window.confirm(`Tem certeza que deseja deletar "${title}"?`)
    if (!confirm) { return false };
    setNewPublicationsAreas((oldPublication) => [...oldPublication].filter((publication) => publication._id !== _id))
    await axios.delete(`/api/publicationArea`, { data: { _id } })
      .catch((err) => { toast.error(`Error ${err.response.data.errorMessage || ''}`) })
  }

  const handleHidePublication = async (publication) => {
    const { _id, title, hide } = publication;
    const confirm = window.confirm(`Tem certeza que deseja ${!!hide ? 'desocultar' : 'ocultar'} a publicação "${title}"?`);
    if (!confirm) { return false };
    setNewPublications((oldPublication) => [...oldPublication].reduce((publications, publication) => publication._id !== _id ? [...publications, publication] : [...publications, { ...publication, hide: !publication?.hide }], []))
    await axios.put(`/api/publication`, { ...publication, hide: !hide })
      .then((res) => { res.status === 200 && toast.success('Sucesso') })
      .catch((err) => {
        toast.error(`Error ${err.response.data.errorMessage || ''}`)
        setNewPublications((oldPublication) => [...oldPublication].reduce((publications, publication) => publication._id !== _id ? [...publications, publication] : [...publications, { ...publication, hide: !publication?.hide }], []))
      })
  }

  const publicationProps = { handleDeletePublication, handleHidePublication, isLoggedIn }

  return (
    <S.EducatorArea>
      <Jumbotron {...props} page="educatorArea" />
      <Container>
        {/* <S.SliderContainer colors={colors} index={index}> */}
          {/* isLoggedIn && <S.AddButton colors={colors} index={index} className="unselectable" onClick={() => router.push('/educador/novo')}>Cadastrar<span>+</span></S.AddButton> */}
          {/* newPublicationsAreas?.length && (
            <Slider {...settings}>
              {newPublicationsAreas.map((item, i) => (
                <S.EducatorAreaSliderCard color={item.color} key={i}>
                  {isLoggedIn && (
                    <S.EducatorAreaSliderCardButtons>
                      <Button onClick={(e) => { e.stopPropagation(); handleDeletePublicationArea(item); }} type="delete" />
                    </S.EducatorAreaSliderCardButtons>
                  )}
                  {item.title}
                </S.EducatorAreaSliderCard>
              ))}
            </Slider>
          )*/}
        {/* </S.SliderContainer> */}
        <S.EducatorAreaPosts>
          {newPublications?.length
            ? newPublications.map((publication, i) => <EducatorAreaPublication publication={publication} key={i} {...publicationProps} />)
            : <ComingSoon />
          }
        </S.EducatorAreaPosts>
      </Container >
    </S.EducatorArea>
  )
}