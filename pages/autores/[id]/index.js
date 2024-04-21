import mongoose from 'mongoose';
import Pages from '../../../models/pages';
import User from '../../../models/user';
import UserForm from '../../../components/UserForm';
import { useAppProvider } from '../../../store/appProvider';
import PageJustForAdmin from '../../../components/PageJustForAdmin';
import { getCookies } from 'cookies-next';
import jwt from 'jsonwebtoken';
import SiteSettings from '../../../models/siteSettings';

export default function index(props) {
  const { user: userProp } = props;
  const { isLoggedIn } = useAppProvider();
  const user = userProp ? JSON.parse(userProp) : {}
  return isLoggedIn ? <UserForm {...props} user={user} /> : <PageJustForAdmin />
}

export async function getServerSideProps({ params: { id }, req, res }) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const { TK } = getCookies({ req, res });
  const { _id: token } = jwt.decode(TK, process.env.SECRET_KEY) || { token: undefined };
  const pagesArray = await Pages.find(token ? {} : { isPrivate: { $ne: true } });
  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;

  const menuOrderObj = await SiteSettings.findOne({ config: 'menuOrder' });
  const menuOrder = !!menuOrderObj ? JSON.stringify(menuOrderObj) : null;

  if (id) {
    let userObj = await User.findById(id);
    userObj.password = ''
    const user = userObj ? JSON.stringify(userObj) : {}
    return { props: { user, pages, menuOrder } }
  } else {
    return { props: { user: {}, pages, menuOrder } }
  }
}
