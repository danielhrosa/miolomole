import { useState } from 'react';
import Button from '../../Elements/Button';
import * as S from './PDFReader.styles';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { fullScreenPlugin, RenderEnterFullScreenProps } from '@react-pdf-viewer/full-screen';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';

export default function PDFReader(props) {

  const fullScreenPluginInstance = fullScreenPlugin();
  const { EnterFullScreen } = fullScreenPluginInstance;

  return (
    <S.PDFReaderWrapper>
      <EnterFullScreen>
        {({ onClick }) => <Button variation="primary" onClick={onClick} label="Acessar obra" />}
      </EnterFullScreen>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.3.200/build/pdf.worker.js">
        <S.PDFReader>
          <Viewer
            fileUrl={props?.src}
            defaultScale={SpecialZoomLevel.PageFit}
            plugins={[fullScreenPluginInstance]}
          />
        </S.PDFReader>
      </Worker>
    </S.PDFReaderWrapper>
  )
}