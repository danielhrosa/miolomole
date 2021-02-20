import pt from '../../i18n/pt';
import parser from 'html-react-parser';
import * as S from './Copyright.style';


export default function ContactChannel(){
  const t = pt;
  return(
    <S.Copyright>
      &copy; {parser(t.COPYRIGHT)}
    </S.Copyright>
  )
}