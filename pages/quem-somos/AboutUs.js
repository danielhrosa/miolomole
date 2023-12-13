import AboutUsImagination from "../../components/AboutUsImagination/AboutUsImagination";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import AboutUsOurHistory from "../../components/AboutUsOurHistory";
import AboutUsQuote from "../../components/AboutUsQuote";
import AboutUsSectionOne from "../../components/AboutUsSectionOne";
import AboutUsSlider from "../../components/AboutUsSlider";

export default function AboutUs(props){
  return(
    <div>
      <Jumbotron {...props} page="aboutUs" />
      <AboutUsOurHistory {...props} />
      <AboutUsQuote {...props} />
      <AboutUsSectionOne {...props} />
      <AboutUsImagination {...props} />
      {/* <AboutUsSlider {...props} /> */}
    </div>
  )
}