import Header from 'components/shared/nav/Header'
import '../../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'

import { roboto } from 'styles/fonts'
import Footer from 'components/shared/nav/Footer'
import generateThumbnailUrl from 'components/appearance/Thumbnail'
import Head from 'next/head'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head>
        <meta property="og:title" content="Sammen for Stavanger" />
        <meta
          property="og:description"
          content="Høyre Stavanger - sammen for å gjøre Stavanger til en bedre by."
        />
        <meta property="og:image" content={generateThumbnailUrl()} />
      </Head>

      <body className={`${roboto.className}`}>
        <Header />
        <div className="min-h-[52vh] mt-20 sm:mt-18">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
