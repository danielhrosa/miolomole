import mongoose from 'mongoose';
import Blog from '../../../models/blog';

export async function getServerSideProps({ params: { name } }) {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  let article = '';
  let articleJSON = '';
  console.log(name);
  if(name) { 
    article = await Blog.find({ name });
    if (article[0]) {
      articleJSON = JSON.stringify(article[0])
    }
  }

  return { props: { article: articleJSON } }
}

export { default } from './Post';
