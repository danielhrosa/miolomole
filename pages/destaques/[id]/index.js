import mongoose from 'mongoose';
import HighlightModel from '../../../models/highlight';
import Pages from '../../../models/pages';
import Highlight from '../../../components/Highlight';
import { useAppProvider } from '../../../store/appProvider';
import PageJustForAdmin from '../../../components/PageJustForAdmin';

export default function HighlightPage(props){
  const { highlight: destaque } = props;
  const { isLoggedIn } = useAppProvider();
  const highlight = destaque ? JSON.parse(destaque) : {}
  return isLoggedIn ? <Highlight { ...props } highlight={highlight} /> : <PageJustForAdmin />
}

// export async function getStaticPaths(){
//   await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
//   const highlights = await HighlightModel.find();
//   const paths = highlights.map((highlight) => ({ params: { id: `${highlight._id}` } }));
//   return { paths, fallback: true }
// }

export async function getServerSideProps({ params: { id } }) {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  if(id) {
    let highlightObj = await HighlightModel.findById(id);
    const highlight = highlightObj ? JSON.stringify(highlightObj) : {}
    const pagesArray = await Pages.find(token ? {} : { isPrivate: { $ne: true }});

    const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;  
    return { props: { highlight, pages} }
  } else {
    return { props: { highlight: {}, pages }  }
  }
}
