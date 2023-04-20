import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import { RichTextComponents } from 'components/shared/RichTextComponents'
import { client } from 'sanity-conf/sanity.client'

const builder = imageUrlBuilder(client)

export interface timelineItemProps {
  content: any
  title: string
  img: any
  last: boolean
}
export default function TimelineItem(props: timelineItemProps): JSX.Element {
  return (
    <div className={`${props.last ? '' : 'border-l border-primary'} pb-8 relative`}>
      <div className="pl-8 flex flex-col gap-y-5">
        <p className="text-gray-500 text-xs">{props.title.toUpperCase()}</p>
        <PortableText value={props.content} components={RichTextComponents} />
        {props.img && (
          <img src={builder.image(props.img).url()} alt={''} height={500} width={500} />
        )}
      </div>
      <div className="absolute top-0 transform h-3 w-3 bg-white rounded-full border border-primary translate-x-[-6.5px]" />
    </div>
  )
}
