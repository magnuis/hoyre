'use cient'

import Link from 'next/link'
import { poppins } from 'styles/fonts'
import RandomImageGrid from './RandomImageGrid'

interface TeamNavCardProps {
  imgUrls: { _id: string }[]
}
export default function TeamNavCard({ imgUrls }: TeamNavCardProps) {
  return (
    <div className="rounded-xl bg-dark flex flex-col md:flex-row">
      <RandomImageGrid images={imgUrls} />

      <div className="flex flex-col gap-y-3 p-6 text-white text-center justify-center">
        <div className="">
          <p className={`${poppins.className} text-2xl`}>Stavangerlaget 2023</p>
        </div>
        <p className="text-light">Finn ut hvem som stiller til valg fra din kommunedel!</p>
        <Link
          href="https://hoyre.no/stavanger/stavangerlaget2023/"
          className="rounded bg-primary hover:bg-primary_dark text-center p-2"
          rel="noreferrer opener"
          target={'_blank'}
        >
          <p className="text-xs font-bold">BLI BEDRE KJENT MED STAVANGERLAGET </p>{' '}
        </Link>
      </div>
    </div>
  )
}
