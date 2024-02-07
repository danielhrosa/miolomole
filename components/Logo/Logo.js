import Link from 'next/link';
import { useTheme } from 'styled-components';
import LogoMiolo from '../../images/js/Logo-miolo'

export default function Logo({ color }) {
  const theme = useTheme();

  return (
    <Link href={'/'}>
      <a><LogoMiolo color={color || theme.color.brand} /></a>
    </Link>
  )
}