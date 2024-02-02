import Router from 'next/router';
import NProgress from "nprogress";
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import Footer from "../components/Footer";
import Header from "../components/Header";
import LogoutButton from '../components/LogoutButton';
import { AppProvider } from '../store/appProvider';
import { mioloMoleAppTheme } from '../styles/global';
import Head from 'next/head';
import '../styles/globals.css';
import VLibras from '@djpfs/react-vlibras';
import Script from 'next/experimental-script';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());


function MyApp({ Component, pageProps }) {

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
      `}
      </Script>
      <Head>
        <title>Miolo Mole</title>
      </Head>
      <ThemeProvider theme={mioloMoleAppTheme}>
        <AppProvider>
          <Header pages={pageProps?.pages} />
          <LogoutButton />
          <Component {...pageProps} />
          <Toaster position="bottom-right" reverseOrder={false} />
          <VLibras />
          <Footer />
        </AppProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp;
