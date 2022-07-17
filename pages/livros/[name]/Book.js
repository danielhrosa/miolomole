import BookComponent from "../../../components/BookComponent";
import BookAudiovisual from "../../../components/Assets";
import BlankPage from "../../../components/BlankPage/BlankPage";

export default function Book({ hasAudiovisual, ...props }){
  const book = props?.book ? JSON.parse(props.book) : {};
  const books = props?.books ? JSON.parse(props.books) : [];
  if(hasAudiovisual){
    return <BookAudiovisual {...props} book={book}/>
  } else if (book && books) { return <BookComponent {...props} book={book} books={books} /> }
  return <BlankPage />
}