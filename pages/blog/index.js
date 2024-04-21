import mongoose from 'mongoose';
import Publication from '../../models/publication';
import PublicationArea from '../../models/publicationArea';
import Pages from '../../models/pages';
import Text from '../../models/text';
import { getCookies } from 'cookies-next';
import jwt from 'jsonwebtoken';
import SiteSettings from '../../models/siteSettings';

export async function getServerSideProps({ req, res }) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const textsArray = await Text.find({ page: 'educatorArea' });
  const texts = textsArray.reduce((object, text) => Object.assign(object, {[text.textKey]: text.text}), {});

  const { TK } = getCookies({ req, res });
  const { _id: token } = jwt.decode(TK, process.env.SECRET_KEY) || { token: undefined };

  const publicationsArray = await Publication.find(token ? {} : { hide: { $ne: true } }).sort({ _id: -1 });
  const publicationsObj = publicationsArray ? JSON.stringify(publicationsArray) : `[]`
  
  const publicationsAreasArray = await PublicationArea.find();
  const publicationsAreasObj = publicationsAreasArray ? JSON.stringify(publicationsAreasArray) : `[]`

  const pagesArray = await Pages.find(token ? {} : { isPrivate: { $ne: true }});
  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;

  const menuOrderObj = await SiteSettings.findOne({ config: 'menuOrder' });
  const menuOrder = !!menuOrderObj ? JSON.stringify(menuOrderObj) : null;

  return { props: { publicationsObj, publicationsAreasObj, texts, pages, menuOrder } }
}

export { default } from './EducatorArea';