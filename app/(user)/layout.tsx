import Header from 'components/shared/nav/Header'
import '../../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'

import { roboto } from 'styles/fonts'
import Footer from 'components/shared/nav/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head></head>

      <body className={`${roboto.className}`}>
        <Header />
        <div className="min-h-[52vh]">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
