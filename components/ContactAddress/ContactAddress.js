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
        <S.Label>Rua Vespasiano, 581 - Vila Romana - São Paulo - SP, 05044-050</S.Label>
      </a>
    </S.ContactAddressListItem>
  )
}