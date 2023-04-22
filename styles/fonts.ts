import { Roboto, Inter, Poppins } from '@next/font/google'

const roboto = Roboto({
  weight: ['300'],
  subsets: ['latin'],
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})
export { roboto, poppins }
