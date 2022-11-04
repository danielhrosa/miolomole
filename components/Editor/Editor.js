import * as S from './Editor.styles';
import dynamic from "next/dynamic";
import { d4 as uuidv4 } from 'uuidv4';
import AWS from "aws-sdk";
import 'suneditor/dist/css/suneditor.min.css';
import Evaporate from 'evaporate';

const SunEditor = dynamic(() => import("suneditor-react"), { ssr: false });

const SunEditorComponent = ({ name, onChange, value }) => {

  // const imageUploadHandler = (files, info, core, uploadHandler) => {
  //   console.log(files, info)

  //   const fileName = `dev/mioloMole/${uuidv4() + files[0].name}`;
  //   const evaporateConfig = {
  //     aws_key: process.env.NEXT_PUBLIC_AWS_KEY,
  //     bucket: process.env.NEXT_PUBLIC_AWS_BUCKET,
  //     awsRegion: process.env.NEXT_PUBLIC_AWS_REGION,
  //     awsSignatureVersion: "4",
  //     computeContentMd5: true,
  //     signerUrl: `/api/sign-auth`,
  //     cryptoMd5Method: data => AWS.util.crypto.md5(data, "base64"),
  //     cryptoHexEncodedHash256: data => AWS.util.crypto.sha256(data, "hex"),
  //   };
  //   const evaporateAddConfig = {
  //     file: files[0],
  //     name: fileName,
  //     contentType: files[0].type,
  //     complete: (xhr) => {
  //       new FormData()
  //       api.upalo
  //       core.plugins.image.register.call(core, info, {
  //         "result": [
  //           {
  //             "url": xhr.responseURL.split('?')[0],
  //             "name": files[0].name,
  //             "size": "0"
  //           }
  //         ]
  //       })
  //     },
  //   };
  //   Evaporate.create(evaporateConfig).then((evaporate) => evaporate.add(evaporateAddConfig))
  // }

  return (
    <S.SunEditorWrapper name={name}>
      <SunEditor
        onChange={onChange}
        height="250px"
        setContents={value}
        // onImageUploadBefore={imageUploadHandler}
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