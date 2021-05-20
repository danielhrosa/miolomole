import pt from "../i18n/pt";
import mongoose from 'mongoose';
import User from '../models/user';
import Text from '../models/text';
import Banner from '../components/Banner';
import Highlight from '../models/highlight';
import { useAppProvider } from "../store/appProvider";
import AboutUsSlider from "../components/AboutUsSlider";
import LatestArticles from "../components/LatestArticles";
import HomeApresentation from "../components/HomeApresentation";
import HomeLatestArticles from "../components/HomeLatestArticles";
import SpotlightBooksJumbotron from "../components/SpotlightBooksJumbotron";

export default function Home(props) {
  const t = pt;
  // const { isLoggedIn } = useAppProvider();
  return (
    <>
      <SpotlightBooksJumbotron {...props} />
      <HomeApresentation {...props}/>
      <Banner {...props} index={1}/>
      <Banner {...props} index={2}/>
      <Banner {...props} index={3}/>
      <Banner {...props} index={4}/>
      {/* { isLoggedIn && <LatestArticles items={t.BLOG_ARTICLES}/> } */}
      <AboutUsSlider {...props} />
      <HomeLatestArticles/>
    </>
  )
}

export async function getServerSideProps() {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const page = 'home';
  const textsArray = await Text.find({ page });
  const texts = textsArray.reduce((object, text) => Object.assign(object, {[text.textKey]: text.text}), {});
  let itemsArray = await User.find();
  itemsArray = itemsArray.filter((item) => !!item?.occupation?.length && item.occupation?.some((occupation) => ['illustrator', 'writer'].includes(occupation)))
  const items = itemsArray ? JSON.stringify(itemsArray) : {}
  const highlightsArray = await Highlight.find({ isActive: true });
  const highlights = !!highlightsArray.length ? JSON.stringify(highlightsArray) : '[]';
  return { props: { texts, page, items, highlights } }
}