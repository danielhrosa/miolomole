import Button from '../../Elements/Button';
import * as S from './PDFReader.styles';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';

export default function PDFReader({ src, children }) {

  const fullScreenPluginInstance = fullScreenPlugin();
  const { EnterFullScreen } = fullScreenPluginInstance;

  return (
    <S.PDFReaderWrapper>
      {children}
      <EnterFullScreen>
        {({ onClick }) => <Button variation="primary" onClick={onClick} label={children ? "Ver Em Tela cheia" : "Acessar obra"} />}
      </EnterFullScreen>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.3.200/build/pdf.worker.js">
        <S.PDFReader className='PDFReader'>
          <Viewer
            fileUrl={src}
            defaultScale={SpecialZoomLevel.PageFit}
            plugins={[fullScreenPluginInstance, ]}
          />
        </S.PDFReader>
      </Worker>
    </S.PDFReaderWrapper>
  )
}