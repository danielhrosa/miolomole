import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './FooterNav.style'

export default function FooterNav(){
  const router = useRouter();

  const navMenuItems = [
    {name: 'Home', path: '/'},
    {name: 'Livros', path: '/livros' },
    {name: 'Blog', path: '/blog'},
    {name: 'Quem somos', path: '/quem-somos'},
    {name: 'Contato', path: '/contato'},
  ]

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
