import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAppProvider } from '../../store/appProvider';
import * as S from './HeaderNav.style'

export default function HeaderNav({isOpen, toggle}){
  const { asPath } = useRouter();
  const { isLoggedIn } = useAppProvider();
  let navMenuItems = [
    { name: 'Home', path: '/' },
    { name: 'Livros', path: '/livros' },
    { name: 'Quem somos', path: '/quem-somos' },
    { name: 'Contato', path: '/contato' },
    { name: 'Blog', path: '/blog' },
  ];

  if(isLoggedIn) { navMenuItems = navMenuItems.concat(
    { name: 'Destaques', path: '/destaques'},
    { name: 'Usuários', path: '/autores'}
  )};

  return (
    <S.HeaderNav>
      {navMenuItems.map((item) => 
        <S.NavItem isActive={asPath === item.path} key={item.name} onClick={() => toggle(!isOpen)}>
          <Link href={item.path}>
            {item.name}
          </Link>
        </S.NavItem>
      )}
    </S.HeaderNav>
  )
}
