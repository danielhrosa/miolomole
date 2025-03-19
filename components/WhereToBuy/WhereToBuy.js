import * as S from './WhereToBuy.styles';
import parser from 'html-react-parser';
import Button from '../../Elements/Button';
import { useRouter } from 'next/router';
import Editable from '../Editable';
import { useAppProvider } from '../../store/appProvider';

export default function WhereToBuy(props) {
  const { isLoggedIn } = useAppProvider();

  const columns = [
    {
      title: { textKey: 'whereToBuy-title-1', ...props },
      text: { textKey: 'whereToBuy-text-1', ...props }
    },
    {
      title: { textKey: 'whereToBuy-title-2', ...props },
      text: { textKey: 'whereToBuy-text-2', ...props }
    }
  ];

  const router = useRouter();

  return (
    <S.WhereToBuy>
      <Button label='Voltar' variation="primary" onClick={() => router.back()} />
      <S.WhereToBuyHeaderTitle>Onde Comprar</S.WhereToBuyHeaderTitle>
      <S.WhereToBuyOptions isLoggedIn={isLoggedIn}>
        <S.WhereToBuyColum isLoggedIn={isLoggedIn}>
          <S.WhereToBuyColumWrapper isLoggedIn={isLoggedIn}>
            <Editable textKey="whereToBuy-title-1" {...props}><S.WhereToBuyColumTitle /></Editable>
            <Editable textKey="whereToBuy-text-1" {...props}><S.WhereToBuyColumText /></Editable>
          </S.WhereToBuyColumWrapper>
        </S.WhereToBuyColum>
      </S.WhereToBuyOptions>
    </S.WhereToBuy>
  )
}