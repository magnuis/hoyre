import { urlFor } from 'sanity-conf/urlFor'
import { poppins } from 'styles/fonts'
import Button from './Button'

interface navCardProps {
  title: string
  description: string
  image: string
  button: string
  href: string
  bg: string
  textColor: string
  imgFirst: boolean
}

export default function NavCard({
  title,
  description,
  image,
  button,
  href,
  bg,
  textColor,
  imgFirst,
}: navCardProps) {
  if (image === '') {
    return <div></div>
  }

  return (
    <div
      className={`rounded-lg ${bg} flex flex-col ${
        imgFirst ? 'sm:flex-row' : 'sm:flex-row-reverse'
      }`}
    >
      <img
        src={urlFor(image).width(600).height(400).format('webp').url()}
        className={`w-full aspect-[8/5] sm:aspect-[8/7] object-cover object-center sm:w-1/2 rounded-t-lg ${
          imgFirst ? 'sm:rounded-l-lg sm:rounded-r-none' : 'sm:rounded-r-lg sm:rounded-l-none'
        }`}
        height={400}
        width={600}
        alt=""
      />
      <div
        className={`flex flex-col gap-y-3 p-3 pb-6 sm:p-6 ${textColor} justify-center tracking-wide mx-3`}
      >
        <p className={`${poppins.className} text-2xl md:text-3xl font-medium`}>{title}</p>
        <p className={''}>{description}</p>
        <Button href={href} text={button} />
      </div>
    </div>
  )
}
