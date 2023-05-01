import Header from 'components/shared/Header'
import '../../styles/globals.css'

import { roboto } from 'styles/fonts'
import Footer from 'components/shared/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`${roboto.className} overscroll-y-none`}>
        <Header />
        <div className="min-h-[52vh] mt-20 sm:mt-18">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
