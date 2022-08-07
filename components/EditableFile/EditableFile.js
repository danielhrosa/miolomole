import AWS from "aws-sdk";
import axios from 'axios';
import Evaporate from 'evaporate';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { v4 as uuidv4 } from 'uuid';
import Button from "../../Elements/Button";
import { useAppProvider } from '../../store/appProvider';
import * as S from './EditableFile.styles';

export default function EditableFile({ page, link, textKey }) {
  const router = useRouter();
  const { isLoggedIn } = useAppProvider();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(false);
  const [height, setHeight] = useState(30);
  const [fileName, setFileName] = useState(link);
  const ref = useRef();

  const onDrop = useCallback((acceptedFiles) => {
    setLoading(true);
    const file = acceptedFiles[0];
    const evaporateConfig = {
      aws_key: process.env.NEXT_PUBLIC_AWS_KEY,
      bucket: process.env.NEXT_PUBLIC_AWS_BUCKET,
      awsRegion: process.env.NEXT_PUBLIC_AWS_REGION,
      awsSignatureVersion: "4",
      computeContentMd5: true,
      signerUrl: `/api/sign-auth`,
      cryptoMd5Method: data => AWS.util.crypto.md5(data, "base64"),
      cryptoHexEncodedHash256: data => AWS.util.crypto.sha256(data, "hex"),
    };
    const evaporateAddConfig = {
      file,
      name: `dev/mioloMole/${uuidv4()}${file.name}`,
      contentType: file.type,
      progress: progressValue => setProgress((progressValue * 100).toFixed(2)),
      complete: (xhr) => { const location = xhr.responseURL.split('?')[0]; setLoading(false); saveFile(location); },
      error: (err) => console.error('ERROR', err)
    };

    Evaporate.create(evaporateConfig)
      .then((evaporate) => evaporate.add(evaporateAddConfig).catch(err => console.error('ERROR', err)))

  }, []);

  const saveFile = async (newLink) => {
    await axios.put(`/api/textos`, { textKey, page, text: newLink, editedBy: 'browser' }).catch((err) => console.log(err));
    router.replace(router.asPath, null, { scroll: false });
  }

  const deleteFile = async () => {
    setFileName(false);
    await axios.delete(`/api/textos`, { data: textKey }).catch((err) => console.log(err));
    router.replace(router.asPath, null, { scroll: false });
  }

  const { getRootProps, getInputProps } = useDropzone({ onDrop, disabled: !isLoggedIn });

  useEffect(() => { setHeight(ref?.current?.offsetHeight) }, [ref])
  useEffect(() => { 
    const fileLinkSplittedArr = link?.split('/');
    fileLinkSplittedArr && setFileName(decodeURI(fileLinkSplittedArr[fileLinkSplittedArr?.length - 1].replace(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}/i, '')))
  }, [link])

  return (
    <S.Editable isLoggedIn={isLoggedIn}>
      <S.Dropzone {...getRootProps()} hasFile={fileName} ref={ref}>
        <input {...getInputProps()} />
        {loading && <h4>Carregando...{progress}</h4>}
        {!loading && <p> {fileName ? fileName : 'Insira o catalogo'}</p>}
        {fileName && <Button label="X" height={height} variation="bigIcon" onClick={(e) => { e.stopPropagation(); deleteFile(); }} />}
      </S.Dropzone>
    </S.Editable>
  )
};
