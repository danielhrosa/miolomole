import { getCookies } from 'cookies-next';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import PNLDOurWorks from '../../../components/PNLDOurWorks/PNLDOurWorks';
import Pages from '../../../models/pages';
import PNLD from '../../../models/pnld';
import Text from '../../../models/text';
import BookPnld from '../../../models/bookPnld';
import User from '../../../models/user';

export default function EducatorPublication({ pnld, ...props }) {
  const pnldObj = pnld ? JSON.parse(pnld) : {};
  return <PNLDOurWorks pnld={pnldObj} {...props} />
}


export async function getServerSideProps({ params: { name }, req, res }) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });

  const page = "pnld";
  const textsArray = await Text.find({ page });
  const texts = textsArray.reduce((object, text) => Object.assign(object, { [text.textKey]: text.text }), {});

  let pnldObj = await PNLD.findOne({ name })
    .populate({ path: 'books', model: BookPnld })
    .populate({
      path: 'books',
      populate: { path: 'authors', model: User }
    })
    .populate({
      path: 'books',
      populate: { path: 'illustrators', model: User }
    })
  const pnld = pnldObj ? JSON.stringify(pnldObj) : {}

  const { TK } = getCookies({ req, res });
  const { _id: token } = jwt.decode(TK, process.env.SECRET_KEY) || { token: undefined };
  const pagesArray = await Pages.find(token ? {} : { isPrivate: { $ne: true } });
  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;

  return { props: { pnld, page, pages, texts } }
}
