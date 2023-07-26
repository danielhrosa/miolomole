import BookComponent from "../../../../../components/BookComponent";

export default function Book(props){
  const book = props?.book ? JSON.parse(props.book) : {};
  return <BookComponent pnld {...props} book={book} />
}