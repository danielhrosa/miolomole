import BookComponent from "../../../components/BookComponent";
import BookAudiovisual from "../../../components/BookAudiovisual";
import BlankPage from "../../../components/BlankPage/BlankPage";

export default function Book({ hasAudiovisual, ...props }){
  const book = JSON.parse(props.book)
  if(book && hasAudiovisual){
    return <BookAudiovisual {...props} book={book}/>
  } else if (book) { return <BookComponent {...props} book={book}/> }
  return <BlankPage />
}