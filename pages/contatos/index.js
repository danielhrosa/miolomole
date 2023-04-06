import mongoose from 'mongoose';
import Contact from '../../models/contact';

export async function getServerSideProps() {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const contactsArray = await Contact.find({ });
  const contact = contactsArray.reduce((object, text) => Object.assign(object, {[text.textKey]: text.text}), {});
  return { props: { contact } };
}

export { default } from './Contacts';