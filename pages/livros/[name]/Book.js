import BookComponent from "../../../components/BookComponent";
import BookAudiovisual from "../../../components/BookAudiovisual";
import BlankPage from "../../../components/BlankPage/BlankPage";

export default function Book(props){
  const hasAudiovisual = props?.hasAudiovisual ? props?.hasAudiovisual : false;
  const book = props?.book ? JSON.parse(props?.book) : [];
  const books = !!props?.books?.length ? JSON.parse(props?.books) : [];

  console.log(props?.books)
  if(hasAudiovisual){
    if(!Object.values(book.audio).some((item) => item !== '')){ return <BlankPage /> }
    return <BookAudiovisual {...props} book={book} books={books} />
  } else {
    if(book) { return <BookComponent book={book} books={books} /> }
    else { return <BlankPage /> }
  }
}