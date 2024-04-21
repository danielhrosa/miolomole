import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './HeaderNav.style';

const orderFunc = (list, order) => (
  list.sort((a, b) => order.indexOf(a._id) - order.indexOf(b._id))
)

export default function HeaderNav({ isOpen, pages = [], menuOrder, toggle }) {
  const { asPath } = useRouter();

  pages = orderFunc(pages, menuOrder);

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
