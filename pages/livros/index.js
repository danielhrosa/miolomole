import mongoose from 'mongoose';
import Text from '../../models/text';
import Book from '../../models/book';
import Pages from '../../models/pages';
import Highlight from '../../models/highlight';
import User from '../../models/user';
import { getCookies } from 'cookies-next';
import jwt from 'jsonwebtoken';
import SiteSettings from '../../models/siteSettings';

export async function getServerSideProps({ req, res }) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });

  const { TK } = getCookies({ req, res });
  const { _id: token } = jwt.decode(TK, process.env.SECRET_KEY) || { token: undefined };

  const page = 'books';
  const textsArray = await Text.find({ page });
  const booksArray = await Book.find(token ? {} : { isHidden: { $ne: true } });
  const highlightsArray = await Highlight.find({ isActive: true, page: 'books' });
  const highlights = !!highlightsArray.length ? JSON.stringify(highlightsArray) : '[]';
  let itemsArray = await User.find({ hideFromList: { $ne: true } });
  itemsArray = itemsArray.filter((item) => !!item?.occupation?.length && item.occupation?.some((occupation) => ['illustrator', 'writer'].includes(occupation)))
  const items = itemsArray ? JSON.stringify(itemsArray) : {}
  const books = JSON.stringify(booksArray);
  const texts = textsArray.reduce((object, text) => Object.assign(object, { [text.textKey]: text.text }), {});

  const pagesArray = await Pages.find(token ? {} : { isPrivate: { $ne: true } });
  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;

  const siteConfigObj = await SiteSettings.findOne({ config: 'bannerSpeedbooks' });
  const siteConfig = siteConfigObj ? JSON.stringify(siteConfigObj) : null;

  return { props: { texts, books, items, highlights, page, pages, siteConfig } }
}

export { default } from './Books';