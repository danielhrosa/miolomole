import { getCookies } from 'cookies-next';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import PNLDVideosComponent from '../../../../../components/PNLDVideos/PNLDVideos';
import BookPnld from '../../../../../models/bookPnld';
import Pages from '../../../../../models/pages';
import PNLD from '../../../../../models/pnld';
import User from '../../../../../models/user';
import Text from '../../../../../models/text';

export default function Videos(props) {
  const book = props?.book ? JSON.parse(props.book) : {};
  const pnld = props?.pnld ? JSON.parse(props.pnld) : {};
  const books = props?.books ? JSON.parse(props.books) : {};

  return (
    <PNLDVideosComponent {...props} book={book} books={books} pnld={pnld} />
  )
};

export async function getServerSideProps({ params, req, res }) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const { TK } = getCookies({ req, res });
  const { _id: token } = jwt.decode(TK, process.env.SECRET_KEY) || { token: undefined };

  const page = 'PNLDOurWorksBook';

  const pnldObj = await PNLD.findOne({ name: params?.name })
    .populate({ path: 'books', model: BookPnld })
    .populate({
      path: 'books',
      populate: { path: 'authors', model: User }
    })
    .populate({
      path: 'books',
      populate: { path: 'illustrators', model: User }
    })

  const pnld = pnldObj ? JSON.stringify(pnldObj) : {}

  const pagesArray = await Pages.find(token ? {} : { isPrivate: { $ne: true } });
  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;

  const textsArray = await Text.find({ page });
  const texts = textsArray.reduce((object, text) => Object.assign(object, { [text.textKey]: text.text }), {});

  const book = JSON.stringify(pnldObj.books.find(({ name }) => name.includes(params?.bookName)));
  const books = JSON.stringify(pnldObj.books);

  return { props: { book, books, texts, pnld, params, pages } }
}
