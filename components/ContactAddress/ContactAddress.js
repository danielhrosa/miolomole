
import parser from 'html-react-parser';
import * as S from './ContactAddress.styles';
import Icon from '../Icon';


export default function ContactChannel(){
  const t = pt;
  return(
    <S.ContactAddressListItem className="contactAddress" name="address">
      <a href="https://maps.app.goo.gl/wRpQnLLa8HcjAMee8" target="_blank">
        <Icon type={t.ADDRESS.ICON}/>
        <S.Label>Praça Cornélia, 89 - Água Branca, São Paulo - SP, 05043-030</S.Label>
      </a>
    </S.ContactAddressListItem>
  )
}
