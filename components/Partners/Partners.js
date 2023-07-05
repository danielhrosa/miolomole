import Image from 'next/image'
import * as S from './Partners.style'

export default function Partners() {

  return (
    <S.Partners>
      <Image src="/LOGO_GRUPO_EUREKA.png" width={127} height={45} alt="Logo grupo eureka" />
    </S.Partners>
  )
}