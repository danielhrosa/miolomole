import mongoose from 'mongoose';
import Pages from '../../../models/pages';

export async function getServerSideProps() {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const pagesArray = await Pages.find({});
  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;
  return { props: { pages } }
}
export { default } from './admin'