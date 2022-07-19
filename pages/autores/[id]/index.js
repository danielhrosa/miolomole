import mongoose from 'mongoose';
import User from '../../../models/user';
import UserForm from '../../../components/UserForm';
import { useAppProvider } from '../../../store/appProvider';
import PageJustForAdmin from '../../../components/PageJustForAdmin';

export default function index(props){
  const { user: userProp } = props;
  const { isLoggedIn } = useAppProvider();
  const user = userProp ? JSON.parse(userProp) : {}
  return isLoggedIn ? <UserForm { ...props } user={user} /> : <PageJustForAdmin />
}

// export async function getStaticPaths(){
//   await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
//   const users = await User.find();
//   const paths = users.map((user) => ({ params: { id: `${user._id}` } }));
//   return { paths, fallback: true }
// }

export async function getServerSideProps({ params: { id } }) {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  if(id) {
    let userObj = await User.findById(id);
    userObj.password = ''
    const user = userObj ? JSON.stringify(userObj) : {}
    return { props: { user } }
  } else {
    return { props: { user: {} } }
  }
}
