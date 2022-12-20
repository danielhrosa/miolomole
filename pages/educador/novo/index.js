import EducatorAreaForm from '../../../components/EducatorAreaForm/EducatorAreaForm';
import { useAppProvider } from '../../../store/appProvider';
import PageJustForAdmin from '../../../components/PageJustForAdmin/PageJustForAdmin'
import Pages from '../../../models/pages'
import mongoose from 'mongoose'

export default function NewEducatorPublication(){
  const { isLoggedIn } = useAppProvider();
  return isLoggedIn ? <EducatorAreaForm /> : <PageJustForAdmin />
}

export async function getServerSideProps() {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const pagesArray = await Pages.find({});
  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;
  return { props: { pages} };
}