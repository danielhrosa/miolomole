import { useEffect, useState } from 'react';
import Input from '../../Elements/Input';
import Container from '../Container';
import PNLDBanner from '../PNLDBanner/PNLDBanner';
import { inputFieldsFunction, inputFieldsState } from './PNDLVideos.constants';
import * as S from './PNLDVideos.styles';
import { useAppProvider } from '../../store/appProvider';
import Button from '../../Elements/Button';
import mapFieldsToData from '../../utils/mapFieldsToData';
import mapDataToFields from '../../utils/mapDataToFields';
import toast from 'react-hot-toast';
import axios from 'axios';
import BookRelated from '../BookRelated/BookRelated';
import { useRouter } from 'next/router';

export default function PNLDVideos({ pnld, book, ...props }) {
  const { isLoggedIn } = useAppProvider();
  const [fields, setFields] = useState(inputFieldsState);
  const videosFields = inputFieldsFunction({ fields })
  const router = useRouter();

  const bannerProps = {
    pnld,
    color: pnld?.color,
    isLoggedIn: false,
    props
  }

   const inputProps = {
    isLoggedIn,
    setFields
  }

  const saveVideos = async () => {
    const variables = mapFieldsToData(videosFields);
    const res = await axios.put('/api/livros', { ...variables, name: book?.name, pnld })
    if (res.status === 200) {
      toast.success('Videos salvos com sucesso!')
    } else {
      toast.error("Erro ao tentar salvar os videos. Por favor chame o Pedro")
    }
  }

  useEffect(() => {
    book && setFields((oldFields) => {
      const newFields = { ...oldFields };
      mapDataToFields({ newFields, constantFields: videosFields, data: book })
      return newFields;
    })
  }, [book])

  return (
    <S.PNLDVideos>
      <Container>
        <PNLDBanner {...bannerProps} />
        <S.PNLDOurWorksBookTitle>{book?.title}</S.PNLDOurWorksBookTitle>
        <S.PNLDOurWorksBookCode color={pnld?.color}></S.PNLDOurWorksBookCode>
        <Button variation="primary" color={pnld?.color} onClick={() => router.push(router.asPath.replace("/videos", ""))}>Voltar</Button>
        <S.PNLDVideosWrapper>
          <S.PNLDOurWorksBookTitle>Vídeos</S.PNLDOurWorksBookTitle>
          <S.PNLDVideoPlayer>
            <S.PNLDOurWorksBookTitle>Vídeo do estudante</S.PNLDOurWorksBookTitle>
            <Input {...videosFields.pnldVideoStudent} {...inputProps} />
          </S.PNLDVideoPlayer>
          <S.Dotted />
          <S.PNLDVideoPlayer>
            <S.PNLDOurWorksBookTitle>Vídeo do professor</S.PNLDOurWorksBookTitle>
            {(!videosFields.pnldVideoTeacher?.value && !isLoggedIn) ? (
              <S.PNLDOurWorksBookTitle>Sem vídeo cadastrado</S.PNLDOurWorksBookTitle>
            ) : <Input {...videosFields.pnldVideoTeacher} {...inputProps} />}
          </S.PNLDVideoPlayer>
        </S.PNLDVideosWrapper>
        {isLoggedIn && <Button label="Salvar videos" variation="primary" onClick={saveVideos} />}
        <BookRelated pnld={pnld.name} textKey="PNLDOtherWorks" {...props} />
      </Container>
    </S.PNLDVideos>
  )
}
