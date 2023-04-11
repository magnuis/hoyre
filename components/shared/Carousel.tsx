'use client'
import { useEffect, useState } from 'react'

const content = [
  {
    title: 'Title 1',
    description: 'Description 1',
    button: 'Button 1',
    image:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
  },
  {
    title: 'Title 2',
    description: 'Description 2',
    button: 'Button 2',
    image:
      'https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1422&q=80',
  },
  {
    title: 'Title 3',
    description: 'Description 4',
    button: 'Button 4',
    image:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
  },
  {
    title: 'Title 4',
    description: 'Description 4',
    button: 'Button 4',
    image:
      'https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1422&q=80',
  },
]

export default function Carousel(): JSX.Element {
  const [cont, setCont] = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const xy = setInterval(() => {
      if (cont === content.length - 1) {
        setCont(0)
        setActiveSlide(0)
      } else {
        setCont(cont + 1)
        setActiveSlide(activeSlide + 1)
      }
    }, 12000)

    return () => clearInterval(xy)
  }, [cont])

  return (
    <div className="sliderAx h-auto relative ">
      {content.map((item, index) => (
        <div
          key={index + 1}
          id={`slider-${index + 1}`}
          className={`absolute container top-0 left-0 w-full h-full duration-1000 ease-in-out transition-opacity ${
            activeSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="bg-cover bg-center h-auto text-white py-24 px-10  "
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <div className="md:w-1/2">
              <p className="font-bold text-sm uppercase">Services {`${item.title}`}</p>
              <p className="text-3xl font-bold">Hello world</p>
              <p className="text-2xl mb-10 leading-none">Carousel with TailwindCSS and React</p>
              <button
                onClick={() => {
                  console.log('Click 1')
                }}
                className={`bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs  hover:bg-gray-200 hover:text-gray-800 ${
                  true ? 'bg-purple-800' : ''
                }`}
              >
                Button {`${index + 1}`}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
