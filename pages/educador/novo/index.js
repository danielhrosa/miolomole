import Highlight from '../../../components/Highlight';
import { useAppProvider } from '../../../store/appProvider';
import PageJustForAdmin from '../../../components/PageJustForAdmin/PageJustForAdmin'

export default function NewEducatorPublication(){
  const { isLoggedIn } = useAppProvider();
  return isLoggedIn ? <Highlight /> : <PageJustForAdmin />
}