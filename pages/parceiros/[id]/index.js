import PartnerForm from '../../../components/PartnerForm';
import PageJustForAdmin from '../../../components/PageJustForAdmin';
import Partner from '../../../models/partner';
import Book from '../../../models/book';
import { useAppProvider } from '../../../store/appProvider';
import mongoose from 'mongoose';

export default function PartnerPageEdit(props){
  const { partner: partnerProp } = props;
  const { isLoggedIn } = useAppProvider();
  const partner = partnerProp ? JSON.parse(partnerProp) : {}
  return isLoggedIn ? <PartnerForm {...props} partner={partner} /> : <PageJustForAdmin />
}

export async function getServerSideProps({ params: { id } }) {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  if(!!id) {
    const partnerArray = await Partner.findById(id).populate('books');
    const partner = partnerArray ? JSON.stringify(partnerArray) : {}
    return { props: { partner } }
  } else {
    return { props: { partner: {} } }
  }
}