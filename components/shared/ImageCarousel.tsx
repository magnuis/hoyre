'use client'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useSwipeable } from 'react-swipeable'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import { urlFor } from 'sanity-conf/urlFor'

interface ImageProps {
  _id: string
}

interface ImageGalleryProps {
  images: ImageProps[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number>(0)
  const [open, setOpen] = useState<boolean>(false)

  const handleModalopen = (index: number) => {
    setSelectedImage(index)
    setOpen(true)
  }

  const handlePreviousImage = () => {
    setSelectedImage((prevSelectedImage) =>
      prevSelectedImage === 0 ? images.length - 1 : prevSelectedImage - 1
    )
  }

  const handleNextImage = () => {
    setSelectedImage((prevSelectedImage) =>
      prevSelectedImage === images.length - 1 ? 0 : prevSelectedImage + 1
    )
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      handleNextImage()
    },
    onSwipedRight: () => handlePreviousImage(),
  })

  const displayBigImage = images[0]
  const displaySmallImages = images.slice(1, 4)
  return (
    <div>
      <img
        src={displayBigImage ? urlFor(displayBigImage._id).format('webp').width(600).url() : ''}
        alt={''}
        className="w-full h-full object-cover cursor-pointer rounded-t-lg"
        onClick={() => handleModalopen(0)}
      />
      <span>
        <span className="flex flex-row gap-x-3 mt-3">
          {displaySmallImages.map((image, index) => (
            <div key={index} className="w-1/3 aspect-[8/5]">
              <img
                src={image ? urlFor(image._id).format('webp').width(200).url() : ''}
                alt={''}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => handleModalopen(index)}
              />
            </div>
          ))}
        </span>
      </span>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="absolute overflow-hidden transition-all ">
                  <span className="relative z-60 top-0 left-1 text-white sm:text-sm text-xs">
                    <p>{`${selectedImage + 1} / ${images.length}`}</p>
                  </span>
                  <div className="w-[100vw] md:w-[80vw] aspect-[8/5]">
                    <img
                      {...handlers}
                      src={urlFor(images[selectedImage]._id).format('webp').url()}
                      alt={''}
                      className="w-full h-full object-cover "
                    />
                  </div>
                  <div
                    className="absolute top-[50%] left-2 bg-gray-700 opacity-30 p-3 hover:cursor-pointer hover:opacity-70 hidden sm:block"
                    onClick={() => {
                      handlePreviousImage()
                    }}
                  >
                    <ArrowLeftIcon className="h-4 w-4 text-white" />
                  </div>
                  <div
                    className="absolute top-[50%] right-2 bg-gray-700 opacity-30 p-3 hover:cursor-pointer hover:opacity-70 hidden sm:block"
                    onClick={() => {
                      handleNextImage()
                    }}
                  >
                    <ArrowRightIcon className="h-4 w-4 text-white" />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}

export default ImageGallery
