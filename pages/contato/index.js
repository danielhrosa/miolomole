import mongoose from 'mongoose';
import Text from '../../models/text'
import Pages from '../../models/pages'
import { getCookies } from 'cookies-next';
import jwt from 'jsonwebtoken';
import SiteSettings from '../../models/siteSettings';

export async function getServerSideProps({ req, res }) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const { TK } = getCookies({ req, res });
  const { _id: token } = jwt.decode(TK, process.env.SECRET_KEY) || { token: undefined };

  const page = 'contact';
  const textsArray = await Text.find({ page });
  const texts = textsArray.reduce((object, text) => Object.assign(object, { [text.textKey]: text.text }), {});

  const pagesArray = await Pages.find(token ? {} : { isPrivate: { $ne: true } });
  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;

  const menuOrderObj = await SiteSettings.findOne({ config: 'menuOrder' });
  const menuOrder = !!menuOrderObj ? JSON.stringify(menuOrderObj) : null;

  return { props: { texts, page, pages, menuOrder } }
}

export { default } from './Contact';