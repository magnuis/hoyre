import React from 'react'

const navigation = {
  solutions: [{ name: '', href: '#' }],
  support: [{ name: '', href: '#' }],
  company: [{ name: '', href: '#' }],
  legal: [{ name: '', href: '#' }],
  legall: [{ name: '', href: '#' }],

  social: [
    {
      name: 'Facebook',

      href: 'https://www.facebook.com/hoyre/',
      /*<span class= "screen-reader-text"> Facebook </span> */
      icon: (props) => (
        <svg
          aria-hidden="true"
          width="8"
          height="16"
          viewBox="0 0 8 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 5.33333H0V8H2V16H5.33333V8H7.76133L8 5.33333H5.33333V4.222C5.33333 3.58533 5.46133 3.33333 6.07667 3.33333H8V0H5.46133C3.064 0 2 1.05533 2 3.07667V5.33333Z"
            fill="white"
          ></path>
        </svg>
        /*  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg> 
        */
      ),
    },

    {
      name: 'Instagram',
      href: 'https://www.instagram.com/hoyre/',
      icon: (props) => (
        <svg
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1.442C10.136 1.442 10.3893 1.45 11.2333 1.48867C13.4013 1.58733 14.414 2.616 14.5127 4.768C14.5513 5.61133 14.5587 5.86467 14.5587 8.00067C14.5587 10.1373 14.5507 10.39 14.5127 11.2333C14.4133 13.3833 13.4033 14.414 11.2333 14.5127C10.3893 14.5513 10.1373 14.5593 8 14.5593C5.864 14.5593 5.61067 14.5513 4.76733 14.5127C2.594 14.4133 1.58667 13.38 1.488 11.2327C1.44933 10.3893 1.44133 10.1367 1.44133 8C1.44133 5.864 1.45 5.61133 1.488 4.76733C1.58733 2.616 2.59733 1.58667 4.76733 1.488C5.61133 1.45 5.864 1.442 8 1.442ZM8 0C5.82733 0 5.55533 0.00933333 4.702 0.048C1.79667 0.181333 0.182 1.79333 0.0486667 4.70133C0.00933333 5.55533 0 5.82733 0 8C0 10.1727 0.00933333 10.4453 0.048 11.2987C0.181333 14.204 1.79333 15.8187 4.70133 15.952C5.55533 15.9907 5.82733 16 8 16C10.1727 16 10.4453 15.9907 11.2987 15.952C14.2013 15.8187 15.82 14.2067 15.9513 11.2987C15.9907 10.4453 16 10.1727 16 8C16 5.82733 15.9907 5.55533 15.952 4.702C15.8213 1.79933 14.2073 0.182 11.2993 0.0486667C10.4453 0.00933333 10.1727 0 8 0V0ZM8 3.892C5.73133 3.892 3.892 5.73133 3.892 8C3.892 10.2687 5.73133 12.1087 8 12.1087C10.2687 12.1087 12.108 10.2693 12.108 8C12.108 5.73133 10.2687 3.892 8 3.892ZM8 10.6667C6.52733 10.6667 5.33333 9.47333 5.33333 8C5.33333 6.52733 6.52733 5.33333 8 5.33333C9.47267 5.33333 10.6667 6.52733 10.6667 8C10.6667 9.47333 9.47267 10.6667 8 10.6667ZM12.2707 2.77C11.74 2.77 11.31 3.2 11.31 3.73C11.31 4.26 11.74 4.69 12.2707 4.69C12.8007 4.69 13.23 4.26 13.23 3.73C13.23 3.2 12.8007 2.77 12.2707 2.77Z"
            fill="white"
          ></path>
        </svg>
      ),
    },
  ],
}

export default function Example() {
  return (
    <footer className="bg-secondary" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img
              className="h-7"
              src="https://hoyre.no/content/uploads/2020/08/hoyre-logo-blue_1839da23.svg"
              alt="Bilde av noe Høyre relatert. Gjerne Sissel eller logoen til Høyre"
            />
            <p class="footer-widget--title text-blue-200">KONTAKT OSS</p>

            <dt class="email text-white">
              <a href="mailto:info@hoyre.no"> info@hoyre.no</a>
            </dt>

            <dt class="email text-white">
              <a href="mailto:info@hoyre.no"> (+47) 22 82 90 00</a>
            </dt>

            <dt class="email text-white">
              <a href="mailto:info@hoyre.no"> Skagenkaien 1 (3. etasje) 4006 Stavanger</a>
            </dt>

            <p className="text-sm leading-6 text-blue-200">FÅR DU IKKE NOK AV OSS?</p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 flex items-center flex flex-wrap justify-between xl:col-span-2 xl:mt-0">
            <div className="w-1/2 md:w-auto md:pr-8">
              <h3 className="text-sm font-semibold leading-6 text-blue-200">SMAKEN AV STAVANGER</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/2 md:w-auto md:pr-8">
              <h3 className="text-sm font-semibold leading-6 text-blue-200">SOMMER MED SISSEL</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/2 md:w-auto md:pr-8">
              <h3 className="text-sm font-semibold leading-6 text-blue-200">HØYRE I MEDIA</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/2 md:w-auto md:pr-8">
              <h3 className="text-sm font-semibold leading-6 text-blue-200">OM SISSEL</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/2 md:w-auto">
              <h3 className="text-sm font-semibold leading-6 text-blue-200">LAGET</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.legall.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark text-center">
        <div className="py-8 flex flex-row justify-center items-center">
          <p className="text-xs leading-5 text-white mr-6">&copy; 2023 Høyre Stavanger</p>
          <p className="text-xs leading-5 text-white mr-6">Personvernerklæring</p>
          <p className="text-xs leading-5 text-white">Vilkår fastgivere</p>
        </div>
      </div>
    </footer>
  )
}
