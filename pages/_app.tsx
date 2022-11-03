import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import '../styles/global.css'
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes'
import '../styles/global.css'
import Footer from '../components/Footer';
import { GlobalStyle } from '../components/GlobalStyles';

export const siteTitle = "Electrical specialists serving surrey and surrounding areas.";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" href="/logo.webp" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Electrical specialists serving surrey and surrounding areas.."
        />
        <meta name="og:title" content={siteTitle} />
        <meta
          name="Electricalsurrey  Ltd"
          content={siteTitle}
        />
        <title>{siteTitle}</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>


      <Footer />
    </>
  );
}



export default MyApp;        