import { useState } from 'react';
import Button from '../../Elements/Button';
import * as S from './PDFReader.styles';

export default function PDFReader(props) {

  const [isFullScrenOn, setIsFullScrenOn] = useState(false);

  return (
    <S.PDFReaderWrapper>
      <Button variation="primary" onClick={() => { setIsFullScrenOn(!isFullScrenOn) }} label="Acessar obra" />
      <S.PDFReader data={props?.src + '#toolbar=0'} type="application/pdf" frameborder="0" width="100%" height="600px" style={{ padding: "20px"}}>
        <embed src={props?.src + '#toolbar=0'} width="100%" height="600px"/> 
      </S.PDFReader>     
      {isFullScrenOn && <S.PDFReaderFullView>
        <S.ButtonClose variation="close" onClick={() => { setIsFullScrenOn(!isFullScrenOn) }} label="Fechar obra" /> 
        <S.PDFReader data={props?.src + '#toolbar=0'} type="application/pdf" frameborder="0" width="100%" height="600px" style={{ padding: "20px"}} isFullScrenOn={isFullScrenOn}>
          <embed src={props?.src + '#toolbar=0'} width="100%" height="600px"/> 
        </S.PDFReader>
      </S.PDFReaderFullView>}
    </S.PDFReaderWrapper>
  )
}