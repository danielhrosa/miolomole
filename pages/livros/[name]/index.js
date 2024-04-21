import mongoose from 'mongoose';
import Book from '../../../models/book';
import Catalog from '../../../models/catalog';
import Text from '../../../models/text';
import Pages from '../../../models/pages';
import { getCookies } from 'cookies-next';
import jwt from 'jsonwebtoken';
import SiteSettings from '../../../models/siteSettings';

export async function getServerSideProps({ params: { name }, req, res }) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });

  const { TK } = getCookies({ req, res });
  const { _id: token } = jwt.decode(TK, process.env.SECRET_KEY) || { token: undefined };

  const context = name;

  const booksArr = await Book.find(token ? {} : { isHidden: { $ne: true } }).populate('authors').populate('illustrators');
  const book = JSON.stringify(booksArr.find((item) => item.name.includes(name)));
  const books = JSON.stringify(booksArr);

  const textsArray = await Text.find({ page: 'book' });
  const texts = textsArray.reduce((object, text) => Object.assign(object, {[text.textKey]: text.text}), {});

  const pagesArray = await Pages.find(token ? {} : { isPrivate: { $ne: true }});
  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;

  const catalogsArray = await Catalog.find({ context });
  const catalogs = !!catalogsArray?.length ? JSON.stringify(catalogsArray) : `[]`;

  const menuOrderObj = await SiteSettings.findOne({ config: 'menuOrder' });
  const menuOrder = !!menuOrderObj ? JSON.stringify(menuOrderObj) : null;

  return { props: { book, books, texts, page: 'book', catalogs, context, pages, menuOrder } }
}

export { default } from './Book';