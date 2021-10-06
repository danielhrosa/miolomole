// import mongoose from 'mongoose';
// import Text from '../../models/text';
// import Book from '../../models/book';

// export async function getServerSideProps() {
//   await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
//   const page = 'addPartner';
//   const booksArray = await Book.find({});
//   const books = JSON.stringify(booksArray);
//   const textsArray = await Text.find({ page });
//   const texts = textsArray.reduce((object, text) => Object.assign(object, {[text.textKey]: text.text}), {});
//   return { props: { texts, page, books } }
// }

export { default } from './AddPartner'
