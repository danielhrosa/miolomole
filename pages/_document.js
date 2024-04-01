import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Pixel from '../components/Pixel/facebook/pixel-1';

export default class MyDocument extends Document {

  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="pt-br" spellCheck="false">
        <Head>
          {this.props.styleTags}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5BSR2CJ');`,
            }}
          /> */}
          <meta name='description' content='Editora de livros Miolo Mole' />
          <meta property='og:title' content='Editora Miolo Mole' />
          <meta
            property='og:description'
            content='Editora de livros Miolo Mole'
          />
          <meta property='og:url' content='https://www.editoramiolomole.com/' />
          <meta property='og:type' content='website' />
          <Pixel name='FACEBOOK_PIXEL_1' />
        </Head>
        <body>
        {/* <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5BSR2CJ" height="0" width="0" style="display: none; visibility: hidden;" />`,
            }}
          /> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
