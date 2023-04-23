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
    <div
      className={`group ${props.last ? '' : 'border-l'} border-primary pb-4 ml-2 md:m-0 relative`}
    >
      <div className="pl-4 md:pl-10 flex flex-col gap-y-4">
        <p className="text-light_gray text-xs font-bold">
          {props.title ? props.title.toUpperCase() : 'ingen tittel'.toUpperCase()}
        </p>
        <PortableText value={props.content} components={RichTextComponents} />
        {props.img && (
          <img src={builder.image(props.img).url()} alt={''} height={500} width={500} />
        )}
      </div>
      <div
        className={`absolute top-0 transform md:h-3.5 h-4 md:w-3.5 w-4 bg-white group-hover:bg-primary rounded-full border border-primary translate-x-[-8px] ${
          props.last ? 'md:translate-x-[-6.5px]' : ''
        }`}
      />
    </div>
  )
}
