import mongoose from 'mongoose';
import Publication from '../../models/publication';
import Text from '../../models/text';

export async function getServerSideProps() {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const textsArray = await Text.find({ page: 'educatorArea' });
  const texts = textsArray.reduce((object, text) => Object.assign(object, {[text.textKey]: text.text}), {});
  const publicationsArray = await Publication.find();
  const publications = publicationsArray ? JSON.stringify(publicationsArray) : []
  return { props: { publications, texts } }
}

export { default } from './EducatorArea';