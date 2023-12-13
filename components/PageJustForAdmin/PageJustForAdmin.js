import Lottie from 'react-lottie';
import animationData from '../../lotties/403-forbidden-page.json';
import * as S from './PageJustForAdmin.styles';

export default function PageJustForAdmin(){
  const defaultOptions = {
    animationData,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
    
  return(
    <S.PageJustForAdmin>
      <Lottie 
        options={defaultOptions} 
        height={400}
        width={300}
      />
      <h1>Página somente para administradores</h1>
    </S.PageJustForAdmin>
  )
}