import mongoose from 'mongoose';
import Text from '../../models/text';
import Blog from '../../models/blog';

export async function getServerSideProps() {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const page = 'blog';
  const textsArray = await Text.find({ page });
  const texts = textsArray.reduce((object, text) => Object.assign(object, {[text.textKey]: text.text}), {});
  const posts = await Blog.find();
  return { props: { texts, page, posts } };
}

export { default } from './Blog';