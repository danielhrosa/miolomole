import mongoose from 'mongoose';
import PageJustForAdmin from '../../components/PageJustForAdmin'
import EditMenuPage from '../../components/EditMenuPage/EditMenuPage'
import Pages from '../../models/pages'
import { useAppProvider } from '../../store/appProvider';

export async function getServerSideProps({ req, res }) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const pagesArray = await Pages.find({ path: { $ne: '/editar-menu' } });
  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;

  return { props: { pages } }
}

export default function EditMenu(props) {
  const { isLoggedIn } = useAppProvider();
  const pages = props.pages ? JSON.parse(props.pages) : {}
  return isLoggedIn ? <EditMenuPage pages={pages} /> : <PageJustForAdmin />
}