import Logo from '../Logo';
import Link from 'next/link';
import { useState } from 'react';
import * as S from './Header.style';
import HeaderNav from '../HeaderNav/HeaderNav';
import Hamburger from '../Hamburger';
import Container from '../Container';
import Input from '../../Elements/Input';
import SearchIcon from '../../images/js/search-icon';
import { headerFieldsFunction, headerFieldsState } from './Header.constants';
import { useRouter } from 'next/router';

export default function Header(){
  const router = useRouter();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [search, setSearch] = useState(headerFieldsState);
  const fieldsObj = headerFieldsFunction({ fields: search, router, setMenuIsOpen })
  const inputSearchObj = { ...fieldsObj.search, setFields: setSearch }

  const searchButton = () => {
    if(fieldsObj.search?.value) { return <Link href={`/livros/${fieldsObj.search?.value?.name}`}><a><SearchIcon /></a></Link> }
    else { return <SearchIcon /> }
  }

  return(
    <S.Header>
      <Container>
      <Hamburger isOpen={menuIsOpen} toggle={setMenuIsOpen} />
      <Logo />
      <S.HeaderMenu isOpen={menuIsOpen} onClick={() => setMenuIsOpen(!menuIsOpen)}>
        <S.HeaderMenuContainer isOpen={menuIsOpen} onClick={(e) => e.stopPropagation()}>
          <Hamburger isOpen={menuIsOpen} toggle={setMenuIsOpen} />
          <Logo/>
          <HeaderNav isOpen={menuIsOpen} toggle={setMenuIsOpen} />
          <S.SearchField className="searchFieldMobile" isOpen={menuIsOpen}>
            <Input { ...inputSearchObj } />
            {searchButton()}
          </S.SearchField>
        </S.HeaderMenuContainer>
      </S.HeaderMenu>
      <S.SearchField isOpen={menuIsOpen}>
        <Input { ...inputSearchObj } />
        {searchButton()}
      </S.SearchField>
      </Container>
    </S.Header>
  )
}
