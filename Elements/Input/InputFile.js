import React, { useState, useCallback, useEffect } from 'react';
import { inputChange } from '../../helpers/fieldFunctions';
import { useDropzone } from 'react-dropzone';
import Evaporate from 'evaporate';
import { v4 as uuidv4 } from 'uuid';
import AWS from "aws-sdk";
import * as S from './Input.style';
import Player from '../../components/Player';
import { useAppProvider } from '../../store/appProvider';
import Button from '../Button';
import Spinner from '../../components/Spinner';
import getFileTypeByExtensions from '../../utils/getFileTypeByExtension';

export default function InputFile({ variation, name, onChange, value, setFields, type, className, poster, parentName, i, isLoggedInHandler = true, placeholder }) {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState(value);
  const { isLoggedIn: isLoggedInContext } = useAppProvider();
  const [fileType, setFileType] = useState();
  const isLoggedIn = !!isLoggedInContext && !!isLoggedInHandler;

  const getFileType = (string) => {
    if (value) {
      if (string.includes('audio')) { return 'audio' }
      if (string.includes('video')) { return 'video' }
      if (string.includes('image')) { return 'image' }
      else {
        const fileTypeByExtension = getFileTypeByExtensions(value?.split('.')[value.split('.').length - 1]);
        setFileType(fileTypeByExtension)
        return fileTypeByExtension
      }
    }
  }

  const onDrop = useCallback((acceptedFiles) => {
    setLoading(true);
    const file = acceptedFiles[0];
    const fileName = `dev/mioloMole/${uuidv4() + file.name}`;
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
    setFileType(getFileType(file.type))
    const evaporateAddConfig = {
      file,
      name: fileName,
      contentType: file.type,
      progress: progressValue => setProgress((progressValue * 100).toFixed(2)),
      complete: (xhr) => {
        const location = xhr.responseURL.split('?')[0];
        onChange
          ? onChange({ target: { name, value: location, i, parentName }, setFields })
          : inputChange({ target: { name, value: location, i, parentName }, setFields })
        setLoading(false);
      },
    };
    Evaporate.create(evaporateConfig)
      .then((evaporate) => evaporate.add(evaporateAddConfig))
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const contentRender = () => {
    if (!fileType) getFileType(value);
    if (value) {
      if (fileType !== 'image') { return <Player src={value} poster={poster} /> }
      else { return <img src={value} /> }
    }
  };

  const placeholderTip = () => {
    let typeTip;
    if (fileType)
      switch (fileType) {
        case 'image': typeTip = 'uma imagem'; break;
        case 'video': typeTip = 'um video'; break;
        case 'audio': typeTip = 'um audio'; break;
        default: typeTip = `${type}`
      }
    return <p>Clique aqui ou arraste {typeTip}</p>
  };

  useEffect(() => {
    const fileLinkSplittedArr = value?.split('/')
    fileLinkSplittedArr?.length && setFileName(decodeURI(fileLinkSplittedArr[fileLinkSplittedArr?.length - 1].replace(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}/i, '')))
  }, [value])

  switch (variation) {
    case 'mini':
      return (
        <S.InputFileMini {...getRootProps()} hasFile={!!value} onClick={(e) => { e.stopPropagation() }}>
          <input {...getInputProps()} />
          {loading && <h4>Carregando...{progress}</h4>}
          {!loading && <p> {fileName ? fileName : placeholder || 'Insira o catalogo'}</p>}
          {fileName && <Button type="delete" variation="bigIcon" onClick={(e) => { e.stopPropagation(); deleteFile(); }} />}
        </S.InputFileMini>
      )
    default:
      return (
        <S.InputFile>
          <S.InputPreview className={className} type={type} >
            {value
              ? contentRender()
              : loading && (
                <S.Loading>
                  <Spinner color="#0677d5" />
                  <S.Progress><S.ProgressBar progress={progress} /></S.Progress>
                  <h1>{progress}%</h1>
                </S.Loading>
              )
            }
          </S.InputPreview>
          {isLoggedIn && (
            <S.ActionButtonWrapper>
              <S.DropArea {...getRootProps()}>
                {placeholderTip()}
                <input {...getInputProps()} />
              </S.DropArea>
              <S.DeleteButton>
                <p>Limpar</p>
                <Button type="delete" onClick={() => onChange ? onChange({ target: { name, i, parentName, value: '' }, setFields }) : inputChange({ target: { name, i, parentName, value: '' }, setFields })} />
              </S.DeleteButton>
            </S.ActionButtonWrapper>
          )}
        </S.InputFile>
      )
  }
};

