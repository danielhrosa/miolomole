import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './HeaderNav.style';

export default function HeaderNav({ isOpen, pages = [], toggle }) {
  const { asPath } = useRouter();
  
  console.log(pages)

  return (
    <S.HeaderNav>
      {pages.map((item) =>
        <S.NavItem isActive={asPath === item.path} key={item.name} onClick={() => toggle(!isOpen)}>
          <Link href={item.path}>
            {item.name}
          </Link>
        </S.NavItem>
      )}
    </S.HeaderNav>
  )
}
