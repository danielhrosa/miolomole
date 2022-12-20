import mongoose from 'mongoose';
import Publication from '../../../models/publication';
import Pages from '../../../models/pages';
import EducatorAreaPublication from '../../../components/EducatorAreaPublication/EducatorAreaPublication';

export default function EducatorPublication({ publication }) {
  const publicationObj = publication ? JSON.parse(publication) : {}
  return <EducatorAreaPublication publication={publicationObj} />
}


export async function getServerSideProps({ params: { name } }) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  let publicationObj = await Publication.findOne({ name });
  if (publicationObj?._id) {
    const pagesArray = await Pages.find({});
    const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;
    const publication = publicationObj ? JSON.stringify(publicationObj) : {}
    return { props: { publication, pages } }
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/educador"
      }
    }
  }
}
