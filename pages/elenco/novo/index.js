import mongoose from 'mongoose';
import User from '../../../models/user';

export async function getServerSideProps() {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const usersArray = await User.find();
  const users = usersArray ? JSON.stringify(usersArray) : {};
  return { props: { users } };
}

export { default } from './novo'