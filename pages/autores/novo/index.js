import mongoose from 'mongoose';
import User from '../../../models/user';
import Pages from '../../../models/pages';

export async function getServerSideProps() {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const usersArray = await User.find();
  const users = usersArray ? JSON.stringify(usersArray) : {};
  const pagesArray = await Pages.find(token ? {} : { isPrivate: { $ne: true }});

  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;
  return { props: { users, pages} };
}

export { default } from './novo'