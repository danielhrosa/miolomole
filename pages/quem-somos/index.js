import mongoose from 'mongoose';
import Text from '../../models/text';
import User from '../../models/user';
import Pages from '../../models/pages';

export async function getServerSideProps() {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const page = 'aboutUs';
  let itemsArray = await User.find({ hideFromList: { $ne: true } });
  itemsArray = itemsArray.filter((item) => !!item?.occupation?.length && item.occupation?.some((occupation) => ['illustrator', 'writer'].includes(occupation)))
  const items = itemsArray ? JSON.stringify(itemsArray) : {}
  const textsArray = await Text.find({ page });
  const texts = textsArray.reduce((object, text) => Object.assign(object, {[text.textKey]: text.text}), {});
  const pagesArray = await Pages.find({});
  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;
  return { props: { texts, page, items, pages } }
}

export { default } from './AboutUs';