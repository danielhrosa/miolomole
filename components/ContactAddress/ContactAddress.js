import pt from '../../i18n/pt';
import parser from 'html-react-parser';
import * as S from './ContactAddress.style';
import Icon from '../Icon';


export default function ContactChannel(){
  const t = pt;
  return(
 
      <a href={t.ADDRESS.HREF} target="_blank">
        <Icon type={t.ADDRESS.ICON}/>
        <S.Label>{parser(t.ADDRESS.LABEL)}</S.Label>
      </a>
    </S.ContactAddressListItem>
  )
}
