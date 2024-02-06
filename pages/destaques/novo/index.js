import Highlight from '../../../components/Highlight';
import { useAppProvider } from '../../../store/appProvider';
import PageJustForAdmin from '../../../components/PageJustForAdmin'
import Pages from '../../../models/pages'
import mongoose from 'mongoose'
import { getCookies } from 'cookies-next';
import jwt from 'jsonwebtoken';

export default function NewHighlight(props) {
  const { isLoggedIn } = useAppProvider();
  return isLoggedIn ? <Highlight {...props} /> : <PageJustForAdmin />
}

export async function getServerSideProps({ req, res }) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const { TK } = getCookies({ req, res });
  const { _id: token } = jwt.decode(TK, process.env.SECRET_KEY) || { token: undefined };

  const pagesArray = await Pages.find(token ? {} : { isPrivate: { $ne: true } });
  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;

  return { props: { pages } };
}