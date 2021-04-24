import PartnerForm from '../../../components/PartnerForm';
import PageJustForAdmin from '../../../components/PageJustForAdmin';
import Partner from '../../../models/partner';
import { useAppProvider } from '../../../store/appProvider';
import mongoose from 'mongoose';

export default function PartnerPageEdit(props){
  const { partner: partnerProp } = props;
  const { isLoggedIn } = useAppProvider();
  const partner = partnerProp ? JSON.parse(partnerProp) : {}
  return isLoggedIn ? <PartnerForm {...props} partner={partner} /> : <PageJustForAdmin />
}

export async function getStaticPaths(){
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const partners = await Partner.find();
  const paths = partners.map((partner) => ({ params: { id: `${partner._id}` } }))
  return { paths, fallback: true }
}

export async function getStaticProps({ params: { id } }) {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  if(!!id) {
    const partnerArray = await Partner.findById(id);
    const partner = partnerArray ? JSON.stringify(partnerArray) : {}
    return { props: { partner }, revalidate: 1  }
  } else {
    return { props: { partner: {} }, revalidate: 1  }
  }
}