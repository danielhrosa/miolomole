import * as S from './WhereToBuy.styles';
import parser from 'html-react-parser';
import Button from '../../Elements/Button';
import { useRouter } from 'next/router';

export default function WhereToBuy(props) {
  const columns = [{ title: 'SÃO PAULO | SP' }, { title: 'SÃO PAULO - INTERIOR | SP' }];
  const router = useRouter();

  return (
    <S.WhereToBuy>
      <Button label='Voltar' variation="primary" onClick={() => router.back()} />
      <S.WhereToBuyHeaderTitle>Onde Comprar</S.WhereToBuyHeaderTitle>
      <S.WhereToBuyOptions>
        {columns.map((column) => (
          <S.WhereToBuyColum>
            <div>
              <S.WhereToBuyColumTitle>{column.title}</S.WhereToBuyColumTitle>
              <S.WhereToBuyColumText>{parser(
                `
              Nome da loja<br>
              <a href="#" target="_blank">www.sitedaloja.com</a><br>
              R. Exemplo, 420<br>
              Bairro | 0000-000<br>
              11 9999-9999<br>
              <br>
              Nome da loja<br>
              <a href="#">www.sitedaloja.com</a><br>
              R. Exemplo, 420<br>
              Bairro | 0000-000<br>
              11 9999-9999<br>
              <br>
            `
              )}
              </S.WhereToBuyColumText>
            </div>
          </S.WhereToBuyColum>
        ))}
      </S.WhereToBuyOptions>
    </S.WhereToBuy>
  )
}