import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-secondary" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="container mx-auto px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col bg-secondary ">
            <div className="flex justify-center">
              <img
                width="90"
                height="42"
                src="https://hoyre.no/content/uploads/2020/08/hoyre-logo-blue_1839da23.svg"
                className="custom-logo filter brightness-0 invert mb-4"
                alt="Høyre"
              ></img>
            </div>
            <h2 className="footer-widget--title text-center text-blue_200 min-h-12 mb-4">
              KONTAKT OSS
            </h2>
            <div className="flex justify-center">
              <dl className="contact-details-wrapper flex flex-col justify-center ">
                <div className="flex mb-1">
                  <dt className="email mr-2">
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

                <div className="flex mb-1">
                  <dt className="phone mr-2">
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
                      (+47) 99999999
                    </a>
                  </dd>
                </div>

                <div className="flex mb-1">
                  <dt className="address mr-2">
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
                  <dd className="text-white">Skagenkaien 1 (3. etasje)</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="flex flex-col bg-secondary ">
            <h2 className="footer-widget--title text-center text-blue_200 min-h-12 mb-4">
              HØYRE I SOSIALE MEDIER
            </h2>
            <div className="flex justify-center">
              <ul className="flex">
                <li className="mx-2 mb-1">
                  <a href="https://facebook.com/hoyre">
                    <div className="bg-blue-800 rounded-full p-2">
                      <span className="screen-reader-text"></span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 8 16"
                        width="30px"
                        height="30px"
                        className="custom-logo filter brightness-0 invert"
                      >
                        <path
                          d="M2 5.33333H0V8H2V16H5.33333V8H7.76133L8 5.33333H5.33333V4.222C5.33333 3.58533 5.46133 3.33333 6.07667 3.33333H8V0H5.46133C3.064 0 2 1.05533 2 3.07667V5.33333Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </li>
                <li className="mx-2 mb-1">
                  <a href="https://instagram.com/hoyre">
                    <div className="bg-blue-800 rounded-full p-2">
                      <span className="screen-reader-text"></span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="30px"
                        height="30px"
                        className="custom-logo filter brightness-0 invert"
                      >
                        <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
                      </svg>
                    </div>
                  </a>
                </li>
                <li className="mx-2 mb-1">
                  <a href="https://linkedin.com/company/hoyre">
                    <div className="bg-blue-800 rounded-full p-2">
                      <span className="screen-reader-text"></span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width="30px"
                        height="30px"
                        className="custom-logo filter brightness-0 invert"
                      >
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                      </svg>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col bg-secondary ">
            <div className="text-center mx-3">
              <h2 className="footer-widget--title text-center text-blue_200 min-h-12 mb-4">
                BLI MED
              </h2>
              <p className="text-white">
                <a href="https://hoyre.no/bli-med/bli-medlem/" className="text-white">
                  Bli medlem
                </a>
              </p>
              <p className="text-white">
                <a href="yohttps://hoyre.no/bli-med/gi-gave/" className="text-white">
                  Gi gave
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 bg-secondary_dark flex justify-center">
        <div className="text-center mx-3">
          <a href="https://hoyre.no/partiet/kontakt-oss/" className="text-white">
            <p className="text-white">@2023 Høyre</p>
          </a>
        </div>
        <div className="text-center mx-3">
          <a href="https://hoyre.no/personvernerklaering/" className="text-white">
            <p className="text-white">Personvernerklæring</p>
          </a>
        </div>
        <div className="text-center mx-3">
          <a href="https://hoyre.no/vilkar-fastgivere/" className="text-white">
            <p className="text-white">Vilkår Fastgivere</p>
          </a>
        </div>
      </div>
    </footer>
  )
}
