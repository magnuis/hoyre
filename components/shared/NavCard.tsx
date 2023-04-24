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
  console.log(bg)
  return (
    <div
      className={`rounded-lg ${bg} flex flex-col ${
        imgFirst ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <img
        src={image}
        className={`w-full aspect-[8/5] md:aspect-[8/7] object-cover object-center md:w-1/2 rounded-t-lg ${
          imgFirst ? 'md:rounded-l-lg md:rounded-r-none' : 'md:rounded-r-lg md:rounded-l-none'
        }`}
        height={500}
        width={500}
      />
      <div className={`flex flex-col gap-y-3 p-6 ${textColor} justify-center tracking-wide mx-3`}>
        <p className={`${poppins.className} text-3xl font-medium`}>{title}</p>
        <p className={''}>{description}</p>
        {/* <Link
          href={href}
          className="rounded bg-primary hover:bg-primary_dark text-center p-2"
          rel="noreferrer opener"
          target={'_blank'}
        >
          <p className="text-xs font-bold text-white">{description} </p>{' '}
        </Link> */}
        <Button href={href} text={button} />
      </div>
    </div>
  )
}
