import * as S from './WhereToBuy.styles';
import parser from 'html-react-parser';
import Button from '../../Elements/Button';
import { useRouter } from 'next/router';
import Editable from '../Editable';

export default function WhereToBuy(props) {
  const columns = [
    {
      title: { textKey: 'whereToBuy-title-1', ...props },
      text: { textKey: 'whereToBuy-text-1', ...props }
    }, {
      title: { textKey: 'whereToBuy-title-2', ...props },
      text: { textKey: 'whereToBuy-text-2', ...props }
    }
  ];
  const router = useRouter();

  return (
    <S.WhereToBuy>
      <Button label='Voltar' variation="primary" onClick={() => router.back()} />
      <S.WhereToBuyHeaderTitle>Onde Comprar</S.WhereToBuyHeaderTitle>
      <S.WhereToBuyOptions>
        {columns.map((column) => (
          <S.WhereToBuyColum>
            <div>
              <Editable {...column.title}><S.WhereToBuyColumTitle /></Editable>
              <Editable {...column.text}><S.WhereToBuyColumText /></Editable>
            </div>
          </S.WhereToBuyColum>
        ))}
      </S.WhereToBuyOptions>
    </S.WhereToBuy>
  )
}