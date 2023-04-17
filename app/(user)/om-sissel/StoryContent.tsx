import { PortableText } from '@portabletext/react'
import { RichTextComponents } from 'components/shared/RichTextComponents'
import Image from 'next/image'

export interface StoryContentProps {
  content: any
  title: string
  img: string
}
export default function StoryContent(props: StoryContentProps): JSX.Element {
  return (
    <div className="group border-l border-primary pb-8 relative">
      <div className="pl-8 flex flex-col gap-y-5">
        <p className="text-gray-500 text-xs">{props.title.toUpperCase()}</p>
        <PortableText value={props.content} components={RichTextComponents} />
        {props.img && <Image src={props.img} alt={''} height={500} width={500}></Image>}
      </div>
      <div className="absolute top-0 transform md:h-3 h-4 md:w-3 w-4 bg-white group-hover:bg-primary rounded-full border border-primary translate-x-[-8px] md:translate-x-[-6.5px]" />
    </div>
  )
}
