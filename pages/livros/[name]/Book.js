import { useRouter } from 'next/router'
import BookComponent from "../../../components/BookComponent";
import BookAudiovisual from "../../../components/BookAudiovisual";

export default function Book(props){
  const book = props.book ? JSON.parse(props.book) : {} 
  const router = useRouter();
  const splittedId = router.query.name?.split('-');
  const hasAudiovisual = splittedId && splittedId[splittedId.length - 1] === 'audiovisual';
  return hasAudiovisual ? <BookAudiovisual {...book} /> : <BookComponent {...book} />
}