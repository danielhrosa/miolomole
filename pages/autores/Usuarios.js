import { useAppProvider } from '../../store/appProvider';
import UsersList from '../../components/UsersList/UsersList';
import PageJustForAdmin from '../../components/PageJustForAdmin';
import CastList from '../../components/CastList';

export default function Usuarios(props){
  const { isLoggedIn } = useAppProvider();
  return isLoggedIn ? <UsersList {...props} /> : <CastList {...props} />
}
