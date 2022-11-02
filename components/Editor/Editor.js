import * as S from './Editor.styles';
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css';
import { useMemo, useState } from 'react';

const SunEditor = dynamic(() => import("suneditor-react"), { ssr: false });

const SunEditorComponent = ({ name, onChange, value }) => {

  return (
    <S.SunEditorWrapper name={name}>
      <SunEditor
        onChange={onChange}
        height="250px"
        setContents={value}
        setOptions={{
          "textTags": {
            "bold": "b",
            "underline": "u",
            "italic": "i",
            "strike": "s"
          },
          "mode": "classic",
          "rtl": false,
          "katex": "window.katex",
          "imageGalleryUrl": "https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo",
          "videoFileInput": false,
          "tabDisable": false,
          "placeholder": "",
          "buttonList": [
            [
              "undo",
              "redo",
              "font",
              "fontSize",
              "formatBlock",
              "paragraphStyle",
              "blockquote",
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
              "fontColor",
              "hiliteColor",
              "textStyle",
              "removeFormat",
              "outdent",
              "indent",
              "align",
              "horizontalRule",
              "list",
              "lineHeight",
              "table",
              "link",
              "image",
              "video",
              "audio",
              "math",
              "imageGallery",
              "fullScreen",
              "showBlocks",
              "codeView",
              "preview",
              "print",
            ]
          ],
        }}
      />
    </S.SunEditorWrapper>
  );
};
export default SunEditorComponent;