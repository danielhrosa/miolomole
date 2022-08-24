import mongoose from 'mongoose';
import AboutUsSlider from '../components/AboutUsSlider';
import Banner from '../components/Banner';
import Catalog from '../components/Catalog/Catalog';
import HomeApresentation from '../components/HomeApresentation';
import SpotlightBooksJumbotron from '../components/SpotlightBooksJumbotron';
import CatalogModel from '../models/catalog';
import Highlight from '../models/highlight';
import Text from '../models/text';
import User from '../models/user';
import { useAppProvider } from '../store/appProvider';

export default function Home(props) {
  const { isLoggedIn } = useAppProvider();

  return (
    <>
      <SpotlightBooksJumbotron {...props} />
      <HomeApresentation {...props} />
      {[1, 2, 3, 4].map((i) => <Banner key={i} {...props} i={i} />)}
      {/* { isLoggedIn && <LatestArticles items={t.BLOG_ARTICLES}/> } */}
      <AboutUsSlider {...props} />
      <Catalog {...props} isLoggedIn={isLoggedIn} />
      {/* <HomeLatestArticles /> */}
    </>
  )
}

export async function getServerSideProps() {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const page = 'home';
  const textsArray = await Text.find({ page });
  const texts = textsArray.reduce((object, text) => Object.assign(object, { [text.textKey]: text.text }), {});
  let itemsArray = await User.find({ hideFromList: { $ne: true } });
  itemsArray = itemsArray.filter((item) => !!item?.occupation?.length && item.occupation?.some((occupation) => ['illustrator', 'writer'].includes(occupation)))
  const items = itemsArray ? JSON.stringify(itemsArray) : {}
  const highlightsArray = await Highlight.find({ isActive: true });
  const highlights = !!highlightsArray.length ? JSON.stringify(highlightsArray) : '[]';
  const catalogsArray = await CatalogModel.find({});
  const catalogs = !!catalogsArray?.length ? JSON.stringify(catalogsArray) : `[]`;
  return { props: { texts, page, items, highlights, catalogs } }
}