import mongoose from 'mongoose';
import Book from '../../models/book';
import Text from '../../models/text';

export async function getServerSideProps({ params: { name } }) {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const hasExtraContentsInURL = [ 
    'verao-audiovisual',
    'versao-ausiovisual',
    'buyua-wasu-versao-audiovisual',
    'versao-audiovisual-acessivel',
    'versao-audiovisual',
    'audiovisual',
    'versao-audioacessivel',
  ]
  let partURL, bookName, books;
  let book = null;
  let hasAudiovisual = null;
  const page = 'book';
  const textsArray = await Text.find({ page });
  const texts = textsArray.reduce((object, text) => Object.assign(object, {[text.textKey]: text.text}), {});
  if (hasExtraContentsInURL.some((part) => { if(name.includes(part)) { partURL = part; return true } })) { 
    hasAudiovisual = true; 
  }
  bookName = name.replace(`-${partURL}`, '')
  if(bookName) { books = await Book.find({ name: new RegExp(bookName,"g") }).populate('authors').populate('illustrators') };
  if(books.length) { book = JSON.stringify(books[0]) };
  return { props: { book, hasAudiovisual, texts, page } }
}

export { default } from '../livros/[name]/Book';