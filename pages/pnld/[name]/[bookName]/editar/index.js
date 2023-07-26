import mongoose from 'mongoose';
import BookPnld from '../../../../../models/bookPnld';
import Text from '../../../../../models/text';
import Pages from '../../../../../models/pages';
import { getCookies } from 'cookies-next';
import jwt from 'jsonwebtoken';
import User from '../../../../../models/user';

export async function getServerSideProps({ params: { bookName }, req, res }) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });

  const page = 'bookPnld';
  const { TK } = getCookies({ req, res });
  const { _id: token } = jwt.decode(TK, process.env.SECRET_KEY) || { token: undefined };

  const bookObj = await BookPnld.findOne({ name: bookName })
    .populate({ path: 'authors', model: User })
    .populate({ path: 'illustrators', model: User })
  const book = JSON.stringify(bookObj);

  const textsArray = await Text.find({ page });
  const texts = textsArray.reduce((object, text) => Object.assign(object, {[text.textKey]: text.text}), {});

  const pagesArray = await Pages.find(token ? {} : { isPrivate: { $ne: true }});
  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;

  return { props: { book, texts, page, pages, pnld: true } }
}

export { default } from './BookPnld';