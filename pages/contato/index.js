import mongoose from 'mongoose';
import Text from '../../models/text'

export async function getStaticProps() {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const page = 'contact';
  const textsArray = await Text.find({ page });
  const texts = textsArray.reduce((object, text) => Object.assign(object, {[text.textKey]: text.text}), {});
  return { props: { texts, page }, revalidate: 1 }
}

export { default } from './Contact';