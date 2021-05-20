import mongoose from 'mongoose';
import Book from '../../../models/book';
import Text from '../../../models/text';

export async function getServerSideProps({ params: { name } }) {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  if(!!name) {
    const splittedId = name?.split('-');
    const hasAudiovisual = splittedId && splittedId[splittedId.length - 1] === 'audiovisual' || splittedId[splittedId.length - 1] === 'audioacessivel';
    const hasVersion = splittedId && splittedId[splittedId.length - 2] == 'versao';
    if(hasAudiovisual) { splittedId.pop() };
    if(hasVersion) { splittedId.pop() }
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
    return { props: { book: false, books: [], texts: [], hasAudiovisual } }
  }
}

export { default } from './Book';