import mongoose from 'mongoose';
import PNLD from '../../models/pnld';
import Pages from '../../models/pages';
import Text from '../../models/text';
import { getCookies } from 'cookies-next';
import jwt from 'jsonwebtoken';
import Highlight from '../../models/highlight';

export async function getServerSideProps({ req, res }) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const page = "pnld";

  const textsArray = await Text.find({ page });
  const texts = textsArray.reduce((object, text) => Object.assign(object, { [text.textKey]: text.text }), {});

  const { TK } = getCookies({ req, res });
  const { _id: token } = jwt.decode(TK, process.env.SECRET_KEY) || { token: undefined };

  if(!token) {
    return { redirect: { permanent: false, destination: "/" } }
  }

  const highlightsArray = await Highlight.find({ isActive: true, page });
  const highlights = !!highlightsArray.length ? JSON.stringify(highlightsArray) : '[]';

  const pnldArray = await PNLD.find(token ? {} : { hide: { $ne: true } });
  const pnldObj = pnldArray ? JSON.stringify(pnldArray) : `[]`

  const pagesArray = await Pages.find(token ? {} : { isPrivate: { $ne: true } });
  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;

  return { props: { pnldObj, texts, pages, page, highlights } }
}

export { default } from './PNLD';