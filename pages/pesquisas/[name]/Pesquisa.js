import Pesquisa from '../../../components/Pesquisa/Pesquisa'
import PesquisaForm from '../../../components/PesquisasForm/PesquisasForm';
import { useAppProvider } from '../../../store/appProvider';

export default function PesquisaPage(props) {
  const { isLoggedIn } = useAppProvider();
  return isLoggedIn ? <PesquisaForm {...props} /> : <Pesquisa {...props} />;
}