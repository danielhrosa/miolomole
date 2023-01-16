import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {

  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          {this.props.styleTags}
          <title>Miolo Mole</title>
          <meta name='description' content='Editora de livros Miolo Mole' />
          <meta property='og:title' content='Editora Miolo Mole' />
          <meta
            property='og:description'
            content='Editora de livros Miolo Mole'
          />
          <meta property='og:url' content='https://www.editoramiolomole.com/' />
          <meta property='og:type' content='website' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
