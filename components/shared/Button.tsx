import Link from 'next/link'

interface ButtonProps {
  text: string
  href: string
}

export default function Button({ text, href }: ButtonProps) {
  const internalLink = href.charAt(0) === '/'
  return (
    <Link
      href={href}
      className="rounded bg-primary text-center p-2 w-fit text-white hover:bg-primary_dark transition-colors duration-300 ease-in-out"
      rel={`${internalLink ? '' : 'noreferrer opener'}`}
      target={`${internalLink ? '' : '_blank'}`}
    >
      <p className="text-xs tracking-widest">{text} </p>
    </Link>
  )
}
