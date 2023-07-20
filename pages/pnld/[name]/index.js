import mongoose from 'mongoose';
import Publication from '../../../models/publication';
import Pages from '../../../models/pages';
import EducatorAreaPublication from '../../../components/EducatorAreaPublication/EducatorAreaPublication';
import { getCookies } from 'cookies-next';
import jwt from 'jsonwebtoken';
import Comment from '../../../models/comment';

export default function EducatorPublication({ publication }) {
  const publicationObj = publication ? JSON.parse(publication) : {}
  return <EducatorAreaPublication publication={publicationObj} />
}


export async function getServerSideProps({ params: { name }, req, res }) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  let publicationObj = await Publication.findOne({ name }).populate({ path: 'comments', model: Comment });
  
  if (publicationObj?._id) {
    const { TK } = getCookies({ req, res });
    const { _id: token } = jwt.decode(TK, process.env.SECRET_KEY) || { token: undefined };
    const pagesArray = await Pages.find(token ? {} : { isPrivate: { $ne: true } });
    const pages = !!pagesArray?.length ? JSON.stringify(pagesArray) : `[]`;

    const publication = publicationObj ? JSON.stringify(publicationObj) : {}
    return { props: { publication, pages } }

  } else {
    return { redirect: { permanent: false, destination: "/blog" } }
  }
}
