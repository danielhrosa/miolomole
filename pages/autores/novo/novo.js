import UserForm from '../../../components/UserForm';
import { useAppProvider } from '../../../store/appProvider';
import PageJustForAdmin from '../../../components/PageJustForAdmin';

export default function UsuariosPage(props){ 
  const { isLoggedIn } = useAppProvider();
  return isLoggedIn ? <UserForm { ...props } /> : <PageJustForAdmin />
}
