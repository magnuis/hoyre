import '../../styles/globals.css'
import React from 'react'
import Footer from './Footer'
import head from './head'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <head />
        {children}
        <Footer />
      </body>
    </html>
  )
}
