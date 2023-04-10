import Link from 'next/link'

export default function BackArrow({ slug }: { slug: string }) {
  return (
    <Link href={slug}>
      {/* <div className="flex items-center justify-center w-12 h-12 rounded-full border border-primary border-solid bg-zinc-50 hover:bg-zinc-100"> */}
      <div className="flex items-center justify-center w-12 h-12 rounded-full border shadow-sm shadow-primary hover:shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            className="text-primary hover:text-blue-900"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
      </div>
    </Link>
  )
}
