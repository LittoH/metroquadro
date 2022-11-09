import './globals.css'
import { Inter } from '@next/font/google'
import { Abyssinica } from '@next/font/google'
import Navbar from './navbar'
import styles from '../styles/Navbar.module.css'

export default function RootLayout({ children }) {
    return (
      <html lang="it">
        {/*
          <head /> will contain the components returned by the nearest parent
          head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
        <head />

        <body>
            <Navbar />
            {children}
        </body>
      </html>
    )
  }