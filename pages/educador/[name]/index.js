import mongoose from 'mongoose';
import Publication from '../../../models/publication';
import EducatorAreaPublication from '../../../components/EducatorAreaPublication/EducatorAreaPublication';

export default function EducatorPublication({ publication }){
  const publicationObj = publication ? JSON.parse(publication) : {}
  return <EducatorAreaPublication publication={publicationObj} />
}


export async function getServerSideProps({ params: { name } }) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  if(name) {
    let publicationObj = await Publication.findOne({ name });
    const publication = publicationObj ? JSON.stringify(publicationObj) : {}
    return { props: { publication } }
  } else {
    return { props: { publication: {} }  }
  }
}
