import mongoose from 'mongoose';
import Book from '../../../../../models/book';
import urlNameFormatter from '../../../../../utils/urlNameFormatter';

export async function getServerSideProps({ params }) {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  try {
    const book = await Book.findOne({ name: params.name });
    book.assets = book.assets.filter((item) => item.assetType === params.assetType && urlNameFormatter(item.assetName) === urlNameFormatter(params.assetName))
    return { props: { book: JSON.stringify(book), params } }
  } catch { return }; 
}

export { default } from '../../../../../components/Assets';
