import { useState } from 'react';
import Button from '../../Elements/Button';
import * as S from './PDFReader.styles';

export default function PDFReader(props) {

  const [isFullScrenOn, setIsFullScrenOn] = useState(false);

  return (
    <S.PDFReaderWrapper>
      <Button variation="primary" onClick={() => { setIsFullScrenOn(!isFullScrenOn) }} label="Ler em tela cheia" />
      <S.PDFReader src={props?.src + '#toolbar=0'} />
      {isFullScrenOn && <S.PDFReaderFullView>
        <S.ButtonClose variation="close" onClick={() => { setIsFullScrenOn(!isFullScrenOn) }} label="Sair da tela cheia" /> 
        <S.PDFReader src={props?.src + '#toolbar=0'} isFullScrenOn={isFullScrenOn} />
      </S.PDFReaderFullView>}
    </S.PDFReaderWrapper>
  )
}