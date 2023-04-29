import { AuthProvider } from '@/contexts/auth'
import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import Head from 'next/head'
import { Fragment,ReactElement,ReactNode } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export type CustomPage = NextPage & {
  requiresAuth?: boolean;
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};
interface CustomAppProps extends Omit<AppProps, "Component"> {
  Component: CustomPage;
}

const segoeUi = localFont({
  variable: '--font-primary',
  src: [
    {
      path: '../assets/fonts/SegoeUI.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SegoeUI-SemiBold.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SegoeUI-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

export default function App({ Component, pageProps }: CustomAppProps) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <Fragment>
      {Component.requiresAuth && (
        <Head>
          <script
            // If no token is found, redirect inmediately
            dangerouslySetInnerHTML={{
              __html: `if(!document.cookie || document.cookie.indexOf('token') === -1)
            {location.replace(
              "/signin?next=" +
                encodeURIComponent(location.pathname + location.search)
            )}
            else {document.documentElement.classList.add("render")}`,
            }}
          />
        </Head>
      )}
      <AuthProvider>
        <main className={segoeUi.className}>
          <ToastContainer />
          <Component {...pageProps} />
        </main>
      </AuthProvider>
    </Fragment>
  )
}