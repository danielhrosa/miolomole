import toast from 'react-hot-toast';
import logoContato from '../../images/logo-contato.png';
import { useAppProvider } from '../../store/appProvider';
import Container from '../Container';
import Editable from '../Editable';
import * as S from './ContactSection.style';

const TextContactInfo = ({ props, isLoggedIn, textKey, textLabel = "" }) => {
  const value = props && props?.texts ? props?.texts[textKey] : '';
  let link = `mailto:${value}`;

  if (textKey === 'textContactWhatsapp') {
    link = `https://wa.me/55${value.replace(/\D/g, '')}`;
  }

  if (isLoggedIn) {
    return (
      <S.TextContactInfoWrapper>
        <span>{textLabel} </span>
        <Editable {...props} textKey={textKey}><S.TextContactInfo /></Editable>
      </S.TextContactInfoWrapper>
    )
  }
  return (
    <S.TextContactInfoWrapper>
      <span>{textLabel} </span>
      <a href={link} target="__blank" onClick={() => { navigator.clipboard.writeText(value); toast.success("Copiado!") }}>
        <Editable {...props} textKey={textKey}><S.TextContactInfo /></Editable>
      </a>
    </S.TextContactInfoWrapper>
  )
}

export default function ContactSection(props) {
  const { isLoggedIn } = useAppProvider();

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
          <TextContactInfo props={props} isLoggedIn={isLoggedIn} textKey="textContactOriginals" textLabel=" " /> // Envio de originais:
          <TextContactInfo props={props} isLoggedIn={isLoggedIn} textKey="textContctArtistPortfolio" textLabel="Portfólio de artista: " />
          <TextContactInfo props={props} isLoggedIn={isLoggedIn} textKey="textContactOtherSubjects" textLabel="Outros assuntos: " />
          <TextContactInfo props={props} isLoggedIn={isLoggedIn} textKey="textContactWhatsapp" textLabel="Whatsapp: " />
        </S.ContactForm>
      </Container>

    </S.ContactSection>
  )
}