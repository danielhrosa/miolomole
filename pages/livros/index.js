import mongoose from 'mongoose';
import Text from '../../models/text';
import Book from '../../models/book';
import Highlight from '../../models/highlight';
import User from '../../models/user';

export async function getServerSideProps() {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const page = 'books';
  const textsArray = await Text.find({ page });
  const booksArray = await Book.find();
  const highlightsArray = await Highlight.find({ isActive: true });
  const highlights = !!highlightsArray.length ? JSON.stringify(highlightsArray) : '[]';
  let itemsArray = await User.find();
  itemsArray = itemsArray.filter((item) => !!item?.occupation?.length && item.occupation?.some((occupation) => ['illustrator', 'writer'].includes(occupation)))
  const items = itemsArray ? JSON.stringify(itemsArray) : {}
  const books = JSON.stringify(booksArray);
  const texts = textsArray.reduce((object, text) => Object.assign(object, {[text.textKey]: text.text}), {});
  return { props: { texts, books, items, highlights, page } }
}

export { default } from './Books';