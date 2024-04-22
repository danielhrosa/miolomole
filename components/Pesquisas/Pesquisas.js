import Button from '../../Elements/Button'
import { useAppProvider } from '../../store/appProvider';
import Container from '../Container'
import Editable from '../Editable'
import * as S from './Pesquisas.styles'
import Link from 'next/link'
import randomColor from '../../utils/randomColor';

export default function Pesquisas(props) {
  const { isLoggedIn } = useAppProvider();

  const pesquisas = props.pesquisas ? JSON.parse(props.pesquisas) : [];

  return (
    <S.Pesquisas>
      <Container>
        <Editable {...props} textKey="pesquisasTitle"><S.PesquisasTitle /></Editable>
        {isLoggedIn && <Link href="/pesquisas/novo">
          <Button label="Cadastrar pesquisa" variation="primary" />
        </Link>}
        <S.PesquisasList>
          {pesquisas?.length
            ? pesquisas.map((pesquisa) => (
              <Link href={'/pesquisas/' + pesquisa.name}>
                <Button variation="primary" color={randomColor()}>{pesquisa.title}</Button>
              </Link>
            )) : <h3>Sem pesquisas cadastradas</h3>}
        </S.PesquisasList>
      </Container>
    </S.Pesquisas>
  )
}
