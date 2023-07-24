import { getCookies } from 'cookies-next';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import Book from '../../../../models/book';
import Pages from '../../../../models/pages';
import User from '../../../../models/user';
import PNLD from '../../../../models/pnld';
import Text from '../../../../models/text';
import PNLDOurWorksBook from '../../../../components/PNLDOurWorksBook/PNLDOurWorksBook';

export default function OurWorksBookPage({ book, pnld, ...props }) {
  const bookObj = book ? JSON.parse(book) : {};
  const pnldObj = pnld ? JSON.parse(pnld) : {};

  return <PNLDOurWorksBook book={bookObj} pnld={pnldObj} {...props} />
}

export async function getServerSideProps({ params: { name, bookName }, req, res }) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });

  const { TK } = getCookies({ req, res });
  const { _id: token } = jwt.decode(TK, process.env.SECRET_KEY) || { token: undefined };

  const pnldObj = await PNLD.findOne({ name })
    .populate({ path: 'books', model: Book })
    .populate({
      path: 'books',
      populate: { path: 'authors', model: User }
    })
    .populate({
      path: 'books',
      populate: { path: 'illustrators', model: User }
    })

  const pnld = pnldObj ? JSON.stringify(pnldObj) : {}

  const book = JSON.stringify(pnldObj.books.find(({ name }) => name.includes(bookName)));
  const books = JSON.stringify(pnldObj.books);

  const textsArray = await Text.find({ page: 'book' });
  const texts = textsArray.reduce((object, text) => Object.assign(object, { [text.textKey]: text.text }), {});

  const pagesArray = await Pages.find(token ? {} : { isPrivate: { $ne: true } });
  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;

  return { props: { pnld, book, books, texts, pages } }
}