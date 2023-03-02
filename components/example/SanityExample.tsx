import Image from 'next/image'
import { urlFor } from 'sanity-conf/urlFor'

export default function SanityExample() {
  return (
    <main>
      <div>
        <Image alt="" src={urlFor('').url()} />
        <p>Main</p>
      </div>
    </main>
  )
}
