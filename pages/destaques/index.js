import mongoose from 'mongoose';
import Highlight from '../../models/highlight';
import Pages from '../../models/pages';
import { getCookies } from 'cookies-next';
import jwt from 'jsonwebtoken';

export async function getServerSideProps({ req, res }) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const { TK } = getCookies({ req, res });
  const { _id: token } = jwt.decode(TK, process.env.SECRET_KEY) || { token: undefined };
  let highlightsArray = await Highlight.find();
  if(highlightsArray) {
    highlightsArray = highlightsArray.reduce((acc, highlight) => {
      if (!acc[highlight?.page]) {
        return ({ ...acc, [highlight?.page]: [highlight] });
      }
      return ({ ...acc });
    }, {})
  }
  const highlightsByPageStringfied = highlightsArray ? JSON.stringify(highlightsArray) : []

  const pagesArray = await Pages.find(token ? {} : { isPrivate: { $ne: true } });
  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;

  return { props: { highlightsByPageStringfied, pages } }
}

export { default } from './Destaques';