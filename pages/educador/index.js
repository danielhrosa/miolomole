import mongoose from 'mongoose';
import Publication from '../../models/publication';

export async function getServerSideProps() {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const publicationsArray = await Publication.find();
  const publications = publicationsArray ? JSON.stringify(publicationsArray) : []
  return { props: { publications } }
}

export { default } from './EducatorArea';