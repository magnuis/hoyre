import '../../styles/globals.css'
import React from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <head />
        {children}
      </body>
    </html>
  )
}
