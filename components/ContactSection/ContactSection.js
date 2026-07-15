import { useState } from 'react';
import * as S from './ContactSection.style';
import Container from '../Container'
import { contactSectionFieldsState, contactSectionFunction } from './ContactSection.constants';
import Input from '../../Elements/Input'
import Button from '../../Elements/Button'
import logoContato from '../../images/logo-contato.png'
import Editable from '../Editable'
import mapFieldsToData from "../../utils/mapFieldsToData"
import axios from 'axios';

export default function ContactSection(props) {
  const [fields, setFields] = useState(contactSectionFieldsState);
  const contactSectionFields = contactSectionFunction({ fields, setFields });
  const { name, email, message } = contactSectionFields;

  const submitMessage = async () => {
    const variables = mapFieldsToData(contactSectionFields)
    await axios.post('/api/contato', { ...variables, type: 'contact' })
      .then((res) => {
        setFields((oldFields) => {
          const newFields = { ...oldFields };
          newFields.name.value = '';
          newFields.email.value = '';
          newFields.message.value = '';
          return newFields
        });
      })
  }

  const submitButton = {
    label: 'Enviar menssagem',
    onClick: submitMessage,
    variation: 'primary',
  }





  return(
    <S.ContactAddressListItem className="contactAddress" name="address">
      <a href={t.ADDRESS.HREF} target="_blank">
        <Icon type={t.ADDRESS.ICON}/>
        <S.Label>{parser(t.ADDRESS.LABEL)}</S.Label>
      </a>
    </S.ContactAddressListItem>
  )
