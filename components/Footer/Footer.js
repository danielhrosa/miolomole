import Logo from '../Logo';
import ContactAddress from '../ContactAddress';
import ContactSocial from '../ContactSocial';
import Copyright from '../Copyright';
import FooterNav from '../FooterNav';
import Container from '../Container'
import * as S from './Footer.style';
import Partners from '../Partners/Partners';

export default function Footer(){

  return(
    <>
    <S.Footer>
      <Container>
        <S.FooterNav>
          <S.FooterNavList>
            <S.FooterNavItem name="logo"><Logo/></S.FooterNavItem>
            <FooterNav/>
            <ContactSocial/>
            <Partners/>
          </S.FooterNavList>
        </S.FooterNav>

        <S.FooterBottom>
          <Copyright/>
          <ContactAddress/>
        </S.FooterBottom>
        
      </Container>
    </S.Footer>
    </>
  )

}