import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { CustomImage } from 'type'

interface LandingImageCardProps {
  image: CustomImage
}
export const LandingImageCard = ({ image }: LandingImageCardProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative sm:h-96 h-48 mb-10"
      >
        <Image
          priority
          className="absolute object-center object-cover top-0 h-full w-full opacity-100"
          src={image.url}
          alt={'Landing page image'}
          fill
        />
      </motion.div>
    </AnimatePresence>
  )
}
