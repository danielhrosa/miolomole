import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './HeaderNav.style';

export default function HeaderNav({ isOpen, pages = [], toggle }) {
  const { asPath } = useRouter();
  
  return (
    <S.HeaderNav>
      {pages.map((item) => (
        <S.NavItem isActive={asPath === item.path} key={item.label} onClick={() => toggle(!isOpen)}>
          <Link href={item.path}>
            {item.label}
          </Link>
        </S.NavItem>
        ))}
    </S.HeaderNav>
  )
}
