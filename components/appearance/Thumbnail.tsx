import { urlFor } from 'sanity-conf/urlFor'

function MyImage() {
  return (
    <img
      src={`${urlFor(
        'https://cdn.sanity.io/images/p6r82l3b/production/df4793ff1eacd05f648d5d1f570d9e40508427d0-2048x1536.jpg'
      )
        .height(1200)
        .width(630)
        .format('webp')
        .url()}`}
      alt="Thumbnail"
      width={1200}
      height={630}
      className="object-cover object-center"
    />
  )
}

function Thumbnail() {
  return (
    <div className="w-[1200px] h-[630]">
      <MyImage />
    </div>
  )
}

export default function generateThumbnailUrl() {
  const thumbnail = (
    <div style={{ width: '1200px', height: '630px' }}>
      <MyImage />
    </div>
  ) as unknown as HTMLElement
  const url = `https://my-app.com/api/thumbnail?url=${encodeURIComponent(thumbnail.outerHTML)}`
  return url
}
