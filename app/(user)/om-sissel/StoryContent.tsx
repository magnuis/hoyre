import { PortableText } from '@portabletext/react'
import { RichTextComponents } from 'components/shared/richtext/RichTextComponents'
import Image from 'next/image'

export interface StoryContentProps {
  content: any
  title: string
  img: string
  last: boolean
}
export default function StoryContent(props: StoryContentProps): JSX.Element {
  return (
    <div
      className={`group ${props.last ? '' : 'border-l'} border-primary pb-4 ml-2 md:m-0 relative`}
    >
      <div className="pl-4 md:pl-10 flex flex-col gap-y-4">
        <p className="text-light_gray text-xs">{props.title.toUpperCase()}</p>
        <PortableText value={props.content} components={RichTextComponents} />
        {props.img && <Image src={props.img} alt={''} height={500} width={500}></Image>}
      </div>
      <div
        className={`absolute top-0 transform md:h-3.5 h-4 md:w-3.5 w-4 bg-white group-hover:bg-primary rounded-full border border-primary translate-x-[-8px] ${
          props.last ? 'md:translate-x-[-6.5px]' : ''
        }`}
      />
    </div>
  )
}
