import Button from '../../Elements/Button';
import * as S from './PDFReader.styles';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';

export default function PDFReader({ catalog, children }) {

  const fullScreenPluginInstance = fullScreenPlugin({
      renderExitFullScreenButton: (props) => {
        return (
          <S.PDFHeader>
            <S.PDFHeaderTitle>{catalog.label}</S.PDFHeaderTitle>
            <span onClick={props.onClick}>Pressione ESC para sair ou clique aqui</span>
          </S.PDFHeader>
        )
    },
      getFullScreenTarget: (pagesContainer) => {
        // Returns the target element in full screen mode
        return pagesContainer;
    },
  });
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
            fileUrl={catalog.link}
            defaultScale={SpecialZoomLevel.PageFit}
            plugins={[fullScreenPluginInstance, ]}
          />
        </S.PDFReader>
      </Worker>
    </S.PDFReaderWrapper>
  )
}