import { useRouter } from 'next/router';
import AboutUsSlider from '../../components/AboutUsSlider';
import LatestArticles from "../../components/LatestArticles";
import OurProductsList from "../../components/OurProductsList";
import SpotlightBooksJumbotron from "../../components/SpotlightBooksJumbotron";
import pt from "../../i18n/pt";
import { useAppProvider } from "../../store/appProvider";

export default function BooksList(props) {
  const t = pt;
  const router = useRouter();
  const { id } = router.query;
  const { isLoggedIn } = useAppProvider();

  return (
    <div>
      <SpotlightBooksJumbotron {...props} />
      <OurProductsList {...props} id={id} />
      {isLoggedIn && <LatestArticles items={t.BLOG_ARTICLES} />}
      {isLoggedIn && <PNLDAssets {...props} />}
      <AboutUsSlider {...props} />
      {/* <HomeLatestArticles id={id} /> */}
    </div>
  )
}