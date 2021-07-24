import mongoose from 'mongoose';
import Book from '../../models/book';

export async function getServerSideProps({ params }) {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  try { 
    const book = await Book.findOne({ name: params.name });
    return { props: { book, params } }
  } catch { return }; 
}

export { default } from '../livros/[name]/Book';
