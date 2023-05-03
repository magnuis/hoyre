import { urlFor } from 'sanity-conf/urlFor'

export default function generateThumbnailUrl(img: string) {
  const thumbnail = (
    <div className="w-[1200px] h-[630]">
      <img
        src={`${urlFor(img).height(1200).width(630).format('webp').url()}`}
        alt="Thumbnail"
        width={1200}
        height={630}
        className="object-cover object-center"
      />
    </div>
  ) as unknown as HTMLElement
  const url = `https://my-app.com/api/thumbnail?url=${encodeURIComponent(thumbnail.outerHTML)}`
  return url
}
