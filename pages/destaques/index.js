import mongoose from 'mongoose';
import Highlight from '../../models/highlight';

export async function getServerSideProps() {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const highlightsArray = await Highlight.find();
  const highlights = highlightsArray ? JSON.stringify(highlightsArray) : []
  return { props: { highlights } }
}

export { default } from './Destaques';