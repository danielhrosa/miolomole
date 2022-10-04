import Link from 'next/link';
import * as S from './FooterNav.style'

export default function FooterNav(){
  const navMenuItems = [
    { name: 'Livros', path: '/livros' },
    { name: 'Onde Comprar', path: '/onde-comprar' },
    { name: 'Quem somos', path: '/quem-somos' },
    { name: 'Contato', path: '/contato' },
    { name: 'Blog', path: 'https://editoramiolomole.com.br/' },
  ];

  return(
    <S.FooterNav>
      {navMenuItems.map((item) => 
        <S.NavItem key={item.name}>
          <Link href={item.path}>
            <span>{item.name}</span>
          </Link>
        </S.NavItem>
      )}
    </S.FooterNav>
  )
}
