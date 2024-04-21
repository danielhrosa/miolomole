import mongoose from 'mongoose';
import EducatorAreaForm from '../../../../components/EducatorAreaForm/EducatorAreaForm';
import PageJustForAdmin from '../../../../components/PageJustForAdmin/PageJustForAdmin';
import Publication from '../../../../models/publication';
import Pages from '../../../../models/pages';
import PublicationArea from '../../../../models/publicationArea';
import { useAppProvider } from '../../../../store/appProvider';
import { getCookies } from 'cookies-next';
import jwt from 'jsonwebtoken';
import SiteSettings from '../../../../models/siteSettings';

export default function NewEducatorPublication({ publication }) {
  const { isLoggedIn } = useAppProvider();
  const publicationObj = publication ? JSON.parse(publication) : {}

  return isLoggedIn ? <EducatorAreaForm publication={publicationObj} /> : <PageJustForAdmin />
}

export async function getServerSideProps({ params: { name }, req, res }) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  if (name) {
    const { TK } = getCookies({ req, res });
    const { _id: token } = jwt.decode(TK, process.env.SECRET_KEY) || { token: undefined };
    const pagesArray = await Pages.find(token ? {} : { isPrivate: { $ne: true } });
    const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;

    let publicationObj = await Publication.findOne({ name }).populate({ path: 'area', model: PublicationArea });
    const publication = publicationObj ? JSON.stringify(publicationObj) : {}

    const menuOrderObj = await SiteSettings.findOne({ config: 'menuOrder' });
    const menuOrder = !!menuOrderObj ? JSON.stringify(menuOrderObj) : null;

    return { props: { publication, pages, menuOrder } }

  } else {
    return { props: { publication: {}, pages, menuOrder } }
  }
}
