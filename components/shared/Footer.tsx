import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { AiOutlineGift, AiOutlineHeart } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className="bg-secondary w-full" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto p-8 pt-24 max-w-4xl text-sm tracking-wider font-thin">
        <div className="grid grid-cols-1 sm:grid-cols-3 justify-between gap-6">
          <div className="flex flex-col bg-secondary sm:items-center">
            <div className="flex flex-col justify-start">
              <img
                width="90"
                height="42"
                src="https://hoyre.no/content/uploads/2020/08/hoyre-logo-blue_1839da23.svg"
                className="absolute -translate-y-16 brightness-0 invert mb-4"
                alt="Høyre"
              />
              <h2 className="text-blue_200 min-h-12 mb-4">KONTAKT OSS</h2>
              <dl className="flex flex-col gap-y-3">
                <div className="flex gap-x-6">
                  <dt className="email">
                    <div className="w-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 30"
                        width="24"
                        height="24"
                        className="custom-logo "
                        fill="#8ac6fd"
                      >
                        <path d="M 4 5 C 2.9069372 5 2 5.9069372 2 7 L 2 23 C 2 24.093063 2.9069372 25 4 25 L 26 25 C 27.093063 25 28 24.093063 28 23 L 28 7 C 28 5.9069372 27.093063 5 26 5 L 4 5 z M 6.6992188 7 L 23.300781 7 L 15 13.134766 L 6.6992188 7 z M 5 9.4746094 L 15 16.865234 L 25 9.4746094 L 25 23 L 5 23 L 5 9.4746094 z" />
                      </svg>
                    </div>
                  </dt>
                  <dd className="email">
                    <a href="mailto:info@hoyre.no" className="text-white">
                      info@hoyre.no
                    </a>
                  </dd>
                </div>

                <div className="flex gap-x-6">
                  <dt className="">
                    <div className="w-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 96 960 960"
                        width="24"
                        className="custom-logo "
                        fill="#8ac6fd"
                      >
                        <path d="M795 936q-122 0-242.5-60T336 720q-96-96-156-216.5T120 261q0-19.286 12.857-32.143T165 216h140q13.611 0 24.306 9.5Q340 235 343 251l27 126q2 14-.5 25.5T359 422L259 523q56 93 125.5 162T542 802l95-98q10-11 23-15.5t26-1.5l119 26q15.312 3.375 25.156 15.188Q840 740 840 756v135q0 19.286-12.857 32.143T795 936ZM229 468l81-82-23-110H180q0 39 12 85.5T229 468Zm369 363q41 19 89 31t93 14V769l-103-21-79 83ZM229 468Zm369 363Z" />
                      </svg>
                    </div>
                  </dt>
                  <dd className="phone">
                    <a href="tel:+4799999999" className="text-white">
                      (+47) 99 99 99 99
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-6 items-center">
                  <dt className="address">
                    <div className="w-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 96 960 960"
                        width="24"
                        className="custom-logo "
                        fill="#8ac6fd"
                      >
                        <path d="M480.089 566Q509 566 529.5 545.411q20.5-20.588 20.5-49.5Q550 467 529.411 446.5q-20.588-20.5-49.5-20.5Q451 426 430.5 446.589q-20.5 20.588-20.5 49.5Q410 525 430.589 545.5q20.588 20.5 49.5 20.5ZM480 897q133-121 196.5-219.5T740 504q0-117.79-75.292-192.895Q589.417 236 480 236t-184.708 75.105Q220 386.21 220 504q0 75 65 173.5T480 897Zm0 79Q319 839 239.5 721.5T160 504q0-150 96.5-239T480 176q127 0 223.5 89T800 504q0 100-79.5 217.5T480 976Zm0-472Z" />
                      </svg>
                    </div>
                  </dt>
                  <dd className="text-white">
                    <span className="flex flex-col gap-y-1">
                      <p>Skagenkaien 1 (3. etasje)</p>
                      <p>4006 Stavanger</p>
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="flex flex-col bg-secondary sm:items-center">
            <h2 className="text-blue_200 min-h-12 mb-4">FÅR DU IKKE NOK AV OSS?</h2>

            <ul className="flex gap-x-2">
              <li>
                <Link
                  href="https://facebook.com/hoyre"
                  className="flex rounded-full bg-primary sm:h-9 sm:w-9 h-8 w-8 items-center justify-center hover:bg-blue-800 transition-colors duration-300 ease-in-out"
                >
                  <FaFacebookF className="h-4 sm:h-5 text-white" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com/hoyre"
                  className="flex rounded-full bg-primary sm:h-9 sm:w-9 h-8 w-8 items-center justify-center hover:bg-blue-800 transition-colors duration-300 ease-in-out"
                >
                  <FaInstagram className="sm:h-8 h-7 sm:w-5 w-4 text-white" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/company/hoyre"
                  className="flex rounded-full bg-primary sm:h-9 sm:w-9 h-8 w-8 items-center justify-center hover:bg-blue-800 transition-colors duration-300 ease-in-out"
                >
                  <FaLinkedin className="sm:w-5 w-4 sm:h-5 h-4 text-white" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/stavangerhoyre?lang=en"
                  className="flex rounded-full bg-primary sm:h-9 sm:w-9 h-8 w-8 items-center justify-center hover:bg-blue-800 transition-colors duration-300 ease-in-out"
                >
                  <FaTwitter className="sm:w-5 w-4 sm:h-5 h-4 text-white" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col bg-secondary sm:items-center">
            <div className="text-white">
              <h2 className="text-blue_200 min-h-12 mb-4">BLI MED</h2>
              <ul className="flex flex-col gap-y-2">
                <span className="flex items-center gap-x-2">
                  <AiOutlineHeart className="h-4 w-4 font-thin" />
                  <Link href="https://hoyre.no/bli-med/bli-medlem/">
                    <p>Bli medlem</p>
                  </Link>
                </span>
                <span className="flex items-center gap-x-2">
                  <AiOutlineGift className="h-4 w-4 font-thin" />
                  <Link href="https://hoyre.no/bli-med/gi-gave/">
                    <p>Bli medlem</p>
                  </Link>
                </span>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 bg-secondary_dark flex justify-center text-white text-xs sm:text-sm tracking-widest font-thin items-center flex-wrap">
        <div className="text-center mx-3">
          <a href="https://hoyre.no/partiet/kontakt-oss/">
            <p>&copy; 2023 Høyre</p>
          </a>
        </div>
        <div className="h-1.5 w-1.5 bg-white rounded-full"></div>
        <div className="text-center mx-3">
          <a href="https://hoyre.no/personvernerklaering/">
            <p>Personvernerklæring</p>
          </a>
        </div>
        <div className="h-1.5 w-1.5 bg-white rounded-full"></div>

        <div className="text-center mx-3">
          <a href="https://hoyre.no/vilkar-fastgivere/">
            <p>Vilkår Fastgivere</p>
          </a>
        </div>
      </div>
    </footer>
  )
}
