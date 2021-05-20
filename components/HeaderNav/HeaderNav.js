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
    { name: 'Loja', path: '/loja' },
    { name: 'Quem somos', path: '/quem-somos' },
    { name: 'Contato', path: '/contato' },
  ];

  if(isLoggedIn) { navMenuItems = navMenuItems.concat(
    { name: 'Destaques', path: '/destaques'},
    { name: 'Blog', path: '/blog' },
    { name: 'Usuários', path: '/Usuários'}
  )};

  return (
    <S.HeaderNav>
      {navMenuItems.map((item) => 
        <S.NavItem isActive={asPath === item.path} key={item.name} key={item.name} onClick={() => toggle(!isOpen)}>
          <Link href={item.path}>
            {item.name}
          </Link>
        </S.NavItem>
      )}
    </S.HeaderNav>
  )
}
