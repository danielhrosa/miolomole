import mongoose from 'mongoose';
import Highlight from '../../models/highlight';
import Pages from '../../models/pages';

export async function getServerSideProps() {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const highlightsArray = await Highlight.find();
  const highlights = highlightsArray ? JSON.stringify(highlightsArray) : []
  const pagesArray = await Pages.find(token ? {} : { isPrivate: { $ne: true }});

  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;
  return { props: { highlights, pages } }
}

export { default } from './Destaques';