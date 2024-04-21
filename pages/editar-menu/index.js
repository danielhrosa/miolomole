import mongoose from 'mongoose';
import PageJustForAdmin from '../../components/PageJustForAdmin'
import EditMenuPage from '../../components/EditMenuPage/EditMenuPage'
import Pages from '../../models/pages'
import { useAppProvider } from '../../store/appProvider';
import { getCookies } from 'cookies-next';
import jwt from 'jsonwebtoken';
import SiteSettings from '../../models/siteSettings';

export async function getServerSideProps({ req, res }) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });

  const { TK } = getCookies({ req, res });
  const { _id: token } = jwt.decode(TK, process.env.SECRET_KEY) || { token: undefined };

  if(!token) {
    return { redirect: { permanent: false, destination: "/" } }
  }

  const pagesArray = await Pages.find();
  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;
  
  const menuOrderObj = await SiteSettings.findOne({ config: 'menuOrder' });
  const menuOrder = !!menuOrderObj ? JSON.stringify(menuOrderObj) : null;

  return { props: { pages, menuOrder } }
}

export default function EditMenu(props) {
  const { isLoggedIn } = useAppProvider();
  const pages = props.pages ? JSON.parse(props.pages) : {}
  const menuOrderObj = props?.menuOrder ? JSON.parse(props.menuOrder) : null
  const menuOrder = menuOrderObj ? JSON.parse(menuOrderObj.value) : null
  return isLoggedIn ? <EditMenuPage pages={pages} menuOrder={menuOrder} /> : <PageJustForAdmin />
}