import Highlight from '../../../components/Highlight';
import { useAppProvider } from '../../../store/appProvider';

export default function NewEducatorPublication(){
  const { isLoggedIn } = useAppProvider();
  return isLoggedIn ? <Highlight /> : <PageJustForAdmin />
}