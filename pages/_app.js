import mongoose from 'mongoose';
import Router from 'next/router';
import NProgress from "nprogress";
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import Pages from '../models/pages';
import Footer from "../components/Footer";
import Header from "../components/Header";
import LogoutButton from '../components/LogoutButton';
import { AppProvider } from '../store/appProvider';
import { mioloMoleAppTheme } from '../styles/global';
import '../styles/globals.css';

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());


function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={mioloMoleAppTheme}>
      <AppProvider>
        <Header pages={pageProps?.pages} />
        <LogoutButton />
        <Component {...pageProps} />
        <Toaster position="bottom-right" reverseOrder={false} />
        <Footer />
      </AppProvider>
    </ThemeProvider>
  )
}

export default MyApp;
