import BookRelated from '../BookRelated';
import BookSection from '../BookSection';
import PNLDAssets from "../PNLDAssets/PNLDAssets";
import * as S from './BookComponent.style';
import BookSynopsis from '../BookSynopsis';
import { useAppProvider } from "../../store/appProvider";
import Catalog from '../Catalog/Catalog';

export default function BookComponent(props){
  const { isLoggedIn } = useAppProvider();

  return(
    <S.BookComponent>
      <BookSection {...props} />
      <BookSynopsis {...props} />
      <Catalog catalogs={`[]`} />
      {(isLoggedIn && props?.pnld) && <PNLDAssets {...props} />}
      {!props?.pnld && <BookRelated {...props} />}
    </S.BookComponent>
  )
}