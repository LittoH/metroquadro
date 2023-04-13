import './globals.css'
import { Inter } from '@next/font/google'
import { Abyssinica } from '@next/font/google'
import Navbar from './navbar'
import styles from '../styles/Navbar.module.css'
import Footer from './footer'
import { PageWrapper } from './page-wrapper'
import CookiesAlert from './cookiesAlert'

import { cookies } from 'next/headers';

export default function RootLayout({ children }) {

  const nextCookies = cookies();

  return (
    <html lang="it">
      {/*
          <head /> will contain the components returned by the nearest parent
          head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
      <head />

      <body>
        <Navbar />

        {!nextCookies.get(
          `cookies_preferences_agreed`
        ) &&
          < CookiesAlert />
        }

        <PageWrapper>
          {children}
        </PageWrapper>
        <Footer />
      </body>
    </html>
  )
}