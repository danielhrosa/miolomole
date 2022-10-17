import Highlight from '../../../components/Highlight';
import { useAppProvider } from '../../../store/appProvider';
import PageJustForAdmin from '../../../components/PageJustForAdmin'

export default function NewHighlight(){
  const { isLoggedIn } = useAppProvider();
  return isLoggedIn ? <Highlight /> : <PageJustForAdmin />
}