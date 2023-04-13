import Header from 'components/shared/Header'
import NarrowHeader from 'components/shared/NarrowHeader'
import WideHeader from 'components/shared/WideHeader'
import '../../styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* <WideHeader />
        <NarrowHeader /> */}

        <Header />
        <main>
          <div className="mt-20">{children}</div>
        </main>
      </body>
    </html>
  )
}
