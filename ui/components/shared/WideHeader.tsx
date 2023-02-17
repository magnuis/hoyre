'use client'
import React from 'react'
import { roboto } from 'styles/fonts'

import '../../styles/globals.css'

export default function Header() {
  return (
    <header
      className={`sticky h-48 p-3 ${roboto.className} font-light transition-all duration-350 text-primary hidden sm:block`}
    >
      <div className="flex justify-between items-center">
        <a className="flex flex-row mr-5">
          <img
            src="https://hoyre.no/content/uploads/2020/08/hoyre-logo-blue_1839da23.svg"
            alt="logo"
            className="h-7"
          />
          <p className="ml-2.5">Høyre</p>
        </a>
        {
          <div className="flex flex-row items-center">
            <p>Politikk</p>
            <p className="ml-5">Om oss</p>
            <p className="ml-5">Medlem</p>
            <p className="ml-5">Kontakt</p>
          </div>
        }
      </div>
    </header>
  )
}
