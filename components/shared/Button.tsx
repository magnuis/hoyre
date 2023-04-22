import Link from 'next/link'

interface ButtonProps {
  text: string
  href: string
}

export default function Button({ text, href }: ButtonProps) {
  return (
    <Link
      href={href}
      className="rounded bg-primary text-center p-2 w-fit"
      rel="noreferrer opener"
      target={'_blank'}
    >
      <p className="text-xs tracking-wide">{text} </p>{' '}
    </Link>
  )
}
