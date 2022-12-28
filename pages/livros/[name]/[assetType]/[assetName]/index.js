import mongoose from 'mongoose';
import Book from '../../../../../models/book';
import Pages from '../../../../../models/pages';
import urlNameFormatter from '../../../../../utils/urlNameFormatter';
import { getCookies } from 'cookies-next';
import jwt from 'jsonwebtoken';

export async function getServerSideProps({ params, req, res }) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const { TK } = getCookies({ req, res });
  const { _id: token } = jwt.decode(TK, process.env.SECRET_KEY) || { token: undefined };

  const pagesArray = await Pages.find(token ? {} : { isPrivate: { $ne: true } });
  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;
  const book = await Book.findOne({ name: params.name });

  book.assets = book.assets.filter((item) => item.assetType === params.assetType && urlNameFormatter(item.assetName) === urlNameFormatter(params.assetName))

  return { props: { book: JSON.stringify(book), params, pages } }
}

export { default } from '../../../../../components/Assets';
