        import 'swiper/css';
        import 'swiper/css/bundle';
        import 'swiper/css/navigation';
        import 'swiper/css/autoplay';
  
        import { AppProps } from 'next/dist/shared/lib/router/router';
        import dynamic from 'next/dynamic';
        import Head from 'next/head';
        import { ColorModeScript } from 'nextjs-color-mode';
        import React, { PropsWithChildren } from 'react';
        
        import Footer from '../components/Footer';
        import { GlobalStyle } from '../components/GlobalStyles';
        import Navbar from '../components/Navbar';
        import NavigationDrawer from '../components/NavigationDrawer';
        import WaveCta from '../components/WaveCta';
        import { NewsletterModalContextProvider, useNewsletterModalContext } from '../contexts/newsletter-modal.context';
        import { NavItems } from '../types';
        
        const navItems: NavItems = [
          { title: 'Home', href: '/' },
          { title: 'Domestic', href: '/' },
          { title: 'Commercial', href: '/' },
          { title: 'Contact', href: '/' },
        ];
        export const siteTitle = "Electrical specialists serving surrey and surrounding areas.";

        
        function MyApp({ Component, pageProps }: AppProps) {
          return (
            <>
              <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link rel="icon" type="image/png" href="/favicon.png" />
                {/* <link rel="alternate" type="application/rss+xml" href={EnvVars.URL + 'rss'} title="RSS 2.0" /> */}
                {/* <script
                  dangerouslySetInnerHTML={{
                    __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
                  ga('create', 'UA-117119829-1', 'auto');
                  ga('send', 'pageview');`,
                  }}
                /> */}
                {/* <script async src="https://www.google-analytics.com/analytics.js"></script> */}

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
              <ColorModeScript />
              <GlobalStyle />
        
              <Providers>
                <Navbar items={navItems} />
                  <Component {...pageProps} />
                <Footer />
              </Providers>
            </>
          );
        }
        
        function Providers<T>({ children }: PropsWithChildren<T>) {
          return (
            <NewsletterModalContextProvider>
              <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
            </NewsletterModalContextProvider>
          );
        }
        
        
        export default MyApp;        