import Container from "../Container";
import parser from 'html-react-parser';
import * as S from './Pesquisa.styles';
import { useEffect, useState } from "react";
import Button from "../../Elements/Button";
import { useRouter } from "next/router";

export default function Pesquisa(props) {
  const router = useRouter();
  const [iframeProps, setIframeProps] = useState();
  const pesquisa = props.pesquisa ? JSON.parse(props.pesquisa) : {};

  useEffect(() => {
    setIframeProps(document?.getElementsByTagName('iframe')[0])
  })

  return (
    <S.Pesquisa iframeProps={iframeProps}>
      <Container>
        <Button variation="primary" onClick={() => router.push('/pesquisas')}>Voltar</Button>
        <h1>{pesquisa?.title}</h1>
        {pesquisa?.iframeCode ? parser(pesquisa?.iframeCode) : "Sem Google Forms vinculado a esta pesquisa"}
      </Container>
    </S.Pesquisa>
  )
}