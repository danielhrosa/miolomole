import ContactsComponent from "../../components/Contacts";
import PageJustForAdmin from '../../components/PageJustForAdmin';
import { useAppProvider } from "../../store/appProvider";

export default function Contacts(props) {
  const { isLoggedIn } = useAppProvider();
  return isLoggedIn ? <ContactsComponent {...props} /> : <PageJustForAdmin />
}