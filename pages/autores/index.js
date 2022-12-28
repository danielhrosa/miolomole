import mongoose from 'mongoose';
import User from '../../models/user';
import Pages from '../../models/pages';
import { getCookies } from 'cookies-next';
import jwt from 'jsonwebtoken';

export async function getServerSideProps({ req, res }) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const { TK } = getCookies({ req, res });
  const { _id: token } = jwt.decode(TK, process.env.SECRET_KEY) || { token: undefined };
  
  const usersArray = await User.find();
  const users = usersArray ? JSON.stringify(usersArray) : {}
  const castsArray = await User.find({ hideFromList: { $ne: true } });
  const casts = usersArray ? JSON.stringify(castsArray.filter((item) => !!item?.occupation?.length && item.occupation?.some((occupation) => ['illustrator', 'writer'].includes(occupation)))) : []
  const pagesArray = await Pages.find(token ? {} : { isPrivate: { $ne: true }});
  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;

  return { props: { users, casts, pages } }
}

export { default } from './Usuarios';