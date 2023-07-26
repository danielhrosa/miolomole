import PNLDComponent from '../../components/PNLD/PNLD';

export default function PNLD({ pnldObj, publicationsAreasObj, ...props }){
  const pndls = pnldObj ? JSON.parse(pnldObj) : []
  return <PNLDComponent pnlds={pndls} {...props} />
}