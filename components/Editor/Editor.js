import * as S from './Editor.styles';
import dynamic from "next/dynamic";
import { d4 as uuidv4 } from 'uuidv4';
import AWS from "aws-sdk";
import 'suneditor/dist/css/suneditor.min.css';
import Evaporate from 'evaporate';

const SunEditor = dynamic(() => import("suneditor-react"), { ssr: false });

const SunEditorComponent = ({ name, onChange, value }) => {

  function onImageUploadBefore(files, _info, uploadHandler) {
    try {
      ResizeImage(files, uploadHandler)
    } catch (err) {
      uploadHandler(err.toString())
    }
  };

  // image resize
  function ResizeImage(files, uploadHandler) {
    const uploadFile = files[0];
    const img = document.createElement('img');
    const canvas = document.createElement('canvas');
    const reader = new FileReader();

    reader.onload = function (e) {
      img.src = e.target.result
      img.onload = function () {
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        const MAX_WIDTH = 500;
        const MAX_HEIGHT = 300;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;

        ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(function (blob) {
          uploadHandler([new File([blob], uploadFile.name)])
        }, uploadFile.type, 1);
      }
    }

    reader.readAsDataURL(uploadFile);
  }

  return (
    <S.SunEditorWrapper name={name}>
      <SunEditor
        onChange={onChange}
        height="250px"
        setContents={value}
        onImageUploadBefore={onImageUploadBefore}
        setDefaultStyle={'font-family: Arial'}
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