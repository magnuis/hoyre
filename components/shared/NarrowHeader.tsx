'use client'
import React from 'react'
import { roboto } from 'styles/fonts'
import Hamburger from 'hamburger-react'

import '../../styles/globals.css'

const NarrowHeader = (): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <header
      className={`sticky h-20 p-3 ${roboto.className} font-light transition-all duration-350 text-primary sm:hidden`}
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
            <p>Meny</p>
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={18} />
          </div>
        }
      </div>
    </header>
  )
}

export default NarrowHeader
