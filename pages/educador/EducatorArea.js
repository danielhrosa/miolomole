import EducatorAreaComponent from '../../components/EducatorArea/EducatorArea';

export default function EducatorArea({ publicationsObj, publicationsAreasObj, ...props }){
  const publications = publicationsObj ? JSON.parse(publicationsObj) : {}
  const publicationsAreas = publicationsAreasObj ? JSON.parse(publicationsAreasObj) : {}
  return <EducatorAreaComponent publications={publications} publicationsAreas={publicationsAreas} {...props} />
}