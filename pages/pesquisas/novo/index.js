import { getCookies } from 'cookies-next';
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";
import PesquisasForm from '../../../components/PesquisasForm/PesquisasForm';
import Pages from "../../../models/pages";
import SiteSettings from "../../../models/siteSettings";

export async function getServerSideProps({ req, res }) {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });

  const { TK } = getCookies({ req, res });
  const { _id: token } = jwt.decode(TK, process.env.SECRET_KEY) || { token: undefined };

  const pagesArray = await Pages.find(token ? {} : { isPrivate: { $ne: true } });
  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;

  const menuOrderObj = await SiteSettings.findOne({ config: 'menuOrder' });
  const menuOrder = !!menuOrderObj ? JSON.stringify(menuOrderObj) : null;

  return { props: { pages, menuOrder } }
}

export default function PesquisasFormPage(props) {
  return <PesquisasForm {...props} />
}