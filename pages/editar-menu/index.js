import mongoose from 'mongoose';
import PageJustForAdmin from '../../components/PageJustForAdmin'
import Pages from '../../models/pages'

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

export default function EditMenu(props){
  const { highlight: destaque } = props;
  const { isLoggedIn } = useAppProvider();
  const highlight = destaque ? JSON.parse(destaque) : {}
  return isLoggedIn ? <EditMenuPage { ...props } highlight={highlight} /> : <PageJustForAdmin />
}