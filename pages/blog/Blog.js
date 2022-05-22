import BlogJumbotron from "../../components/BlogJumbotron";
import BlogList from "../../components/BlogList";

export default function Blog(props){
  
  return(
    <>
      {/* <BlogJumbotron {...props}/> */}
      <BlogList {...props} />
    </>
  )
}