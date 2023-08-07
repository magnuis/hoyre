'use client'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import { client } from 'sanity-conf/sanity.client'
import { timeLineRichText } from './richtext/TimeLineRichText'
import { useState } from 'react'
import { AiFillCaretDown, AiFillCaretRight } from 'react-icons/ai'

const builder = imageUrlBuilder(client)

export interface timelineItemProps {
  content: any
  title: string
  img: any
  last: boolean
}
export default function TimelineItem({
  content,
  title,
  img,
  last,
}: timelineItemProps): JSX.Element {
  const [expanded, setExpanded] = useState(true)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }
  return (
    <div className={`group ${last ? '' : 'border-l'} border-primary pb-4 ml-2 md:m-0 relative`}>
      <div className="pl-4 md:pl-10 flex flex-col gap-y-4">
        <span
          className="flex flex-row text-light_gray text-xs font-bold items-start hover:text-gray hover:cursor-pointer"
          onClick={toggleExpanded}
        >
          <p className="mr-2">{title ? title.toUpperCase() : 'INGEN TITTEL'}</p>

          {!expanded && <AiFillCaretRight className="h-4" />}
          {expanded && <AiFillCaretDown className="h-4 " />}
        </span>
        {expanded && (
          <>
            <PortableText value={content} components={timeLineRichText} />
            {img && <img src={builder.image(img).url()} alt={''} height={500} width={500} />}
          </>
        )}
      </div>
      <div
        className={`absolute top-0 transform md:h-3.5 h-4 md:w-3.5 w-4 bg-white group-hover:bg-primary rounded-full border border-primary translate-x-[-8px] ${
          last ? 'md:translate-x-[-6.5px]' : ''
        }`}
      />
    </div>
  )
}
