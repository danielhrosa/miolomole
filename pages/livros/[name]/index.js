import mongoose from 'mongoose';
import Book from '../../../models/book';
import Text from '../../../models/text';

// export async function getStaticPaths(){
//   await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
//   const books = await Book.find();
//   const paths = [ 
//     ...books.map((book) => ({ params: { name: `${book.name}` } })), 
//     ...books.map((book) => ({ params: { name: `${book.name}-audiovisual` } })), 
//     ...books.map((book) => ({ params: { name: `${book.name}-versao-audiovisual` } })) 
//     ...books.map((book) => ({ params: { name: `${book.name}-versao-audiovisual` } }))

//   ]
//   return { paths, fallback: true }
// }

export async function getServerSideProps({ params: { name } }) {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  if(!!name) {
    const splittedId = name?.split('-');
    const hasAudioacessivel = splittedId && splittedId[splittedId.length - 1] === 'audioacessivel';
    const hasAudiovisual = splittedId && splittedId[splittedId.length - 1] === 'audiovisual';
    const hasVersionAudiovisual = splittedId && splittedId.slice( - 2).join() == 'versao,audiovisual';
    if(hasAudiovisual || hasAudioacessivel) { splittedId.pop() };
    if(hasVersionAudiovisual) { splittedId.pop() }
    const acessivel = hasAudioacessivel || hasAudiovisual
    const joinedName = splittedId?.join('-');
    const booksObj = await Book.findOne({ name: joinedName }).populate('authors').populate('illustrators');
    const booksArr = await Book.find();
    const book = booksObj ? JSON.stringify(booksObj) : {}
    const books = booksArr ? JSON.stringify(booksArr) : []
    const page = 'books';
    const textsArray = await Text.find({ page });
    const texts = textsArray.reduce((object, text) => Object.assign(object, {[text.textKey]: text.text}), {});
    return { props: { book, books, texts, hasAudiovisual } }
  } else {
    return { props: { book: {}, books: [], texts: [], hasAudiovisual } }
  }
}

export { default } from './Book';