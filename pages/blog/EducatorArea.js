import EducatorAreaComponent from '../../components/EducatorArea/EducatorArea';
import PageJustForAdmin from '../../components/PageJustForAdmin'
import { useAppProvider } from '../../store/appProvider';

export default function EducatorArea({ publicationsObj, publicationsAreasObj, ...props }){
  const { isLoggedIn } = useAppProvider();
  const publications = publicationsObj ? JSON.parse(publicationsObj) : []
  const publicationsAreas = publicationsAreasObj ? JSON.parse(publicationsAreasObj) : []
  return isLoggedIn ? <EducatorAreaComponent publications={publications} publicationsAreas={publicationsAreas} {...props} /> : <PageJustForAdmin />
}