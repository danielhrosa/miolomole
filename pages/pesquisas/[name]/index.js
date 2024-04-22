import mongoose from 'mongoose';
import Text from '../../../models/text';
import Pages from '../../../models/pages';
import { getCookies } from 'cookies-next';
import jwt from 'jsonwebtoken';
import SiteSettings from '../../../models/siteSettings';
import Pesquisa from '../../../models/pesquisas';

export async function getServerSideProps({ params: { name }, req, res }) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });

  const { TK } = getCookies({ req, res });
  const { _id: token } = jwt.decode(TK, process.env.SECRET_KEY) || { token: undefined };

  const textsArray = await Text.find({ page: 'book' });
  const texts = textsArray.reduce((object, text) => Object.assign(object, {[text.textKey]: text.text}), {});

  const pagesArray = await Pages.find(token ? {} : { isPrivate: { $ne: true }});
  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;

  const menuOrderObj = await SiteSettings.findOne({ config: 'menuOrder' });
  const menuOrder = !!menuOrderObj ? JSON.stringify(menuOrderObj) : null;

  const pesquisaObj = await Pesquisa.findOne({ name });
  const pesquisa = JSON.stringify(pesquisaObj);

  return { props: { texts, page: 'pesquisas', pages, pesquisa, menuOrder } }
}

export { default } from './Pesquisa';