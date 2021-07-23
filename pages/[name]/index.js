import mongoose from 'mongoose';
import Book from '../../models/book';
import Text from '../../models/text';

export async function getServerSideProps({ params: { name } }) {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const booksArr = await Book.find();
  const books = JSON.stringify(booksArr);
  const book = books.find((item) => name === item.name);
  const textsArray = await Text.find({ page: 'book' });
  const texts = textsArray.reduce((object, text) => Object.assign(object, {[text.textKey]: text.text}), {});
  return { props: { book, books, texts, page: 'book' } }
}

export { default } from '../livros/[name]/Book';