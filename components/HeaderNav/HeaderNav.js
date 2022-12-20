import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../../Elements/Button/Button';
import { useAppProvider } from '../../store/appProvider';
import * as S from './HeaderNav.style';
import { getCookies } from 'cookies-next';

export default function HeaderNav({ isOpen, pages = [], toggle }) {
  const { asPath } = useRouter();
  const { isLoggedIn } = useAppProvider();

  const hidePage = (e, pageId) => {
    e.stopPropagation();

  }

  return (
    <S.HeaderNav>
      {pages.map((page) => (
        <S.NavItem isActive={asPath === page.path} key={page.label} onClick={() => toggle(!isOpen)}>
          <Link href={page.path}>
            {page.label}
          </Link>
          {isLoggedIn && <Button type="toggleHide" onClick={(e) => hidePage(e, page._id)} />}
        </S.NavItem>
      ))}
    </S.HeaderNav>
  )
}
