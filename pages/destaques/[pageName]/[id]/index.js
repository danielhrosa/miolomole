import mongoose from 'mongoose';
import HighlightModel from '../../../../models/highlight';
import Pages from '../../../../models/pages';
import Highlight from '../../../../components/Highlight';
import { useAppProvider } from '../../../../store/appProvider';
import PageJustForAdmin from '../../../../components/PageJustForAdmin';
import { getCookies } from 'cookies-next';
import jwt from 'jsonwebtoken';

export default function HighlightPage(props) {
  const { highlight: destaque } = props;
  const { isLoggedIn } = useAppProvider();
  const highlight = destaque ? JSON.parse(destaque) : {}
  return isLoggedIn ? <Highlight {...props} highlight={highlight} /> : <PageJustForAdmin />
}

export async function getServerSideProps({ params: { id }, req, res }) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const { TK } = getCookies({ req, res });
  const { _id: token } = jwt.decode(TK, process.env.SECRET_KEY) || { token: undefined };
  const pagesArray = await Pages.find(token ? {} : { isPrivate: { $ne: true } });
  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;

  let highlightObj = await HighlightModel.findById(id);
  const highlight = id && highlightObj ? JSON.stringify(highlightObj) : {}
  return { props: { highlight, pages } }
  
}
