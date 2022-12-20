import mongoose from 'mongoose';
import User from '../../models/user';
import Pages from '../../models/pages';

export async function getServerSideProps() {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const usersArray = await User.find();
  const castsArray = await User.find({ hideFromList: { $ne: true } });
  const casts = usersArray ? JSON.stringify(castsArray.filter((item) => !!item?.occupation?.length && item.occupation?.some((occupation) => ['illustrator', 'writer'].includes(occupation)))) : []
  const users = usersArray ? JSON.stringify(usersArray) : {}
  const pagesArray = await Pages.find({});
  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;
  return { props: { users, casts, pages } }
}

export { default } from './Usuarios';