import Lottie from 'react-lottie';
import * as S from './LogoutButton.style';
import animationData from '../../lotties/log-out.json';
import { useState } from 'react';
import { useAppProvider } from '../../store/appProvider';
import { removeCookies } from 'cookies-next';
import { useRouter } from 'next/router';

export default function LogoutButton(){
  const { isLoggedIn, setCurrentUser, setIsLoggedIn } = useAppProvider();
  const [paused, setPaused] = useState(true);
  const router = useRouter();
  const defaultOptions = {
    animationData: animationData,
    loop: true,
    autoplay: true,
    rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
  };

  if(isLoggedIn){
    return (
      <S.LogoutContainer>
        <S.LogoutWrapper
          onClick={ () => { setCurrentUser(''); setIsLoggedIn(false); removeCookies('TK'); router.replace(router.asPath, null, { scroll: false }); } } 
          onMouseEnter={() => setPaused(false)}
          onMouseLeave={() => setPaused(true)}
        >
          <Lottie
            options={defaultOptions}
            height={70}
            width={70}
            isPaused={paused}
           />
        </S.LogoutWrapper>
      </S.LogoutContainer>
    )
  } else return <></>
}
