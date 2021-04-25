import mongoose from 'mongoose';
import Book from '../../../models/book';

export async function getStaticPaths(){
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const books = await Book.find();
  const paths = books.map((book) => ({ params: { name: `${book.name}` } }))
  return { paths, fallback: true }
}

export async function getStaticProps({ params: { name } }) {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  if(!!name) {
    const booksObj = await Book.findOne({ name });
    const book = booksObj ? JSON.stringify(booksObj) : {}
    return { props: { book }, revalidate: 1  }
  } else {
    return { props: { book: {} }, revalidate: 1  }
  }
}

export { default } from './Book';