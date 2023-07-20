import { getCookies } from 'cookies-next';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import PNLDComponent from '../../../components/PNLD/PNLD';
import Pages from '../../../models/pages';
import PNLD from '../../../models/pnld';

export default function EducatorPublication({ publication }) {
  const publicationObj = publication ? JSON.parse(publication) : {}
  return <></>
}


export async function getServerSideProps({ params: { name }, req, res }) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  let publicationObj = await PNLD.findOne({ name });

  const { TK } = getCookies({ req, res });
  const { _id: token } = jwt.decode(TK, process.env.SECRET_KEY) || { token: undefined };
  const pagesArray = await Pages.find(token ? {} : { isPrivate: { $ne: true } });
  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;

  const publication = publicationObj ? JSON.stringify(publicationObj) : {}
  return { props: { publication, pages } }
}
