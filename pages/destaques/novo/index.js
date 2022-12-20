import Highlight from '../../../components/Highlight';
import { useAppProvider } from '../../../store/appProvider';
import PageJustForAdmin from '../../../components/PageJustForAdmin'
import Pages from '../../../models/pages'
import mongoose from 'mongoose'

export default function NewHighlight(){
  const { isLoggedIn } = useAppProvider();
  return isLoggedIn ? <Highlight /> : <PageJustForAdmin />
}

export async function getServerSideProps() {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const pagesArray = await Pages.find({});
  const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;
  return { props: { users, pages} };
}