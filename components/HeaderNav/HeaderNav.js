import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './HeaderNav.style';

export default function HeaderNav({ isOpen, pages = [], toggle }) {
  const { asPath } = useRouter();

  return (
    <S.HeaderNav>
      {pages.map((page) => (
        <S.NavItem isActive={asPath === page.path} key={page.label} onClick={() => toggle(!isOpen)}>
          <Link href={page.path}>
            {page?.label || ''}
          </Link>
        </S.NavItem>
      ))}
    </S.HeaderNav>
  )
}
