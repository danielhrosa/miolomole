import mongoose from 'mongoose';
import EducatorAreaForm from '../../../../components/EducatorAreaForm/EducatorAreaForm';
import PageJustForAdmin from '../../../../components/PageJustForAdmin/PageJustForAdmin';
import Publication from '../../../../models/publication';
import PublicationArea from '../../../../models/publicationArea';
import { useAppProvider } from '../../../../store/appProvider';

export default function NewEducatorPublication({ publication }) {
  const { isLoggedIn } = useAppProvider();
  const publicationObj = publication ? JSON.parse(publication) : {}

  return isLoggedIn ? <EducatorAreaForm publication={publicationObj} /> : <PageJustForAdmin />
}

export async function getServerSideProps({ params: { name } }) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  if (name) {
    let publicationObj = await Publication.findOne({ name }).populate({ path: 'area', model: PublicationArea });
    const publication = publicationObj ? JSON.stringify(publicationObj) : {}
    return { props: { publication } }
  } else {
    return { props: { publication: {} } }
  }
}
