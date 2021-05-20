import mongoose from 'mongoose';
import Text from '../../models/text';
import Partner from '../../models/partner';
import Book from '../../models/book';

export async function getServerSideProps() {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const page = 'store';
  const textsArray = await Text.find({ page });
  const partnersArray = await Partner.find({});
  const booksArray = await Book.find({});
  const texts = textsArray.reduce((object, text) => Object.assign(object, {[text.textKey]: text.text}), {});
  const books = JSON.stringify(booksArray);
  const partners = partnersArray.reduce((object, partner) => Object.assign(object, {
    [partner.name]: {
      _id: partner._id.toString(),
      name: partner.name,
      logo: partner.logo,
      description: partner.description
    }
  }), {});
  return { props: { texts, partners, books, page } }
}

export { default } from './Store';