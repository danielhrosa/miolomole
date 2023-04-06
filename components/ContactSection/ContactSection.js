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
    await axios.post('/api/contacts', { ...variables, type: 'contact' })
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

  return (
    <S.ContactSection>
      <Container>
        <S.ContactInfoWrapper>
          <S.TitleContact>Contato</S.TitleContact>
          <Editable {...props} textKey="textContact"><S.TextContact /></Editable>
          <S.TagContact>
            <S.Logo img={logoContato} />
            <S.ContactAdressWrapper>
              <S.ContactTitle>Endereço</S.ContactTitle>
              <Editable {...props} textKey="contactAdress"><S.ContactAdress /></Editable>
            </S.ContactAdressWrapper>
          </S.TagContact>
        </S.ContactInfoWrapper>
        <S.ContactForm>
          <Input {...name} setFields={setFields} gridTemplate />
          <Input {...email} setFields={setFields} gridTemplate />
          <Input {...message} setFields={setFields} gridTemplate />
          <Button {...submitButton} />
        </S.ContactForm>
      </Container>

    </S.ContactSection>
  )
}