import PNLDAdminComponent from '../../components/PNLDAdmin/PNLDAdmin';

export default function PNLD({ pnldObj, publicationsAreasObj, ...props }){
  const pndls = pnldObj ? JSON.parse(pnldObj) : []
  return <PNLDAdminComponent pnlds={pndls} {...props} />
}