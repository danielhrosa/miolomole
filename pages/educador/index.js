import mongoose from 'mongoose';
import Publication from '../../models/publication';
import Text from '../../models/text';
import { getCookies } from 'cookies-next';
import jwt from 'jsonwebtoken';

export async function getServerSideProps({ req, res }) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const textsArray = await Text.find({ page: 'educatorArea' });
  const texts = textsArray.reduce((object, text) => Object.assign(object, {[text.textKey]: text.text}), {});

  const { TK } = getCookies({ req, res });
  const { _id: token } = jwt.decode(TK, process.env.SECRET_KEY) || { token: undefined };

  const publicationsArray = await Publication.find(token ? {} : { hide: { $ne: true } });
  const publications = publicationsArray ? JSON.stringify(publicationsArray) : `[]`
  return { props: { publications, texts } }
}

export { default } from './EducatorArea';