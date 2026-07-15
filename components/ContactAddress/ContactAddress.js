import pt from '../../i18n/pt';
import parser from 'html-react-parser';
import * as S from './ContactAddress.styles';
import Icon from '../Icon';


export default function ContactChannel(){
  const t = pt;
  return(
    <S.ContactAddressListItem className="contactAddress" name="address">
      <a href="https://maps.app.goo.gl/St3aTec3q1k1yxUdA" target="_blank">
        <Icon type={t.ADDRESS.ICON}/>
        <S.Label>Praça Cornélia, 89 - Água BrancaSão Paulo - SP, 05043-030</S.Label>
      </a>
    </S.ContactAddressListItem>
  )
}
