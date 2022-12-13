import * as S from './ComingSoon.styles'
import LogoMiolo from '../../images/js/Logo-miolo';
import randomColor from '../../utils/randomColor';

export default function ComingSoon(){
  return (
    <S.ComingSoon><span>Em breve</span><LogoMiolo color={randomColor()} /></S.ComingSoon>
  )
}