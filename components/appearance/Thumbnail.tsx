import Image from 'next/image'
import { urlFor } from 'sanity-conf/urlFor'

export default function MyImage() {
  return (
    <Image
      src={`${urlFor(
        'https://cdn.sanity.io/images/p6r82l3b/production/df4793ff1eacd05f648d5d1f570d9e40508427d0-2048x1536.jpg'
      )
        .height(300)
        .width(300)
        .format('webp')
        .url()}`}
      alt="Thumbnail"
      width={300}
      height={300}
    />
  )
}
