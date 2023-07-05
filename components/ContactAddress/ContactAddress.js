import pt from '../../i18n/pt';
import parser from 'html-react-parser';
import * as S from './ContactAddress.styles';
import Icon from '../Icon';


export default function ContactChannel(){
  const t = pt;
  return(
    <S.ContactAddressListItem className="contactAddress" name="address">
      <a href={t.ADDRESS.HREF} target="_blank">
        <Icon type={t.ADDRESS.ICON}/>
        <S.Label>{parser(t.ADDRESS.LABEL)}</S.Label>
      </a>
    </S.ContactAddressListItem>
  )
}