import React, { useState, useCallback } from 'react';
import { inputChange } from '../../helpers/fieldFunctions';
import {useDropzone} from 'react-dropzone';
import Evaporate from 'evaporate';
import { v4 as uuidv4 } from 'uuid';
import AWS from "aws-sdk";
import * as S from './Input.style';
import Player from '../../components/Player';
import { useAppProvider } from '../../store/appProvider';
import Button from '../Button';
import Spinner from '../../components/Spinner';

export default function InputFile({ placeholder, name, onChange, value, setFields, type, className }) {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { isLoggedIn } = useAppProvider();
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
    const evaporateAddConfig = {
      file,
      name: fileName, 
      contentType: file.type,
      progress: progressValue => setProgress((progressValue * 100).toFixed(2)),
      complete: (xhr) => { 
        const location = xhr.responseURL.split('?')[0]; 
        onChange ? onChange({ target: { name, value: location }, setFields }) : inputChange({target: { name, value: location }, setFields})        
        setLoading(false);  
      },
    };
    Evaporate.create(evaporateConfig)
      .then((evaporate) => evaporate.add(evaporateAddConfig))
  }, []);
  
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const contentRender = () => {
    if (type === 'image') { return <img src={value} /> }
    else { return <Player src={value} /> }
  }

  const placeholderTip = () => {
    let typeTip;
    switch (type) {
      case 'image': typeTip = 'uma imagem'; break;
      case 'video': typeTip = 'um video'; break;
      case 'audio': typeTip = 'um audio'; break;
      default: typeTip = `${type}`
    }
    return <p>Clique aqui ou arraste {typeTip}</p>
  }

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
      { isLoggedIn && (
        <S.ActionButtonWrapper>
          <S.DropArea {...getRootProps()}>
            { placeholderTip() }
            <input {...getInputProps()} />
          </S.DropArea>
          <S.DeleteButton>
            <p>Limpar</p>
            <Button type="delete" onClick={() => onChange ? onChange({ target: { name, value: '' }, setFields }) : inputChange({target: { name, value: '' }, setFields}) } />
          </S.DeleteButton>
        </S.ActionButtonWrapper>
      )}
    </S.InputFile>
  )
};

